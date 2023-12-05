<template>
  <div class="grid gap-4">
    <label class="block text-sm font-medium text-gray-700 mb-2"> Select an option: </label>
    <select
      v-model="selectedOption"
      @change="updateStrings"
      class="w-full border p-2 rounded-md text-gray-700"
    >
      <option v-for="(option, index) in options" :key="index" :value="index">
        A {{ index }} {{ option['title'] }}
      </option>
    </select>

    <div class="mt-4">
      <p class="text-gray-700">Resulting Strings:</p>
      <div v-for="(stringValue, stringKey) in strings" :key="stringKey" class="mt-2">
        <label v-if="stringValue[1]" class="block text-sm font-medium text-gray-700"
          >{{ stringKey }} {{ stringValue[1] }}:</label
        >
        <input
          v-if="stringValue[1]"
          v-model="stringsArr[stringValue[0]]"
          type="text"
          @change="updateStringMap"
          class="w-full border p-2 text-gray-700"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { filterTemplates } from '../manager/ManagerDocs.ts'
import { useMainStore } from '../store/exercises'

export default {
  data() {
    return {
      selectedOption: -1,
      options: filterTemplates({}),
      strings: null,
      stringsArr: {},
      mainStore: useMainStore()
    }
  },
  methods: {
    updateStrings() {
      const selectedOptionData = this.options[this.selectedOption]
      if (selectedOptionData) {
        const strings = selectedOptionData.strings || new Map()
        this.mainStore.templateUuid = selectedOptionData.uuid
        this.strings = new Map(selectedOptionData.fields)
      } else {
        this.strings = new Map()
      }
    },
    updateStringMap() {
      let i = new Map()
      for (let [key, value] of Object.entries(this.stringsArr)) {
        i.set(key, value)
      }
      this.mainStore.setTemplateOptions(i)
    }
  }
}
</script>
