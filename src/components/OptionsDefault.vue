<template>
  <optionsForm :name="name" :open="open" class="options-form">
    <li v-for="option in options" :key="option.name" class="options__param">
      <input
        :id="option.name"
        type="checkbox"
        :value="option"
        :checked="checked(option)"
        @change="change(option, $event.target.checked)"
        class="options__checkbox"
      />
      <label :for="option.name" class="options__label">{{ option.name }}</label>
    </li>
  </optionsForm>
</template>

<script>
import optionsForm from "@/assets/ui/options-form.vue";
import { mapMutations, mapState } from "vuex";

export default {
  components: {
    optionsForm,
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    name: {
      type: String,
      default: "",
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState({
      selectedOptions: (state) => state.products.selectedOptions,
    }),
  },
  methods: {
    ...mapMutations({
      spliceSelectedOptions: "products/spliceSelectedOptions",
      pushSelectedOptions: "products/pushSelectedOptions",
    }),
    change(option, checked) {
      if (checked) {
        this.pushSelectedOptions(option);
      } else {
        this.selectedOptions.forEach((el, id) => {
          if (JSON.stringify(el) === JSON.stringify(option)) {
            this.spliceSelectedOptions(id);
          }
        });
      }
    },
    checked(option) {
      return (
        this.selectedOptions?.some(
          (el) => JSON.stringify(el) === JSON.stringify(option)
        ) ?? false
      );
    },
  },
};
</script>

<style scoped>
.options-form {
  margin-bottom: 20px;
}

.options__param {
  margin-bottom: 20px;
  width: 50%;
}
.options__param:nth-child(2n) {
  margin-right: 0;
  text-align: end;
}

.options__label {
  cursor: pointer;
  position: relative;
  font-family: "SF Pro Display";
  font-weight: 400;
  font-size: 14px;
}

.options__checkbox {
  cursor: pointer;
  margin-right: 12px;
  width: 14px;
  height: 14px;
  background: #c4c4c4;
}
@media (max-width: 1000px) {
  .options__checkbox {
    width: 17px;
    height: 17px;
  }
}
</style>
