// src/types/global.d.ts
import { StateTree } from 'pinia';

declare global {
  interface Window {
    __INITIAL_STATE__: StateTree;
  }
}