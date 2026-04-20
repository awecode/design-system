<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const nuxtCss = `@import "tailwindcss";
@import "@nuxt/ui";

@custom-variant dark (&:is(.dark *));

/*
 * Awecode Design System Theme
 * Primary: Warm terracotta/copper (hue ~39)
 * Neutral: Warm stone grays (mapped to Tailwind 'stone')
 */

@theme static {
--color-primary-50: oklch(0.958 0.009 34.44);
  --color-primary-100: oklch(0.924 0.017 31.16);
  --color-primary-200: oklch(0.841 0.041 33.45);
  --color-primary-300: oklch(0.766 0.067 33.93);
  --color-primary-400: oklch(0.69 0.096 36.79);
  --color-primary-500: oklch(0.607 0.084 36.93);
  --color-primary-600: oklch(0.517 0.072 37.14);
  --color-primary-700: oklch(0.419 0.059 36.12);
  --color-primary-800: oklch(0.323 0.046 36.17);
  --color-primary-900: oklch(0.237 0.033 38.28);
  --color-primary-950: oklch(0.178 0.025 32.76);

  /*
  --color-primary: var(--color-primary-500);
  */

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
}

h1, h2, h3 {
  @apply font-serif;
}`

const tailwindThemeCss = `@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(0.9793 0.0029 84.5589);
  --foreground: oklch(0.3355 0.0171 97.8686);
  --card: oklch(0.9793 0.0029 84.5589);
  --card-foreground: oklch(0.2174 0.0019 106.5582);
  --popover: oklch(1.0000 0 0);
  --popover-foreground: oklch(0.2593 0.0110 99.3258);
  --primary: oklch(0.6082 0.0835 38.9098);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.9210 0.0081 98.8864);
  --secondary-foreground: oklch(0.4266 0.0098 99.0797);
  --muted: oklch(0.9306 0.0096 93.5734);
  --muted-foreground: oklch(0.6032 0.0046 91.4759);
  --accent: oklch(0.9210 0.0081 98.8864);
  --accent-foreground: oklch(0.2593 0.0110 99.3258);
  --destructive: oklch(0.2174 0.0019 106.5582);
  --destructive-foreground: oklch(1.0000 0 0);
  --border: oklch(0.8822 0.0042 91.4510);
  --input: oklch(0.7563 0.0085 98.9207);
  --ring: oklch(0.6082 0.0835 38.9098);
  --chart-1: oklch(0.5446 0.0775 44.1554);
  --chart-2: oklch(0.7314 0.0952 292.9291);
  --chart-3: oklch(0.8729 0.0168 91.5683);
  --chart-4: oklch(0.8943 0.0236 299.3317);
  --chart-5: oklch(0.5461 0.0829 43.4630);
  --sidebar: oklch(0.9638 0.0054 95.1000);
  --sidebar-foreground: oklch(0.3558 0.0017 106.4855);
  --sidebar-primary: oklch(0.6082 0.0835 38.9098);
  --sidebar-primary-foreground: oklch(0.9881 0 0);
  --sidebar-accent: oklch(0.9210 0.0081 98.8864);
  --sidebar-accent-foreground: oklch(0.3250 0 0);
  --sidebar-border: oklch(0.9401 0 0);
  --sidebar-ring: oklch(0.7731 0 0);
  --font-sans: PT Sans, ui-sans-serif, sans-serif, system-ui;
  --font-serif: PT Serif, ui-serif, serif;
  --font-mono: Fira Code, ui-monospace, monospace;
  --radius: 0.5rem;
  --shadow-x: 0;
  --shadow-y: 1px;
  --shadow-blur: 3px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.1;
  --shadow-color: oklch(0 0 0);
  --shadow-2xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-sm: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow-md: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10);
  --shadow-lg: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10);
  --shadow-xl: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10);
  --shadow-2xl: 0 1px 3px 0px hsl(0 0% 0% / 0.25);
  --tracking-normal: 0em;
  --spacing: 0.25rem;
}

.dark {
  --background: oklch(0.2679 0.0036 106.6427);
  --foreground: oklch(0.8037 0.0084 98.9092);
  --card: oklch(0.2679 0.0036 106.6427);
  --card-foreground: oklch(0.9793 0.0029 84.5589);
  --popover: oklch(0.3085 0.0035 106.6039);
  --popover-foreground: oklch(0.9186 0.0013 106.4256);
  --primary: oklch(0.6678 0.0785 38.6005);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.9793 0.0029 84.5589);
  --secondary-foreground: oklch(0.3085 0.0035 106.6039);
  --muted: oklch(0.2213 0.0038 106.7070);
  --muted-foreground: oklch(0.7655 0.0099 100.0317);
  --accent: oklch(0.2181 0.0041 84.5884);
  --accent-foreground: oklch(0.9638 0.0054 95.1000);
  --destructive: oklch(0.6322 0.1310 21.4751);
  --destructive-foreground: oklch(1.0000 0 0);
  --border: oklch(0.3586 0.0068 106.7353);
  --input: oklch(0.4299 0.0065 106.6683);
  --ring: oklch(0.6678 0.0785 38.6005);
  --chart-1: oklch(0.5446 0.0775 44.1554);
  --chart-2: oklch(0.7314 0.0952 292.9291);
  --chart-3: oklch(0.2181 0.0041 84.5884);
  --chart-4: oklch(0.3225 0.0300 289.9959);
  --chart-5: oklch(0.5461 0.0829 43.4630);
  --sidebar: oklch(0.2357 0.0024 67.7077);
  --sidebar-foreground: oklch(0.8037 0.0084 98.9092);
  --sidebar-primary: oklch(0.3250 0 0);
  --sidebar-primary-foreground: oklch(0.9881 0 0);
  --sidebar-accent: oklch(0.2174 0.0019 106.5582);
  --sidebar-accent-foreground: oklch(0.8037 0.0084 98.9092);
  --sidebar-border: oklch(0.9401 0 0);
  --sidebar-ring: oklch(0.7731 0 0);
  --font-sans: PT Sans, ui-sans-serif, sans-serif, system-ui;
  --font-serif: PT Serif, ui-serif, serif;
  --font-mono: Fira Code, ui-monospace, monospace;
  --radius: 0.5rem;
  --shadow-x: 0;
  --shadow-y: 1px;
  --shadow-blur: 3px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.1;
  --shadow-color: oklch(0 0 0);
  --shadow-2xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-sm: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow-md: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10);
  --shadow-lg: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10);
  --shadow-xl: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10);
  --shadow-2xl: 0 1px 3px 0px hsl(0 0% 0% / 0.25);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
  --font-serif: var(--font-serif);

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);

  --shadow-2xs: var(--shadow-2xs);
  --shadow-xs: var(--shadow-xs);
  --shadow-sm: var(--shadow-sm);
  --shadow: var(--shadow);
  --shadow-md: var(--shadow-md);
  --shadow-lg: var(--shadow-lg);
  --shadow-xl: var(--shadow-xl);
  --shadow-2xl: var(--shadow-2xl);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}`

