<template>
  <li class="catalog__item">
    {{}}
  <router-link class="catalog__pic" href="#" :to="{name:'product', params:{id: product.id}}">
<img :src="currentImg" :alt="product.title">
</router-link>

<h3 class="catalog__title">
<a href="#">
{{ product.title}}
</a>
</h3>

<span class="catalog__price">
{{productPriceFormat}} ₽
</span>
<ColorPicker  v-model="currentColor" :available="product.colors" :id="product.id" />
</li>

</template>
<script>
import numberFormat from '@/helpers/numberFormat';
import ColorPicker from '@/components/ColorPicker.vue';

export default {
  props: ['product'],
  data() {
    return {
      currentColor: this.product.colors[0].color.id,
    };
  },

    computed:{
        productPriceFormat() {
          return numberFormat(this.product.price);
    
        },
        currentImg() {
      
          if (this.currentColor) {
            return this.product.colors.find((item) =>item.color.id === this.currentColor).gallery[0].file.url;
          }
          return this.product.img;

        }
  },
  methods: {
  },
  components: { ColorPicker },
};

</script>
<style>

</style>
