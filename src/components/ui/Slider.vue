<template>
  <swiper
    :navigation="true"
    :modules="modules"
    :slides-per-view="3"
    :space-between="3"
    :breakpoints="{
      '320': {
        slidesPerView: 1,
      },
      '768': {
        slidesPerView: 2,
      },
      '1120': {
        slidesPerView: 3,
      },
    }"
    class="mySwiper pb-28"
  >
    <swiper-slide
      v-for="(slide, index) in slides"
      :key="index"
      class="p-8 space-y-5"
    >
      <div class="flex items-center space-x-4">
        <img :src="slide.img" alt="Feedback" />
        <p class="text-lg">{{ slide.name }}</p>
      </div>
      <p class="max-w-[99%] text-center">{{ slide.feedback }}</p>
      <Stars />
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SlideImage from "../../assets/imgs/slide-img.png";
import Stars from "./Stars.vue";
import { ref } from "vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    Stars,
  },
  setup() {
    const slides = ref([
      {
        id: 1,
        name: "Matt Cannon",
        feedback:
          "“Lorem ipsum dolor sit amet conse ctetur adipiscing lectus a nunc mauris scelerisque sed egestas pharetraol quis pharetra arcu pharetra blandit...”",
        img: SlideImage,
      },
      {
        id: 2,
        name: "Matt Cannon",
        feedback:
          "“Lorem ipsum dolor sit amet conse ctetur adipiscing lectus a nunc mauris scelerisque sed egestas pharetraol quis pharetra arcu pharetra blandit...”",
        img: SlideImage,
      },
      {
        id: 3,
        name: "Matt Cannon",
        feedback:
          "“Lorem ipsum dolor sit amet conse ctetur adipiscing lectus a nunc mauris scelerisque sed egestas pharetraol quis pharetra arcu pharetra blandit...”",
        img: SlideImage,
      },
    ]);
    return {
      modules: [Navigation],
      slides,
    };
  },
};
</script>

<style scoped>
.swiper-slide {
  border-radius: 20px;
  border: 1px solid #d4d2e3;
  background: #fff;
}

@screen lg {
  .swiper-slide-next {
    transition: 0.6s;
    transform: scale(1.2);
    z-index: 20;
    margin-top: 1.85rem;
  }
}
</style>
