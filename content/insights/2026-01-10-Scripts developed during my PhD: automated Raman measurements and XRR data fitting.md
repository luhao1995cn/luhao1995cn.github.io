---
layout: post
title: |
  Scripts developed during my PhD: automated Raman measurements and XRR data fitting.
math: true
---

---

## 🔹 Automated testing scripts written during my PhD to simplify repetitive measurements.

- **[Jan 2026]** I am sharing this Python script that I use to automate impedance measurements during temperature-dependent experiments. The script reads the real-time temperature directly from the instrument software using OCR (Tesseract), monitors temperature stability, and triggers mouse clicks at predefined intervals via pyautogui. Image preprocessing is applied to improve OCR reliability, and all measurement events are logged with timestamps and temperature values. This workflow allows long-duration, unattended measurements while ensuring that data acquisition is synchronized with stable temperature conditions.

  ```python
  import pyautogui
  import pytesseract
  import time
  from PIL import Image, ImageEnhance, ImageFilter
  import os
  from datetime import datetime
  import signal

  # Path to Tesseract OCR
  pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

  # Screen coordinates and region size
  TEMP_COORDS = (120, 160)
  REGION_SIZE = (70, 40)
  CLICK_POSITION = (917, 544)

  # Path to log file
  LOG_FILE_PATH = os.path.join(os.path.expanduser("~"), "Desktop", "click_log.txt")

  # Click every 5 minutes, stop if temperature unchanged for 3 minutes
  CLICK_INTERVAL = 5 * 60
  NO_CHANGE_TIMEOUT = 3 * 60
  click_count = 0
  click_records = []
  last_temperature = None
  last_temperature_change_time = time.time()

  def preprocess_image(image):
      image = image.convert('L')
      enhancer = ImageEnhance.Contrast(image)
      image = enhancer.enhance(3.0)
      image = image.filter(ImageFilter.SHARPEN)
      image = image.filter(ImageFilter.EDGE_ENHANCE_MORE)
      return image

  def correct_temperature_format(temperature_str):
      temperature_str = temperature_str.replace('O', '0').replace('l', '1').replace('I', '1')
      temperature_str = temperature_str.replace('-', '-').strip()
      is_negative = temperature_str.startswith('-')
      temperature_str = ''.join(filter(lambda x: x.isdigit() or x == '.', temperature_str))
      if is_negative and not temperature_str.startswith('-'):
          temperature_str = '-' + temperature_str
      if '.' not in temperature_str and len(temperature_str) > 1:
          temperature_str = temperature_str[:-1] + '.' + temperature_str[-1]
      return temperature_str.strip()

  def read_temperature():
      screenshot = pyautogui.screenshot(region=(TEMP_COORDS[0], TEMP_COORDS[1], REGION_SIZE[0], REGION_SIZE[1]))
      screenshot = preprocess_image(screenshot)
      temperature_str = pytesseract.image_to_string(screenshot, config="--psm 7 -c tessedit_char_whitelist=-0123456789.")
      temperature_str = correct_temperature_format(temperature_str)
      try:
          return float(temperature_str)
      except ValueError:
          return None

  def log_event(message):
      with open(LOG_FILE_PATH, "a", encoding="utf-8") as log_file:
          log_file.write(f"{message}\n")

  def save_click_records():
      with open(LOG_FILE_PATH, "w", encoding="utf-8") as log_file:
          for record in click_records:
              log_file.write(record + "\n")

  def handle_exit(signum, frame):
      print("Program terminated. Saving log...")
      save_click_records()
      exit(0)

  def main():
      global click_count, last_temperature, last_temperature_change_time
      print("Monitoring started...")
      start_time = time.time()
      signal.signal(signal.SIGINT, handle_exit)
      signal.signal(signal.SIGTERM, handle_exit)
      while True:
          current_temperature = read_temperature()
          if current_temperature is not None:
              print(f"Temperature: {current_temperature} C")
              if last_temperature is not None and abs(current_temperature - last_temperature) > 0.01:
                  last_temperature_change_time = time.time()
              last_temperature = current_temperature
          else:
              print("Temperature read failed")
          if time.time() - last_temperature_change_time > NO_CHANGE_TIMEOUT:
              print("Temperature unchanged for 3 min. Stopping...")
              log_event("Stopped due to no temperature change.")
              break
          elapsed_time = time.time() - start_time
          if elapsed_time >= CLICK_INTERVAL:
              click_count += 1
              timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
              click_record = f"No.{click_count} | Time: {timestamp} | Temp: {current_temperature} C"
              click_records.append(click_record)
              print(f"{click_record}, Clicking...")
              pyautogui.moveTo(CLICK_POSITION)
              pyautogui.click()
              start_time = time.time()
          time.sleep(1)

  if __name__ == "__main__":
      try:
          main()
      finally:
          save_click_records()
  ```

