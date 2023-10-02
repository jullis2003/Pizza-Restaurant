<template>
  <div class="space-y-14">
    <div
      v-for="(item, index) in parts"
      :key="index"
      class="flex lg:justify-between lg:items-center"
    >
      <div
        class="p-6 bg-[#FFF9EB] part min-h-[300px] lg:w-[41vw] md:w-[70vw] sm:w-[100%]"
      >
        <h3 class="text-center pb-3">{{ item.nameOfPart }}</h3>
        <div class="flex justify-between">
          <div class="flex flex-col justify-around">
            <p
              class="font-semibold xl:whitespace-nowrap lg:whitespace-normal md:text-base sm:whitespace-nowrap sm:text-xs"
            >
              {{ item.firstDishPrice }}
            </p>
            <p
              class="font-semibold xl:whitespace-nowrap lg:whitespace-normal md:text-base sm:whitespace-nowrap sm:text-xs"
            >
              {{ item.secondDishPrice }}
            </p>
            <p
              class="font-semibold xl:whitespace-nowrap lg:whitespace-normal md:text-base sm:whitespace-nowrap sm:text-xs"
            >
              {{ item.thirdDishPrice }}
            </p>
          </div>
          <div class="max-w-[73%]">
            <ul class="space-y-4">
              <li class="space-y-2">
                <h6>{{ item.firstDish }}</h6>
                <p class="md:text-base sm:text-xs">
                  {{ item.firstDishDescription }}
                </p>
              </li>
              <li class="space-y-2">
                <h6>{{ item.secondDish }}</h6>
                <p class="md:text-base sm:text-xs">
                  {{ item.secondDishDescription }}
                </p>
              </li>
              <li class="space-y-2">
                <h6>{{ item.thirdDish }}</h6>
                <p class="md:text-base sm:text-xs">
                  {{ item.thirdDishDescription }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img
        :src="item.img"
        :class="{
          'left-0': index % 2 === 1,
          'md:top-0': index === 1,
          'sm:right-0': index % 2 === 0,
        }"
        alt="Pizza"
        class="h-[100%] lg:max-w-[36vw] lg:block lg:static md:max-w-[213px] md:bottom-[-56px] md:right-[79px] sm:h-auto sm:absolute sm:max-w-[114px] sm:top-[-56px]"
      />
    </div>
  </div>
</template>

<script setup>
import Part1 from "../../../../assets/imgs/part-1.png";
import Part2 from "../../../../assets/imgs/part-2.png";
import Part3 from "../../../../assets/imgs/part-3.png";
import Part4 from "../../../../assets/imgs/part-4.png";

const parts = [
  {
    id: 1,
    nameOfPart: "Піца",
    firstDish: "Бісмарк",
    firstDishDescription: "Салямі, бекон, куряче яйце, сир",
    firstDishPrice: "165.00 грн. – 270.00 грн.",
    secondDish: "Вегетаріана",
    secondDishDescription:
      "Гриби, томати, маслини, перець болгарський, кукурудза, сир",
    secondDishPrice: "165.00 грн. – 270.00 грн.",
    thirdDish: "Карне",
    thirdDishDescription:
      "мисливські ковбаски, шинка, салямі, квашені огірки, сир",
    thirdDishPrice: "165.00 грн. – 270.00 грн.",
    img: Part1,
  },
  {
    id: 2,
    nameOfPart: "Салати",
    firstDish: "Грецький салат",
    firstDishDescription:
      "Свіжі овочі, сир фета, маслини та листя салату під бальзамічним соусом",
    firstDishPrice: "75.00 грн.",
    secondDish: "Мексиканський салат",
    secondDishDescription:
      "Свіжі овочі, відварна квасоля, кукурудза, гострий перець Халапеньо та сир під соусом Сальса власного виробництва",
    secondDishPrice: "75.00 грн.",
    thirdDish: "Цезар",
    thirdDishDescription:
      "Обсмажене куряче філе, листя салату, томати, маслини, перепелині яйця, крутони та сир пармезан під соусом Цезар",
    thirdDishPrice: "79.00 грн.",
    img: Part2,
  },
  {
    id: 3,
    nameOfPart: "Напої",
    firstDish: "Грейпфрутоий сік",
    firstDishDescription: "1 л",
    firstDishPrice: "75.00 грн.",
    secondDish: "Томатний сік",
    secondDishDescription: "1 л",
    secondDishPrice: "50.00 грн.",
    thirdDish: "Девайтіс",
    thirdDishDescription: "0,5 л, слабогазований",
    thirdDishPrice: "29.00 грн.",
    img: Part3,
  },
  {
    id: 4,
    nameOfPart: "Десерти",
    firstDish: "Млинці з вишнями",
    firstDishDescription: "Ароматні млинці з карамелізованими вишнями",
    firstDishPrice: "49.00 грн.",
    secondDish: "Млиннці з домашнім сиром та родзинками",
    secondDishDescription: "Ніжні млинці з домашнім сиром та родзинками",
    secondDishPrice: "59.00 грн.",
    thirdDish: "Мексиканські слойки",
    thirdDishDescription: "Ніжні млинці з шоколадним кремом",
    thirdDishPrice: "65.00 грн.",
    img: Part4,
  },
];
</script>

<style scoped>
div div:nth-child(2n) {
  flex-direction: row-reverse;
}
.part {
  border: 1px solid #cb4d09;
  border-radius: 24px;
}
</style>