const nuxtAppConfig = `export default defineAppConfig({
  ui: {
    colors: {
      primary: 'awecode',
      neutral: 'stone'
    }
  }
})`

const tabs = [
  {
    slot: 'nuxtui',
    label: 'Nuxt UI',
    icon: 'i-simple-icons-nuxtdotjs'
  },
  {
    slot: 'tailwind',
    label: 'Tailwind (v4)',
    icon: 'i-simple-icons-tailwindcss'
  }
]

const configs: Record<string, any[]> = {
  tailwind: [
    {
      file: 'main.css',
      description: 'CSS file with Tailwind v4 theme tokens',
      content: tailwindThemeCss,
      instructions: 'Apply the following Awecode Design System tokens to your main CSS file.'
    }
  ],
  nuxtui: [
    {
      file: 'assets/css/main.css',
      description: 'Main CSS file with Tailwind v4 and Nuxt UI theme tokens',
      content: nuxtCss,
      instructions: 'Apply the following Awecode Design System tokens to main Nuxt CSS file.'
    },
    {
      file: 'app.config.ts',
      description: 'Nuxt UI application configuration',
      content: nuxtAppConfig,
      instructions: 'Create or update app.config.ts with the attached configuration.'
    }
  ]
}

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
      :items="tabs"
      class="w-full"
    >
      <template
        v-for="tab in tabs"
        :key="tab.slot"
        #[tab.slot]
      >
        <div class="space-y-6 mt-4">
          <div
            v-for="config in configs[tab.slot]"
            :key="config.file"
            class="rounded-xl border border-default bg-elevated overflow-hidden"
          >
            <div class="flex items-center justify-between px-4 py-3 border-b border-default bg-muted/50">
              <div class="flex flex-col">
                <span class="font-mono text-sm font-medium">{{ config.file }}</span>
                <span class="text-xs text-muted">{{ config.description }}</span>
              </div>
              <div class="flex gap-2">
                <UButton
                  icon="i-lucide-bot"
                  size="sm"
                  color="primary"
                  variant="subtle"
                  label="Copy for Agent"
                  @click="copyForAgent(config.content, config.instructions)"
                />
                <UButton
                  icon="i-lucide-copy"
                  size="sm"
                  color="neutral"
                  variant="subtle"
                  label="Copy Code"
                  @click="copyToClipboard(config.content)"
                />
              </div>
            </div>
            <div class="p-4 overflow-auto max-h-[600px] bg-zinc-950 dark:bg-zinc-950/50">
              <pre class="text-sm font-mono text-gray-300 whitespace-pre overflow-x-auto"><code>{{ config.content }}</code></pre>
            </div>
          </div>
        </div>
      </template>
    </UTabs>
  </div>
</template>
