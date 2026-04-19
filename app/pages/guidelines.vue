<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
    <!-- Header -->
    <div class="text-center space-y-4">
      <UIcon
        name="i-lucide-book-open"
        class="size-16 text-primary mx-auto mb-4 drop-shadow-sm"
      />
      <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-default">
        Brand Guidelines
      </h1>
      <p class="text-xl text-muted max-w-2xl mx-auto">
        The official standards for creating consistent interfaces, naming conventions, and utilizing our standardized tech stack.
      </p>
    </div>

    <!-- Technology Stack -->
    <section>
      <h2 class="text-2xl font-bold flex items-center gap-2 mb-6 text-default border-b border-default pb-4">
        <UIcon
          name="i-lucide-blocks"
          class="size-6 text-primary"
        />
        Approved Libraries
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
          <h3 class="text-lg font-bold text-default mb-2">
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
          <h3 class="text-lg font-bold text-default mb-2">
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
          <h3 class="text-lg font-bold text-default mb-2">
            Quasar Framework
          </h3>
          <p class="text-muted text-sm relative z-10">
            Reserved for complex, heavy enterprise software and specific internal admin tooling where its comprehensive components accelerate development.
          </p>
        </UCard>
      </div>
    </section>

    <!-- Brand Voice & Naming -->
    <section>
      <h2 class="text-2xl font-bold flex items-center gap-2 mb-6 text-default border-b border-default pb-4">
        <UIcon
          name="i-lucide-type"
          class="size-6 text-primary"
        />
        Brand Naming & Terminology
      </h2>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Dos & Donts block -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-default">
            Writing the Brand Name
          </h3>
          <p class="text-muted text-sm">
            The brand name is a proper noun and should always be written with a single upper-case 'A', accompanied by lower-case letters.
          </p>

          <UAlert
            title="Correct"
            color="success"
            variant="outline"
            icon="i-lucide-check-circle-2"
          >
            <template #description>
              <p class="font-mono text-sm mt-1 text-emerald-700 dark:text-emerald-400">
                Awecode
              </p>
            </template>
          </UAlert>

          <UAlert
            title="Incorrect"
            color="error"
            variant="outline"
            icon="i-lucide-x-circle"
          >
            <template #description>
              <div class="flex flex-wrap gap-4 mt-1 text-rose-700 dark:text-rose-400">
                <span class="font-mono text-sm line-through opacity-80">awecode</span>
                <span class="font-mono text-sm line-through opacity-80">AweCode</span>
                <span class="font-mono text-sm line-through opacity-80">awe code</span>
              </div>
            </template>
          </UAlert>
        </div>

        <!-- Exceptional rules & Legal Entities -->
        <div class="space-y-6">
          <UCard
            variant="outline"
            class="bg-primary/5 border-primary/20"
          >
            <template #header>
              <div class="flex items-center gap-2">
                <UIcon
                  name="i-lucide-scale"
                  class="size-5 text-primary"
                />
                <h3 class="font-bold text-default">
                  Legal Entities
                </h3>
              </div>
            </template>
            <p class="text-sm text-default mb-4">
              Use these exact names on all legal papers, official letters, and financial vouchers:
            </p>
            <ul class="space-y-3">
              <li class="flex items-center gap-3 text-sm font-bold bg-background/50 p-2 rounded border border-default">
                <UIcon
                  name="i-lucide-building-2"
                  class="text-primary size-5"
                />
                Awecode Solutions Pvt Ltd
              </li>
              <li class="flex items-center gap-3 text-sm font-bold bg-background/50 p-2 rounded border border-default">
                <UIcon
                  name="i-lucide-building"
                  class="text-primary size-5"
                />
                Awecode LLC
              </li>
            </ul>
          </UCard>

          <div class="rounded-lg border border-default p-5 space-y-3 bg-elevated">
            <h3 class="text-sm font-bold text-default flex items-center gap-2">
              <UIcon
                name="i-lucide-info"
                class="size-5 text-primary"
              />
              Casing Exceptions
            </h3>
            <div class="grid grid-cols-2 gap-4 text-sm mt-3">
              <div class="bg-background border border-default p-3 rounded-md shadow-sm">
                <p class="text-xs text-muted mb-1 uppercase tracking-wider font-semibold">
                  Logo Imagery
                </p>
                <p class="font-mono font-medium">
                  AWECODE
                </p>
              </div>
              <div class="bg-background border border-default p-3 rounded-md shadow-sm">
                <p class="text-xs text-muted mb-1 uppercase tracking-wider font-semibold">
                  Domains & Email
                </p>
                <p class="font-mono font-medium">
                  awecode.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
