<template>
  <div class="slider">
    <img
      :src="selectedBanner"
      alt="banner"
      class="slider__banner"
      :height="height"
    />
    <div class="slider__btns-field">
      <button @click="decrease()" class="slider__btn slider__btn_left">
        <rightIcon />
      </button>
      <button @click="increase()" class="slider__btn slider__btn_right">
        <leftIcon />
      </button>
    </div>
    <li class="slider__points-field">
      <ul
        v-for="banner in banners"
        :key="banner"
        class="slider__point"
        :class="{ slider__point_selected: banner === selectedBanner }"
      ></ul>
    </li>
  </div>
</template>

<script>
import leftIcon from "@/assets/svg/leftIcon.vue";
import rightIcon from "@/assets/svg/rightIcon.vue";

export default {
  components: {
    leftIcon,
    rightIcon,
  },
  props: {
    banners: {
      type: Array,
      default: () => [],
    },
    height: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    selectedBannerNum: 0,
  }),
  computed: {
    selectedBanner() {
      return this.banners[this.selectedBannerNum];
    },
  },
  methods: {
    increase() {
      if (this.selectedBannerNum + 1 >= this.banners.length) {
        this.selectedBannerNum = 0;
        return;
      }
      this.selectedBannerNum += 1;
    },
    decrease() {
      if (this.selectedBannerNum - 1 < 0) {
        this.selectedBannerNum = this.banners.length - 1;
        return;
      }
      this.selectedBannerNum -= 1;
    },
  },
};
</script>

<style scoped>
.slider {
  position: relative;
}

.slider__banner {
  display: block;
  width: 100%;
}

.slider__btns-field {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 50%;
}

.slider__btn {
  height: 28px;
  cursor: pointer;
  background-color: transparent;
  border: none;
}

.slider__btn_left {
  margin-left: 20px;
}

.slider__btn_right {
  margin-right: 20px;
}

.slider__points-field {
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  list-style: none;
  bottom: 10%;
}

.slider__point {
  margin-right: 9px;
  height: 11px;
  width: 11px;
  border: 1px solid white;
  background: transparent;
  border-radius: 50%;
}

.slider__point_selected {
  background-color: white;
}

.slider__point:last-child {
  margin-right: 0;
}
</style>
