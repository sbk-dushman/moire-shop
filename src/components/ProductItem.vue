<template>
  <li class="catalog__item">
    {{}}
  <router-link class="catalog__pic" href="#" :to="{name:'product', params:{id: product.id}}">
<img :src="product.img" :alt="product.title">
</router-link>

<h3 class="catalog__title">
<a href="#">
{{ product.title}}
</a>
</h3>

<span class="catalog__price">
{{productPriceFormat}} ₽
</span>
<ColorPicker  v-model="currentColor" :available="product.colors"  />
</li>

</template>
<script>
import numberFormat from '@/helpers/numberFormat';
import ColorPicker from '@/components/ColorPicker.vue';

export default {
  props: ['product'],
  data() {
    return {
      currentColor: null,
    };
  },

    computed:{
        productPriceFormat() {
          return numberFormat(this.product.price);
    }
  },
  methods: {
  },
  components: { ColorPicker },
};

</script>
<style>

</style>
