<template>
   <div :class="[y > 500 ? '' : '-translate-y-full transition-transform' && y === 0  && y < 800 ? '' : '-translate-y-full']" class="header-conainer top-[0px]   duration-500 z-[999]  transform grid fixed w-screen place-items-center">
      <header :class="[y === 0] ? 'h-[65px]' : 'h-[30px]'" class="grid bg-[#ffffff] text-black self-center w-[100%] shadow-md  grid-cols-[20%,50%,30%] ">
        <UButton icon="i-heroicons-magnifying-glass" color="white" variant="link" class="max-w-11 lg:hidden pl-[10px]"/>
        <div class="logo grid  my-4 text-center lg:text-start">GET TCX</div>
        <div class="categories hidden w-[380px] lg:justify-self-center lg:grid lg:grid-cols-4 place-items-center  ">
          
          <div class="concerts cursor-pointer group-hover:bg-blue-500  underline-hover">concerts</div>
          <div class="hidden group-hover:block absolute top-0 left-0 w-full h-200 bg-white">
            This is the dropdown content!
          </div>
          <div class="concerts cursor-pointer underline-hover">offers</div>
          <div class="concerts cursor-pointer underline-hover">upcoming</div>
          <div class="concerts cursor-pointer underline-hover">artiste</div>
        </div>
        <div class="btns grid place-items-center ">
          <div class="btn-wrapper grid gap-3 items-center mr-16 justify-self-end  grid-cols-2 lg:grid-cols-3 gap">
            <UButton icon="i-heroicons-magnifying-glass" variant="link" class="max-w-11  pl-[10px]" color="white" />
            <UButton icon="i-heroicons-user" variant="link" class="max-w-11 hidden lg:block pl-[10px]" color="white" @click="isOpen = true" />
            <UButton icon="i-heroicons-shopping-cart" color="white" variant="link" class="max-w-11 pl-[10px]" />
            <UModal v-model="isOpen">
              <div class="p-4">
                <SignInModal @check="HandleComponent" ref="modal" >
                  <SignIn v-show="childData === 'in' " />
                  <SignUp v-show="childData === 'up'"/>
                  
                </SignInModal>
              </div>
            </UModal>

          </div>
        </div>
      </header>

    </div>
</template>

<script setup lang="ts">

const { y } = useWindowScroll()

const isOpen = ref(false)

const modal = useTemplateRef('modal')

const childData = ref('in');

const HandleComponent = (select: string) => {
  childData.value = select;
  
  console.log(childData.value)
};

onUnmounted(() => {

})



</script>

<style scoped>
.underline-hover {
  position: relative;
}
.underline-hover::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 1px;
    background-color: black; 
    transform: scaleX(0);
    transition: transform 0.3s ease;
}
.underline-hover:hover::after {
    transform: scaleX(.9);
}

.group:hover .dropdown {
  height: 200px;
}
</style>