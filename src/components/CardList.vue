<script setup lang="ts">
import { SearchResult } from '@/types/types';
import Card from './Card.vue';

defineProps<{
  results: SearchResult[];
  isNotFound: boolean;
  isLoading: boolean;
}>();
</script>
<template>
  <div class="card-list">
    <div v-if="isLoading" class="card-list__loading">
      Загрузка
    </div>
    <div v-else-if="isNotFound" class="card-list__empty">
      Ничего не найдено
    </div>
    <Card
      v-else
      v-for="result in results"
      :key="result.place_id"
      :result="result"
      class="card-list__item"
    />
  </div>
</template>
<style lang="scss" scoped>
.card-list {
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  &__item {
    width: 100%;
  }

  &__empty {
    font-size: 18px;
    color: $danger-color;
  }

  &__loading {

    font-size: 18px;
    color: $help-color;

    &::after {
      content: '';
      animation: loadingDots 1.5s infinite;
    }
  }

  @keyframes loadingDots {
    0% {
      content: '';
    }
    25% {
      content: '.';
    }
    50% {
      content: '..';
    }
    75% {
      content: '...';
    }
    100% {
      content: '';
    }
  }
}
</style>