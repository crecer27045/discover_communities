<template>
  <div class="main">
    <div class="main__header">
      <h1 class="title">Featured <span>Creators</span></h1>
      <div class="search__wrap">
        <input class="search__input" type="text" placeholder="Search" />
        <button class="search__btn" type="text">
          <img src="/img/svg/search.svg" alt="" />
        </button>
      </div>
    </div>
    <!-- <carousel>
      <img src="https://placeimg.com/200/200/any?1" />

      <img src="https://placeimg.com/200/200/any?2" />

      <img src="https://placeimg.com/200/200/any?3" />

      <img src="https://placeimg.com/200/200/any?4" />
    </carousel> -->
    <div class="main__content">
      <div class="main__slider">
        <!-- <carousel :dots="false">
          <template slot="prev"><span class="prev">prev</span></template>
          <div class="main__slide">
            <img
              src="/img/slider/Rubin-report.jpg"
              alt=""
              class="main__slide-img"
            />
            <div class="main__slide-title">The Rubin Report</div>
            <div class="main__slide-text">
              Get exclusive content. Interact with Dave. Get exclusive content.
              Interact with Bridget. Verified Nobody. My tribe is tribeless.
              Captain of the Fence Riding Team. Fiddling while Rome burns. Find
              another hero.
            </div>
            <button class="main__slide-button">Join community</button>
          </div>
          <div class="main__slide">
            <img
              src="/img/slider/Rubin-report.jpg"
              alt=""
              class="main__slide-img"
            />
            <div class="main__slide-title">The Rubin Report</div>
            <div class="main__slide-text">
              Get exclusive content. Interact with Dave. Get exclusive content.
              Interact with Bridget. Verified Nobody. My tribe is tribeless.
              Captain of the Fence Riding Team. Fiddling while Rome burns. Find
              another hero.
            </div>
            <button class="main__slide-button">Join community</button>
          </div>
          <div class="main__slide">
            <img
              src="/img/slider/Rubin-report.jpg"
              alt=""
              class="main__slide-img"
            />
            <div class="main__slide-title">The Rubin Report</div>
            <div class="main__slide-text">
              Get exclusive content. Interact with Dave. Get exclusive content.
              Interact with Bridget. Verified Nobody. My tribe is tribeless.
              Captain of the Fence Riding Team. Fiddling while Rome burns. Find
              another hero.
            </div>
            <button class="main__slide-button">Join community</button>
          </div>
          <div class="main__slide">
            <img
              src="/img/slider/Rubin-report.jpg"
              alt=""
              class="main__slide-img"
            />
            <div class="main__slide-title">The Rubin Report</div>
            <div class="main__slide-text">
              Get exclusive content. Interact with Dave. Get exclusive content.
              Interact with Bridget. Verified Nobody. My tribe is tribeless.
              Captain of the Fence Riding Team. Fiddling while Rome burns. Find
              another hero.
            </div>
            <button class="main__slide-button">Join community</button>
          </div>
          <template slot="next"><span class="next">next</span></template>
        </carousel> -->
        <slick ref="slick" :options="slickOptions" v-if="Creators.length">
          <div
            class="main__slide"
            v-for="Creator in Creators"
            v-bind:key="Creator.id"
          >
            <!-- <div class="main__slide"> -->
            <img :src="Creator.Image" alt="" class="main__slide-img" />
            <div class="main__slide-title">{{ Creator.Title }}</div>
            <div class="main__slide-text">{{ Creator.Text }}</div>
            <button class="main__slide-button">Join community</button>
            <!-- </div> -->
          </div>
        </slick>
      </div>
    </div>
  </div>
</template>

<script>
// import * as jQuery from "jquery";

// import "owl.carousel/dist/assets/owl.carousel.css";
// window["jQuery"] = jQuery;
// import "jquery";
// import $ from "jquery";
// import carousel from "vue-owl-carousel";
import Slick from "vue-slick";
// import "node_modules/slick-carousel/slick/slick.css";
// import "owl.carousel";
import { CREATORS_REQUEST } from "../store/actions/creators";

