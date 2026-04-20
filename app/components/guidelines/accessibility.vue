<template>
  <!-- Advanced Accessibility (a11y) -->
  <section class="space-y-6">
    <h3 class="text-xl font-bold text-default mb-4 border-b border-default pb-2">
      Accessibility (a11y)
    </h3>
    <div class="grid md:grid-cols-2 gap-6">
      <!-- Focus States -->
      <UCard
        variant="outline"
        class="bg-elevated/50 flex flex-col"
      >
        <h4 class="font-bold mb-2 flex items-center gap-2">
          <UIcon
            name="i-lucide-keyboard"
            class="text-primary size-5"
          />
          Keyboard Focus States
        </h4>
        <p class="text-sm text-muted mb-4 flex-grow">
          Keyboard focus rings must never be disabled via CSS without providing a custom visual fallback. When stripping default browser outlines using <code class="bg-muted/20 px-1 py-0.5 rounded font-mono text-xs">outline-none</code>, it must always be paired with <code class="bg-muted/20 px-1 py-0.5 rounded font-mono text-xs">focus-visible:ring</code> to guarantee clear, accessible navigation for keyboard users.
        </p>
        <div class="border-t border-default pt-4 flex gap-4 items-center">
          <UButton
            label="Focusable Action"
            color="primary"
            class="outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-offset-gray-900"
          />
        </div>
      </UCard>

      <!-- Alt Text -->
      <UCard
        variant="outline"
        class="bg-elevated/50 flex flex-col"
      >
        <h4 class="font-bold mb-2 flex items-center gap-2">
          <UIcon
            name="i-lucide-image"
            class="text-primary size-5"
          />
          Image Alt Text
        </h4>
        <p class="text-sm text-muted mb-4 flex-grow">
          Provide descriptive <code class="bg-muted/20 px-1 py-0.5 rounded font-mono text-xs">alt</code> text for all meaningful images to support screen readers. For purely decorative images that do not convey essential information, strictly use an empty <code class="bg-muted/20 px-1 py-0.5 rounded font-mono text-xs">alt=""</code> attribute so assistive technologies can safely skip them.
        </p>
        <div class="border-t border-default pt-4 flex flex-col gap-3">
          <div class="space-y-1">
            <span class="text-xs font-semibold text-default flex items-center gap-1">
              <UIcon
                name="i-lucide-check-circle-2"
                class="text-success"
              /> Meaningful Image
            </span>
            <code class="block text-xs bg-muted/20 p-2 rounded font-mono text-muted overflow-x-auto whitespace-nowrap">
              &lt;img src="revenue-chart.png" alt="Q3 Revenue Growth Chart" /&gt;
            </code>
          </div>
          <div class="space-y-1">
            <span class="text-xs font-semibold text-default flex items-center gap-1">
              <UIcon
                name="i-lucide-check-circle-2"
                class="text-success"
              /> Decorative Image
            </span>
            <code class="block text-xs bg-muted/20 p-2 rounded font-mono text-muted overflow-x-auto whitespace-nowrap">
              &lt;img src="background-blob.svg" alt="" /&gt;
            </code>
          </div>
        </div>
      </UCard>
    </div>
  </section>
</template>
