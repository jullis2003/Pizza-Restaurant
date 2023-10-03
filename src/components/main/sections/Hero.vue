<template>
  <section>
    <div class="container flex flex-col z-10 xl:pt-32 sm:pt-16">
      <h1 class="max-w-lg">“Pizza like” піца яка вас любить</h1>
      <div class="lg:mt-6 md:mb-12 sm:mt-4">
        <p
          class="text-lg lg:max-w-xl md:bg-transparent sm:max-w-[21.25rem] sm:text-base"
        >
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis sit aliquam sit nullam neque ultrices.
        </p>
      </div>
      <a href="" class="btn btn-arrow md:mb-0 sm:mb-10">Замовити зараз</a>
    </div>
  </section>
</template>

<style scoped>
section {
  background: url("\src\assets\imgs\hero.png") center top / cover no-repeat;
}

section > div {
  height: calc(100vh - 187px);
}

@media (max-width: 1120px) {
  section > div {
    height: calc(100vh - 171px);
  }
}

@media (max-width: 767px) {
  section {
    background-position: 29%;
  }
}

@media (min-width: 428px) {
  div > div {
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 428px) {
  section > div {
    height: calc(100vh - 188px);
  }

  div > div {
    flex: 1 1 auto;
  }

  .btn {
    max-width: 100%;
  }
}

/* @media (max-height: 533px) {
  section > div {
    padding-top: 1rem;
  }

  .btn {
    margin-bottom: 1.5rem;
  }
} */
</style>
