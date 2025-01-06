<template>
    <div class="actions flex gap-x-8 h-[120px]">
        <div @click="selectedHeader" class="in underline cursor-pointer" id="in">Sign In</div>
        <div @click="selectedHeader" class="up underline cursor-pointer" id="up">Sign Up</div>
        <div @click="selectedHeader" class="forget underline cursor-pointer" id="forget">Forget Passwords</div>
        
    </div>
    <hr class="mt-[20px]">

    <slot>klflekfrelkre</slot>
</template>

<script setup lang="ts">
const isOpen = ref(false)
//const selected = useTemplateRef()


const listed = ['in','up','forget']

const emit = defineEmits(['check']);

const selectedHeader = (e: any) => {
    const select = e.target.id
    console.log(select)
  emit('check', `${select}`);
};


</script>

<style scoped>

</style>