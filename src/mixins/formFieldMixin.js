import BaseFormField from '@/components/BaseFormField.vue';

export default {
  props: ['title', 'error', 'placeholder', 'modelValue'],
  components: { BaseFormField },
  computed: {
    dataValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
      this.$emit('update:modelValue', value);
      },
    },
  },
};
