<template>
  <!-- Formatting -->
  <section>
    <h2 class="text-2xl font-bold flex items-center gap-2 mb-6 text-default">
      <UIcon
        name="i-lucide-scan-text"
        class="size-6 text-primary"
      />
      Formatting
    </h2>
    <div class="grid md:grid-cols-2 gap-6">
      <UCard
        variant="outline"
        class="bg-elevated/50"
      >
        <h4 class="font-bold mb-2 flex items-center gap-2">
          <UIcon
            name="i-lucide-calendar-clock"
            class="text-primary size-5"
          />
          Date & Time Formats
        </h4>
        <p class="text-sm text-muted">
          Always display absolute dates using the <code class="bg-muted/20 px-1 py-0.5 rounded">MMM DD, YYYY</code> format (e.g., Oct 12, 2024) instead of numeric structures like <code class="bg-muted/20 px-1 py-0.5 rounded">MM/DD/YYYY</code> to prevent regional confusion. Relative timestamps (e.g., "2 hours ago") can be mixed alongside this standard for recent events.
        </p>
      </UCard>

      <UCard
        variant="outline"
        class="bg-elevated/50"
      >
        <h4 class="font-bold mb-2 flex items-center gap-2">
          <UIcon
            name="i-lucide-dollar-sign"
            class="text-primary size-5"
          />
          Currency Formatting
        </h4>
        <p class="text-sm text-muted">
          Standardize currency displays with the symbol immediately preceding the amount and comma separators for thousands. Include exactly two decimal places for exact financial values (e.g., <code class="bg-muted/20 px-1 py-0.5 rounded">$1,000.00</code>), and drop the decimals only in high-level, whole-number summaries (e.g., <code class="bg-muted/20 px-1 py-0.5 rounded">$1,000</code>).
        </p>
      </UCard>

      <UCard
        variant="outline"
        class="bg-elevated/50"
      >
        <h4 class="font-bold mb-2 flex items-center gap-2">
          <UIcon
            name="i-lucide-case-sensitive"
            class="text-primary size-5"
          />
          Capitalization
        </h4>
        <p class="text-sm text-muted">
          Strictly utilize <strong>Sentence case</strong> for modern, conversational interfaces. Apply this to all buttons, menus, and form labels (e.g., "Create new project"). Reserve Title Case exclusively for proper nouns, brand entities, and primary page headings.
        </p>
      </UCard>
      <UCard
        variant="outline"
        class="bg-elevated/50"
      >
        <h4 class="font-bold mb-2 flex items-center gap-2">
          <UIcon
            name="i-lucide-type"
            class="text-primary"
          /> Pluralization
        </h4>
        <p class="text-sm text-muted mb-4">
          Always use proper pluralization. For example, use <code class="bg-muted/20 px-1 py-0.5 rounded">1 Person</code> and <code class="bg-muted/20 px-1 py-0.5 rounded">0 Persons</code>. For words like "Company," do not simply append "s"; use correct morphology like "Companies". Only use the singular form exclusively for the count of 1. Use the plural form for 0, negative values, and indeterminate values.
        </p>
      </UCard>
    </div>
  </section>
</template>
