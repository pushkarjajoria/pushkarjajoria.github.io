---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* 2019–2021 : Master of Informatics, Artificial Intelligence, Università della Svizzera italiana, Lugano, Switzerland
* 2010–2014 : Bachelor of Computer Science & Engineering, Indian Institute of Technology, Hyderabad

Research experience
======
* 2026–present : **Molecular Property Prediction via Chemical Language Models**, Saarland University
  * Investigating whether learned structural tokens from frozen CLMs (MoLFormer, ChemBERTa) can improve LLM performance on molecular tasks through a trainable Q-Former bridge module.
  * Advisor: Prof. Dietrich Klakow, LSV, Saarland University
* 2025 : **Anti-Inflammatory Drug Discovery**, Saarland University
  * Using domain adaptation on foundational chemical language models to predict anti-inflammatory properties of new chemicals.
  * Advisor: Prof. Dietrich Klakow, LSV, Saarland University
* 2024–2025 : **Text-conditioned Symbolic Drumbeat Generation**, Saarland University
  * Generating symbolic drumbeats conditioned on text prompts using latent diffusion models.
  * Advisor: Prof. Dietrich Klakow, LSV, Saarland University
* 2022–2023 : **Visualizing knowledge graphs for musical patterns in Irish traditional music**, University of Galway, Ireland
  * Developing tools to visualize musical patterns in Irish folk music and linking them with other songs in the corpora.
  * Advisor: Prof. James McDermott, University of Galway
* 2022–2023 : **Prevalence of the Tresillo rhythm in popular music**, University of Galway, Ireland
  * Measuring the use of Tresillo rhythm in US Billboard Top-20 Charts across 20 years.
  * Advisor: Prof. James McDermott, University of Galway
* 2020–2021 : **Sequential prediction of polyphonic music using human interpretable features**, USI & EPFL
  * Developed an interpretable model for polyphonic music prediction using feature-based policy learning and nested Markov processes, achieving over 90% accuracy on Bach chorales.
  * Advisors: Prof. Martin Rohrmeier, DCML, EPFL and Prof. Cesare Alippi, USI

Professional experience
======
* 2024–present : PhD Researcher, Spoken Language Systems (LSV), Saarland University
* 2022–2024 : Research Assistant, University of Galway
* 2018–2019 : Senior Developer, Delhivery (invited internal talk on AI for warehouse management)
* 2016–2018 : Software Developer, Joveo
* 2014–2015 : Associate Member of Technical Staff, Salesforce

Achievements & recognitions
======
* 2015 : Award for outstanding project in Salesforce Hackathon
* 2019 : Invited to give a talk on AI for warehouse management at Delhivery
* 2020 : Outstanding project of Data Science at EPFL for delay-aware journey planner for public transport in Zurich

Skills
======
* **Programming languages:** Python, PyTorch, TensorFlow

Teaching & service
======
* 2025 : Seminar on Graph Neural Networks for Molecular Property Prediction, Saarland University

Publications
======
  {% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}

[Download full CV (PDF)](/files/cv.pdf)
