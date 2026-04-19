<script setup lang="ts">
// Source: https://play.ui.nuxt.com/
import { z } from 'zod'
import { reactive } from 'vue'

const months = Array.from({ length: 12 }, (_, i) => ({
    label: String(i + 1).padStart(2, '0'),
    value: String(i + 1).padStart(2, '0')
}))

const currentYear = new Date().getFullYear()
const years = Array.from({ length: 10 }, (_, i) => ({
    label: String(currentYear + i),
    value: String(currentYear + i)
}))

const schema = z.object({
    name: z.string({ error: 'Name is required' }).nonempty('Name is required'),
    cardNumber: z
        .string({ error: 'Card number is required' })
        .nonempty('Card number is required')
        .regex(/^[\d\s]{16,19}$/, 'Enter a valid 16-digit card number'),
    cvv: z
        .string({ error: 'CVV is required' })
        .nonempty('CVV is required')
        .regex(/^\d{3,4}$/, 'Enter a valid CVV'),
    month: z.string({ error: 'Month is required' }).nonempty('Select a month'),
    year: z.string({ error: 'Year is required' }).nonempty('Select a year'),
    sameAsShipping: z.boolean().default(true),
    comments: z.string().optional()
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
    name: undefined,
    cardNumber: undefined,
    cvv: undefined,
    month: undefined,
    year: undefined,
    sameAsShipping: true,
    comments: undefined
})
</script>

<template>
    <div class="min-h-screen p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
        <UCard class="max-w-md mx-auto" variant="subtle">
            <UForm :schema="schema" :state="state" class="space-y-6">
                <UPageCard title="Payment method" description="All transactions are secure and encrypted"
                    variant="naked" />

                <UFormField name="name" label="Name" required>
                    <UInput v-model="state.name" placeholder="John Doe" class="w-full" />
                </UFormField>

                <div class="grid grid-cols-3 gap-4">
                    <UFormField name="cardNumber" label="Card number" help="Enter your 16-digit number." required
                        class="col-span-2">
                        <UInput v-model="state.cardNumber" placeholder="1234 5678 9012 3456" class="w-full" />
                    </UFormField>

                    <UFormField name="cvv" label="CVV" required>
                        <UInput v-model="state.cvv" placeholder="123" class="w-full" />
                    </UFormField>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <UFormField name="month" label="Month" required>
                        <USelect v-model="state.month" :items="months" placeholder="MM" value-key="value"
                            class="w-full" />
                    </UFormField>

                    <UFormField name="year" label="Year" required>
                        <USelect v-model="state.year" :items="years" placeholder="YYYY" value-key="value"
                            class="w-full" />
                    </UFormField>
                </div>

                <USeparator />

                <UPageCard title="Billing address" description="The billing address associated with your payment method"
                    variant="naked" />

                <UFormField name="sameAsShipping">
                    <UCheckbox v-model="state.sameAsShipping" label="Same as shipping address" color="neutral" />
                </UFormField>

                <USeparator />

                <UFormField name="comments" label="Comments">
                    <UTextarea v-model="state.comments" placeholder="Add any additional comments" :rows="3"
                        class="w-full" />
                </UFormField>

                <div class="flex gap-3">
                    <UButton type="submit" color="neutral" label="Submit" />
                    <UButton type="button" label="Cancel" color="neutral" variant="outline" />
                </div>
            </UForm>
        </UCard>
    </div>
</template>