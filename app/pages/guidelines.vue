<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
    <!-- Header -->
    <div class="text-center space-y-4">
      <UIcon
        name="i-lucide-book-open"
        class="size-16 text-primary mx-auto mb-4 drop-shadow-sm"
      />
      <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-default">
        Design Guidelines
      </h1>
      <p class="text-xl text-muted max-w-2xl mx-auto">
        The official standards for creating consistent interfaces.
      </p>
    </div>

    <GuidelinesCore />

    <!-- Design System Rules & Best Practices -->
    <section>
      <h2 class="text-2xl font-bold flex items-center gap-2 mb-6 text-default">
        <UIcon
          name="i-lucide-ruler"
          class="size-6 text-primary"
        />
        Design System & Best Practices
      </h2>

      <div class="space-y-12">
        <GuidelinesGeneral />

        <GuidelinesInterface />
        <GuidelinesData />
      </div>
    </section>

    <GuidelinesFormatting />
    <GuidelinesAccessibility />
    <GuidelinesTechnology />
    <GuidelinesNaming />
  </div>
</template>
