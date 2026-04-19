<template>
  <div class="space-y-12">
    <!-- Layout & Spacing -->
    <section>
      <h3 class="text-xl font-bold text-default mb-4">
        Layout & Spacing
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
      </div>
    </section>

    <!-- UI Components & Feedback -->
    <section>
      <h3 class="text-xl font-bold text-default mb-4">
        UI Components & Feedback
      </h3>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <UCard
            variant="subtle"
            class="h-full"
          >
            <h4 class="font-bold mb-2 flex items-center gap-2">
              <UIcon
                name="i-lucide-bell"
                class="text-primary"
              /> Communicating with the User
            </h4>
            <p class="text-sm text-muted mb-3">
              The system should always provide feedback on what is happening and what went wrong. Utilize loading icons, loading bars, and skeletons.
            </p>
            <UButton
              loading
              label="Saving..."
              color="primary"
            />
          </UCard>
        </div>

        <div class="space-y-4">
          <UCard
            variant="subtle"
            class="h-full"
          >
            <h4 class="font-bold mb-2 flex items-center gap-2">
              <UIcon
                name="i-lucide-mouse-pointer-click"
                class="text-primary"
              /> Primary Call to Action
            </h4>
            <p class="text-sm text-muted mb-3">
              Only one primary call to action (button or link) should be used per page or section. Other actions should naturally use secondary styling.
            </p>
            <div class="flex gap-2">
              <UButton
                label="Primary Action"
                color="primary"
              />
              <UButton
                label="Secondary Action"
                color="neutral"
                variant="outline"
              />
            </div>
          </UCard>
        </div>

        <div class="space-y-4">
          <UCard
            variant="subtle"
            class="h-full"
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

        <div class="space-y-4">
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
            <div class="flex gap-2">
              <UButton
                icon="i-lucide-chevron-down"
                label="Collapsed"
                color="neutral"
                variant="outline"
              />
              <UButton
                icon="i-lucide-chevron-up"
                label="Expanded"
                color="neutral"
                variant="outline"
              />
            </div>
          </UCard>
        </div>

        <div class="col-span-1 md:col-span-2">
          <UCard variant="subtle">
            <h4 class="font-bold mb-2 flex items-center gap-2">
              <UIcon
                name="i-lucide-alert-triangle"
                class="text-primary"
              /> Alerts
            </h4>
            <p class="text-sm text-muted mb-3">
              Always use the <code>outline</code> variant for Nuxt UI alerts.
            </p>
            <UAlert
              title="Action Required"
              description="Please review the changes before continuing."
              variant="outline"
              color="warning"
              icon="i-lucide-alert-triangle"
            />
          </UCard>
        </div>
      </div>
    </section>

    <!-- Empty States & Error Handling -->
    <section>
      <h3 class="text-xl font-bold text-default mb-4">
        Empty States & Error Handling
      </h3>
      <div class="grid md:grid-cols-3 gap-6">
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
          <p class="text-sm text-muted">
            When a table or list has no data, never leave it completely blank. Always include a relevant icon or illustration, a concise helpful message explaining the empty state, and a clear call-to-action (CTA) to help the user create their first item.
          </p>
        </UCard>

        <UCard
          variant="outline"
          class="bg-elevated/50"
        >
          <h4 class="font-bold mb-2 flex items-center gap-2">
            <UIcon
              name="i-lucide-bell-ring"
              class="text-primary size-5"
            />
            Toasts vs. Alerts
          </h4>
          <p class="text-sm text-muted">
            Use top-right <strong>Toast Notifications</strong> exclusively for temporary success states or transient feedback. Use inline <strong>Alerts</strong> for persistent, page-level issues or warnings that require user resolution before proceeding.
          </p>
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

    <!-- Forms & Interactions -->
    <section>
      <h3 class="text-xl font-bold text-default mb-4">
        Forms & Interactions
      </h3>
      <div class="grid md:grid-cols-2 gap-6">
        <UCard
          variant="outline"
          class="bg-elevated/50"
        >
          <h4 class="font-bold mb-2 flex items-center gap-2">
            <UIcon
              name="i-lucide-search"
              class="text-primary"
            /> Search & Debounce
          </h4>
          <p class="text-sm text-muted">
            Use a <strong>250 ms</strong> debounce when querying server-side data from input fields to reduce unnecessary API calls and improve performance.
          </p>
        </UCard>

        <UCard
          variant="outline"
          class="bg-elevated/50"
        >
          <h4 class="font-bold mb-2 flex items-center gap-2">
            <UIcon
              name="i-lucide-zap"
              class="text-primary"
            /> Saving Clicks
          </h4>
          <p class="text-sm text-muted">
            Autofocus on the input element or action button if the user will most probably focus there (using the <code>autofocus</code> HTML property).
          </p>
        </UCard>

        <UCard
          variant="outline"
          class="col-span-1 md:col-span-2 bg-elevated/50"
        >
          <h4 class="font-bold mb-2 flex items-center gap-2">
            <UIcon
              name="i-lucide-check-square"
              class="text-primary"
            /> Form Submissions
          </h4>
          <ul class="text-sm text-muted space-y-2 list-disc list-inside">
            <li>Submit buttons should be <strong>disabled</strong> if validation is failing and the user is already provided with a validation error.</li>
            <li>Upon submission, the submit button should be disabled and form submission should be prevented unless completed through a button click or carriage return.</li>
            <li>Submit buttons should show a loading spinner and present a continuous verb inside the button (e.g. <em>"Saving..."</em>).</li>
          </ul>
        </UCard>
      </div>
    </section>
  </div>
</template>
