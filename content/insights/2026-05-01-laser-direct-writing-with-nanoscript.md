---
layout: post
title: |
  Laser Direct Writing with NanoScript: From Programmed Trajectory to Material Response
math: true
---

Recently, I became involved in a **laser direct writing** project. The core idea is to use **NanoScript** as a programmable platform to design and fabricate micro-scale structures with controlled geometries and processing conditions.

In this context, NanoScript is not simply a drawing tool. It translates a designed geometry into a well-defined laser scanning trajectory together with key processing parameters, including laser power, scan speed, hatch spacing, exposure dose, and writing sequence.

The physical chain can be summarized as:

$$
\text{NanoScript}
\rightarrow
\mathbf{r}_0(t), P, v, h
\rightarrow
D(\mathbf{r})
\rightarrow
T(\mathbf{r},t)
\rightarrow
\text{material response}.
$$

That is, script-defined motion controls local optical energy deposition, which then governs thermal and/or photochemical material modification.

## 1) Script-defined trajectory and local optical intensity

The laser focus follows a programmed trajectory

$$
\mathbf{r}_0(t)=\bigl(x(t),y(t),z(t)\bigr),
$$

with instantaneous scanning speed

$$
v(t)=\left|\frac{d\mathbf{r}_0(t)}{dt}\right|.
$$

Therefore, when NanoScript defines a line, an array, or a complex pattern, it effectively defines where the focus moves and how long each local region is exposed.

For a focused Gaussian beam, the local intensity can be approximated as

$$
I(\mathbf{r},t)=
I_0
\exp\left[
-\frac{2|\mathbf{r}-\mathbf{r}_0(t)|^2}{w_0^2}
\right],
$$

where $I_0$ is the peak intensity and $w_0$ is the beam waist. The strongest interaction is concentrated near the moving focus.

## 2) Dose control: power, speed, and spacing are coupled

For a single scan line, the line dose can be estimated as

$$
D_{\mathrm{line}}\approx\frac{\eta P}{v},
$$

where $\eta$ is an effective absorption factor.

For a filled two-dimensional pattern, the area dose is approximately

$$
D_{\mathrm{area}}\approx\frac{\eta P}{v h},
$$

where $h$ is hatch spacing. This shows why $P$, $v$, and $h$ cannot be tuned independently: reducing speed or spacing while increasing power all increase accumulated local dose.

## 3) Thermal regime: diffusion broadens the modified region

If modification is mainly thermally driven, local temperature follows

$$
\rho C_p \frac{\partial T}{\partial t}
=
\nabla \cdot \left(k \nabla T\right)
+
Q(\mathbf{r},t),
$$

with heat source

$$
Q(\mathbf{r},t)\approx\alpha_{\mathrm{abs}} I(\mathbf{r},t).
$$

A useful estimate is the thermal diffusion length:

$$
L_{\mathrm{th}}\approx\sqrt{4\alpha_{\mathrm{th}}\tau},
\qquad
\tau\approx\frac{w_0}{v}.
$$

So even if the designed line is narrow, lateral heat spreading can widen the actually modified region.

## 4) Two-photon polymerization regime (Nanoscribe-type)

For two-photon polymerization, the dominant process is nonlinear absorption:

$$
R_{2\mathrm{P}} \propto I^2.
$$

The accumulated two-photon dose is

$$
D_{2\mathrm{P}}(\mathbf{r}) \propto \int I^2(\mathbf{r},t)\,dt,
$$

and polymerization occurs only when

$$
D_{2\mathrm{P}}(\mathbf{r}) \ge D_{\mathrm{th}}.
$$

This threshold behavior enables high-resolution 3D fabrication in a tightly confined focal voxel.

## 5) Why NanoScript matters in practice

Depending on the material system, laser direct writing may involve photopolymerization, local heating, crystallization, defect redistribution, oxygen migration, or phase transformation. In all cases, NanoScript connects **designed structure** to **actual laser–material interaction** through programmable control of trajectory and process parameters.

