<script setup>
import Contacts from "./contacts/Contacts.vue";
import Navigation from "./navigation/Navigation.vue";
</script>

<template>
  <header>
    <Contacts class="container" />
    <div class="line"></div>
    <Navigation class="container" />
  </header>
</template>

<style scoped>
header {
  background-color: #ececec;
}
.line {
  width: 100%;
  height: 1px;
  background-color: #bebebe;
}
</style>
