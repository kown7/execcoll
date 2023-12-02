// Storage for selection of exercises
// Inspired by:
// https://dev.to/carlomigueldy/getting-started-with-vue-3-pinia-store-typescript-by-building-a-grocery-list-app-19km
import { defineStore } from 'pinia'

export type RootState = {
  items: []
}

export const useMainStore = defineStore({
  id: 'selectExercises',
  state: () =>
    ({
      items: [],
      templateStr: []
    }) as RootState,

  actions: {
    set(items) {
      if (!items) return

      this.items.length = 0
      this.items.push(...items)
    },

    add(item) {
      if (!item) return

      this.items.push(item)
    },

    setTemplate(items: Array<string>) {
      if (!items) return

      this.templateStr.length = 0
      this.templateStr.push(...items)
    }
  }
})