By tuning $P$, $v$, $h$, and writing sequence, we can reproducibly fabricate line patterns, periodic arrays, coupled units, and complex micro-scale networks.

---

In the following images, I show practical examples of what this method can achieve. One representative case is a micro-scale model of the Temple of Heaven, fabricated with high structural precision. Although such a structure may appear to be only a demonstration sample, it is actually very useful for understanding capability: curved surfaces, suspended features, sharp edges, fine pillars, and multi-level height variation are all included.

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin-top:16px;">
  <a href="/assets/assets/0244441.jpg" target="_blank"><img src="/assets/assets/0244441.jpg" alt="Laser microstructure 0244441" style="width:100%;height:120px;object-fit:cover;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.12);"></a>
  <a href="/assets/assets/0244442.jpg" target="_blank"><img src="/assets/assets/0244442.jpg" alt="Laser microstructure 0244442" style="width:100%;height:120px;object-fit:cover;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.12);"></a>
  <a href="/assets/assets/0244443.jpg" target="_blank"><img src="/assets/assets/0244443.jpg" alt="Laser microstructure 0244443" style="width:100%;height:120px;object-fit:cover;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.12);"></a>
  <a href="/assets/assets/0244444.jpg" target="_blank"><img src="/assets/assets/0244444.jpg" alt="Laser microstructure 0244444" style="width:100%;height:120px;object-fit:cover;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.12);"></a>
  <a href="/assets/assets/0244445.jpg" target="_blank"><img src="/assets/assets/0244445.jpg" alt="Laser microstructure 0244445" style="width:100%;height:120px;object-fit:cover;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.12);"></a>
  <a href="/assets/assets/0244446.jpg" target="_blank"><img src="/assets/assets/0244446.jpg" alt="Laser microstructure 0244446" style="width:100%;height:120px;object-fit:cover;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.12);"></a>
  <a href="/assets/assets/0244447.jpg" target="_blank"><img src="/assets/assets/0244447.jpg" alt="Laser microstructure 0244447" style="width:100%;height:120px;object-fit:cover;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.12);"></a>
  <a href="/assets/assets/0244448.jpg" target="_blank"><img src="/assets/assets/0244448.jpg" alt="Laser microstructure 0244448" style="width:100%;height:120px;object-fit:cover;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.12);"></a>
  <a href="/assets/assets/0244449.jpg" target="_blank"><img src="/assets/assets/0244449.jpg" alt="Laser microstructure 0244449" style="width:100%;height:120px;object-fit:cover;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.12);"></a>
  <a href="/assets/assets/0244450.jpg" target="_blank"><img src="/assets/assets/0244450.jpg" alt="Laser microstructure 0244450" style="width:100%;height:120px;object-fit:cover;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.12);"></a>
  <a href="/assets/assets/0244451.jpg" target="_blank"><img src="/assets/assets/0244451.jpg" alt="Laser microstructure 0244451" style="width:100%;height:120px;object-fit:cover;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.12);"></a>
  <a href="/assets/assets/0244452.jpg" target="_blank"><img src="/assets/assets/0244452.jpg" alt="Laser microstructure 0244452" style="width:100%;height:120px;object-fit:cover;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.12);"></a>
  <a href="/assets/assets/20260501135232_34_29.jpg" target="_blank"><img src="/assets/assets/20260501135232_34_29.jpg" alt="Laser microstructure 20260501135232_34_29" style="width:100%;height:120px;object-fit:cover;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.12);"></a>
  <a href="/assets/assets/20260501135235_35_29.jpg" target="_blank"><img src="/assets/assets/20260501135235_35_29.jpg" alt="Laser microstructure 20260501135235_35_29" style="width:100%;height:120px;object-fit:cover;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.12);"></a>
</div>

---

We welcome collaborations with researchers and partners interested in laser direct writing, micro-scale structure fabrication, and functional materials.

Our work is based at the **Institute of Experimental Physics I** and the **Center for Materials Research (ZfM)**, **Justus Liebig University Giessen**.
