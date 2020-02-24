<template>
  <div class="main">
    <div class="main__header">
      <h1 class="title">
        Featured
        <span>Creators</span>
      </h1>
      <div v-if="windowWidth <= 576" class="slider_arrows__mobile">
        <button type="button" class="slick-prev slick-arrow">
          <img src="/img/svg/Arrow-slider.svg" />
        </button>
        <button type="button" class="slick-next slick-arrow">
          <img src="/img/svg/Arrow-slider.svg" />
        </button>
      </div>
      <div class="search__wrap">
        <input class="search__input" type="text" placeholder="Search" />
        <button class="search__btn" type="text">
          <img src="/img/svg/search.svg" alt />
        </button>
      </div>
    </div>
    <!-- <carousel>
      <img src="https://placeimg.com/200/200/any?1" />

      <img src="https://placeimg.com/200/200/any?2" />

      <img src="https://placeimg.com/200/200/any?3" />

      <img src="https://placeimg.com/200/200/any?4" />
    </carousel>-->
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
        </carousel>-->
        <slick ref="slick" :options="slickOptions" v-if="Creators.length">
          <div
            class="main__slide"
            v-for="Creator in Creators"
            v-bind:key="Creator.id"
          >
            <!-- <div class="main__slide"> -->
            <img :src="Creator.Image" alt class="main__slide-img" />
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
        // variableWidth: true,
        nextArrow:
          '<button type="button" class="slick-next"><img src="/img/svg/Arrow-slider.svg"></button>',
        prevArrow:
          '<button type="button" class="slick-prev"><img src="/img/svg/Arrow-slider.svg"></button>',
        responsive: [
          {
            breakpoint: 1120,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 860,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              variableWidth: true,
              nextArrow: document.getElementsByClassName("slick-next"),
              prevArrow: document.getElementsByClassName("slick-prev")
            }
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: true,
              swipeToSlide: true,
              nextArrow: document.getElementsByClassName("slick-next"),
              prevArrow: document.getElementsByClassName("slick-prev")
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
        // Any other options that can be got from plugin documentation
      },
      windowWidth: null,
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
    this.$nextTick(function() {
      window.addEventListener("resize", this.getWindowWidth);

      //Init
      this.getWindowWidth();
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
    getWindowWidth() {
      this.windowWidth = document.documentElement.clientWidth;
      console.log(this.windowWidth);
    }
  }
};
</script>

<style lang="scss">
.main__content {
  // overflow-x: hidden;
}
.main__header {
  max-width: 1160px;
  margin: 0 auto 40px;
  // padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 576px) {
    flex-wrap: wrap;
  }
  .title {
    font-weight: bold;
    font-size: 48px;
    line-height: 120%;
    @media screen and (max-width: 576px) {
      font-size: 36px;
      max-width: 50%;
    }
    span {
      color: var(--color-red);
    }
  }
  .slider_arrows__mobile button:not(:last-child) {
    margin-right: 10px;
  }
  // @media (max-width: 576px;) {
  //   .title {
  //     font-size: 36px;
  //   }
  // }
  .search__wrap {
    position: relative;
    max-width: 260px;
    width: 100%;
    @media screen and (max-width: 576px) {
      max-width: 100%;
      margin-top: 20px;
    }
    input {
      background: var(--color-rose-light);
      width: 100%;
      height: 48px;
      border-radius: var(--border-radius);
      font-size: 14px;
      line-height: 17px;
      padding: 10px 10px 10px 16px;
      @media screen and (max-width: 576px) {
        font-size: 18px;
        line-height: 21px;
        height: 57px;
      }
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
      @media screen and (max-width: 576px) {
        right: 10px;
      }
    }
  }
}
.main {
  padding: 0 60px;
  @media screen and (max-width: 576px) {
    padding: 0 20px;
  }
}

.main__slider {
  max-width: 1184px;
  margin: 0 auto;
  // padding: 0 20px;
}
.slick-slider {
  position: relative;
  @media screen and (max-width: 1300px) {
    margin: 0 -10px;
  }
}
.slick-arrow {
  background: var(--color-red);
  height: 70px;
  width: 70px;
  border-radius: 100%;
  line-height: 70px;
  z-index: 1;
  transition: 0.3s;
  @media screen and (min-width: 700px) and (max-width: 1399px) {
    position: absolute;
    top: 50%;
    transform: translate(-100%, -50%);
    left: 10px;
    height: 50px;
    width: 50px;
    line-height: 50px;
  }
  @media screen and (min-width: 1400px) {
    position: absolute;
    top: 50%;
    transform: translate(-100%, -50%);
    left: -45px;
  }
  &.slick-disabled {
    opacity: 0.2;
  }
}
.slick-prev img {
  transform: rotate(180deg);
}
.slick-next {
  @media screen and (min-width: 700px) {
    left: initial;
    right: 10px;
    transform: translate(100%, -50%);
  }
  @media screen and (min-width: 1400px) {
    left: initial;
    right: -45px;
    transform: translate(100%, -50%);
  }
}
.slick-track {
  display: flex;
}
.slick-slide {
  transition: 0.3s;
  margin: 0 10px;
  &:not(.slick-active) {
    opacity: 0.6;
  }
}
.main__slide {
  position: relative;
  // max-width: 256px;
  padding: 20px;
  width: 100%;
  height: 430px;
  display: flex !important;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 auto;
  border-radius: var(--border-radius);
  overflow: hidden;
  @media screen and (max-width: 860px) {
    max-width: 256px;
  }
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
  }
  .main__slide-img {
    // position: absolute;
    // top: 0;
    // left: calc(50% - 256px / 2);
    // z-index: -2;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    object-fit: cover;
    object-position: top;
    height: 100%;
    width: 100%;
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
    font-size: 16px;
    line-height: 130%;
    &:hover {
      background: transparent;
      color: var(--color-red);
      border: 1px solid var(--color-red);
    }
  }
  // &:hover {
  //   .main__slide-title {
  //     opacity: 0;
  //   }
  //   .main__slide-text {
  //     max-height: 100%;
  //     transition: max-height 0.25s ease-in;
  //   }
  // }
  // &:hover:before {
  //   background-position: 220px;
  // }
}
.slick-active .main__slide:hover {
  .main__slide-title {
    opacity: 0;
  }
  .main__slide-text {
    max-height: 100%;
    transition: max-height 0.25s ease-in;
  }
  &:before {
    background-position: 220px;
  }
}
</style>
