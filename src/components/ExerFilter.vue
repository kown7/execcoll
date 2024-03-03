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
    <div :class="{ hidden: !isRowVisible[1] }">dinmi mueter</div>
  </div>
</template>

<script>
import draggable from 'vuedraggable/src/vuedraggable'
import { filterExercises } from '../manager/ManagerDocs.ts'
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
