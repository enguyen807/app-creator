<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    <font-awesome-icon icon="user" size="sm"/>
    {{ label }} 
  </button>
</template>

<script lang="ts" setup>
import './Button.style.css';
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  /**
   * The label of the button
   */
  label: string,
    /**
   * size of the button
   */
   rounded?: boolean,
  /**
   * size of the button
   */
  size?: 'small' | 'medium' | 'large',
  /**
   * background color of the button
   */
  backgroundColor?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning',

}>(), { backgroundColor: 'primary' });

const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();

const classes = computed(() => ({
  'storybook-button': true,
  'storybook-button--rounded': props.rounded,
  [`storybook-button--${props.backgroundColor || 'primary'}`]: true,
  [`storybook-button--${props.size || 'large'}`]: true,
}));

const onClick = () => {
  emit("click", 1)
};

</script>