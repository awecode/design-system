<script setup lang="ts">
const isOpen = ref(false)

const colors = {
  Primary: {
    name: 'Primary',
    description: 'Terracotta/copper (hue ~39)',
    lightName: 'primary-500',
    darkName: 'primary-400',
    lightHex: '#ae705e',
    darkHex: '#cf8671',
    lightOklch: 'oklch(0.607 0.084 36.93)',
    darkOklch: 'oklch(0.69 0.096 36.79)',
    commonNames: 'Copper Penny, Brooklyn, Clovedust, Warm Terracotta'
  }
}

const selectedGroup = ref(colors.Primary)

function openPrimaryModal() {
  selectedGroup.value = colors.Primary
  isOpen.value = true
}

const copied = ref<string | null>(null)
function copyToClipboard(text: string, id: string) {
  navigator.clipboard.writeText(text)
  copied.value = id
  setTimeout(() => {
    if (copied.value === id) copied.value = null
  }, 2000)
}
</script>

<template>
  <!-- Core Visual Identity -->
  <section>
    <h2 class="text-2xl font-bold flex items-center gap-2 mb-6 pb-4">
      <UIcon
        name="i-lucide-palette"
        class="size-6 text-primary"
      />
      Core Visual Identity
    </h2>

    <div class="grid md:grid-cols-2 gap-6">
      <UCard
        variant="subtle"
      >
        <h3 class="text-lg font-bold mb-2 flex items-center gap-2">
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
                  title="Primary (500)"
                  class="size-8 rounded-full shadow-sm ring-1 ring-inset ring-black/10 cursor-pointer hover:scale-110 transition-transform active:scale-95 bg-primary-500"
                  @click="openPrimaryModal"
                />
                <div
                  title="Neutral (Stone 400)"
                  class="size-8 rounded-full bg-neutral-400 shadow-sm ring-1 ring-inset ring-black/10"
                />
              </div>
              <div class="flex gap-2">
                <div
                  title="Success (500)"
                  class="size-6 rounded-full bg-emerald-500 shadow-sm ring-1 ring-inset ring-black/10"
                />
                <div
                  title="Warning (500)"
                  class="size-6 rounded-full bg-amber-500 shadow-sm ring-1 ring-inset ring-black/10"
                />
                <div
                  title="Error (500)"
                  class="size-6 rounded-full bg-rose-500 shadow-sm ring-1 ring-inset ring-black/10"
                />
                <div
                  title="Info (500)"
                  class="size-6 rounded-full bg-blue-500 shadow-sm ring-1 ring-inset ring-black/10"
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
                  title="Primary (400)"
                  class="size-8 rounded-full shadow-sm ring-1 ring-inset ring-white/10 cursor-pointer hover:scale-110 transition-transform active:scale-95 bg-primary-400"
                  @click="openPrimaryModal"
                />
                <div
                  title="Neutral (Stone 600)"
                  class="size-8 rounded-full bg-stone-600 shadow-sm ring-1 ring-inset ring-white/10"
                />
              </div>
              <div class="flex gap-2">
                <div
                  title="Success (400)"
                  class="size-6 rounded-full bg-emerald-400 shadow-sm ring-1 ring-inset ring-white/10"
                />
                <div
                  title="Warning (400)"
                  class="size-6 rounded-full bg-amber-400 shadow-sm ring-1 ring-inset ring-white/10"
                />
                <div
                  title="Error (400)"
                  class="size-6 rounded-full bg-rose-400 shadow-sm ring-1 ring-inset ring-white/10"
                />
                <div
                  title="Info (400)"
                  class="size-6 rounded-full bg-blue-400 shadow-sm ring-1 ring-inset ring-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </UCard>

      <UCard
        variant="subtle"
      >
        <h3 class="text-lg font-bold mb-2 flex items-center gap-2">
          <UIcon
            name="i-lucide-type"
            class="text-primary size-5"
          />
          Typography
        </h3>
        <div class="text-sm text-muted space-y-3">
          <p>Our typographic scale is designed for readability and clear hierarchy, utilizing three primary font families:</p>
          <ul class="list-disc list-inside space-y-1">
            <li>
              <strong>UI & Content: </strong>
              <a
                href="https://fonts.google.com/specimen/PT+Sans"
                target="_blank"
                class="text-primary hover:underline"
              >PT Sans</a> (Sans-serif)
            </li>
            <li class="font-serif">
              <strong>Headings & Prose: </strong>
              <a
                href="https://fonts.google.com/specimen/PT+Serif"
                target="_blank"
                class="text-primary hover:underline"
              >PT Serif</a> (Serif)
            </li>
            <li class="font-mono">
              <strong>Data & Code: </strong>
              <a
                href="https://fonts.google.com/specimen/Fira+Code"
                target="_blank"
                class="text-primary hover:underline"
              >Fira Code</a> (Monospace)
            </li>
          </ul>
          <p>Base font size is <code class="bg-muted/20 px-1 py-0.5 rounded">16px</code> with a <code class="bg-muted/20 px-1 py-0.5 rounded">1.5</code> line height. Headings should be strictly bold (700 or 800 weight).</p>
        </div>
      </UCard>
    </div>

    <!-- Configuration CTA -->
    <div class="mt-10 p-6 rounded-xl border border-default bg-muted/20 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div class="space-y-1 text-center sm:text-left">
        <h4 class="font-bold text-default">
          Implementation Ready
        </h4>
        <p class="text-sm text-muted">
          Need to apply these brand colors and fonts to your Nuxt or Tailwind project?
          Grab the ready-to-use theme tokens and configuration files.
        </p>
      </div>
      <UButton
        to="/config"
        label="View Configuration"
        icon="i-lucide-settings"
        size="lg"
        color="primary"
        variant="subtle"
        class="shrink-0"
      />
    </div>
  </section>

  <!-- Color Detail Modal -->
  <UModal
    v-model:open="isOpen"
    :title="selectedGroup?.name + ' Color'"
    :description="selectedGroup?.description"
  >
    <template #body>
      <div
        v-if="selectedGroup"
        class="space-y-8"
      >
        <!-- Usage Guide -->
        <h4 class="text-xs font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5">
          Usage
        </h4>
        <p class="text-sm leading-relaxed">
          Apply using <code>text-{{ selectedGroup.name.toLowerCase() }}</code>, <code>bg-{{ selectedGroup.name.toLowerCase() }}</code>, or <code>border-{{ selectedGroup.name.toLowerCase() }}</code>.
        </p>
        <!-- </div> -->

        <div class="grid sm:grid-cols-2 gap-6">
          <!-- Light Variant -->
          <div class="space-y-4">
            <div class="space-y-4 bg-whitex">
              <div class="flex items-center gap-2 mb-2">
                <UIcon
                  name="i-lucide-sun"
                  class="size-4 text-muted"
                />
                <span class="text-xs font-bold uppercase tracking-tight text-muted">Light Mode</span>
              </div>

              <div
                class="h-16 w-full rounded-lg shadow-inner ring-1 ring-inset ring-black/10"
                :class="`bg-${selectedGroup.lightName}`"
              />
            </div>

            <div class="space-y-2">
              <div
                v-for="format in [
                  { label: 'Tailwind', value: selectedGroup.lightName, id: 'ltw' },
                  { label: 'HEX', value: selectedGroup.lightHex, id: 'lhex' },
                  { label: 'OKLCH', value: selectedGroup.lightOklch, id: 'lok' }
                ]"
                :key="format.id"
                class="flex items-center justify-between p-2.5 rounded bg-muted/20 border border-muted"
              >
                <div class="min-w-0">
                  <div class="text-[9px] font-bold text-muted uppercase tracking-wider">
                    {{ format.label }}
                  </div>
                  <div class="text-xs font-mono truncate">
                    {{ format.value }}
                  </div>
                </div>
                <UButton
                  :color="copied === format.id ? 'success' : 'neutral'"
                  variant="soft"
                  size="xs"
                  :icon="copied === format.id ? 'i-lucide-check' : 'i-lucide-copy'"
                  @click="copyToClipboard(format.value, format.id)"
                />
              </div>
            </div>
          </div>

          <!-- Dark Variant -->
          <div class="space-y-4">
            <div class="flex items-center gap-2 mb-2">
              <UIcon
                name="i-lucide-moon"
                class="size-4 text-muted"
              />
              <span class="text-xs font-bold uppercase tracking-tight text-muted">Dark Mode</span>
            </div>

            <div
              class="h-16 w-full rounded-lg shadow-inner ring-1 ring-inset ring-white/10"
              :class="`bg-${selectedGroup.darkName}`"
            />

            <div class="space-y-2">
              <div
                v-for="format in [
                  { label: 'Tailwind', value: selectedGroup.darkName, id: 'dtw' },
                  { label: 'HEX', value: selectedGroup.darkHex, id: 'dhex' },
                  { label: 'OKLCH', value: selectedGroup.darkOklch, id: 'dok' }
                ]"
                :key="format.id"
                class="flex items-center justify-between p-2.5 rounded bg-muted/20 border border-muted"
              >
                <div class="min-w-0">
                  <div class="text-[9px] font-bold text-muted uppercase tracking-wider">
                    {{ format.label }}
                  </div>
                  <div class="text-xs font-mono truncate">
                    {{ format.value }}
                  </div>
                </div>
                <UButton
                  :color="copied === format.id ? 'success' : 'neutral'"
                  variant="soft"
                  size="xs"
                  :icon="copied === format.id ? 'i-lucide-check' : 'i-lucide-copy'"
                  @click="copyToClipboard(format.value, format.id)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </UModal>
</template>
