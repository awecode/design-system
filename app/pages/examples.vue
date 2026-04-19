<script setup lang="ts">
const route = useRoute()
const router = useRouter()

// Glob-import all example components for reliable runtime resolution
const componentModules = import.meta.glob('~/components/examples/*.vue')

// Registry of example components — add new entries here as you add more examples
const examples = [
  {
    id: 'payment',
    label: 'Payment',
    description: 'Payment form with card details, validation, and billing address.',
    icon: 'i-lucide-credit-card'
  }
]

// Track which example is active based on the URL hash
const activeId = ref('')

function selectExample(id: string) {
  activeId.value = id
  router.replace({ hash: `#${id}` })
}

function clearSelection() {
  activeId.value = ''
  router.replace({ hash: '' })
}

const isModalOpen = computed({
  get: () => !!activeId.value,
  set: (val) => {
    if (!val) clearSelection()
  }
})

// Resolve the dynamic component via async import
const activeComponent = computed(() => {
  if (!activeId.value) return null
  const entry = examples.find(e => e.id === activeId.value)
  if (!entry) return null

  // Match the glob key by label (filename without extension)
  const key = Object.keys(componentModules).find(k => k.endsWith(`/${entry.label}.vue`))
  if (!key) return null

  return defineAsyncComponent(componentModules[key] as () => Promise<any>)
})

const activeExample = computed(() => examples.find(e => e.id === activeId.value))

// Deep-link support: read hash on mount
onMounted(() => {
  const hash = route.hash?.replace('#', '')
  if (hash && examples.some(e => e.id === hash)) {
    activeId.value = hash
  }
})

// Watch for hash changes (e.g. browser back/forward)
watch(() => route.hash, (newHash) => {
  const hash = newHash?.replace('#', '')
  if (hash && examples.some(e => e.id === hash)) {
    activeId.value = hash
  } else {
    activeId.value = ''
  }
})
</script>

<template>
  <div>
    <div class="pt-12 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 class="text-3xl font-bold text-default">
        Examples
      </h1>
      <p class="mt-2 text-lg text-muted">
        Interactive component examples built with Nuxt UI. Click any card to view the live component.
      </p>
    </div>

    <div class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <!-- Example cards grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <button
          v-for="example in examples"
          :key="example.id"
          class="group text-left rounded-lg border border-default p-4 transition-all duration-200 hover:border-primary hover:shadow-md cursor-pointer"
          :class="[
            activeId === example.id
              ? 'border-primary bg-primary/5 ring-1 ring-primary shadow-md'
              : 'bg-elevated hover:bg-muted'
          ]"
          @click="selectExample(example.id)"
        >
          <UIcon
            :name="example.icon"
            class="size-5 mb-2 text-muted group-hover:text-primary transition-colors"
            :class="[activeId === example.id && 'text-primary']"
          />
          <p class="text-sm font-semibold text-default truncate">
            {{ example.label }}
          </p>
          <p class="text-xs text-muted mt-1 line-clamp-2">
            {{ example.description }}
          </p>
        </button>
      </div>

      <!-- Active component preview -->
      <UModal
        v-model:open="isModalOpen"
        :title="activeExample?.label"
        :description="activeExample?.description"
        :ui="{ content: 'sm:max-w-full' }"
      >
        <template #body>
          <div
            v-if="activeComponent"
            class="sm:rounded-lg overflow-hidden flex justify-center"
          >
            <component :is="activeComponent" />
          </div>
        </template>
      </UModal>

      <!-- Helper text -->
      <div class="mt-8 text-center py-16 text-muted">
        <UIcon
          name="i-lucide-mouse-pointer-click"
          class="size-8 mx-auto mb-3 opacity-50"
        />
        <p class="text-sm">
          Click an example above to preview it
        </p>
      </div>
    </div>
  </div>
</template>
