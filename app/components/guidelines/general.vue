<template>
  <!-- General Rules -->
  <div>
    <div class="grid md:grid-cols-2 gap-4">
      <UCard variant="outline">
        <h4 class="font-bold flex items-center gap-2 mb-2">
          <UIcon
            name="i-lucide-palette"
            class="text-primary"
          /> Base Recommendations
        </h4>
        <p class="text-sm text-muted">
          These guidelines are base recommendations for consistency and predictability. You can deviate for application-specific requirements only if these guidelines do not meet your needs.
        </p>
      </UCard>
      <UCard variant="outline">
        <h4 class="font-bold flex items-center gap-2 mb-2">
          <UIcon
            name="i-lucide-contrast"
            class="text-primary"
          /> Contrast Ratio
        </h4>
        <p class="text-sm text-muted">
          Ensure all UI elements meet <NuxtLink
            to="https://www.w3.org/TR/WCAG21/#contrast-minimum"
            target="_blank"
            class="text-primary hover:underline"
          >WCAG 2.1 AA</NuxtLink> contrast requirements, maintaining a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text and UI components in both light and dark modes.
        </p>
      </UCard>
    </div>
  </div>
</template>
