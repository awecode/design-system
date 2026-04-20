<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const cssContent = `@import "tailwindcss";
@import "@nuxt/ui";

@custom-variant dark (&:is(.dark *));

/*
 * Awecode Design System Theme
 * Primary: Warm terracotta/copper (OKLCH)
 * Neutral: Warm stone grays (mapped to Tailwind 'stone')
 */

@theme static {
  /* Primary: Awecode brand color scale */
  --color-awecode-50: oklch(0.958 0.009 34.44);
  --color-awecode-100: oklch(0.924 0.017 31.16);
  --color-awecode-200: oklch(0.841 0.041 33.45);
  --color-awecode-300: oklch(0.766 0.067 33.93);
  --color-awecode-400: oklch(0.69 0.096 36.79);
  --color-awecode-500: oklch(0.607 0.084 36.93);
  --color-awecode-600: oklch(0.517 0.072 37.14);
  --color-awecode-700: oklch(0.419 0.059 36.12);
  --color-awecode-800: oklch(0.323 0.046 36.17);
  --color-awecode-900: oklch(0.237 0.033 38.28);
  --color-awecode-950: oklch(0.178 0.025 32.76);

  /* Fonts */
  --font-sans: 'PT Sans', ui-sans-serif, sans-serif, system-ui;
  --font-serif: 'PT Serif', ui-serif, serif;
  --font-mono: 'Fira Code', ui-monospace, monospace;
}

/* Nuxt UI CSS variable overrides */
:root {
  --ui-radius: 0.2rem;

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

const items = [
  {
    slot: 'tailwind',
    label: 'Tailwind (v4)',
    icon: 'i-simple-icons-tailwindcss',
    file: 'assets/css/main.css',
    content: cssContent,
    instructions: 'Please apply the following Awecode Design System tokens to the tailwind configuration. Ensure all OKLCH values and font families are correctly defined in your main CSS file.'
  },
  {
    slot: 'nuxtui',
    label: 'Nuxt UI',
    icon: 'i-simple-icons-nuxtdotjs',
    file: 'app.config.ts',
    content: configContent,
    instructions: 'Configure Nuxt UI to use the Awecode brand colors. Set primary to "awecode" and neutral to "stone" in your app.config.ts.'
  }
]

const { copy } = useClipboard()
const toast = useToast()

function copyToClipboard(text: string) {
  copy(text)
  toast.add({ title: 'Copied to clipboard!', color: 'success' })
}

function copyForAgent(content: string, instructions: string) {
  const text = `${content}\n\n---\nINSTRUCTIONS FOR AGENT:\n${instructions}`
  copy(text)
  toast.add({ title: 'Copied for Agent!', description: 'Included code and instructions.', color: 'primary' })
}
</script>

<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
    <h1 class="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
      Configuration
    </h1>
    <p class="text-lg text-muted mb-8">
      Copy these configuration files to use the Awecode design system in your Nuxt project.
    </p>

    <UTabs
      :items="items"
      class="w-full"
    >
      <template
        v-for="item in items"
        :key="item.slot"
        #[item.slot]="{ item: currentItem }"
      >
        <div class="rounded-xl border border-default bg-elevated overflow-hidden mt-4">
          <div class="flex items-center justify-between px-4 py-3 border-b border-default bg-muted/50">
            <span class="font-mono text-sm font-medium">{{ currentItem.file }}</span>
            <div class="flex gap-2">
              <UButton
                icon="i-lucide-bot"
                size="sm"
                color="primary"
                variant="subtle"
                label="Copy for Agent"
                @click="copyForAgent(currentItem.content, currentItem.instructions)"
              />
              <UButton
                icon="i-lucide-copy"
                size="sm"
                color="neutral"
                variant="subtle"
                label="Copy Code"
                @click="copyToClipboard(currentItem.content)"
              />
            </div>
          </div>
          <div class="p-4 overflow-auto max-h-[600px] bg-zinc-950 dark:bg-zinc-950/50">
            <pre class="text-sm font-mono text-gray-300 whitespace-pre overflow-x-auto"><code>{{ currentItem.content }}</code></pre>
          </div>
        </div>
      </template>
    </UTabs>
  </div>
</template>
