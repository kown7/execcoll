// Storage for selection of exercises, templates, ...
// Generate the DocCfg
// Inspired by:
// https://dev.to/carlomigueldy/getting-started-with-vue-3-pinia-store-typescript-by-building-a-grocery-list-app-19km
import { defineStore } from 'pinia'
import { IDocCfg, IDocCfgItem, IDocCfgTemplate } from '../manager/ManagerDocs'

class DocCfgTemplate implements IDocCfgTemplate {
  uuid: string
  fields: Map<string, string>
}

class DocCfgItem implements IDocCfgItem {
  uuid: string
  subElements: Array<string> // string of uuid
}

class DocCfg implements IDocCfg {
  itemSelection: Array<DocCfgItem>
  template: DocCfgTemplate
}

export type RootState = {
  items: []
  templateUuid: string
  templateStr: []
}

export const useMainStore = defineStore({
  id: 'selectExercises',
  state: () =>
    ({
      items: [],
      templateUuid: '',
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

    setTemplateOptions(items: Map<string, string>) {
      if (!items) return

      this.templateStr.length = 0
      for (let [key, value] of items) {
        if (value) {
          this.templateStr.push([key, value])
        }
      }
    },

    generateConfig(): IDocCfg {
      let tpl = new DocCfgTemplate()
      tpl.uuid = this.templateUuid
      tpl.fields = new Map(this.templateStr)

      let docCfgItems: DocCfgItem[] = []
      for (var item of this.items) {
        let i = new DocCfgItem()
        i.uuid = item.uuid
        i.subElements = []
        docCfgItems.push(i)
      }

      let cfg = new DocCfg()
      cfg.template = tpl
      cfg.itemSelection = docCfgItems

      console.log(cfg)
      // throw Error('yolo')
      return cfg
    }
  }
})
