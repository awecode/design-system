<template>
  <div>
    <div class="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
      <h1 class="text-4xl font-bold tracking-tight text-default sm:text-5xl">
        Awecode Design System
      </h1>
      <p class="mt-4 text-xl text-muted max-w-3xl mx-auto">
        The single source of truth for building consistent, beautiful digital experiences at Awecode. Guidelines, components, brand assets, and best practices — all in one place.
      </p>
      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <UButton
          to="/skills"
          label="Skills"
          trailing-icon="i-lucide-arrow-right"
          size="lg"
        />
        <UButton
          to="/examples"
          label="Examples"
          icon="i-lucide-layers"
          size="lg"
          color="neutral"
          variant="outline"
        />
        <UButton
          to="/config"
          label="Configuration"
          icon="i-lucide-settings"
          size="lg"
          color="neutral"
          variant="outline"
        />
        <UButton
          to="/guidelines"
          label="Guidelines"
          icon="i-lucide-book-open"
          size="lg"
          color="neutral"
          variant="outline"
        />
        <UButton
          to="https://awecode.com/brand-guidelines"
          target="_blank"
          label="Brand Assets"
          icon="i-lucide-external-link"
          size="lg"
          color="neutral"
          variant="outline"
        />
      </div>
    </div>

    <UPageSection
      id="foundations"
      title="Foundations"
      description="The core building blocks that ensure visual consistency across all Awecode products and communications."
      :features="[{
        icon: 'i-lucide-palette',
        title: 'Color System',
        description: 'A warm, earthy palette anchored by our primary terracotta (#774F29), linen secondary (#FAF0E6), and a neutral background (#F5F5F5) — designed for warmth and readability.'
      }, {
        icon: 'i-lucide-type',
        title: 'Typography',
        description: 'PT Serif for headings brings a refined, editorial feel. PT Sans for body text ensures clean legibility. Fira Code for code blocks.'
      }, {
        icon: 'i-lucide-square-dashed-bottom',
        title: 'Spacing & Layout',
        description: 'Consistent spacing scale based on a 4px grid. Responsive layouts with clear breakpoints and a maximum container width of 80rem.'
      }, {
        icon: 'i-lucide-sun-moon',
        title: 'Dark Mode',
        description: 'Full light and dark mode support out of the box. Every color, surface, and component adapts automatically for comfortable viewing.'
      }, {
        icon: 'i-lucide-radius',
        title: 'Border Radius',
        description: 'A default radius of 0.5rem across all components ensures a soft, modern appearance. Scaled variants (sm, md, lg, xl) for flexibility.'
      }, {
        icon: 'i-lucide-layers',
        title: 'Elevation & Shadows',
        description: 'Subtle, layered shadows from 2xs to 2xl create depth without visual noise. Consistent shadow color and opacity across light and dark themes.'
      }]"
    />

    <UPageSection
      id="components"
      title="Components & Patterns"
      description="A comprehensive library of reusable UI components built on Nuxt UI, designed to accelerate development across all Awecode projects."
      :features="[{
        icon: 'i-lucide-text-cursor-input',
        title: 'Form Elements',
        description: 'Inputs, selects, checkboxes, toggles, and more — all with built-in validation, accessibility, and consistent styling.'
      }, {
        icon: 'i-lucide-layout-dashboard',
        title: 'Layout Components',
        description: 'Headers, footers, sidebars, page sections, and content containers that compose into complete application layouts.'
      }, {
        icon: 'i-lucide-messages-square',
        title: 'Feedback & Overlays',
        description: 'Toasts, modals, slideovers, tooltips, and alerts for communicating with users at every interaction point.'
      }, {
        icon: 'i-lucide-table-2',
        title: 'Data Display',
        description: 'Tables, cards, badges, and charts for presenting information clearly. Sortable, filterable, and paginated.'
      }, {
        icon: 'i-lucide-navigation',
        title: 'Navigation',
        description: 'Breadcrumbs, tabs, dropdowns, and command palettes for smooth, intuitive wayfinding across applications.'
      }, {
        icon: 'i-lucide-shield-check',
        title: 'Accessibility',
        description: 'Every component meets WCAG guidelines with proper ARIA attributes, keyboard navigation, and screen reader support.'
      }]"
    />

    <UPageSection>
      <UPageCTA
        title="Built for Awecode projects"
        description="This design system powers all internal and client-facing products at Awecode. Consistent experiences, faster development, better products."
        variant="subtle"
        :links="[{
          label: 'View Brand Guidelines',
          to: 'https://awecode.com/brand-guidelines',
          target: '_blank',
          trailingIcon: 'i-lucide-external-link',
          color: 'neutral'
        }, {
          label: 'Start a Project',
          to: 'https://awecode.com/contact',
          target: '_blank',
          icon: 'i-lucide-message-circle',
          color: 'neutral',
          variant: 'outline'
        }]"
      />
    </UPageSection>
  </div>
</template>
