<script setup>
import { useClipboard } from '@vueuse/core'

const cssContent = `@import "tailwindcss";
@import "@nuxt/ui";

@custom-variant dark (&:is(.dark *));

/*
 * Awecode Design System Theme
 * Adapted from tweakcn configuration
 * Primary: Warm terracotta/copper (hue ~39)
 * Neutral: Warm stone grays (mapped to Tailwind 'stone')
 */

/* Custom primary color palette — warm terracotta/copper */
@theme static {
  /* Primary: Awecode brand — warm terracotta/copper, hue ~39 */
  --color-awecode-50: oklch(0.9700 0.0120 39.00);
  --color-awecode-100: oklch(0.9350 0.0250 39.00);
  --color-awecode-200: oklch(0.8800 0.0450 39.00);
  --color-awecode-300: oklch(0.8100 0.0620 39.00);
  --color-awecode-400: oklch(0.7300 0.0780 39.00);
  --color-awecode-500: oklch(0.6082 0.0835 38.91);
  --color-awecode-600: oklch(0.5400 0.0850 38.90);
  --color-awecode-700: oklch(0.4700 0.0750 38.90);
  --color-awecode-800: oklch(0.3900 0.0620 38.90);
  --color-awecode-900: oklch(0.3200 0.0480 38.90);
  --color-awecode-950: oklch(0.2500 0.0350 38.90);

  /* Fonts */
  --font-sans: 'PT Sans', ui-sans-serif, sans-serif, system-ui;
  --font-serif: 'PT Serif', ui-serif, serif;
  --font-mono: 'Fira Code', ui-monospace, monospace;
}

/* Nuxt UI CSS variable overrides */
:root {
  --ui-radius: 0.2rem;

  /* Shadow overrides matching the tweakcn config */
  --shadow-2xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-sm: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow-md: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10);
  --shadow-lg: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10);
  --shadow-xl: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10);
  --shadow-2xl: 0 1px 3px 0px hsl(0 0% 0% / 0.25);
}`

const configContent = `export default defineAppConfig({
  ui: {
    colors: {
      primary: 'awecode',
      neutral: 'stone'
    }
  }
})`

const { copy } = useClipboard()
const toast = useToast()

function copyToClipboard(text) {
  copy(text)
  toast.add({ title: 'Copied to clipboard!', color: 'success' })
}
</script>

<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
    <h1 class="text-3xl font-bold tracking-tight text-default sm:text-4xl mb-2">
      Configuration
    </h1>
    <p class="text-lg text-muted mb-8">
      Copy these configuration files to use the Awecode design system in your Nuxt project.
    </p>

    <div class="space-y-8">
      <!-- main.css Configuration -->
      <div class="rounded-xl border border-default bg-elevated overflow-hidden">
        <div class="flex items-center justify-between px-4 py-3 border-b border-default bg-muted/50">
          <span class="font-mono text-sm text-default font-medium">assets/css/main.css</span>
          <UButton
            icon="i-lucide-copy"
            size="sm"
            color="neutral"
            variant="ghost"
            label="Copy"
            @click="copyToClipboard(cssContent)"
          />
        </div>
        <div class="p-4 overflow-auto max-h-[500px] bg-zinc-950 dark:bg-zinc-950/50">
          <pre><code class="text-sm font-mono text-gray-300">{{ cssContent }}</code></pre>
        </div>
      </div>

      <!-- app.config.ts Configuration -->
      <div class="rounded-xl border border-default bg-elevated overflow-hidden">
        <div class="flex items-center justify-between px-4 py-3 border-b border-default bg-muted/50">
          <span class="font-mono text-sm text-default font-medium">app.config.ts</span>
          <UButton
            icon="i-lucide-copy"
            size="sm"
            color="neutral"
            variant="ghost"
            label="Copy"
            @click="copyToClipboard(configContent)"
          />
        </div>
        <div class="p-4 overflow-auto bg-zinc-950 dark:bg-zinc-950/50">
          <pre><code class="text-sm font-mono text-gray-300">{{ configContent }}</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>
