<template>
  <div
    class="flex justify-center space-x-14 md:space-x-10 md:flex-row md:space-y-0 sm:flex-col sm:space-x-0 sm:space-y-2"
  >
    <div class="flex items-center lg:space-x-6 md:space-x-2 sm:space-x-1">
      <div class="h-10 w-[1px] bg-[#19191c] md:block sm:hidden"></div>
      <img src="src\assets\icons\clock.png" class="lg:w-4 sm:w-3" />
      <p class="lg:text-xl sm:text-sm">Графік роботи з 11:00 до 2:00</p>
    </div>
    <div class="mobile-line md:hidden sm:block"></div>
    <div class="flex items-center lg:space-x-6 md:space-x-2 sm:space-x-1">
      <div class="h-10 w-[1px] bg-[#19191c] md:block sm:hidden"></div>
      <img src="src\assets\icons\telephone.png" class="lg:w-4 sm:w-3" />
      <a href="tel:(123) 456 - 789" class="lg:text-xl sm:text-sm"
        >(123) 456 - 789</a
      >
    </div>
  </div>
</template>

<style scoped>
.mobile-line {
  width: 60vw;
  height: 1px;
  background-color: #19191c;
}
</style>
