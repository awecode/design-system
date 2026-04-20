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

const selected = ref('1')
const text = ref('')
const checked = ref(true)
const slideover = ref(false)
const modal = ref(false)

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
        A comprehensive preview of Nuxt UI components styled with the Awecode Design System.
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
        />
        <UButton
          label="Loading"
          loading
        />
        <UButton
          icon="i-lucide-plus"
          label="With Icon"
        />
        <UButton
          icon="i-lucide-trash"
          color="error"
          variant="soft"
        />
      </div>
      <div class="flex flex-wrap gap-4 items-center">
        <UButtonGroup>
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
        </UButtonGroup>
      </div>
    </section>

    <!-- Inputs -->
    <section class="space-y-6">
      <h2 class="text-2xl font-bold border-b border-default pb-2">
        Forms & Inputs
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            Selects & Options
          </template>
          <div class="space-y-4">
            <UFormField label="Simple Select">
              <USelect
                v-model="selected"
                :items="options"
                class="w-full"
              />
            </UFormField>
            <div class="flex items-center gap-6 py-2">
              <UCheckbox
                v-model="checked"
                label="Check me"
              />
              <USwitch label="Toggle me" />
            </div>
            <div class="space-y-2">
              <p class="text-sm font-medium">
                Radio Group
              </p>
              <div class="flex gap-4">
                <URadio
                  label="Option A"
                  name="radio"
                  value="a"
                />
                <URadio
                  label="Option B"
                  name="radio"
                  value="b"
                />
              </div>
            </div>
          </div>
        </UCard>

        <UCard variant="subtle">
          <template #header>
            Textarea & Feedback
          </template>
          <div class="space-y-4">
            <UFormField label="Bio">
              <UTextarea
                placeholder="Tell us about yourself..."
                class="w-full"
              />
            </UFormField>
            <UButton
              block
              label="Show Toast Notification"
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
      <div class="space-y-8">
        <UCard variant="subtle">
          <UTabs
            :items="items"
            class="max-w-2xl"
          >
            <template #account>
              <div class="p-4 text-sm text-muted">
                Account details logic would go here.
              </div>
            </template>
            <template #password>
              <div class="p-4 text-sm text-muted">
                Password reset forms would go here.
              </div>
            </template>
            <template #settings>
              <div class="p-4 text-sm text-muted">
                General application settings.
              </div>
            </template>
          </UTabs>
        </UCard>
        <div class="flex justify-center">
          <UBreadcrumb :items="[{ label: 'Home', to: '/' }, { label: 'Guidelines', to: '/guidelines' }, { label: 'Kitchen Sink' }]" />
        </div>
      </div>
    </section>

    <!-- Data Display -->
    <section class="space-y-6">
      <h2 class="text-2xl font-bold border-b border-default pb-2">
        Data Display
      </h2>
      <div class="grid md:grid-cols-2 gap-8">
        <UCard variant="subtle">
          <template #header>
            Badges & Status
          </template>
          <div class="flex flex-wrap gap-2">
            <UBadge label="Default" />
            <UBadge
              label="Primary"
              color="primary"
            />
            <UBadge
              label="Success"
              color="success"
            />
            <UBadge
              label="Warning"
              color="warning"
            />
            <UBadge
              label="Error"
              color="error"
            />
            <UBadge
              label="Outline"
              variant="outline"
            />
            <UBadge
              label="Subtle"
              variant="subtle"
            />
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

    <!-- Content -->
    <section class="space-y-6 pb-20">
      <h2 class="text-2xl font-bold border-b border-default pb-2">
        Content Containers
      </h2>
      <div class="grid md:grid-cols-2 gap-8">
        <UAccordion
          :items="[{ label: 'What is a kitchen sink?', content: 'A page where you throw in everything but the kitchen sink - basically showing off all components at once.' }, { label: 'Can I use this page for testing?', content: 'Absolutely. It is the best place to verify theme changes globally.' }]"
          variant="soft"
        />

        <UAlert
          icon="i-lucide-info"
          title="Attention!"
          description="This kitchen sink is built using Nuxt UI v4 conventions. Always check the official documentation for the latest slot names and props."
          color="primary"
          variant="subtle"
        />
      </div>
    </section>
  </div>
</template>
