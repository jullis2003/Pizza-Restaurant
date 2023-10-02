<template>
  <footer
    class="container flex justify-between lg:pt-11 lg:pb-16 items-center lg:space-y-0 lg:flex-row sm:flex-col md:pt-0 sm:space-y-7 sm:pb-12 sm:pt-24"
  >
    <img
      src="../assets/imgs/Logo.png"
      alt="Pizza Like"
      class="absolute top-0 left-[14px]"
    />
    <p
      class="lg:max-w-[18vw] lg:order-first sm:order-last md:max-w-[51vw] sm:text-sm md:text-base lg:text-left sm:text-center"
    >
      Copyright &copy; 2023 PizzaLike | All Rights Reserved
    </p>
    <div
      class="space-y-4 sm:order-first md:order-2 md:mr-0 md:w-auto sm:w-full"
    >
      <p class="text-lg ml-auto">Підпишіться на нашу розсилку</p>
      <div>
        <input
          type="email"
          placeholder="Введіть e-mail"
          class="bg-[#F9F9F9] px-6 py-8 md:w-[474px] sm:w-[100%]"
        />
        <input
          type="submit"
          value="Підписатися"
          class="absolute btn btn-just top-[50%] right-2"
        />
      </div>
    </div>
    <div class="space-y-4 lg:order-last lg:ml-0 md:order-first md:ml-auto">
      <p class="md:text-lg sm:text-base">Слідкуйте за нами</p>
      <div class="flex justify-between">
        <a href="">
          <img src="../assets/icons/instagram.png" alt="Instagram" />
        </a>
        <a href="">
          <img src="../assets/icons/facebook.png" alt="Facebook" />
        </a>
        <a href="">
          <img src="../assets/icons/twitter.png" alt="Twitter" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
input[type="email"] {
  border-radius: 50px;
}

input[type="submit"] {
  transform: translateY(-50%);
}

@media (max-width: 358px) {
  .btn {
    font-size: 1rem;
    padding: 12px 10px;
  }
}
</style>
