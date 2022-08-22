---
subtitle: 'Sandvik'
title: 'Designing for scalability'
summary: 'During my time at Sandvik, I helped to lay down the foundations of an ambitious product iteration by consolidating an assortment of inconsistent and redundant UI elements.'
domain: 'Manufacturing'
year: '2020'
email: 'aleksandr.anciutin@gmail.com'
metaDesc: 'Designing for scalability'
layout: 'layouts/project.html'
---
<figure>
{% image "./src/images/scalability-1.jpg", "A disorganized group of buttons that are in different sizes, shapes, and colors." %}
</figure>

Back in the day, we worked on improving the accessibility of the programming solution for the CNC machines. The intention was to bring the programming experience to the devices and platforms Sandvik customers use every day.

We kicked off the project like we always do — with discovery work. Following that, we sailed through the exploration and conceptual work. Then **we got into visual interface design and everything went pear-shaped**.

The product was developed with focus for rapid growth, and visual language has struggled to scale alongside. This had a major effect on UI components: making them **inconsistent, redundant, and almost impossible to scale**. We had to rethink visual language and UI elements to build something that could scale across multiple devices.

<figure>
{% image "./src/images/scalability-2.jpg", "A group of components that are displayed in a hierarchical order, starting from atoms, molecules, organisms, and so on. This picture indicates that visual elements are systematically connected." %}
</figure>

Working with the engineering team, we integrated foundations with components. To pull this off, we introduced a **hierarchical structure based on nested components**. Building components in this manner kept things connected, which made it easy for design and engineering to modify, extend and improve components over time.

<figure>
{% image "./src/images/scalability-3.jpg", "On the left, there's a group of user interface components that are sharing a common visual language. On the right, there's a button component with the corresponding controls, inside Storybook" %}
</figure>

As part of the efforts to move away from fragmented, stand-alone libraries, **we built a library in Storybook, which served as a centralised hub of all the UI components**. In effect, this allowed us to mix, match, and reuse components throughout the project promoting consistency and cohesion across multiple platforms.

<figure>
{% image "./src/images/scalability-4.jpg", "A group of user interface screens indicating a shared and consistent visual language." %}
</figure>

The unified component library was the cornerstone of our efforts to improve the product and how we were working: **from building a more consistent experience across devices to forming a closer partnership between design and engineering**.