- **[Jan 2026]** I am sharing this Python script that I use for X-ray reflectivity (XRR) fitting of thin-film samples. The code is based on a Parratt-type reflectivity model and reads experimental XRR data from an .xy file. The reflectivity is normalized and fitted in logarithmic scale using scipy.optimize.curve_fit. By fitting the electron density, film thickness, and interface roughness, I extract key structural parameters of the film. This script represents my practical workflow for XRR analysis and is shared here for reference, reuse, and further adaptation.

  ```python
  import numpy as np
  import matplotlib.pyplot as plt
  import pandas as pd
  from scipy.optimize import curve_fit

  # Load experimental data
  with open(r'D:/Python/XRR fitting/253CuTiO28ws34min18s400degC.xy', 'r') as file:
      data = file.read()

  columns = data.split("\n")
  SL = []
  for i, row in enumerate(columns):
      if i < 23:
          continue
      try:
          SL.append([float(row.split()[0]), float(row.split()[1])])
      except:
          pass

  SL = np.array(SL)
  x = SL[:, 0] / 2
  y = SL[:, 1]
  y1 = np.max(y)
  y2 = y / y1
  y3 = np.log10(y2)

  def XRR(x, den1, t1, rough01, rough12):
      er = 0.0000282
      ram = 1.54178
      den0 = 0
      den2 = 0.7
      scale = 1.5
      afure = 0.28648

      no = 1 - ram**2 * den0 * er / (2 * np.pi)
      n1 = 1 - ram**2 * den1 * er / (2 * np.pi)
      n2 = 1 - ram**2 * den2 * er / (2 * np.pi)

      cos_x = np.cos(x * np.pi / 180)
      th1 = np.where(no / n1 * cos_x <= 1,
                     180 / np.pi * np.arccos(no / n1 * cos_x),
                     0)
      th2 = np.where(n1 / n2 * np.cos(th1 * np.pi / 180) <= 1,
                     180 / np.pi * np.arccos(n1 / n2 * np.cos(th1 * np.pi / 180)),
                     0)

      sin_x = np.sin(x * np.pi / 180)
      kz0 = 2 * np.pi / ram * no * sin_x
      kz1 = 2 * np.pi / ram * n1 * np.sin(th1 * np.pi / 180)
      kz2 = 2 * np.pi / ram * n2 * np.sin(th2 * np.pi / 180)

      fail = kz1 * t1
      r01 = np.where((kz0 == 0) & (kz1 == 0), 1,
                     (kz0 - kz1) / (kz0 + kz1) * np.exp(-2 * kz1**2 * rough01**2))
      r12 = np.where((kz2 == 0) & (kz1 == 0), 1,
                     (kz1 - kz2) / (kz1 + kz2) * np.exp(-2 * kz2**2 * rough12**2))

      A = scale * ((r01 + r12 * np.cos(2 * fail))**2 + (r12 * np.sin(2 * fail))**2) / \
          ((1 + r01 * r12 * np.cos(2 * fail))**2 + (r01 * r12 * np.sin(2 * fail))**2)

      y = np.where(x < afure,
                   np.log10(np.maximum(scale * sin_x / np.sin(afure * np.pi / 180) * A, 1e-10)),
                   np.log10(np.maximum(A, 1e-10)))
      return y

  initial_params = [0.367, 88.46, 2.97, 4.91]
  lower_bounds = [0.01, 1, 0, 1.5]
  upper_bounds = [2, 100, 10, 10]

  try:
      params, covariance = curve_fit(XRR, x, y3, p0=initial_params,
                                     bounds=(lower_bounds, upper_bounds), method='trf')
      plt.plot(x, y3, label='Data')
      plt.plot(x, XRR(x, *params), color='red', label='Fitting')
      plt.xlabel('2theta [rad]')
      plt.ylabel('Reflectivity (log)')
      plt.title('X-ray Reflectivity Fitting Result')
      plt.legend()
      plt.show()
  except RuntimeError as e:
      print("Fitting failed:", e)
  ```

---
