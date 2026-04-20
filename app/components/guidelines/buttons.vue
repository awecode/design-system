<script setup>
const saveOptions = [
  [
    { label: 'Save and Add Another', icon: 'i-lucide-plus' },
    { label: 'Save and Continue', icon: 'i-lucide-arrow-right' }
  ],
  [
    { label: 'Save as Draft', icon: 'i-lucide-file-edit' }
  ]
]
</script>

<template>
  <!-- Buttons & CTAs -->
  <section class="space-y-6">
    <h3 class="text-xl font-bold text-default mb-4 border-b border-default pb-2">
      Buttons & Call to Actions (CTAs)
    </h3>
    <div class="grid md:grid-cols-2 gap-6">
      <!-- Primary vs Secondary -->
      <UCard
        variant="outline"
        class="bg-elevated/50 flex flex-col"
      >
        <h4 class="font-bold mb-2 flex items-center gap-2">
          <UIcon
            name="i-lucide-mouse-pointer-click"
            class="text-primary size-5"
          />
          Primary vs. Secondary Actions
        </h4>
        <p class="text-sm text-muted mb-4 flex-grow">
          Establish a clear visual hierarchy by restricting interfaces to a single primary action per view or form. Use the <code class="bg-muted/20 px-1 py-0.5 rounded font-mono text-xs">solid</code> primary variant to draw focus to the main objective, and relegate all alternative actions to <code class="bg-muted/20 px-1 py-0.5 rounded font-mono text-xs">outline</code> or <code class="bg-muted/20 px-1 py-0.5 rounded font-mono text-xs">soft</code> secondary variants.
        </p>
        <div class="border-t border-default pt-4 flex gap-3">
          <UButton
            label="Save Changes"
            color="primary"
            variant="solid"
          />
          <UButton
            label="Export Data"
            color="neutral"
            variant="outline"
          />
        </div>
      </UCard>

      <!-- Ghost Variant -->
      <UCard
        variant="outline"
        class="bg-elevated/50 flex flex-col"
      >
        <h4 class="font-bold mb-2 flex items-center gap-2">
          <UIcon
            name="i-lucide-ghost"
            class="text-primary size-5"
          />
          The Ghost Variant
        </h4>
        <p class="text-sm text-muted mb-4 flex-grow">
          Utilize the <code class="bg-muted/20 px-1 py-0.5 rounded font-mono text-xs">ghost</code> variant for actions of low importance, such as "Cancel", "Back", or "Skip". This reduces visual clutter while ensuring the action remains accessible without competing with primary or secondary objectives.
        </p>
        <div class="border-t border-default pt-4 flex items-center gap-3">
          <UButton
            label="Submit Form"
            color="primary"
            variant="solid"
          />
          <UButton
            label="Cancel"
            color="neutral"
            variant="ghost"
          />
        </div>
      </UCard>

      <!-- Dropdown Actions -->
      <UCard
        variant="outline"
        class="bg-elevated/50 flex flex-col"
      >
        <h4 class="font-bold mb-2 flex items-center gap-2">
          <UIcon
            name="i-lucide-chevron-down-square"
            class="text-primary size-5"
          />
          Split Buttons & Dropdowns
        </h4>
        <p class="text-sm text-muted mb-4 flex-grow">
          Use split buttons when you have more than two related tasks. They keep the primary action instantly accessible, while grouping alternatives in a dropdown. The main button triggers the default action (e.g., “Save”), and the chevron opens less common options.
        </p>
        <div class="border-t border-default pt-4 flex gap-3">
          <div class="inline-flex">
            <UButton
              label="Save Changes"
              color="primary"
              variant="solid"
              class="rounded-r-none"
            />

            <UDropdownMenu
              :items="saveOptions"
            >
              <UButton
                color="primary"
                variant="solid"
                icon="i-lucide-chevron-down"
                class="rounded-l-none border-l border-white/20"
              />
            </UDropdownMenu>
          </div>
        </div>
      </UCard>

      <!-- Icon Buttons -->
      <UCard
        variant="outline"
        class="bg-elevated/50 flex flex-col"
      >
        <h4 class="font-bold mb-2 flex items-center gap-2">
          <UIcon
            name="i-lucide-sparkles"
            class="text-primary size-5"
          />
          Icons within Buttons
        </h4>
        <p class="text-sm text-muted mb-4 flex-grow">
          Enhance button scannability by including a leading or trailing icon, but avoid overusing them. When using a standalone icon button without a label, always pair it with a tooltip and an <code class="bg-muted/20 px-1 py-0.5 rounded font-mono text-xs">aria-label</code> for accessibility.
        </p>
        <div class="border-t border-default pt-4 flex gap-3 items-center">
          <UButton
            label="Download"
            icon="i-lucide-download"
            color="primary"
          />
          <UButton
            label="Next Step"
            trailing-icon="i-lucide-arrow-right"
            color="neutral"
            variant="outline"
          />
        </div>
      </UCard>
    </div>
  </section>
</template>
