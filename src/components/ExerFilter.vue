<template>
  <!-- Grid Layout for some rows -->
  <div>
    <div>
      <button @click="toggleRowVisibility(1)" class="text-black focus:outline-none">
        <span class="symbol" :class="{ hidden: !isRowVisible[1] }">&#x25B2;</span>
        <span class="symbol" :class="{ hidden: isRowVisible[1] }">&#x25BC;</span>
      </button>
      <h3 class="text-lg">Exercises Filter</h3>
    </div>
    <div :class="{ hidden: !isRowVisible[1] }">
      <div>
        Semesterwoche
        <input
          v-model="mainStore.fex.week"
          id="semwoche"
          class="shadow appearance-none border rounded w-20 py-2 px-3 mx-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable/src/vuedraggable'
import { useMainStore } from '../store/exercises'

export default {
  name: 'ExerTagFilter',
  order: 1,
  components: {
    draggable
  },

  data() {
    return {
      isRowVisible: {
        1: true
      },
      mainStore: useMainStore()
    }
  },

  methods: {
    toggleRowVisibility: function (rowNumber) {
      this.isRowVisible[rowNumber] = !this.isRowVisible[rowNumber]
    }
  }
}
</script>
