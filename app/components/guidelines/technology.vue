<template>
  <!-- Technology Stack -->
  <section>
    <h2 class="text-2xl font-bold flex items-center gap-2 mb-6 pb-4">
      <UIcon
        name="i-lucide-blocks"
        class="size-6 text-primary"
      />
      Preferred Libraries
    </h2>
    <div class="grid md:grid-cols-3 gap-6">
      <UCard
        variant="subtle"
        class="relative overflow-hidden group border-transparent hover:border-primary/30 transition-colors"
      >
        <div class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <UIcon
          name="i-simple-icons-nuxtdotjs"
          class="size-8 text-primary mb-4"
        />
        <h3 class="text-lg font-bold mb-2">
          Nuxt UI
        </h3>
        <p class="text-muted text-sm relative z-10">
          Our primary design system and component library. Used for almost all our web applications and digital interfaces to ensure consistency and speed.
        </p>
      </UCard>

      <UCard
        variant="subtle"
        class="relative overflow-hidden group border-transparent hover:border-primary/30 transition-colors"
      >
        <div class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <UIcon
          name="i-lucide-sparkles"
          class="size-8 text-primary mb-4"
        />
        <h3 class="text-lg font-bold mb-2">
          Lucide Icons
        </h3>
        <p class="text-muted text-sm relative z-10">
          Our standard icon set. Stick to Lucide icons exclusively for visual consistency. Use other icons only if Lucide does not have a suitable representation.
        </p>
      </UCard>

      <UCard
        variant="subtle"
        class="relative overflow-hidden group border-transparent hover:border-primary/30 transition-colors"
      >
        <div class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <UIcon
          name="i-lucide-box"
          class="size-8 text-primary mb-4"
        />
        <h3 class="text-lg font-bold mb-2">
          Quasar Framework
        </h3>
        <p class="text-muted text-sm relative z-10">
          Reserved for complex, heavy enterprise software and specific internal admin tooling where its comprehensive components accelerate development.
        </p>
      </UCard>
    </div>
  </section>
</template>
