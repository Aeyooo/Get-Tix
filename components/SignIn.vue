<template>
    <UForm  class="space-y-4 pt-7" :state="state" @submit="onSubmit">
        <UFormGroup label="Email" description="We'll only use this for spam.">
            <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
        </UFormGroup>
    
        <UFormGroup label="Password" name="password">
          <UInput  type="password" />
        </UFormGroup>
    
        <p>By continuing past this page, you agree to the Terms of Use and understand that your information will be used as described in our Privacy Policy.</p>
        <UButton type="submit">
          Sign Up
        </UButton>

    </UForm>
</template>

<script setup lang="ts">

import type { FormSubmitEvent } from '#ui/types'
import { object, string, type InferType } from 'yup'

const client = useSupabaseClient()

const schema = object({
  email: string().email('Invalid email').required('Required'),
  password: string()
    .required('Required')
})

const state = reactive({
  email: '',
  password: ''
})

type Schema = InferType<typeof schema>


async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data

  const { data, error } = await client.auth.signUp({
    email: state.email,
    password: state.password,
  })
  
}



</script>

<style scoped>

</style>