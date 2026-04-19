<template>
  <!-- Core Visual Identity -->
  <section>
    <h2 class="text-2xl font-bold flex items-center gap-2 mb-6 text-default">
      <UIcon
        name="i-lucide-palette"
        class="size-6 text-primary"
      />
      Core Visual Identity
    </h2>

    <div class="grid md:grid-cols-2 gap-6">
      <UCard
        variant="outline"
        class="bg-elevated/50"
      >
        <h3 class="text-lg font-bold text-default mb-2 flex items-center gap-2">
          <UIcon
            name="i-lucide-swatch-book"
            class="text-primary size-5"
          />
          Color Palette
        </h3>
        <p class="text-sm text-muted mb-4">
          Our primary UI color is a warm terracotta/copper (hue ~39). Neutral colors map exclusively to warm stone grays. Semantic colors (success, warning, error, info) communicate system state.
        </p>
        <div class="space-y-3">
          <!-- Primary & Neutral -->
          <div class="flex flex-wrap gap-3">
            <div
              class="size-6 rounded-full bg-primary shadow-sm"
              title="Primary (Terracotta)"
            />
            <div
              class="size-6 rounded-full bg-stone-400 dark:bg-stone-600 shadow-sm"
              title="Neutral (Stone)"
            />
          </div>
          <!-- Semantic Colors -->
          <div class="flex flex-wrap gap-3">
            <div
              class="size-6 rounded-full bg-emerald-500 shadow-sm"
              title="Success"
            />
            <div
              class="size-6 rounded-full bg-amber-500 shadow-sm"
              title="Warning"
            />
            <div
              class="size-6 rounded-full bg-rose-500 shadow-sm"
              title="Error"
            />
            <div
              class="size-6 rounded-full bg-blue-500 shadow-sm"
              title="Info"
            />
          </div>
        </div>
      </UCard>

      <UCard
        variant="outline"
        class="bg-elevated/50"
      >
        <h3 class="text-lg font-bold text-default mb-2 flex items-center gap-2">
          <UIcon
            name="i-lucide-type"
            class="text-primary size-5"
          />
          Typography
        </h3>
        <div class="text-sm text-muted space-y-3">
          <p>Our typographic scale is designed for readability and clear hierarchy, utilizing three primary font families:</p>
          <ul class="list-disc list-inside space-y-1">
            <li><strong>UI & Content:</strong> PT Sans (Sans-serif)</li>
            <li><strong>Headings & Prose:</strong> PT Serif (Serif)</li>
            <li><strong>Data & Code:</strong> Fira Code (Monospace)</li>
          </ul>
          <p>Base font size is <code class="bg-muted/20 px-1 py-0.5 rounded">16px</code> with a <code class="bg-muted/20 px-1 py-0.5 rounded">1.5</code> line height. Headings should be strictly bold (700 or 800 weight).</p>
        </div>
      </UCard>

      <UCard
        variant="outline"
        class="bg-elevated/50"
      >
        <h3 class="text-lg font-bold text-default mb-2 flex items-center gap-2">
          <UIcon
            name="i-lucide-scaling"
            class="text-primary size-5"
          />
          Border Radii
        </h3>
        <p class="text-sm text-muted">
          We utilize a constrained border-radius scale to maintain a professional yet approachable aesthetic. Our global default is set to <code class="bg-muted/20 px-1 py-0.5 rounded">0.2rem</code> (8px) via the <code class="bg-muted/20 px-1 py-0.5 rounded">--ui-radius</code> variable. This ensures consistency across cards, inputs, and modals.
        </p>
      </UCard>

      <UCard
        variant="outline"
        class="bg-elevated/50"
      >
        <h3 class="text-lg font-bold text-default mb-2 flex items-center gap-2">
          <UIcon
            name="i-lucide-layers"
            class="text-primary size-5"
          />
          Shadows & Elevations
        </h3>
        <p class="text-sm text-muted">
          Depth is established using custom, softer tweaked shadows (low opacity, diffuse spread) to dictate the z-axis hierarchy. Use <code class="bg-muted/20 px-1 py-0.5 rounded">shadow-sm</code> for standard cards, <code class="bg-muted/20 px-1 py-0.5 rounded">shadow-md</code> for dropdowns and popovers, and <code class="bg-muted/20 px-1 py-0.5 rounded">shadow-xl</code> for blocking overlays like modals.
        </p>
      </UCard>
    </div>
  </section>
</template>
