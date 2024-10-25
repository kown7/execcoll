<template>
  <!-- Grid Layout for some rows -->
  <div>
    <ExerTagFilter />

    <div>
      <button @click="toggleRowVisibility(1)" class="text-black focus:outline-none">
        <span class="symbol" :class="{ hidden: !isRowVisible[1] }">&#x25B2;</span>
        <span class="symbol" :class="{ hidden: isRowVisible[1] }">&#x25BC;</span>
      </button>
      <h3 class="text-lg">Exercises Configuration</h3>
    </div>

    <div class="flex">
      <div class="w-1/2 p-4">
        <div class="border p-4 bg-gray-100 text-gray-800" :class="{ hidden: !isRowVisible[1] }">
          <h2 class="text-lg font-bold">Available Items</h2>
          <draggable class="list-group" :list="list2" group="people" itemKey="name">
            <template #item="{ element, index }">
              <div
                class="p-2 bg-white border mb-2 cursor-move"
                @dblclick="switchElement(`${element.uuid}`, this.list2, this.list1)"
              >
                {{ element.title }} <br />
                <img :src="`previews/${element.preview}`" />
              </div>
            </template>
          </draggable>
        </div>
      </div>

      <div class="w-1/2 p-4">
        <div class="border p-4 bg-gray-100 text-gray-800" :class="{ hidden: !isRowVisible[1] }">
          <h2 class="text-lg font-bold">Selected Items</h2>
          <draggable class="list-group" :list="list1" group="people" @change="log" itemKey="name">
            <template #item="{ element }">
              <div
                class="p-2 bg-white border mb-2 cursor-move"
                @dblclick="switchElement(`${element.uuid}`, this.list1, this.list2)"
              >
                <img :src="`previews/${element.preview}`" />
              </div>
            </template>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable/src/vuedraggable'
import { filterExercises } from '../manager/ManagerDocs.ts'
import { useMainStore } from '../store/exercises'

import ExerTagFilter from '../components/ExerFilter.vue'

export default {
  name: 'ExerMenu',
  display: 'Exercises Selector Menu',
  order: 1,
  components: {
    draggable,
    ExerTagFilter
  },

  data() {
    return {
      list1: [],
      list2: filterExercises({}).exercises,
      isRowVisible: {
        1: true
      },
      mainStore: useMainStore()
    }
  },

  watch: {
    'mainStore.fex.week': {
      handler() {
        this.list2 = filterExercises(this.mainStore.fex).exercises
      },

      immediate: true,
      deep: true
    }
  },

  methods: {
    toggleRowVisibility: function (rowNumber) {
      this.isRowVisible[rowNumber] = !this.isRowVisible[rowNumber]
    },
    log: function (evt) {
      this.mainStore.set(this.list1)
    },
    switchElement: function (uuid, src, dest) {
      console.log('Switch: ', uuid)
      let destTmp = src.filter((item) => item.uuid == uuid)
      let tmp = src.filter((item) => item.uuid != uuid)
      src.length = 0
      src.push(...tmp)
      dest.push(...destTmp)
    }
  }
}
</script>
