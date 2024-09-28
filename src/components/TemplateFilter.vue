<template>
  <div class="grid gap-4">
    <div class="flex justify-between items-center">
      <h3 class="text-lg">Template Configuration</h3>
      <button @click="toggleRowVisibility(1)" class="text-white focus:outline-none">
        <span class="symbol" :class="{ hidden: !isRowVisible[1] }">&#x25B2;</span>
        <span class="symbol" :class="{ hidden: isRowVisible[1] }">&#x25BC;</span>
      </button>
    </div>

    <label
      class="block text-sm font-medium text-gray-700 mb-2"
      :class="{ hidden: !isRowVisible[1] }"
    >
      Select output language:
    </label>
    <select
      v-model="selectedLanguage"
      @change="updateStrings"
      class="w-full border p-2 rounded-md text-gray-700"
      :class="{ hidden: !isRowVisible[1] }"
    >
      <option v-for="(language, index) in languageoptions" :key="index" :value="index">
        {{ language['desc'] }}
      </option>
    </select>

    <label
      class="block text-sm font-medium text-gray-700 mb-2"
      :class="{ hidden: !isRowVisible[1] }"
    >
      Select a template:
    </label>
    <select
      v-model="selectedOption"
      @change="updateStrings"
      class="w-full border p-2 rounded-md text-gray-700"
      :class="{ hidden: !isRowVisible[1] }"
    >
      <option v-for="(option, index) in options" :key="index" :value="index">
        {{ index }} &ndash; {{ option['title'] }}
      </option>
    </select>

    <div class="mt-4" :class="{ hidden: !isRowVisible[1] }">
      <p class="text-gray-700">Resulting Strings:</p>
      <div v-for="(stringValue, stringKey) in strings" :key="stringKey" class="mt-2">
        <label v-if="stringValue[1]" class="block text-sm font-medium text-gray-700">
          {{ stringValue[1] }}:
        </label>
        <input
          v-if="stringValue[1]"
          v-model="stringsArr[stringValue[0]]"
          type="text"
          v-on:input="updateStringMap"
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
      languageoptions: [
        { key: 'en', desc: 'English' },
        { key: 'de', desc: 'Deutsch' }
      ],
      selectedLanguage: 1,
      strings: null,
      stringsArr: {},
      mainStore: useMainStore(),
      isRowVisible: {
        1: true
      }
    }
  },
  methods: {
    updateStrings() {
      const selectedOptionData = this.options[this.selectedOption]
      if (selectedOptionData) {
        const strings = selectedOptionData.strings || new Map()
        this.mainStore.templateUuid = selectedOptionData.uuid
        this.mainStore.langCode = this.languageoptions[this.selectedLanguage]['key']
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
    },
    toggleRowVisibility: function (rowNumber) {
      this.isRowVisible[rowNumber] = !this.isRowVisible[rowNumber]
    }
  }
}
</script>
