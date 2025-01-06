<template>
  <UForm class="space-y-4 pt-7" :state="state" @submit="onSubmit">
      <UFormGroup label="First Name *">
          <UInput v-model="state.firstName" placeholder="Enter First Name" type="text" />
      </UFormGroup>
      <UFormGroup label="Last Name *">
          <UInput v-model="state.lastName" placeholder="Enter Last Name" type="text" />
      </UFormGroup>
      <UFormGroup label="Email *">
          <UInput v-model="state.email" placeholder="Enter Email Address" icon="i-heroicons-envelope" />
      </UFormGroup>
      <UFormGroup label="Password *" name="password">
          <UInput v-model="state.password" type="password" placeholder="Choose Password" />
      </UFormGroup>
      <UFormGroup label="Confirm Password *" name="confirmPassword">
          <UInput v-model="state.confirmPassword" type="password" placeholder="Confirm Password" />
      </UFormGroup>
      <p class="text-[10px]">By continuing past this page, you agree to the Terms of Use and understand that your information will be used as described in our Privacy Policy.</p>
      <UButton type="submit">
          Sign Up
      </UButton>
  </UForm>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types'
import * as yup from 'yup'
import { object, string, type InferType, ValidationError, ref as yupRef } from 'yup'
//import useSupabaseClient from '@nuxtjs/supabase'

const client = useSupabaseClient()

const schema = object({
  firstName: string().required('Required'),
  lastName: string().required('Required'),
  email: string().email('Invalid email').required('Required'),
  password: string().min(8, 'Must be at least 8 characters').required('Required'),
  confirmPassword: string().oneOf([yupRef('password'), undefined], 'Passwords must match').required('Required')
})

const state = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const errorMessage = ref('')

type Schema = InferType<typeof schema>

async function onSubmit(event: FormSubmitEvent<Schema>) {
    errorMessage.value = ''
    try {
        await schema.validate(state, { abortEarly: false })
        const { data, error } = await client.auth.signUp({
            email: state.email,
            password: state.password,
            options: {
                data: {
                    firstName: state.firstName,
                    lastName: state.lastName
                }
            }
        })

        if (error) {
            errorMessage.value = error.message
        } else {
            console.log(data)
        }
    } catch (validationError) {
        if (validationError instanceof yup.ValidationError) {
            errorMessage.value = (validationError as ValidationError).errors.join(', ')
        } else {
            errorMessage.value = 'An unexpected error occurred.'
        }
    }
}
</script>

<style scoped>
/* Add your styles here */
</style>