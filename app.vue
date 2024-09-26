<template>
  <div class="rut h-screen grid grid-rows-[30%,70%] pt-16">
    <div :class="[y > 800 ? '' : '-translate-y-full transition-transform' && y === 0  && y < 800 ? '' : '-translate-y-full']" class="header-conainer top-[0px] shadow-md  duration-500 z-[999]  transform grid fixed w-full place-items-center">
      <header :class="[y === 0] ? 'h-[65px]' : 'h-[30px]'" class="grid bg-[#ffffff] self-center w-[100%]  grid-cols-[20%,70%,10%] ">
        <UButton icon="i-tabler-menu-2" color="white" variant="link" class="max-w-11 pl-[10px]"/>
        <div class="logo text-center">GET TCX</div>
        <div class="btns grid items-end grid-cols-2 gap">
          <UButton icon="i-heroicons-magnifying-glass" variant="link" class="max-w-11 pl-[10px]" color="white" />
          <!-- <UButton icon="i-heroicons-user" color="white" /> -->
          <UButton icon="i-heroicons-shopping-cart" color="white" variant="link" class="max-w-11 pl-[10px]" />
        </div>
      </header>

    </div>
    <NuxtPage />

  </div>
</template>

<script setup>
const { x, y } = useWindowScroll()
console.log(x.value, y.value)
</script>