---
layout: post
title: |
  Why VO₂ Shows Thermal Hysteresis and Why Metallic Doping Suppresses It: A Landau Free-Energy View
math: true
---

<div class="post-date">Feb 23, 2026</div>

  <p>VO₂ is famous for its metal–insulator transition (MIT) near room temperature, accompanied by a structural transformation (rutile R ↔ monoclinic M1). One experimental hallmark is <strong>thermal hysteresis</strong>: the transition temperature upon heating differs from that upon cooling. In this post, I summarize a compact <strong>Landau free-energy</strong> explanation for (i) why hysteresis appears at all, and (ii) why <strong>metallic doping</strong> (W, Mo, Nb, Ru, etc.) often <strong>reduces the hysteresis width</strong>.</p>

  <hr>

  <h3>1. Landau free energy for a first-order transition</h3>
  <p>Introduce an order parameter <strong>\(\eta\)</strong> that distinguishes the two phases. Depending on context, \(\eta\) can be viewed as an effective measure of the symmetry-breaking distortion (e.g., V–V dimerization amplitude) or an equivalent coupled electronic/structural order parameter. The minimal Landau expansion that can produce a <strong>first-order</strong> transition is:</p>
  <div class="formula-block">
    \[ F(\eta, T) = a(T)\eta^2 + b\eta^4 + c\eta^6, \quad c>0, \quad a(T) = \alpha (T - T_0). \]
  </div>
  <ul>
    <li>If <strong>b > 0</strong>, the transition is typically <strong>second-order</strong>: the minimum moves continuously from \(\eta = 0\) to \(\eta \neq 0\), and there is <strong>no intrinsic barrier</strong> separating phases.</li>
    <li>If <strong>b < 0</strong> and <strong>c > 0</strong>, the free energy can develop <strong>two competing minima</strong> (\(\eta = 0\) and \(\eta \neq 0\)) separated by an <strong>energy barrier</strong>. This is the essence of a <strong>first-order</strong> transition.</li>
  </ul>
  <p>The stationary condition is:</p>
  <div class="formula-block">
    \[ \frac{\partial F}{\partial \eta} = 2\eta\left(a + 2b\eta^2 + 3c\eta^4\right) = 0. \]
  </div>
  <p>So \(\eta = 0\) is one solution, and nonzero solutions satisfy (letting \(x=\eta^2 \ge 0\)):</p>
  <div class="formula-block">
    \[ a + 2bx + 3cx^2 = 0. \]
  </div>

  <hr>

  <h3>2. Why hysteresis appears: metastability + barrier + spinodals</h3>
  <p>Thermal hysteresis is not “mysterious extra physics”—it is the natural thermodynamic fingerprint of a first-order landscape:</p>
  <ol>
    <li><strong>In a temperature window, both phases are locally stable (metastability).</strong> The system can remain trapped in a <strong>local minimum</strong> even when it is no longer the global minimum.</li>
    <li><strong>A finite barrier separates the minima.</strong> Switching phase requires crossing this barrier (or nucleating domains), so the transition does not occur exactly at the equilibrium coexistence condition.</li>
    <li><strong>The switch occurs at the stability limits (spinodals).</strong> Upon heating, the low-temperature phase can persist (superheating) until its minimum disappears; upon cooling, the high-temperature phase can persist (supercooling) until its minimum disappears.</li>
  </ol>
  <p>Mathematically, a stability limit is found by simultaneously requiring:</p>
  <div class="formula-block">
    \[ \frac{\partial F}{\partial \eta}=0, \qquad \frac{\partial^2 F}{\partial \eta^2}=0. \]
  </div>
  <p>For the nonzero branch, one obtains a characteristic spinodal at:</p>
  <div class="formula-block">
    \[ \eta_{\mathrm{sp}}^{2} = -\frac{b}{3c} \quad (b<0), \qquad a_{\uparrow} = \frac{b^{2}}{3c}. \]
  </div>
  <p>For the \(\eta = 0\) branch, stability is controlled by:</p>
  <div class="formula-block">
    \[ \left.\frac{\partial^2 F}{\partial \eta^2}\right|_{\eta=0} = 2a, \quad \Rightarrow \quad a_{\downarrow}=0. \]
  </div>
  <p>Using \(a(T)=\alpha(T-T_0)\), the corresponding temperatures are:</p>
  <div class="formula-block">
    \[ T_{\uparrow} = T_0 + \frac{b^2}{3\alpha c}, \qquad T_{\downarrow} = T_0. \]
  </div>
  <p>Hence the <strong>maximal intrinsic hysteresis window</strong> scales as:</p>
  <div class="formula-block">
    \[ \Delta T_{\mathrm{spin}} = T_{\uparrow}-T_{\downarrow} = \frac{b^2}{3\alpha c}. \]
  </div>
  <p><strong>Interpretation:</strong> hysteresis is large when the first-order character is strong (large \(|b|\) relative to \(c\)), because the barrier and metastability range are larger.</p>

  <hr>

  <h3>3. Why metallic doping often narrows hysteresis</h3>
  <p>Experimentally, metallic dopants frequently (i) lower the transition temperature and (ii) reduce hysteresis width. In Landau language, there are two complementary routes: <strong>thermodynamic weakening of first-order character</strong> and <strong>kinetic facilitation of nucleation/domain motion</strong>.</p>
  
  <h4>3.1 Thermodynamic route: weaken the first-order character</h4>
  <p>Doping renormalizes Landau coefficients, and therefore:</p>
  <div class="formula-block">
    \[ \Delta T_{\mathrm{spin}}(x) \propto \frac{b_{\mathrm{eff}}(x)^2}{\alpha_{\mathrm{eff}}(x)\,c_{\mathrm{eff}}(x)}. \]
  </div>
  <p>A common empirical trend is that doping makes the transition <strong>less strongly first-order</strong>, which corresponds to \(|b_{\mathrm{eff}}|\) decreasing and/or \(c_{\mathrm{eff}}\) increasing, both of which shrink \(\Delta T\) and reduce the barrier.</p>
  
  <h4>3.2 Kinetic route: easier nucleation</h4>
  <p>Even if the Landau landscape still allows metastability, the <em>observed</em> switching temperatures are strongly influenced by nucleation and domain growth. Metallic doping often introduces more heterogeneous sites that serve as <strong>nucleation centers</strong> and reduces elastic mismatch, easing <strong>domain wall motion</strong>.</p>

  <hr>

  <h3>4. Takeaways</h3>
  <ul>
    <li><strong>Hysteresis in VO₂</strong> arises naturally from a <strong>first-order Landau free-energy landscape</strong> with <strong>two minima separated by a barrier</strong>.</li>
    <li>In a minimal Landau model, the intrinsic hysteresis window scales like \(\Delta T \sim \frac{b^2}{\alpha c}\).</li>
    <li><strong>Metallic doping narrows hysteresis</strong> by weakening the first-order character and facilitating nucleation and domain evolution.</li>
  </ul>
