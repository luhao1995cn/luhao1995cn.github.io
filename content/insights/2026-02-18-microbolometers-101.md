---
layout: post
title: |
  Microbolometers 101: Core MEMS Parameters, TCR/NETD Derivations, and What VO₂ Hysteresis Would Do to an IR Image
math: true
---

<div class="post-date">Feb 18, 2026</div>
  
  <p>I often see non-cooled infrared (IR) imaging described as “a thermal camera that works at room temperature,” but the real story is more precise: a microbolometer pixel is a coupled <strong>thermal–electrical transducer</strong>. Once I write down the minimal equations, most performance trade-offs become obvious.</p>

  <p>In this post I’ll start from the <strong>core MEMS parameters</strong>, derive the key relationships (responsivity, time constant, NETD), and then discuss what would happen if the thermistor material were <strong>VO₂ with hysteresis</strong>—including what the resulting images might look like.</p>

  <hr>

  <h3>1) The microbolometer pixel: the three-step chain</h3>
  <p>A microbolometer pixel does three things:</p>
  <ol>
    <li><strong>Absorb IR power</strong> in the band of interest</li>
    <li>Convert that absorbed power into a <strong>temperature rise</strong></li>
    <li>Convert the temperature rise into an <strong>electrical signal</strong> via a thermistor</li>
  </ol>
  <p>So the three “levers” are:</p>
  <ul>
    <li>optical: absorption efficiency \(\eta\)</li>
    <li>thermal: thermal conductance \(G_{th}\) and thermal capacitance \(C_{th}\)</li>
    <li>electrical: resistance \(R\), and TCR \(\alpha = \frac{1}{R}\frac{dR}{dT}\)</li>
  </ul>

  <hr>

  <h3>2) Core MEMS thermal parameters and their functions</h3>
  <h4>2.1 Thermal balance (first-order system)</h4>
  <p>Let \(\Delta T(t) = T(t) - T_0\) be the pixel temperature rise above the substrate.</p>
  <div class="formula-block">
    \[ C_{th}\frac{d(\Delta T)}{dt} + G_{th}\Delta T = P_{abs}(t) \]
  </div>
  <p>Absorbed power is</p>
  <div class="formula-block">
    \[ P_{abs}(t) = \eta\, P_{in}(t) \]
  </div>
  <p><strong>Steady state / low-frequency limit</strong>:</p>
  <div class="formula-block">
    \[ \Delta T = \frac{P_{abs}}{G_{th}} = \frac{\eta P_{in}}{G_{th}} \]
  </div>
  <p>Interpretation: for the same absorbed IR power, reducing \(G_{th}\) increases temperature rise.</p>

  <h4>2.2 Thermal time constant</h4>
  <div class="formula-block">
    \[ \tau = \frac{C_{th}}{G_{th}} \]
  </div>
  <p>This is the core trade-off:</p>
  <ul>
    <li>lower \(G_{th}\) → higher sensitivity but slower response</li>
    <li>lower \(C_{th}\) → faster response (but it’s constrained by mechanics and fabrication)</li>
  </ul>
  <p>If I want higher frame rate, I must keep \(\tau\) small—meaning I can’t reduce \(G_{th}\) arbitrarily.</p>

  <hr>

  <h3>3) Electrical conversion: what TCR actually impacts</h3>
  <p>TCR (temperature coefficient of resistance) is</p>
  <div class="formula-block">
    \[ \alpha = \frac{1}{R}\frac{dR}{dT} \]
  </div>
  <p>Small-signal resistance change:</p>
  <div class="formula-block">
    \[ \Delta R = \alpha R \Delta T \]
  </div>
  <p>Substitute the thermal result:</p>
  <div class="formula-block">
    \[ \Delta R = \alpha R \frac{\eta P_{in}}{G_{th}} \]
  </div>
  <p>So \(\alpha\) directly scales “temperature → electrical” conversion. But <strong>it does not change</strong> the thermal model itself: \(G_{th}\), \(C_{th}\), and \(\tau\) are still set by the MEMS.</p>

  <hr>

  <h3>4) Responsivity with a simple readout (and why electro-thermal feedback matters)</h3>
  <p>To keep things concrete, I’ll use a common simplified bias model:</p>
  <ul>
    <li>voltage bias \(V_b\)</li>
    <li>pixel resistance \(R\)</li>
    <li>series load \(R_L\)</li>
    <li>output taken across \(R_L\): \(V_{out} = I R_L\)</li>
  </ul>
  <p>Current:</p>
  <div class="formula-block">
    \[ I = \frac{V_b}{R + R_L} \]
  </div>
  <p>A small resistance change produces a current change:</p>
  <div class="formula-block">
    \[ \delta I = -\frac{V_b}{(R+R_L)^2}\,\delta R = -\frac{V_b}{(R+R_L)^2}\,\alpha R\,\delta T \]
  </div>
  <p>Output change:</p>
  <div class="formula-block">
    \[ \delta V_{out} = R_L\,\delta I \]
  </div>
  <p>Without any bias self-heating feedback, I would simply use \(\delta T = \delta P_{abs}/G_{th}\) and get a responsivity \(S_v = \left|\frac{dV_{out}}{dP_{abs}}\right|\) proportional to \(|\alpha|/G_{th}\).</p>
  <p>However, in a real pixel, bias power \(P_b\) heats the pixel and creates <strong>electro-thermal feedback (ETF)</strong>. The clean way to include it is to replace \(G_{th}\) by an <strong>effective thermal conductance</strong>:</p>
  <div class="formula-block">
    \[ G_{eff} = G_{th} - \frac{dP_b}{dT} \]
  </div>
  <p>For voltage bias:</p>
  <div class="formula-block">
    \[ P_b = I^2R = \frac{V_b^2 R}{(R+R_L)^2} \]
  </div>
  <p>Using \( \frac{dR}{dT}=\alpha R \), one obtains:</p>
  <div class="formula-block">
    \[ \frac{dP_b}{dT} = \alpha P_b\frac{R_L - R}{R+R_L} \]
  </div>
  <p>So:</p>
  <div class="formula-block">
    \[ G_{eff} = G_{th} - \alpha P_b\frac{R_L - R}{R+R_L} \]
  </div>
  <p>Now the low-frequency responsivity becomes:</p>
  <div class="formula-block">
    \[ S_v = \left|\frac{dV_{out}}{dP_{abs}}\right| = \frac{R_L V_b |\alpha| R}{(R+R_L)^2}\cdot \frac{1}{|G_{eff}|} \]
  </div>
  <p>Two important takeaways:</p>
  <ul>
    <li>\(|\alpha|\) improves responsivity directly.</li>
    <li>\(\alpha\) also enters <strong>stability</strong> through \(G_{eff}\). If \(G_{eff}\) approaches 0, the pixel becomes thermally unstable or “jumpy.”</li>
  </ul>

  <hr>

  <h3>5) NETD: a compact derivation that shows where \(\alpha\) helps (and where it doesn’t)</h3>
  <p>NETD (noise-equivalent temperature difference) is defined as the scene temperature change that yields SNR = 1.</p>
  <p>Start from the chain:</p>
  <div class="formula-block">
    \[ \frac{dV_{out}}{dT_{scene}} = \frac{dV_{out}}{dP_{abs}} \cdot \frac{dP_{abs}}{dT_{scene}} = S_v \cdot \eta \frac{dP_{in}}{dT_{scene}} \]
  </div>
  <p>So:</p>
  <div class="formula-block">
    \[ NETD = \frac{v_n}{\eta\, S_v \left|\frac{dP_{in}}{dT_{scene}}\right|} \]
  </div>
  <p>The key point is how we model \(v_n\). I find it most transparent to split noise into two categories:</p>

  <h4>5.1 Category A: “output-voltage-type” noises (do NOT scale with \(S_v\))</h4>
  <p>These are noises already present at the electrical output node, e.g. amplifier/readout voltage noise, Johnson noise, 1/f noise. Integrated over bandwidth \(B\):</p>
  <div class="formula-block">
    \[ v_{A}^2 = \int_0^B v_{out,0}^2(f)\,df \]
  </div>
  <p>Their NETD contribution scales as:</p>
  <div class="formula-block">
    \[ NETD_A \propto \frac{1}{S_v} \propto \frac{|G_{eff}|}{|\alpha|} \]
  </div>
  <p>So in this regime, <strong>increasing \(|\alpha|\)</strong> genuinely helps.</p>

  <h4>5.2 Category B: “input-power-type” noises (appear as NEP at the thermal input)</h4>
  <p>These originate as power fluctuations, then get converted by \(S_v\) into output voltage noise. Typical examples: thermal fluctuation noise (TFN), photon noise. Output voltage noise from these is \(S_v^2 NEP_{in}^2(f)\), so</p>
  <div class="formula-block">
    \[ v_{B}^2 = S_v^2 \int_0^B NEP_{in}^2(f)\,df \]
  </div>
  <p>When I compute NETD, the \(S_v\) cancels:</p>
  <div class="formula-block">
    \[ NETD_B = \frac{\sqrt{\int_0^B NEP_{in}^2(f)\,df}}{\eta\left|\frac{dP_{in}}{dT_{scene}}\right|} \]
  </div>
  <p><strong>This is the central result about \(\alpha\):</strong> If Category B dominates, NETD becomes nearly <strong>independent of \(\alpha\)</strong>.</p>
  <p>A widely used TFN expression is:</p>
  <div class="formula-block">
    \[ NEP_{TFN} = \sqrt{4 k_B T^2 G_{th}} \]
  </div>
  <p>This sets a thermal floor that \(\alpha\) cannot beat.</p>

  <h4>5.3 Putting it together (full compact form)</h4>
  <div class="formula-block">
    \[ NETD^2 = \frac{\int_0^B v_{out,0}^2(f)\,df}{\eta^2 S_v^2\left(\frac{dP_{in}}{dT_{scene}}\right)^2} + \frac{\int_0^B NEP_{in}^2(f)\,df}{\eta^2\left(\frac{dP_{in}}{dT_{scene}}\right)^2} \]
  </div>
  <p>Only the first term carries \(1/S_v^2\), hence only that term benefits directly from larger \(|\alpha|\).</p>

  <hr>

  <h3>6) Do “uncooled” detectors have temperature control?</h3>
  <p>A microbolometer FPA is “uncooled” because it does not need deep cryogenic cooling. In practice, systems may still include on-chip temperature sensing + compensation models, periodic calibration, and optional weak stabilization (e.g., TEC).</p>

  <hr>

  <h3>7) What if the thermistor is VO₂ with hysteresis?</h3>
  <p>VO₂ is attractive because near its metal–insulator transition, \(R(T)\) can change steeply—suggesting huge effective \(|\alpha|\). The problem is that VO₂ typically exhibits <strong>hysteresis</strong>.</p>
  <p>Mathematically, instead of a single-valued function \(R = R(T)\), I have:</p>
  <div class="formula-block">
    \[ R = R(T,\text{branch}),\quad \alpha = \alpha(T,\text{branch}) \]
  </div>

  <h4>7.1 Parameter-level consequences</h4>
  <ul>
    <li><strong>Responsivity becomes history-dependent.</strong> \(S_v\) changes with branch.</li>
    <li><strong>Linearity collapses near the transition.</strong> Small \(\Delta T\) may produce a jump.</li>
    <li><strong>Effective thermal dynamics may change.</strong> Latent-heat-like behavior increases \(C_{eff}\) and thus \(\tau\).</li>
    <li><strong>ETF becomes more dangerous.</strong> Large \(|\alpha|\) pushes \(G_{eff}\) toward instability.</li>
  </ul>

  <h4>7.2 Noise-level consequences</h4>
  <p>Near a phase transition, the film can show enhanced 1/f noise, random telegraph noise (RTN), and pixel-to-pixel variability in \(T_c\) and hysteresis width → stronger fixed-pattern noise (FPN).</p>

  <h4>7.3 What the image might look like (concrete examples)</h4>
  <p><strong>(1) Ghosting / “thermal memory”</strong>: A bright hand-shaped residual region persists longer than simple thermal diffusion predicts.</p>
  <p><strong>(2) Flicker speckles (domain switching)</strong>: Sparse pixels flicker between two brightness levels near the VO₂ transition.</p>
  <p><strong>(3) Posterization / step-like grayscale</strong>: Instead of smooth grayscale, the image shows step-like regions.</p>
  <p><strong>(4) Direction-dependent radiometry</strong>: The scene looks different depending on whether the system is on a heating path or a cooling path.</p>
  <p><strong>(5) Temperature-dependent FPN</strong>: Non-uniformity patterns change strongly with ambient temperature.</p>

  <h4>7.4 When VO₂ hysteresis could be an advantage</h4>
  <p>If the goal is event/threshold detection, contrast-boosting, or neuromorphic sensing, then VO₂’s nonlinearity and memory can become a feature.</p>

  <hr>

  <h3>8) Summary (what I personally keep in mind)</h3>
  <ul>
    <li>The <strong>thermal MEMS</strong> sets \(\Delta T = P_{abs}/G_{th}\) and \(\tau = C_{th}/G_{th}\).</li>
    <li>The <strong>thermistor</strong> sets \(\Delta R = \alpha R \Delta T\), and thus responsivity.</li>
    <li><strong>NETD improvement by \(\alpha\)</strong> only holds when output-voltage-type noises dominate.</li>
    <li><strong>VO₂ hysteresis</strong> turns the pixel into a history-dependent, nonlinear device.</li>
  </ul>

  <hr>
