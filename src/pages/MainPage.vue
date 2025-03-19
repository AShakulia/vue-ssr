<script setup lang="ts">
import { computed } from 'vue';
import { useSearchStore } from '@/stores/searchStore';
import InputField from '@/components/ui/InputField.vue';
import CardList from '@/components/CardList.vue';

const searchStore = useSearchStore();

const searchQuery = computed({
  get: () => searchStore.searchQuery,
  set: (value: string) => (searchStore.searchQuery = value),
});

const searchResults = computed(() => searchStore.searchResults);
const isNotFound = computed(() => searchStore.isNotFound);
const isLoading = computed(() => searchStore.isLoading);

const performSearch = (): void => {
  searchStore.fetchSearchResults();
};
</script>
<template>
  <div class="app">
    <h1 class="app__title">Поиск мест</h1>
    <InputField v-model="searchQuery" @search="performSearch" class="app__input" />
    <CardList
      :results="searchResults"
      :is-not-found="isNotFound"
      :is-loading="isLoading"
      class="app__card-list"
    />
  </div>
</template>
<style lang="scss" scoped>
.app {
  width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  box-sizing: border-box;

  &__title {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }
}
</style>