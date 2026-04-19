<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
    <h1 class="text-3xl sm:text-4xl font-bold tracking-tight text-default mb-4">Guidelines</h1>
    <p class="text-lg text-muted mb-12">Awecode brand and design guidelines for creating consistent and beautiful interfaces.</p>
    
    <div class="prose prose-stone dark:prose-invert">
      <h2>Introduction</h2>
      <p>This design system serves as the source of truth for UI components and standards at Awecode. It's built with Nuxt UI and Tailwind CSS to ensure consistency, accessibility, and high performance across all our products.</p>
      
      <h3>Core Principles</h3>
      <ul>
        <li><strong>Clarity</strong>: Interfaces should be obvious. Avoid obscurity and make actions clear.</li>
        <li><strong>Consistency</strong>: Use standardized components, typography, and spacing to create a cohesive experience.</li>
        <li><strong>Accessibility</strong>: Ensure inclusive design by following WCAG guidelines out of the box.</li>
      </ul>

      <h2>Brand Colors</h2>
      <p>The Awecode palette leans toward warm, earthy tones to convey approachability and sophistication. Our primary brand color is a nuanced terracotta hue designed to be vibrant but not overpowering.</p>

      <h2>Typography</h2>
      <p>We combine an editorial serif for headings (PT Serif) with a highly legible sans-serif for body copy (PT Sans). This distinction creates clear hierarchy and a modern-yet-classic aesthetic.</p>

      <h2>Components</h2>
      <p>All core components are built on top of Nuxt UI templates. Custom elements are defined locally and integrated seamlessly using our specific utility classes and semantic variables.</p>
      <p>Head to the <a href="/examples" class="text-primary hover:underline">Examples</a> page to see them in action, or check the <a href="/config" class="text-primary hover:underline">Configuration</a> to install the styles in your own project.</p>
    </div>
  </div>
</template>
