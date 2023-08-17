<template>
   <!-- <aside class="filter">
        <h2 class="filter__title">Фильтры</h2>

        <form class="filter__form form" action="#" method="get" @submit.prevent="submit">
          <fieldset class="form__block">
            <legend class="form__legend">Цена</legend>
            <label class="form__label form__label--price">
              <input class="form__input" name="min-price" v-model.number="currentPriceFrom">
              <span class="form__value">От</span>
            </label>
            <label class="form__label form__label--price">
              <input class="form__input"  name="max-price" v-model.number="currentPriceTo">
              <span class="form__value">До</span>
            </label>
          </fieldset>

          <fieldset class="form__block">
            <legend class="form__legend">Категория</legend>
            <label  class="form__label form__label--select">
              <select class="form__select"   name="category-select" v-model.number="currentCategoryId">
                <option value="0">Все категории</option>

                <option v-for="category in categories"
                :key="category.id"
                :value="category.id"
                >
                {{category.title}}</option>
              </select>
            </label>
          </fieldset>

          <fieldset class="form__block">
            <legend class="form__legend">Цвет</legend>

            <ColorPicker v-model="currentColor"/>

          </fieldset>

          <fieldset class="form__block">
            <legend class="form__legend">Объемб в ГБ</legend>
            <ul class="check-list">
              <li class="check-list__item">
                <label class="check-list__label">
                  <input class="check-list__check sr-only" type="checkbox" name="volume" value="8" checked="">
                  <span class="check-list__desc">
                    8
                    <span>(313)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label">
                  <input class="check-list__check sr-only" type="checkbox" name="volume" value="16">
                  <span class="check-list__desc">
                    16
                    <span>(461)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label">
                  <input class="check-list__check sr-only" type="checkbox" name="volume" value="32">
                  <span class="check-list__desc">
                    32
                    <span>(313)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label">
                  <input class="check-list__check sr-only" type="checkbox" name="volume" value="64">
                  <span class="check-list__desc">
                    64
                    <span>(313)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label">
                  <input class="check-list__check sr-only" type="checkbox" name="volume" value="128">
                  <span class="check-list__desc">
                    128
                    <span>(313)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label">
                  <input class="check-list__check sr-only" type="checkbox" name="volume" value="264">
                  <span class="check-list__desc">
                    264
                    <span>(313)</span>
                  </span>
                </label>
              </li>
            </ul>
          </fieldset>

          <button class="filter__submit button button--primery" type="submit">
            Применить
          </button>
          <button class="filter__reset button button--second" type="button" @click.prevent="reset">
            Сбросить
          </button>
        </form>
      </aside> -->
      <!-- новый! -->

      <aside class="filter">
        <form class="filter__form form" action="#" method="get" @submit.prevent="submit">
          <fieldset class="form__block">
            <legend class="form__legend">Цена</legend>
            <label class="form__label form__label--price">
              <input class="form__input" type="text" name="min-price" v-model.number="currentPriceFrom">
              <span class="form__value">От</span>
            </label>
            <label class="form__label form__label--price">
              <input class="form__input" type="text" name="max-price" v-model.number="currentPriceTo">
              <span class="form__value">До</span>
            </label>
          </fieldset>

          <fieldset class="form__block">
            <legend class="form__legend">Категория</legend>
            <label  class="form__label form__label--select">
              <select class="form__select"   name="category-select" v-model.number="currentCategoryId">
                <option value="0">Все категории</option>

                <option v-for="category in categories"
                :key="category.id"
                :value="category.id"
                >
                {{category.title}}</option>
              </select>
            </label>
          </fieldset>
          <fieldset class="form__block">
            <legend class="form__legend">Цвет</legend>

            <ColorPicker v-model="currentColor"/>

          </fieldset>

          <fieldset class="form__block">
            <legend class="form__legend">Материал</legend>
            <ul class="check-list">          
              <li class="check-list__item">
                <label class="check-list__label">
                  <input class="check-list__check sr-only" type="checkbox" name="material" value="лен">
                  <span class="check-list__desc">
                    лен 
                    <span>(3)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label">
                  <input class="check-list__check sr-only" type="checkbox" name="material" value="хлопок">
                  <span class="check-list__desc">
                    хлопок 
                    <span>(46)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label">
                  <input class="check-list__check sr-only" type="checkbox" name="material" value="шерсть">
                  <span class="check-list__desc">
                    шерсть 
                    <span>(20)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label">
                  <input class="check-list__check sr-only" type="checkbox" name="material" value="шелк">
                  <span class="check-list__desc">
                    шелк 
                    <span>(30)</span>
                  </span>
                </label>
              </li>
            </ul>
          </fieldset>

          <fieldset class="form__block">
            <legend class="form__legend">Коллекция</legend>
            <ul class="check-list">
              <li class="check-list__item">
                <label class="check-list__label">
                  <input class="check-list__check sr-only" type="checkbox" name="collection" value="лето" checked="">
                  <span class="check-list__desc">
                    лето 
                    <span>(2)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label">
                  <input class="check-list__check sr-only" type="checkbox" name="collection" value="зима">
                  <span class="check-list__desc">
                    зима 
                    <span>(53)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label">
                  <input class="check-list__check sr-only" type="checkbox" name="collection" value="весна">
                  <span class="check-list__desc">
                    весна 
                    <span>(24)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label">
                  <input class="check-list__check sr-only" type="checkbox" name="collection" value="осень">
                  <span class="check-list__desc">
                    осень 
                    <span>(30)</span>
                  </span>
                </label>
              </li>
            </ul>
          </fieldset>

          <button class="filter__submit button button--primery" type="submit">
            Применить
          </button>
          <button @click.prevent="reset"
            class="filter__reset  button button--second" type="button">
            Сбросить
          </button>
        </form>
      </aside>
</template>
<script>
import { defineComponent } from 'vue';
import axios from 'axios';
import { API_BASE_PATH } from '@/config';
import ColorPicker from './ColorPicker.vue';

export default defineComponent({
  props: ['priceTo', 'priceFrom', 'categoryId', 'color'],
  components: { ColorPicker },
  data() {
    return {
      currentPriceFrom: 0,
      currentPriceTo: 0,
      currentCategoryId: 0,
      categoriesData: null,
      currentColor: [],

    };
  },
  watch: {
    priceFrom(value) {
      this.currentPriceFrom = value;
    },
    priceTo(value) {
      this.currentPriceTo = value;
    },
    categoryId(value) {
      this.currentCategoryId = value;
    },
  },
  methods: {
    submit() {
      this.$emit('update:priceTo', this.currentPriceTo);
      this.$emit('update:priceFrom', this.currentPriceFrom);
      this.$emit('update:categoryId', this.currentCategoryId);
      this.$emit('update:color', this.currentColor);
    },
    reset() {
      this.$emit('update:priceTo', 0);
      this.$emit('update:priceFrom', 0);
      this.$emit('update:categoryId', 0);
      this.$emit('update:color', []);
    },
    loadCategories() {
      axios.get(API_BASE_PATH + '/api/productCategories').then(response => this.categoriesData= response.data)
    },
  },
  created() {
    this.loadCategories();
  },
  computed: {
    categories() {
      return this.categoriesData ? this.categoriesData.items : [];
    },
  },
});
</script>
<style>

</style>
