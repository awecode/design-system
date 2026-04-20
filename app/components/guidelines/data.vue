<script setup>
import { ref } from 'vue'

// Action Feedback example state
const isActionLoading = ref(false)

const simulateAction = async () => {
  isActionLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))
  isActionLoading.value = false
}

// Asynchronous Modal example state
const isAsyncModalOpen = ref(false)
const isModalDataLoading = ref(true)

const openAsyncModal = () => {
  isModalDataLoading.value = true
  // Simulate network request for modal content
  setTimeout(() => {
    isModalDataLoading.value = false
  }, 2000)
}
</script>

<template>
  <!-- Data Loading & Processing -->
  <section class="space-y-6">
    <h3 class="text-xl font-bold text-default mb-4 border-b border-default pb-2">
      Data Loading & Processing
    </h3>

    <div class="grid md:grid-cols-2 gap-6">
      <!-- SWR & Caching -->
      <UCard
        variant="outline"
        class="bg-elevated/50 flex flex-col"
      >
        <h4 class="font-bold mb-2 flex items-center gap-2">
          <UIcon
            name="i-lucide-database-zap"
            class="text-primary size-5"
          />
          Optimistic Loading & SWR
        </h4>
        <p class="text-sm text-muted mb-0 flex-grow">
          Implement Stale-While-Revalidate (SWR) patterns for frequently accessed entities. Save repetitive data (e.g., task assignees, tags) locally. Render the UI immediately from the local cache while silently fetching updates in the background using Nuxt's <code class="bg-muted/20 px-1 py-0.5 rounded font-mono text-xs">useAsyncData</code> or <code class="bg-muted/20 px-1 py-0.5 rounded font-mono text-xs">useFetch</code>.
        </p>
      </UCard>

      <!-- Skeleton & Initial Load -->
      <UCard
        variant="outline"
        class="bg-elevated/50 flex flex-col"
      >
        <h4 class="font-bold mb-2 flex items-center gap-2">
          <UIcon
            name="i-lucide-loader"
            class="text-primary size-5"
          />
          Skeletons & Initial Load States
        </h4>
        <p class="text-sm text-muted mb-4 flex-grow">
          Always provide structural visual feedback during initial data fetches using Skeletons or loading indicators. <strong>Never display an empty "No Data" state while a request is still pending</strong>, as this confuses users and creates visual jarring when data finally populates.
        </p>
        <div class="border-t border-default pt-4 flex flex-col gap-3">
          <div class="flex items-center gap-4">
            <USkeleton class="h-10 w-10 rounded-full" />
            <div class="space-y-2 flex-grow">
              <USkeleton class="h-4 w-3/4" />
              <USkeleton class="h-4 w-1/2" />
            </div>
          </div>
        </div>
      </UCard>

      <!-- Action Feedback -->
      <UCard
        variant="outline"
        class="bg-elevated/50 flex flex-col"
      >
        <h4 class="font-bold mb-2 flex items-center gap-2">
          <UIcon
            name="i-lucide-mouse-pointer-click"
            class="text-primary size-5"
          />
          Action Feedback
        </h4>
        <p class="text-sm text-muted mb-4 flex-grow">
          Consistently communicate processing status for user interactions. Apply the <code class="bg-muted/20 px-1 py-0.5 rounded font-mono text-xs">loading</code> prop to buttons triggering asynchronous operations. During this state, disable alternative actions (like cancel buttons) to prevent interrupted or orphaned requests.
        </p>
        <div class="border-t border-default pt-4 flex gap-3">
          <UButton
            label="Save Changes"
            color="primary"
            :loading="isActionLoading"
            @click="simulateAction"
          />
          <UButton
            label="Cancel"
            color="neutral"
            variant="ghost"
            :disabled="isActionLoading"
          />
        </div>
      </UCard>

      <!-- Asynchronous Modals -->
      <UCard
        variant="outline"
        class="bg-elevated/50 flex flex-col"
      >
        <h4 class="font-bold mb-2 flex items-center gap-2">
          <UIcon
            name="i-lucide-app-window"
            class="text-primary size-5"
          />
          Asynchronous Modals
        </h4>
        <p class="text-sm text-muted mb-4 flex-grow">
          Always render modals and slide-overs immediately upon user interaction. If the component requires remote data, display internal loading states (such as skeletons) within the modal instead of delaying its appearance. Delaying the render causes unresponsive UI feedback and confuses users.
        </p>
        <div class="border-t border-default pt-4">
          <UModal v-model:open="isAsyncModalOpen">
            <!-- The trigger button goes in the default slot -->
            <UButton
              label="View Details"
              color="neutral"
              variant="outline"
              @click="openAsyncModal"
            />

            <!-- The modal body goes in the #content slot -->
            <template #content>
              <UCard :ui="{ ring: '', divide: 'divide-y divide-default' }">
                <template #header>
                  <div class="flex items-center justify-between">
                    <h3 class="font-bold">
                      Record Details
                    </h3>
                    <UButton
                      color="neutral"
                      variant="ghost"
                      icon="i-lucide-x"
                      class="-my-1"
                      @click="isAsyncModalOpen = false"
                    />
                  </div>
                </template>

                <!-- Internal Loading State -->
                <div
                  v-if="isModalDataLoading"
                  class="space-y-3 py-2"
                >
                  <USkeleton class="h-4 w-full" />
                  <USkeleton class="h-4 w-5/6" />
                  <USkeleton class="h-4 w-4/6" />
                </div>

                <!-- Loaded Content -->
                <div
                  v-else
                  class="text-sm text-default py-2"
                >
                  <p>Here is the dynamically loaded data for this specific record. The modal opened instantly, providing immediate feedback before the data arrived.</p>
                </div>
              </UCard>
            </template>
          </UModal>
        </div>
      </UCard>

      <!-- Debouncing -->
      <UCard
        variant="outline"
        class="col-span-1 md:col-span-2 bg-elevated/50 flex flex-col"
      >
        <h4 class="font-bold mb-2 flex items-center gap-2">
          <UIcon
            name="i-lucide-keyboard"
            class="text-primary size-5"
          />
          Search & Input Debouncing
        </h4>
        <p class="text-sm text-muted mb-4 flex-grow">
          Enforce a <strong>250ms debounce</strong> delay on all text inputs that trigger server-side queries on typing. This standardizes API performance across the application, prevents race conditions, and ensures the UI remains responsive while the user is actively typing.
        </p>
      </UCard>
    </div>
  </section>
</template>
