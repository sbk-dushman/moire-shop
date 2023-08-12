<template>
      <header class="header">
        <div class="fixed-container header-container">
            <a href="" class="header__main-link">каталог</a>
            <svg  class="header__logo" width="116" height="34">
                            <use xlink:href="@/assets/svg/sprite.svg#moire-logo"></use>
                          </svg>
            <ul class="header-right">
                <li class="header__phone">
                  <a class="phone-link" href="tel:8 800 600 90 09">
                     8 800 600 90 09</a>
                  </li>
                <!-- <li><label>
                    <input class="search__input" type="text">
                    <button class="search__btn"> кнопка поиска</button>
                </label></li> -->
              <li>
                <CartIndicator/>
                </li>
            </ul>
        </div>
    </header>
</template>
<script>
import CartIndicator from '@/components/CartIndicator.vue';

export default {
  components: { CartIndicator },
};
</script>
<style>
</style>
