<script setup>
import Peperoni from "../../assets/imgs/peperoni.png";
import Toskana from "../../assets/imgs/toskana.png";
import Acteka from "../../assets/imgs/acteka.png";

const cards = [
  {
    id: 1,
    name: "ПЕПЕРОНІ",
    price: "190.00 грн. – 290.00 грн.",
    src: Peperoni,
  },
  {
    id: 2,
    name: "ТОСКАНА",
    price: "160.00 грн. – 265.00 грн.",
    src: Toskana,
  },
  {
    id: 3,
    name: "ПІЦА АЦТЕКА",
    price: "180.00 грн. – 290.00 грн.",
    src: Acteka,
  },
];
</script>

<template>
  <div class="flex justify-between flex-wrap gap-y-10">
    <div
      v-for="(item, index) in cards"
      :key="index"
      :class="{ 'md:hidden': index > 1 }"
      class="lg:block"
    >
      <div>
        <img :src="item.src" alt="Pizza" class="relative max-w-[100%]" />
        <img
          src="\src\assets\icons\favorites.png"
          class="absolute top-[5%] right-[5%]"
        />
      </div>
      <h4 class="mb-1 mt-6">{{ item.name }}</h4>
      <p>{{ item.price }}</p>
      <button class="btn btn-just mt-4 sm:min-w-full md:min-w-0 max-h-12">
        Замовити
      </button>
    </div>
  </div>
</template>

<style scoped>
p {
  border-radius: 0px 60px 60px 0px;
  border: 1px solid #cb4d09;
  background: #fff9eb;
  width: max-content;
  padding: 8px 16px;
}

@media (max-width: 767px) {
  div:first-of-type {
    flex-direction: column;
  }

  div > div {
    align-self: center;
  }
}
</style>
