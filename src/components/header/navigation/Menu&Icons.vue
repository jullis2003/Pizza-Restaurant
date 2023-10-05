<script setup>
import { ref } from "vue";
import Icons from "../../ui/icons/Icons.vue";

const menuItems = ref([
  { id: 1, text: "Головна" },
  { id: 2, text: "Пiца" },
  { id: 3, text: "Меню" },
  { id: 4, text: "Про нас" },
  { id: 5, text: "Доставка" },
]);
</script>

<template>
  <div class="flex lg:space-x-[18vw] md:space-x-[8vw]">
    <nav class="md:block sm:hidden">
      <ul class="flex space-x-6">
        <li v-for="item in menuItems" :key="item.id" class="relative">
          <a href="">{{ item.text }}</a>
        </li>
      </ul>
    </nav>
    <button class="md:hidden">
      <img src="\src\assets\icons\Menu.png" alt="Menu" />
    </button>
    <Icons />
  </div>
</template>

<style scoped>
li:nth-child(2) {
  padding-right: 1rem;
}

li:nth-child(2)::after {
  content: "";
  width: 12px;
  height: 8px;
  background-image: url("../../../assets/icons/list.png");
  background-size: cover;
  position: absolute;
  top: 50%;
  right: -13%;
  transform: translate(-50%, -50%);
}
</style>
