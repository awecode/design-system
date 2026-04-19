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

    <GuidelinesCore />

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

    <!-- Design System Rules & Best Practices -->
    <section>
      <h2 class="text-2xl font-bold flex items-center gap-2 mb-6 text-default border-b border-default pb-4">
        <UIcon
          name="i-lucide-ruler"
          class="size-6 text-primary"
        />
        Design System & Best Practices
      </h2>

      <div class="space-y-12">
        <!-- General Rules -->
        <div>
          <h3 class="text-xl font-bold text-default mb-4">
            General Principles
          </h3>
          <div class="grid md:grid-cols-2 gap-4">
            <UCard variant="subtle">
              <h4 class="font-bold flex items-center gap-2 mb-2">
                <UIcon
                  name="i-lucide-palette"
                  class="text-primary"
                /> Base Recommendations
              </h4>
              <p class="text-sm text-muted">
                These guidelines are base recommendations for consistency and predictability. You can use custom styling for application-specific requirements.
              </p>
            </UCard>
            <UCard variant="subtle">
              <h4 class="font-bold flex items-center gap-2 mb-2">
                <UIcon
                  name="i-lucide-contrast"
                  class="text-primary"
                /> Contrast Ratio
              </h4>
              <p class="text-sm text-muted">
                Use a good contrast ratio for both light and dark modes for all elements. All UIs must be comprehensively WCAG Compliant.
              </p>
            </UCard>
          </div>
        </div>

        <!-- Content & Copy -->
        <div>
          <h3 class="text-xl font-bold text-default mb-4">
            Content & Copy
          </h3>
          <UCard
            variant="outline"
            class="bg-elevated/50"
          >
            <h4 class="font-bold mb-2 flex items-center gap-2">
              <UIcon
                name="i-lucide-type"
                class="text-primary"
              /> Proper Pluralization
            </h4>
            <p class="text-sm text-muted mb-4">
              Always use proper pluralization. For example, use <code class="bg-muted/20 px-1 py-0.5 rounded">1 Person</code> and <code class="bg-muted/20 px-1 py-0.5 rounded">0 Persons</code>. For words like "Company," do not simply append "s"; use correct morphology like "Companies". Only use the singular form exclusively for the count of 1. Use the plural form for 0, negative values, and indeterminate values.
            </p>

            <div class="space-y-3">
              <UAlert
                title="Incorrect"
                color="error"
                variant="outline"
                icon="i-lucide-x-circle"
              >
                <template #description>
                  1 Persons, 2 Companys
                </template>
              </UAlert>

              <UAlert
                title="Correct"
                color="success"
                variant="outline"
                icon="i-lucide-check-circle-2"
              >
                <template #description>
                  <p>1 Person, 2 Companies, 0 Persons, -1 Companies</p>
                  <p class="mt-1 opacity-80 text-xs">
                    (In rare instances where count is not checked: 1 Person(s) or 1 Company/Companies)
                  </p>
                </template>
              </UAlert>
            </div>
          </UCard>
        </div>

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
      </div>
    </section>
  </div>
</template>
