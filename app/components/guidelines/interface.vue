<template>
  <!-- UI Components & Feedback -->
  <div>
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
  </div>

  <!-- Forms & Interactions -->
  <div>
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
  </div>
</template>
