// Engine to stitch the various items together
import {
  IFilterItems,
  FilterItemsType,
  filterExerciseItems,
  filterHeadersItems,
  filterTemplateItems,
  TemplateItem
} from '../access/AccessItems'

export interface IDocCfgTemplate {
  uuid: string
  fields: Map<string, string>
}

export interface IDocCfgItem {
  uuid: string
  subElements: Array<string> // string of uuid
}

export interface IDocCfg {
  itemSelection: Array<IDocCfgItem>
  template: IDocCfgTemplate
}

export function composeDocument(cfg: IDocCfg): string {
  var filterItemsArr: IFilterItems[] = []
  for (var filteritem of cfg.itemSelection) {
    filterItemsArr.push({
      itemType: FilterItemsType.Exercise,
      uuid: filteritem.uuid
    })
  }
  var items = filterExerciseItems(filterItemsArr)
  var itemsString = items.map((_) => _.content).join('\n')

  let filterHeaderUnique: string[] = []
  for (var item of items) {
    for (var headeritem of item.headers) {
      filterHeaderUnique.push(headeritem)
    }
  }
  filterHeaderUnique = Array.from(new Set(filterHeaderUnique))

  let filterHeaderArr: IFilterItems[] = []
  for (let item of filterHeaderUnique) {
    filterHeaderArr.push({
      itemType: FilterItemsType.Header,
      uuid: item
    })
  }
  var headers = filterHeadersItems(filterHeaderArr)
  var headersString = headers.map((_) => _.content).join('\n')

  var filterTemplate: IFilterItems[] = [
    {
      itemType: FilterItemsType.Template,
      uuid: cfg.template.uuid
    }
  ]
  let template: TemplateItem = filterTemplateItems(filterTemplate)[0]

  let docStr: string = template.content
  Object.entries(template.fields).forEach(([key, value], index) => {
    if (value == 'EXERCISES') {
      let s = '((* ' + value + ' *))'
      docStr = docStr.replace(s, itemsString)
    } else if (value == 'HEADERS') {
      let s = '((* ' + value + ' *))'
      docStr = docStr.replace(s, headersString)
    } else {
      let s = '((* ' + value + ' *))'
      docStr = docStr.replace(s, 'ASDF\n')
      console.log(key, value, index)
    }
  })

  console.log(docStr)
  return docStr
}
