---
layout: post
title: |
  Spectroscopic Ellipsometry Modeling of VO₂ Thin Films
math: true
---

<p>Sharing the basic principles of fitting optical parameters after measuring VO₂ thin films using spectroscopic ellipsometry (SE).</p>
  
  <h3>Spectroscopic Ellipsometry (SE)</h3>
  <p>Ellipsometry determines the complex reflectance ratio $\rho$:</p>
  <div class="formula-block">
    $$\rho(\lambda,\theta) = \frac{r_p}{r_s} = \tan\Psi \cdot e^{i\Delta}$$
  </div>
  <p>where $r_p$ and $r_s$ are the Fresnel reflection coefficients for p- and s-polarized light at incidence angle $\theta$ and wavelength $\lambda$. The ellipsometric parameters $\Psi$ and $\Delta$ represent the amplitude ratio and phase difference, respectively.</p>
  
  <p>For a stratified stack (ambient/film/substrate), $r_{p,s}$ are computed using the characteristic-matrix (transfer-matrix) formalism. For a single film of thickness $d$ and complex refractive index $\tilde{n}_f = n_f + i k_f$ on a substrate of $\tilde{n}_s$,</p>
  <div class="formula-block">
    $$r_{p,s} = \frac{r_{01}^{p,s} + r_{12}^{p,s} e^{2i\beta}}{1 + r_{01}^{p,s} r_{12}^{p,s} e^{2i\beta}}, \qquad \beta = \frac{2\pi}{\lambda} \tilde{n}_f d \cos\theta_f$$
  </div>
  <p>where $\theta_f$ is the refracted angle in the film given by Snell’s law, and $r_{ij}^{p,s}$ are the Fresnel coefficients at interface $i\!-\!j$.</p>
  
  <p>Measured spectra $\{\Psi(\lambda), \Delta(\lambda)\}$ are regressed against model spectra by minimizing a weighted least-squares merit function</p>
  <div class="formula-block">
    $$\chi^2 = \sum_i w_i \left[ (\Psi_i - \Psi_i^{\mathrm{mod}})^2 + (\Delta_i - \Delta_i^{\mathrm{mod}})^2 \right]$$
  </div>

  <h3>Dispersion Models and Retrieval of $n, k$</h3>
  <p>SE does not invert $n$ and $k$ directly. Instead, a causal dielectric function $\varepsilon(\omega) = \varepsilon_1 + i\varepsilon_2$ is parameterized and fitted to the measured spectra. After regression,</p>
  <div class="formula-block">
    $$|\varepsilon| = \sqrt{\varepsilon_1^2 + \varepsilon_2^2}, \qquad n = \sqrt{\frac{|\varepsilon| + \varepsilon_1}{2}}, \qquad k = \sqrt{\frac{|\varepsilon| - \varepsilon_1}{2}}$$
  </div>

  <h4>Insulating M1-VO₂: Tauc–Lorentz Model</h4>
  <div class="formula-block">
    $$\varepsilon_2^{\mathrm{TL}}(E) = \begin{cases} \dfrac{A C E_0 (E-E_g)^2}{E[(E^2-E_0^2)^2+C^2E^2]}, & E > E_g \\ 0, & E \le E_g \end{cases}$$
  </div>
  <p>with $\varepsilon_1(E)$ obtained by Kramers–Kronig integration.</p>

  <h4>Metallic R-VO₂: Drude + Lorentz Model</h4>
  <div class="formula-block">
    $$\varepsilon(\omega) = \varepsilon_\infty - \frac{\omega_p^2}{\omega(\omega+i\gamma)} + \sum_j \frac{A_j E_j^2}{E_j^2-\omega^2-i\Gamma_j \omega}$$
  </div>

  <h3>Band Gap Extraction</h3>
  <p>$\alpha(E) = \frac{4\pi k}{\lambda}$. Construct a Tauc plot of $(\alpha E)^{1/m}$ vs $E$, where $m=2$ for indirect-like transitions and $m=1/2$ for direct-like transitions. Linear extrapolation to zero yields $E_g$.</p>
