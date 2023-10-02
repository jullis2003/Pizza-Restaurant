<script setup>
import Cards from "../../ui/Cards.vue";
</script>

<template>
  <section class="container">
    <h2>Пiца</h2>
    <Cards class="mb-14" />
    <button class="btn btn-arrow flex justify-center items-center ml-[50%]">
      Дивитись більше
    </button>
  </section>
</template>

<style scoped>
button {
  transform: translate(-50%);
}
</style>
