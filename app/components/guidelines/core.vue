<template>
  <!-- Core Visual Identity -->
  <section>
    <h2 class="text-2xl font-bold flex items-center gap-2 mb-6 text-default border-b border-default pb-4">
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

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <!-- Light Mode Preview -->
          <div class="bg-white border border-gray-200 rounded-lg p-4 space-y-4">
            <h4 class="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
              <UIcon
                name="i-lucide-sun"
                class="size-3.5"
              /> Light Mode
            </h4>

            <div class="space-y-4">
              <div class="flex gap-3 items-center">
                <div
                  class="size-8 rounded-full bg-primary-500 shadow-sm ring-1 ring-inset ring-black/10"
                  title="Primary (500)"
                />
                <div
                  class="size-8 rounded-full bg-stone-400 shadow-sm ring-1 ring-inset ring-black/10"
                  title="Neutral (Stone 400)"
                />
              </div>
              <div class="flex gap-2">
                <div
                  class="size-6 rounded-full bg-emerald-500 shadow-sm ring-1 ring-inset ring-black/10"
                  title="Success (500)"
                />
                <div
                  class="size-6 rounded-full bg-amber-500 shadow-sm ring-1 ring-inset ring-black/10"
                  title="Warning (500)"
                />
                <div
                  class="size-6 rounded-full bg-rose-500 shadow-sm ring-1 ring-inset ring-black/10"
                  title="Error (500)"
                />
                <div
                  class="size-6 rounded-full bg-blue-500 shadow-sm ring-1 ring-inset ring-black/10"
                  title="Info (500)"
                />
              </div>
            </div>
          </div>

          <!-- Dark Mode Preview -->
          <div class="bg-neutral-900 border border-gray-800 rounded-lg p-4 space-y-4">
            <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
              <UIcon
                name="i-lucide-moon"
                class="size-3.5"
              /> Dark Mode
            </h4>

            <div class="space-y-4">
              <div class="flex gap-3 items-center">
                <div
                  class="size-8 rounded-full bg-primary-400 shadow-sm ring-1 ring-inset ring-white/10"
                  title="Primary (400)"
                />
                <div
                  class="size-8 rounded-full bg-stone-600 shadow-sm ring-1 ring-inset ring-white/10"
                  title="Neutral (Stone 600)"
                />
              </div>
              <div class="flex gap-2">
                <div
                  class="size-6 rounded-full bg-emerald-400 shadow-sm ring-1 ring-inset ring-white/10"
                  title="Success (400)"
                />
                <div
                  class="size-6 rounded-full bg-amber-400 shadow-sm ring-1 ring-inset ring-white/10"
                  title="Warning (400)"
                />
                <div
                  class="size-6 rounded-full bg-rose-400 shadow-sm ring-1 ring-inset ring-white/10"
                  title="Error (400)"
                />
                <div
                  class="size-6 rounded-full bg-blue-400 shadow-sm ring-1 ring-inset ring-white/10"
                  title="Info (400)"
                />
              </div>
            </div>
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
    </div>
  </section>
</template>
