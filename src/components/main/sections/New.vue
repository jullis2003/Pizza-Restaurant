<template>
  <section>
    <h2>Новинки</h2>
    <div class="space-y-28">
      <div
        class="pad-r flex container m-0 pl-0 lg:space-x-16 md:space-x-5 md:flex-row md:space-y-0 sm:flex-col sm:space-y-6"
      >
        <img
          src="../../../assets/imgs/pikante.png"
          alt="Pikante"
          class="h-[100%] md:max-w-[50vw]"
        />
        <div class="lg:pl-9 lg:pt-28 md:pt-0">
          <div class="space-y-4 lg:pl-0 md:pl-9">
            <h4 class="relative md:pl-0 sm:pl-[11vw]">ПІКАНТЕ</h4>
            <p class="lg:text-lg md:text-base md:pl-0 sm:pl-6">
              Cалямі, бекон, перець болгарський, гострий перець Халапеньо,
              чисник, цибуля, маслини, сир
            </p>
            <p class="lg:text-lg md:text-base md:pl-0 sm:pl-6">
              30 см - 190 грн.
            </p>
            <p class="lg:text-lg md:text-base md:pl-0 sm:pl-6">
              50 см - 295 грн.
            </p>
          </div>
          <div class="flex mt-14 items-center justify-between">
            <button class="btn btn-arrow flex items-center justify-center">
              Додати в кошик
            </button>
            <p class="font-semibold md:text-2xl sm:text-lg">190 грн.</p>
          </div>
        </div>
      </div>
      <div
        class="pad-l flex justify-end mr-0 pr-0 container lg:gap-24 md:gap-5 md:flex-row sm:flex-col sm:gap-6"
      >
        <img
          src="../../../assets/imgs/trento.png"
          alt="Pikante"
          class="h-[100%] md:max-w-[50vw] md:order-last"
        />
        <div class="lg:pl-9 lg:pt-28 md:pt-0 md:order-first md:pr-0 sm:pr-4">
          <div
            class="space-y-4 lg:pl-0 md:pl-9 md:block sm:flex sm:flex-col sm:items-end"
          >
            <h4 class="relative md:pl-0 sm:pl-8">ТРЕНТО</h4>
            <p class="lg:text-lg md:text-base md:text-start sm:text-end">
              Вершковий соус, куряче філе, гриби, томати, кукурудза, маслини
              цибуля, сир
            </p>
            <p class="lg:text-lg md:text-base">30 см - 180 грн.</p>
            <p class="lg:text-lg md:text-base">50 см - 290 грн.</p>
          </div>
          <div
            class="flex mt-14 items-center justify-between md:flex-row sm:flex-row-reverse"
          >
            <button class="btn btn-arrow flex items-center justify-center">
              Додати в кошик
            </button>
            <p
              class="font-semibold whitespace-nowrap md:text-2xl md:mr-0 sm:text-lg sm:mr-1"
            >
              180 грн.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  @screen lg {
    max-width: 1224px;
  }
}

.pad-r {
  @screen lg {
    padding-right: 1rem;
  }
}

.pad-l {
  @screen lg {
    padding-left: 1rem;
  }
}

h4::before {
  content: "";
  background-image: url("../../../assets/icons/fire.png");
  width: 32px;
  height: 32px;
  position: absolute;
  transform: translate(-50%, -30%);
  left: -7%;
}

@media (max-width: 767px) {
  h4::before {
    left: 5%;
  }

  div > div > div {
    transform: translate(1%);
  }
}
</style>
