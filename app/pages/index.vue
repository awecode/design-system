<template>
  <div>
    <div class="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
      <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
        Awecode Design System
      </h1>
      <p class="mt-4 text-xl text-muted max-w-3xl mx-auto">
        The single source of truth for building consistent, beautiful digital experiences at Awecode.
      </p>
      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <UButton
          to="/guidelines"
          label="Guidelines"
          trailing-icon="i-lucide-arrow-right"
          icon="i-lucide-book-open"
          size="lg"
        />
        <UButton
          to="/skills"
          label="Skills"
          size="lg"
          icon="i-lucide-lightbulb"
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
          to="https://awecode.com/brand-guidelines"
          target="_blank"
          label="Brand Assets"
          icon="i-lucide-external-link"
          size="lg"
          color="neutral"
          variant="outline"
        />
      </div>

      <div class="mt-10 flex justify-center gap-x-8">
        <ULink
          to="/examples"
          class="text-sm font-medium text-muted hover:text-primary flex items-center gap-2 transition-colors group"
        >
          <UIcon
            name="i-lucide-layers"
            class="size-4 opacity-50 group-hover:opacity-100"
          />
          Examples
        </ULink>
        <ULink
          to="/kitchen-sink"
          class="text-sm font-medium text-muted hover:text-primary flex items-center gap-2 transition-colors group"
        >
          <UIcon
            name="i-lucide-component"
            class="size-4 opacity-50 group-hover:opacity-100"
          />
          Kitchen Sink
        </ULink>
      </div>
    </div>

    <UPageSection>
      <UPageCTA
        title="Built for projects that outlast trends"
        description="This design system powers all internal and client-facing products at Awecode. Consistent experiences, faster development, better products."
        variant="subtle"
        :links="[
          {
            label: 'Start a Project with Awecode',
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
