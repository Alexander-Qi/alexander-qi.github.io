---
layout: page
title: U-PSD TREPR
description: "A multifaceted research program: from advanced instrumentation to mechanistic studies."
img: assets/img/research/trepr-thumbnail.jpg
# redirect: https://unsplash.com
importance: 5
category: Foundational
related_publications: true
---

### The Story

I first met Professor Guo during the early days of my PhD. At the time, he was developing the U-PSD TREPR—an instrument he described with infectious enthusiasm. His conviction was unmistakable, and with Professor Jiao's support, I began a collaboration that reshaped my PhD.

Initially, I played a supporting role, validating and fine-tuning the instrument's specifications. Then came a challenge I never anticipated: Professor Guo asked me to develop the core data post-processing software. I felt both flattered and nervous—the weight of the task was immense. After careful thought, I committed to the project, building the initial framework in MATLAB and eventually refactoring it into C#. That software became the digital backbone for every experiment that followed.

What drew me to the U-PSD TREPR was its ability to directly observe transient radicals that govern chemical reactivity. Once the prototype was stable, we faced a defining question of research taste: what problem was significant enough to showcase the instrument's true potential?

Our focus eventually shifted from preliminary benchmarks to a high-stakes challenge: the direct, exhaustive observation of a complete photocatalytic cycle. I remember November 10, 2023, with total clarity. I was running an experiment on a complex iridium-based system, and for the first time, I watched the simultaneous existence and mutual transformations of multiple radical intermediates unfold on my screen.

The excitement was overwhelming. Over the next 14 days, my co-first author Weiqun Suo and I lived in the lab. We ran the instrument 24/7, barely shutting it down, driven by the sheer adrenaline of capturing a mechanistic landscape that had never been seen in such detail. Since then, with a mature workflow and a more robust software suite, our collaboration has extended the capabilities of the U-PSD TREPR even further, translating transient signals into rich, quantitative mechanistic insights.

---

### Academic Summary

This research program establishes a quantitative paradigm for dissecting complex open-shell processes by integrating custom spectroscopic instrumentation with mechanistic investigations. The cornerstone of this work is the development of the Ultrawide Single-Sideband Phase-Sensitive Detection (U-PSD) Time-Resolved EPR (TREPR) spectrometer.{% cite zhang_time-resolved_2023 %} By employing 100 kHz field modulation and a single-sideband demodulation algorithm, this instrument achieves a time resolution of 40 ns while maintaining high sensitivity for radical species in thermal equilibrium. This technological breakthrough addresses a long-standing limitation of conventional TREPR in detecting unpolarized (thermal-equilibrium) signals, providing the hardware foundation for capturing elusive, short-lived intermediates in modern catalytic cycles.

Leveraging the high-fidelity detection capabilities of the U-PSD platform, we achieved the first direct visualization of a complete photocatalytic cycle in the addition of amines to acrylates.{% cite qi_direct_2024 %} The study identifies and monitors the evolution of all key open-shell intermediates, including the amine radical cation, the α-aminoalkyl radical, and the final radical adduct. By fitting experimental hyperfine splitting (HFS) constants and performing comprehensive kinetic simulations, we provided unambiguous experimental validation of the redox-neutral catalytic cycle. This direct observation of intermediate transformation kinetics replaces speculative mechanistic models with a data-driven understanding of how radical flux is managed within a photoredox system.

The precision of the U-PSD TREPR system further enabled a critical reassessment of reactivity scales within radical chemistry. Specifically, we re-examined the Halogen Atom Transfer (XAT) reactivity of α-aminoalkyl radicals—intermediates previously thought to exhibit reactivity comparable to tin-centered radicals.{% cite suo_overestimated_2024 %} Our kinetic measurements revealed that their true XAT rate constants are $10^3$ to $10^5$ times lower than previously estimated in the literature. Furthermore, solvent-effect and kinetic analyses demonstrated the absence of significant polar effects in the transition state, substantially revising the reactivity guidelines for the rational design of XAT-based catalytic methodologies.

The scope of this methodology was extended to SOMO (Singly Occupied Molecular Orbital) catalysis in photoredox/chiral primary amine synergistic systems.{% cite zhang_characterization_2024 %} We characterized and monitored the transient enamine radical cation and its subsequent deprotonated form, the α-imino radical. Kinetic analysis revealed a significant reactivity disparity between these two species, with the radical cation exhibiting an order-of-magnitude higher reactivity than its neutral counterpart. These findings highlight the decisive role of deprotonation in modulating the electronic properties and reaction rates of enamine-derived radicals. Collectively, these works demonstrate how customized instrumental development can resolve fundamental mechanistic ambiguities, providing quantitative depth to physical organic chemistry.
