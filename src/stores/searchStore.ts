import { defineStore } from 'pinia';
import axios from 'axios';
import { SearchResult, SearchStore } from '../types/types';
import { SEARCH } from '@/constants/api';

export const useSearchStore = defineStore('search', {
  state: (): SearchStore => ({
    searchResults: [] as SearchResult[],
    searchQuery: '',
    isNotFound: false,
    isLoading: false,
  }),
  actions: {
    async fetchSearchResults() {
      if (this.searchQuery.trim() === '') {
        this.searchResults = [];
        this.isNotFound = false;
        return;
      }

      this.isLoading = true;
      this.isNotFound = false;

      try {
        const response = await axios.get<SearchResult[]>(SEARCH, {
          params: {
            q: this.searchQuery.split(' ').join('&'),
            format: 'json',
            limit: 10,
          },
        });

        this.searchResults = response.data;
        this.isNotFound = response.data.length === 0;
      } catch (error) {
        console.error('Ошибка', error);
        this.isNotFound = true;
      } finally {
        this.isLoading = false;
      }
    },
  },
});