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
          These guidelines are base recommendations for consistency and predictability. You can use custom styling for application-specific requirements.
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
          Use a good contrast ratio for both light and dark modes for all elements. All UIs must be comprehensively WCAG Compliant.
        </p>
      </UCard>
    </div>
  </div>
</template>
