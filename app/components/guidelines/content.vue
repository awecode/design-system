<template>
  <!-- Content & Copy -->
  <section>
    <h2 class="text-2xl font-bold flex items-center gap-2 mb-6 text-default border-b border-default pb-4">
      <UIcon
        name="i-lucide-blocks"
        class="size-6 text-primary"
      />
      Content & Copy
    </h2>
    <div>
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
  </section>
</template>
