<template>
  <div class="grid h-screen w-[85%] bg-transparent relative mx-auto justify-items-center   gap-y-6">
    
    <ImageSlider />
    <div class="slider-controls flex justify-center mt-4">
      <button class="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" @click="prevSlide">Previous</button>
      <button class="bg-blue-500 text-white px-4 py-2 rounded-md" @click="nextSlide">Next</button>
    </div>
    <div class="w-[250px] h-[250px] bg-white"></div>
    <div class="w-[250px] h-[250px] bg-white"></div>
    <div class="w-[250px] h-[250px] bg-white"></div>
    <div class="w-[250px] h-[250px] bg-white"></div>
    <div class="w-[250px] h-[250px] bg-white"></div>
    <div class="w-[250px] h-[250px] bg-white"></div>
    <div class="w-[250px] h-[250px] bg-white"></div>

  </div>
</template>

<script setup lang="ts">
const currentSlide = ref(0);
const slideWidth = ref(0);
const slider = useTemplateRef('sike')

const images = [
  '/slider-images/weeknd.jpg',
  '/slider-images/weeknd.jpg',
  '/slider-images/weeknd.jpg',
  // Add more image paths here
];

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + images.length) % images.length;
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.length;
};


onMounted(() => {
slideWidth.value = slider.value?.offsetWidth
})

</script>

<style scoped>

</style>