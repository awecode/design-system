<script setup lang="ts">
const isDeleteModalOpen = ref(false)
const isAgreed = ref(false)
const isSigningUp = ref(false)
const toast = useToast()

const handleSignUp = () => {
  if (!isAgreed.value || isSigningUp.value) return
  isSigningUp.value = true
  setTimeout(() => {
    isSigningUp.value = false
    isAgreed.value = false
    toast.add({
      title: 'Congratulations!',
      description: 'You have signed up.',
      color: 'success',
      icon: 'i-lucide-check-circle'
    })
  }, 2000)
}
</script>

<template>
  <div class="space-y-12">
    <!-- 1. Layout & Structural Foundations -->
    <section>
      <h3 class="text-xl font-bold text-default mb-4 border-b border-default pb-2">
        Layout & Structural Foundations
      </h3>
      <div class="grid md:grid-cols-3 gap-6">
        <!-- Spacing Scale -->
        <UCard
          variant="outline"
          class="bg-elevated/50"
        >
          <h4 class="font-bold mb-2 flex items-center gap-2">
            <UIcon
              name="i-lucide-ruler"
              class="text-primary size-5"
            />
            Spacing Scale
          </h4>
          <p class="text-sm text-muted">
            All layouts use the <strong>4px/8px</strong> grid system (Tailwind's default). Maintain visual rhythm by using consistent even-numbered gaps like <code class="bg-muted/20 px-1 py-0.5 rounded">gap-4</code> (16px) or <code class="bg-muted/20 px-1 py-0.5 rounded">gap-6</code> (24px) for component spacing. This 4px multiplier strictly applies to internal padding (<code class="bg-muted/20 px-1 py-0.5 rounded">p-*</code>) and external margins (<code class="bg-muted/20 px-1 py-0.5 rounded">m-*</code>) as well. Avoid odd numbers.
          </p>
        </UCard>

        <!-- Z-Index -->
        <UCard
          variant="outline"
          class="bg-elevated/50"
        >
          <h4 class="font-bold mb-2 flex items-center gap-2">
            <UIcon
              name="i-lucide-layers"
              class="text-primary size-5"
            />
            Z-Index Hierarchy
          </h4>
          <p class="text-sm text-muted mb-3">
            The following standardized z-index scale is strictly enforced to prevent overlapping components and visual bugs:
          </p>
          <ul class="text-sm text-muted space-y-2 list-none">
            <li class="flex items-center gap-2">
              <code class="bg-muted/20 px-1.5 py-0.5 rounded text-xs font-mono">z-40</code> Dropdowns
            </li>
            <li class="flex items-center gap-2">
              <code class="bg-muted/20 px-1.5 py-0.5 rounded text-xs font-mono">z-50</code> Sticky Headers
            </li>
            <li class="flex items-center gap-2">
              <code class="bg-muted/20 px-1.5 py-0.5 rounded text-xs font-mono">z-[100]</code> Modals
            </li>
            <li class="flex items-center gap-2">
              <code class="bg-muted/20 px-1.5 py-0.5 rounded text-xs font-mono">z-[200]</code> Toasts
            </li>
          </ul>
        </UCard>

        <!-- Max Widths -->
        <UCard
          variant="outline"
          class="bg-elevated/50"
        >
          <h4 class="font-bold mb-2 flex items-center gap-2">
            <UIcon
              name="i-lucide-monitor"
              class="text-primary size-5"
            />
            Max Widths
          </h4>
          <p class="text-sm text-muted mb-3">
            Use the following standardized container widths based on the content context:
          </p>
          <ul class="text-sm text-muted space-y-3 list-none">
            <li>
              <strong class="block text-default mb-1">Prose/Reading</strong>
              Use <code class="bg-muted/20 px-1 py-0.5 rounded">max-w-3xl</code> to maintain an optimal reading line length.
            </li>
            <li>
              <strong class="block text-default mb-1">Dashboards</strong>
              Use <code class="bg-muted/20 px-1 py-0.5 rounded">max-w-7xl</code> or full fluid width for dense data tables and metrics.
            </li>
          </ul>
        </UCard>

        <UCard
          variant="outline"
          class="bg-elevated/50"
        >
          <h3 class="text-lg font-bold text-default mb-2 flex items-center gap-2">
            <UIcon
              name="i-lucide-scaling"
              class="text-primary size-5"
            />
            Border Radii
          </h3>
          <p class="text-sm text-muted">
            We utilize a constrained border-radius scale to maintain a professional yet approachable aesthetic. Our global default is set to <code class="bg-muted/20 px-1 py-0.5 rounded">0.2rem</code> (8px) via the <code class="bg-muted/20 px-1 py-0.5 rounded">--ui-radius</code> variable. This ensures consistency across cards, inputs, and modals.
          </p>
        </UCard>

        <UCard
          variant="outline"
          class="bg-elevated/50"
        >
          <h3 class="text-lg font-bold text-default mb-2 flex items-center gap-2">
            <UIcon
              name="i-lucide-layers"
              class="text-primary size-5"
            />
            Shadows & Elevations
          </h3>
          <p class="text-sm text-muted">
            Depth is established using custom, softer tweaked shadows (low opacity, diffuse spread) to dictate the z-axis hierarchy. Use <code class="bg-muted/20 px-1 py-0.5 rounded">shadow-sm</code> for standard cards, <code class="bg-muted/20 px-1 py-0.5 rounded">shadow-md</code> for dropdowns and popovers, and <code class="bg-muted/20 px-1 py-0.5 rounded">shadow-xl</code> for blocking overlays like modals.
          </p>
        </UCard>
      </div>
    </section>

    <GuidelinesButtons />

    <!-- 2. Display & Navigation Patterns -->
    <section>
      <h3 class="text-xl font-bold text-default mb-4 border-b border-default pb-2">
        Display & Navigation Patterns
      </h3>
      <div class="grid md:grid-cols-2 gap-6">
        <UCard
          variant="outline"
          class="bg-elevated/50"
        >
          <h4 class="font-bold mb-2 flex items-center gap-2">
            <UIcon
              name="i-lucide-panel-right-open"
              class="text-primary size-5"
            />
            Modals vs. Slide-overs
          </h4>
          <p class="text-sm text-muted mb-4">
            Use modals exclusively for quick confirmations or simple inputs that block the immediate flow. Use slide-overs (drawers) for complex forms, deep detail views, or tasks that require referencing data from the underlying background page.
          </p>
          <div class="flex flex-wrap gap-2">
            <UModal
              title="Modal Example"
              description="This is a simple modal dialog."
            >
              <UButton
                label="Open Modal"
                color="neutral"
                variant="outline"
              />
              <template #body>
                <p class="text-sm text-muted">
                  Modal content goes here. Use it for quick confirmations or simple inputs.
                </p>
              </template>
            </UModal>

            <USlideover
              title="Slideover Example"
              description="This is a side drawer."
            >
              <UButton
                label="Open Slideover"
                color="neutral"
                variant="outline"
              />
              <template #body>
                <p class="text-sm text-muted">
                  Slideover content goes here. Use it for deep detail views or complex forms.
                </p>
              </template>
            </USlideover>
          </div>
        </UCard>

        <UCard
          variant="outline"
          class="bg-elevated/50"
        >
          <h4 class="font-bold mb-2 flex items-center gap-2">
            <UIcon
              name="i-lucide-list-ordered"
              class="text-primary size-5"
            />
            Pagination vs. Infinite Scroll
          </h4>
          <p class="text-sm text-muted">
            Implement traditional pagination for data tables where users need to skip to specific pages or reference exact locations. Reserve infinite scroll for feed-like interfaces or continuous discovery streams where exact positioning is irrelevant.
          </p>
        </UCard>

        <UCard
          variant="subtle"
          class="h-full"
        >
          <h4 class="font-bold mb-2 flex items-center gap-2">
            <UIcon
              name="i-lucide-folder-tree"
              class="text-primary"
            /> Expand / Collapse Components
          </h4>
          <p class="text-sm text-muted mb-3">
            For elements that toggle states, use the down chevron when it is collapsed, and the up chevron when it is expanded.
          </p>
          <UAccordion
            :items="[{ label: 'Toggle Details', content: 'Here is the expanded content demonstrating the automatic chevron toggle.' }]"
            size="sm"
            color="neutral"
            variant="outline"
          />
        </UCard>

        <UCard
          variant="outline"
          class="bg-elevated/50"
        >
          <h4 class="font-bold mb-2 flex items-center gap-2">
            <UIcon
              name="i-lucide-more-horizontal"
              class="text-primary size-5"
            />
            Text Truncation
          </h4>
          <p class="text-sm text-muted">
            When handling long text in constrained spaces (like table cells or small cards), use a single-line text ellipsis paired with a tooltip to reveal the full content on hover. Wrap text to the next line only in dedicated detail views or expansive prose areas.
          </p>
        </UCard>

        <UCard
          variant="subtle"
          class="col-span-1 md:col-span-2"
        >
          <h4 class="font-bold mb-2 flex items-center gap-2">
            <UIcon
              name="i-lucide-message-square"
              class="text-primary"
            /> Icons & Tooltips
          </h4>
          <p class="text-sm text-muted mb-3">
            Use a tooltip for icons without text. Include an `aria-label` to suggest screen readers what the icon does.
          </p>
          <UTooltip text="Settings">
            <UButton
              icon="i-lucide-settings"
              aria-label="Settings"
              color="neutral"
              variant="ghost"
            />
          </UTooltip>
        </UCard>
      </div>
    </section>

    <!-- 3. Forms & Actions -->
    <section>
      <h3 class="text-xl font-bold text-default mb-4 border-b border-default pb-2">
        Forms & Actions
      </h3>
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <UCard
            variant="outline"
            class="bg-elevated/50"
          >
            <h4 class="font-bold mb-2 flex items-center gap-2">
              <UIcon
                name="i-lucide-zap"
                class="text-primary"
              /> Autofocus
            </h4>
            <p class="text-sm text-muted">
              Reduce friction by automatically focusing the primary input or action button when a view or modal renders. Use the HTML <code class="bg-muted/20 px-1 py-0.5 rounded font-mono text-xs">autofocus</code> attribute wherever the user's immediate next step is highly predictable.
            </p>
          </UCard>

          <UCard
            variant="outline"
            class="bg-elevated/50 mt-4"
          >
            <h4 class="font-bold mb-2 flex items-center gap-2">
              <UIcon
                name="i-lucide-trash-2"
                class="text-primary size-5"
              />
              Destructive Actions
            </h4>
            <p class="text-sm text-muted mb-4">
              Always require explicit confirmation dialogs for deletions or irreversible actions. Destructive buttons must use the <code class="bg-muted/20 px-1 py-0.5 rounded">error</code> color variant to signal danger and must never be the default focused element when a view renders.
            </p>
            <UModal
              v-model:open="isDeleteModalOpen"
              title="Delete Account"
              description="Are you absolutely sure? This action cannot be undone and will permanently delete your account data."
            >
              <UButton
                label="Delete Account"
                color="error"
                variant="outline"
                icon="i-lucide-trash-2"
              />
              <template #footer>
                <div class="flex justify-end gap-2 w-full">
                  <UButton
                    label="Cancel"
                    color="neutral"
                    variant="ghost"
                    @click="isDeleteModalOpen = false"
                  />
                  <UButton
                    label="Confirm Deletion"
                    color="error"
                    @click="isDeleteModalOpen = false"
                  />
                </div>
              </template>
            </UModal>
          </UCard>
        </div>

        <UCard
          variant="outline"
          class="bg-elevated/50"
        >
          <h4 class="font-bold mb-2 flex items-center gap-2">
            <UIcon
              name="i-lucide-check-square"
              class="text-primary"
            /> Form Submissions
          </h4>
          <ul class="text-sm text-muted space-y-2 list-disc list-inside mb-4">
            <li>Submit buttons should be <strong>disabled</strong> if validation is failing and the user is already provided with a validation error.</li>
            <li>Upon submission, the submit button should be disabled and form submission should be prevented unless completed through a button click or carriage return.</li>
            <li>Submit buttons should show a loading spinner and present a continuous verb inside the button (e.g. <em>"Saving..."</em>).</li>
          </ul>
          <form
            class="flex flex-col gap-4 p-4 border border-dashed border-default rounded-lg bg-background/50"
            @submit.prevent="handleSignUp"
          >
            <UCheckbox
              v-model="isAgreed"
              name="agreement"
              label="I agree"
            />
            <div>
              <UTooltip
                v-if="!isAgreed"
                text="You must agree to sign up."
              >
                <div class="inline-block cursor-not-allowed">
                  <UButton
                    type="submit"
                    disabled
                    color="primary"
                    :label="isSigningUp ? 'Signing Up...' : 'Sign Up'"
                    class="pointer-events-none"
                  />
                </div>
              </UTooltip>
              <UButton
                v-else
                type="submit"
                :loading="isSigningUp"
                color="primary"
                :label="isSigningUp ? 'Signing Up...' : 'Sign Up'"
              />
            </div>
          </form>
        </UCard>
      </div>
    </section>

    <!-- 4. System Feedback & Error States -->
    <section>
      <h3 class="text-xl font-bold text-default mb-4 border-b border-default pb-2">
        System Feedback & Error States
      </h3>
      <div class="grid md:grid-cols-2 gap-6">
        <UCard
          variant="subtle"
          class="h-full"
        >
          <h4 class="font-bold mb-2 flex items-center gap-2">
            <UIcon
              name="i-lucide-bell-ring"
              class="text-primary"
            /> Alerts & Notifications
          </h4>
          <p class="text-sm text-muted mb-4">
            Use top-right <strong>Toast Notifications</strong> exclusively for temporary success states or transient feedback. Use inline <strong>Alerts</strong> (using the <code>outline</code> variant) for persistent, page-level issues or warnings that require user resolution.
          </p>
          <UAlert
            title="Some information"
            description="This is an informational alert."
            variant="outline"
            color="info"
            icon="i-lucide-info"
          />
        </UCard>

        <UCard
          variant="outline"
          class="bg-elevated/50"
        >
          <h4 class="font-bold mb-2 flex items-center gap-2">
            <UIcon
              name="i-lucide-layout-list"
              class="text-primary size-5"
            />
            Empty States
          </h4>
          <p class="text-sm text-muted mb-4">
            When a table or list has no data, never leave it completely blank. Always include a relevant icon or illustration, a concise helpful message explaining the empty state, and a clear call-to-action (CTA) to help the user create their first item.
          </p>
          <div class="text-center py-6 px-4 border border-dashed border-default rounded-lg bg-background/50">
            <UIcon
              name="i-lucide-folder-open"
              class="size-8 mx-auto text-muted/50 mb-2"
            />
            <h5 class="text-sm font-bold text-default mb-1">
              No documents
            </h5>
            <p class="text-xs text-muted mb-4">
              Create your first document to get started.
            </p>
            <UButton
              icon="i-lucide-plus"
              label="New Document"
              size="xs"
              color="neutral"
              variant="outline"
            />
          </div>
        </UCard>

        <UCard
          variant="outline"
          class="bg-elevated/50"
        >
          <h4 class="font-bold mb-2 flex items-center gap-2">
            <UIcon
              name="i-lucide-server-crash"
              class="text-primary size-5"
            />
            404 & 500 Pages
          </h4>
          <p class="text-sm text-muted">
            Dead ends and server errors should stay friendly and helpful. Clearly explain what went wrong without exposing technical details, and always include a prominent action that takes users back to the Dashboard or Homepage. For example, 404 pages can intelligently extract segments or slugs from the broken URL and enable searching for it.
          </p>
        </UCard>
      </div>
    </section>
  </div>
</template>
