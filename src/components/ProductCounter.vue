<template>
  <!-- form__counter-->

     <div :class="counterClass">
                <button :class="(currentAmaunt-1==0 ? 'is-off':'')"

                @click.prevent="decrement(currentAmaunt)"
                type="button" aria-label="Убрать один товар">
                  <svg width="12" height="12" fill="currentColor">
                    <use xlink:href="#icon-minus"></use>
                  </svg>
                </button>

                <input type="text" v-model.number="currentAmaunt" name="count">

                <button  @click.prevent="incriment(currentAmaunt)" type="button" aria-label="Добавить один товар">
                  <svg width="12" height="12" fill="currentColor">
                    <use xlink:href="#icon-plus"></use>
                  </svg>
                </button>
              </div>
</template>
<script>

export default {
  props: ['modelValue', 'counter-class'],
  computed: {

    currentAmaunt: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
  methods: {
    incriment(value) {
      this.currentAmaunt = value + 1;
    },
    decrement(value) {
      this.currentAmaunt = value - 1;
    },

  },

};

</script>
<style>
button{
  cursor: pointer;
}
.is-off{
cursor: not-allowed;
pointer-events: none;
opacity: 0.5;
}
</style>
