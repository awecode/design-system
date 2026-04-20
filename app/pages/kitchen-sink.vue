<script setup lang="ts">
const toast = useToast()

const items = [{
  label: 'Account',
  icon: 'i-lucide-user',
  slot: 'account'
}, {
  label: 'Password',
  icon: 'i-lucide-lock',
  slot: 'password'
}, {
  label: 'Settings',
  icon: 'i-lucide-settings',
  slot: 'settings'
}]

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
]

const dropdownItems = [
  [{
    label: 'Profile',
    icon: 'i-lucide-user'
  }, {
    label: 'Billing',
    icon: 'i-lucide-credit-card'
  }],
  [{
    label: 'Logout',
    icon: 'i-lucide-log-out'
  }]
]

const tableColumns: any[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'role', header: 'Role' }
]

const tableRows = [
  { name: 'Lindsay Walton', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Courtney Henry', email: 'courtney.henry@example.com', role: 'Admin' },
  { name: 'Tom Cook', email: 'tom.cook@example.com', role: 'Director' }
]

const selected = ref('1')
const text = ref('')
const checked = ref(true)
const slideover = ref(false)
const modal = ref(false)
const page = ref(1)

const timelineItems = [
  { label: 'Project Started', description: 'Initial commit and architectural setup.', icon: 'i-lucide-rocket', date: '2 days ago' },
  { label: 'Design System Set', description: 'Core colors and typography tokens defined.', icon: 'i-lucide-palette', date: 'Yesterday' },
  { label: 'Kitchen Sink Added', description: 'A comprehensive component preview page.', icon: 'i-lucide-check-circle', date: 'Just now' }
]

const carouselItems = [
  'https://picsum.photos/1920/1080?random=1',
  'https://picsum.photos/1920/1080?random=2',
  'https://picsum.photos/1920/1080?random=3'
]

function showToast() {
  toast.add({
    title: 'Success!',
    description: 'The kitchen sink is working perfectly.',
    color: 'success'
  })
}
</script>

<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
    <div class="text-center">
      <h1 class="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
        Kitchen Sink
      </h1>
      <p class="text-xl text-muted max-w-2xl mx-auto">
        Preview of Nuxt UI components.
      </p>
    </div>

    <!-- Actions -->
    <section class="space-y-6">
      <h2 class="text-2xl font-bold border-b border-default pb-2">
        Actions
      </h2>
      <div class="flex flex-wrap gap-4 items-center">
        <UButton
          label="Primary"
          color="primary"
        />
        <UButton
          label="Secondary"
          color="neutral"
          variant="outline"
        />
        <UButton
          label="Subtle"
          color="primary"
          variant="subtle"
        />
        <UButton
          label="Ghost"
          color="neutral"
          variant="ghost"
        />
        <UButton
          label="Destructive"
          color="error"
          variant="outline"
        />
        <UButton
          label="Destructive Confirmed"
          color="error"
        />
        <UButton
          label="Loading"
          loading
        />
        <UButton
          icon="i-lucide-plus"
          label="With Icon"
        />
        <UDropdownMenu :items="dropdownItems">
          <UButton
            label="Options"
            color="neutral"
            variant="outline"
            trailing-icon="i-lucide-chevron-down"
          />
        </UDropdownMenu>
      </div>
      <div class="flex flex-wrap gap-4 items-center">
        <UFieldGroup>
          <UButton
            label="One"
            color="neutral"
            variant="outline"
          />
          <UButton
            label="Two"
            color="neutral"
            variant="outline"
          />
          <UButton
            label="Three"
            color="neutral"
            variant="outline"
          />
        </UFieldGroup>
      </div>
    </section>

    <!-- Elements -->
    <section class="space-y-6">
      <h2 class="text-2xl font-bold border-b border-default pb-2">
        UI Elements
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <UCard variant="subtle">
          <template #header>
            Avatars & Chips
          </template>
          <div class="space-y-6">
            <div class="flex flex-wrap items-center gap-4">
              <UAvatar
                icon="i-lucide-user"
                color="primary"
                variant="subtle"
              />
              <UAvatar
                text="DW"
                color="neutral"
                variant="subtle"
              />
              <UAvatar
                icon="i-lucide-robot"
                color="info"
                variant="outline"
              />
              <UChip
                color="success"
                inset
              >
                <UAvatar text="JD" />
              </UChip>
            </div>
            <UAvatarGroup :max="3">
              <UAvatar text="BC" />
              <UAvatar text="RH" />
              <UAvatar text="SM" />
              <UAvatar text="NK" />
            </UAvatarGroup>
          </div>
        </UCard>

        <UCard variant="subtle">
          <template #header>
            Separators
          </template>
          <div class="space-y-6">
            <USeparator label="Horizontal Label" />
            <USeparator
              icon="i-lucide-star"
              color="primary"
            />
            <div class="flex h-5 items-center space-x-4">
              <span class="text-sm">Link A</span>
              <USeparator orientation="vertical" />
              <span class="text-sm">Link B</span>
              <USeparator orientation="vertical" />
              <span class="text-sm">Link C</span>
            </div>
          </div>
        </UCard>

        <UCard variant="subtle">
          <template #header>
            Progress & Loading
          </template>
          <div class="space-y-6">
            <UProgress
              :value="65"
              label="Uploading..."
              size="sm"
              color="primary"
            />
            <div class="flex items-center gap-4">
              <USkeleton class="h-12 w-12 rounded-full" />
              <div class="space-y-2 flex-1">
                <USkeleton class="h-4 w-full" />
                <USkeleton class="h-4 w-3/4" />
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </section>

    <!-- Forms -->
    <section class="space-y-6">
      <h2 class="text-2xl font-bold border-b border-default pb-2">
        Forms & Inputs
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <UCard variant="subtle">
          <template #header>
            Control Inputs
          </template>
          <div class="space-y-6">
            <UFormField label="Checkboxes">
              <UCheckboxGroup
                :items="['Option A', 'Option B', 'Option C']"
                color="primary"
              />
            </UFormField>
            <UFormField label="Radio Buttons">
              <URadioGroup
                :items="['Morning', 'Afternoon', 'Evening']"
                color="primary"
              />
            </UFormField>
            <div class="flex items-center gap-6">
              <UFormField label="Notifications">
                <USwitch v-model="checked" />
              </UFormField>
              <UFormField label="Enabled">
                <USwitch
                  disabled
                  :model-value="true"
                />
              </UFormField>
            </div>
          </div>
        </UCard>

        <UCard variant="subtle">
          <template #header>
            Text Inputs
          </template>
          <div class="space-y-4">
            <UFormField
              label="Standard Input"
              description="Enter your full name"
            >
              <UInput
                v-model="text"
                placeholder="John Doe"
                class="w-full"
              />
            </UFormField>
            <UFormField label="With Icon">
              <UInput
                icon="i-lucide-search"
                placeholder="Search..."
                class="w-full"
              />
            </UFormField>
            <UFormField label="Password">
              <UInput
                type="password"
                icon="i-lucide-lock"
                placeholder="••••••••"
                class="w-full"
              />
            </UFormField>
          </div>
        </UCard>

        <UCard variant="subtle">
          <template #header>
            Rich Controls
          </template>
          <div class="space-y-4">
            <UFormField label="Simple Select">
              <USelect
                v-model="selected"
                :items="options"
                class="w-full"
              />
            </UFormField>
            <UFormField label="Textarea">
              <UTextarea
                placeholder="Message..."
                class="w-full"
              />
            </UFormField>
            <UButton
              block
              label="Show Toast"
              @click="showToast"
            />
          </div>
        </UCard>
      </div>
    </section>

    <!-- Navigation -->
    <section class="space-y-6">
      <h2 class="text-2xl font-bold border-b border-default pb-2">
        Navigation
      </h2>
      <div class="grid md:grid-cols-2 gap-8">
        <UCard variant="subtle">
          <template #header>
            Tabs & Breadcrumbs
          </template>
          <div class="space-y-8">
            <UTabs
              :items="items"
              class="w-full"
            >
              <template #account>
                <div class="p-4 text-sm text-muted">
                  Account content.
                </div>
              </template>
              <template #password>
                <div class="p-4 text-sm text-muted">
                  Password content.
                </div>
              </template>
            </UTabs>
            <UBreadcrumb :items="[{ label: 'Home', to: '/' }, { label: 'Guidelines', to: '/guidelines' }, { label: 'Kitchen Sink' }]" />
          </div>
        </UCard>

        <UCard variant="subtle">
          <template #header>
            Pagination
          </template>
          <div class="flex flex-col items-center justify-center h-full py-8 space-y-6">
            <UPagination
              v-model:page="page"
              :total="100"
              :sibling-count="1"
            />
            <p class="text-sm text-muted">
              Active Page: {{ page }}
            </p>
          </div>
        </UCard>
      </div>
    </section>

    <!-- Data Table -->
    <section class="space-y-6">
      <h2 class="text-2xl font-bold border-b border-default pb-2">
        Data Table
      </h2>
      <UCard
        variant="subtle"
        class="overflow-hidden"
        :ui="{ body: 'p-0' }"
      >
        <UTable
          :columns="tableColumns"
          :data="tableRows"
          class="w-full"
        />
      </UCard>
    </section>

    <!-- Overlays -->
    <section class="space-y-6">
      <h2 class="text-2xl font-bold border-b border-default pb-2">
        Overlays
      </h2>
      <div class="flex flex-wrap gap-4 items-center">
        <UButton
          label="Open Modal"
          color="neutral"
          variant="outline"
          @click="modal = true"
        />
        <UButton
          label="Open Slideover"
          color="neutral"
          variant="outline"
          @click="slideover = true"
        />

        <UTooltip text="I am a tooltip!">
          <UButton
            label="Hover for Tooltip"
            color="neutral"
            variant="ghost"
          />
        </UTooltip>

        <UPopover>
          <UButton
            label="Open Popover"
            color="neutral"
            variant="ghost"
            trailing-icon="i-lucide-chevron-down"
          />
          <template #content>
            <div class="p-4 w-48 text-sm">
              Custom content inside a popover.
            </div>
          </template>
        </UPopover>
      </div>

      <UModal
        v-model:open="modal"
        title="Example Modal"
        description="This is a standard modal component."
      >
        <template #body>
          <div class="space-y-4">
            <p class="text-sm text-muted">
              Modals are perfect for focused tasks and confirmations.
            </p>
            <div class="flex justify-end gap-3">
              <UButton
                label="Cancel"
                color="neutral"
                variant="subtle"
                @click="modal = false"
              />
              <UButton
                label="Confirm"
                color="primary"
                @click="modal = false"
              />
            </div>
          </div>
        </template>
      </UModal>

      <USlideover
        v-model:open="slideover"
        title="Settings Panel"
      >
        <template #body>
          <div class="space-y-6">
            <p class="text-sm text-muted">
              Slideovers are ideal for complex forms or information that doesn't fit in a modal.
            </p>
            <UFormField label="Notifications">
              <USwitch />
            </UFormField>
            <UFormField label="Theme Mode">
              <USelect
                :items="['Light', 'Dark', 'System']"
                class="w-full"
              />
            </UFormField>
          </div>
        </template>
      </USlideover>
    </section>

    <!-- Media & Misc -->
    <section class="space-y-6">
      <h2 class="text-2xl font-bold border-b border-default pb-2">
        Media & Activity
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <UCard variant="subtle">
          <template #header>
            Timeline
          </template>
          <div class="p-4">
            <UTimeline :items="timelineItems" />
          </div>
        </UCard>

        <UCard variant="subtle">
          <template #header>
            Calendar
          </template>
          <div class="flex justify-center p-4">
            <UCalendar />
          </div>
        </UCard>

        <UCard
          variant="subtle"
        >
          <template #header>
            Carousel
          </template>
          <UCarousel
            v-slot="{ item }"
            :items="carouselItems"
            :ui="{ item: 'basis-full' }"
            arrows
            indicators
            class="rounded-lg overflow-hidden"
          >
            <img
              :src="item"
              class="w-full h-48 object-cover"
              draggable="false"
            >
          </UCarousel>
        </UCard>
      </div>
    </section>

    <!-- Feedback & Content -->
    <section class="space-y-6 pb-20">
      <h2 class="text-2xl font-bold border-b border-default pb-2">
        Feedback & Content
      </h2>
      <div class="grid md:grid-cols-2 gap-8 items-start">
        <div class="space-y-6">
          <UAccordion
            :items="[{ label: 'What is a kitchen sink?', content: 'A page where you throw in everything but the kitchen sink.' }, { label: 'How to use it?', content: 'Just scroll and see how components look.' }]"
            variant="soft"
          />
          <UAlert
            icon="i-lucide-info"
            title="System Message"
            description="All components are using the Awecode brand colors."
            color="primary"
            variant="subtle"
          />
        </div>

        <UEmpty
          icon="i-lucide-folder-open"
          title="No documents yet"
          description="Get started by creating your first document."
          class="h-64"
        >
          <template #actions>
            <UButton
              label="Create Project"
              icon="i-lucide-plus"
            />
          </template>
        </UEmpty>
      </div>
    </section>
  </div>
</template>
