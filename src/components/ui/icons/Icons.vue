<script setup>
import Search from "./Search.vue";
import Buy from "./Buy.vue";
import MyAccount from "./MyAccount.vue";
</script>

<template>
  <div class="space-x-4 sm:hidden md:flex">
    <a href="">
      <Search />
    </a>
    <a href="">
      <Buy />
    </a>
    <a href="">
      <MyAccount />
    </a>
  </div>
</template>
