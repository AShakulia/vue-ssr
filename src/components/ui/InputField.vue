<script setup lang="ts">

defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
  (event: 'search'): void;
}>();

const updateValue = (event: Event): void => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};

const onEnter = (): void => {
  emit('search');
};
</script>
<template>
  <input
    class="input-field"
    type="text"
    :value="modelValue"
    @input="updateValue"
    @keyup.enter="onEnter"
    placeholder="Введите запрос и нажмите Enter..."
  />
</template>
<style lang="scss" scoped>
.input-field {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid $help-secondary-color;
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &::placeholder {
    font-size: 16px;
    font-weight: 300;
    color: $help-color;
  }

  &:focus {
    background-color: $light-color;
    border-color: $success-color;
    outline: none;
    box-shadow: 0 0 5px rgba($success-color, 0.7);
  }
}
</style>