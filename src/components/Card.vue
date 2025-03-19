<script setup lang="ts">
import { SearchResult } from '@/types/types';

defineProps<{
  result: SearchResult;
}>();
</script>
<template>
  <div class="card">
    <h3 class="card__title">{{ result.display_name }}</h3>
    <p class="card__type">{{ result.type }}</p>
  </div>
</template>
<style lang="scss" scoped>
.card {
  max-width: 680px;
  width: 100%;
  border: 1px solid $help-secondary-color;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  cursor: pointer;
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba($dark-color, 0.2);
    transform: translateY(-5px);
    background-color: $light-secondary-color;
  }

  &__title {
    font-size: 18px;
    margin-bottom: 8px;
  }

  &__type {
    font-size: 14px;
    color: $help-color;
  }
}
</style>