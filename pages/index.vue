<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
    <div class="content h-[1200px] w-full bg-black"></div>
    <div class="content h-[1200px] w-full bg-black"></div>
    <div class="content h-[1200px] w-full bg-black"></div>
  </div>
</template>
