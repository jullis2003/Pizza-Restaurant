<template>
  <div class="flex space-x-3 justify-center">
    <div v-for="(star, index) in stars" :key="index">
      <img :src="star.img" alt="Star" />
    </div>
  </div>
</template>

<script setup>
import Star from "../../assets/icons/Star.png";

const stars = [
  { id: 1, img: Star },
  { id: 2, img: Star },
  { id: 3, img: Star },
  { id: 4, img: Star },
  { id: 5, img: Star },
];
</script>