export default {
  name: "Main",
  // components: { carousel },
  components: { Slick },
  data() {
    return {
      slickOptions: {
        infinite: false,
        slidesToShow: 4,
        swipeToSlide: true,
        nextArrow:
          '<button type="button" class="slick-next"><img src="/img/svg/Arrow-slider.svg"></button>',
        prevArrow:
          '<button type="button" class="slick-prev"><img src="/img/svg/Arrow-slider.svg"></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              variableWidth: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: true,
              swipeToSlide: true
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
        // Any other options that can be got from plugin documentation
      },
      Creators: ""
    };
  },
  mounted() {
    this.$store.dispatch(CREATORS_REQUEST).then(() => {
      console.log("asd 2");
      this.Creators = this.$store.state.Creators.Creators;
      console.log(this.Creators);
      // this.$refs.slick.destroy();
      // this.$refs.slick.create(this.slickOptions);
      // this.$refs.slickone.reSlick();
    });
    // this.$store
    //   .dispatch(CREATORS_REQUEST)
    //   .then(() => {
    //     this.Creators = this.$store.state.Creators.Creators;
    //     console.log(this.Creators);
    //     this.$refs.slickone.reSlick();
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    // .then(() => {
    //   this.$router.push("/");
    // });
    // this.initOwlCarousel();
  },
  methods: {
    // loadJquery() {
    //   let THIS = this;
    //   if (!document.getElementById("jquery")) {
    //     let script = document.createElement("script");
    //     script.type = "text/javascript";
    //     script.src =
    //       "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
    //     script.id = "jquery";
    //     document.getElementsByTagName("head")[0].appendChild(script);
    //     script.onload = function() {
    //       THIS.initOwlCarousel();
    //     };
    //   } else {
    //     this.initOwlCarousel();
    //   }
    // },
    // loadOwlCarousel() {
    //   let THIS = this;
    //   if (!document.getElementById("owl-carousel")) {
    //     let script = document.createElement("script");
    //     script.type = "text/javascript";
    //     script.src =
    //       "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js";
    //     script.id = "owl-carousel";
    //     document.getElementsByTagName("head")[0].appendChild(script);
    //     script.onload = function() {
    //       THIS.initOwlCarousel();
    //     };
    //   } else {
    //     this.initOwlCarousel();
    //   }
    // },
    // initOwlCarousel() {
    //   $(document).ready(function() {
    //     console.log("ready!");
    //     // $(".owl-carousel").owlCarousel({
    //     //   loop: true,
    //     //   margin: 10,
    //     //   nav: true,
    //     //   responsive: {
    //     //     0: {
    //     //       items: 1
    //     //     },
    //     //     600: {
    //     //       items: 3
    //     //     },
    //     //     1000: {
    //     //       items: 4
    //     //     }
    //     //   }
    //     // });
    //   });
    //   // eslint-disable-next-line no-undef
    // }
  }
};
</script>

<style lang="scss">
.main__content {
  overflow-x: hidden;
}
.main__header {
  max-width: 1160px;
  margin: 0 auto 40px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    font-weight: bold;
    font-size: 48px;
    line-height: 120%;
    span {
      color: var(--color-red);
    }
  }
  .search__wrap {
    position: relative;
    max-width: 260px;
    width: 100%;
    input {
      background: var(--color-rose-light);
      width: 100%;
      height: 48px;
      border-radius: var(--border-radius);
      font-size: 14px;
      line-height: 17px;
      padding: 10px 10px 10px 16px;
      // &:placeholder {
      //   color: var(--color-violet);
      //   color: #ffffff;
      // }
    }
    button {
      position: absolute;
      background: transparent;
      padding: 10px;
      line-height: 0;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }
}

.main__slider {
  max-width: 1184px;
  margin: 0 auto;
  padding: 0 20px;
}
.slick-slider {
  position: relative;
}
.slick-arrow {
  background: var(--color-red);
  height: 70px;
  width: 70px;
  border-radius: 100%;
  line-height: 70px;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translate(-100%, -50%);
  left: -45px;
  transition: 0.3s;
  &.slick-disabled {
    opacity: 0.2;
  }
}
.slick-prev img {
  transform: rotate(180deg);
}
.slick-next {
  left: initial;
  right: -45px;
  transform: translate(100%, -50%);
}
.slick-track {
  display: flex;
}
.slick-slide {
  transition: 0.3s;
  &:not(:last-child) {
    margin-right: 20px;
  }
  &:not(.slick-active) {
    opacity: 0.6;
  }
}
.main__slide {
  position: relative;
  max-width: 256px;
  padding: 20px;
  width: 100%;
  height: 430px;
  display: flex !important;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 auto;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background: linear-gradient(0deg, #171717 20.35%, rgba(23, 23, 23, 0) 100%);
    transition: background 0.3s;
    background-size: 1px 130%;
    border-radius: var(--border-radius);
  }
  .main__slide-img {
    position: absolute;
    top: 0;
    left: calc(50% - 256px / 2);
    z-index: -2;
  }
  .main__slide-title {
    color: var(--color-white);
    padding-bottom: 10px;
    font-size: 30px;
    line-height: 120%;
    transition: 0.2s;
  }
  .main__slide-text {
    color: var(--color-white);
    margin-bottom: 20px;
    max-height: 48px;
    transition: max-height 0.2s ease-out;
    overflow: hidden;
    font-size: 18px;
  }
  .main__slide-button {
    background: var(--color-red);
    color: var(--color-white);
    width: 100%;
    height: 64px;
    font-weight: bold;
    border-radius: var(--border-radius);
    transition: 0.3s;
    &:hover {
      background: transparent;
      color: var(--color-red);
      border: 1px solid var(--color-red);
    }
  }
  &:hover {
    .main__slide-title {
      opacity: 0;
    }
    .main__slide-text {
      max-height: 100%;
      transition: max-height 0.25s ease-in;
    }
  }
  &:hover:before {
    background-position: 220px;
  }
}
</style>
