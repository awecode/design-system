<template>
  <!-- Brand Voice & Naming -->
  <section>
    <h2 class="text-2xl font-bold flex items-center gap-2 mb-6 pb-4">
      <UIcon
        name="i-lucide-type"
        class="size-6 text-primary"
      />
      Brand Naming & Terminology
    </h2>

    <div class="grid md:grid-cols-2 gap-8">
      <!-- Dos & Donts block -->
      <div class="space-y-4">
        <h3 class="text-lg font-semibold">
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
        <div class="rounded-lg border border-default p-5 space-y-3">
          <h3 class="text-sm font-bold flex items-center gap-2">
            <UIcon
              name="i-lucide-info"
              class="size-5 text-primary"
            />
            Casing Exceptions
          </h3>
          <div class="grid grid-cols-2 gap-4 text-sm mt-3">
            <div class="border border-default p-3 rounded-md shadow-sm">
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
              <h3 class="font-bold">
                Legal Entities
              </h3>
            </div>
          </template>
          <p class="text-sm mb-4">
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
      </div>
    </div>
  </section>
</template>
