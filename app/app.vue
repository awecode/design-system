<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Awecode Design System'
const description = 'The official design system documentation for Awecode. Guidelines, components, and resources for building consistent, beautiful digital experiences.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <UHeader>
      <template #left>
        <NuxtLink to="/">
          <AppLogo class="w-auto h-6 shrink-0" />
        </NuxtLink>

        <USeparator
          orientation="vertical"
          class="h-6 mx-2"
        />

        <span class="text-sm font-medium text-muted">Design System</span>
      </template>

      <template #right>
        <UColorModeButton />

        <UButton
          to="https://github.com/AwecodeSoft"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />

        <UButton
          to="https://awecode.com"
          target="_blank"
          label="awecode.com"
          color="neutral"
          variant="ghost"
          trailing-icon="i-lucide-external-link"
          size="sm"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          © {{ new Date().getFullYear() }} Awecode • Kathmandu, Nepal
        </p>
      </template>

      <template #right>
        <UButton
          to="https://awecode.com"
          target="_blank"
          label="awecode.com"
          color="neutral"
          variant="ghost"
          size="sm"
        />
        <UButton
          to="https://github.com/AwecodeSoft"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>
