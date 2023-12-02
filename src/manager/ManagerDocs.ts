import { createPdf } from '../access/AccessPDF'
import {
  filterExerciseItems,
  filterTemplateItems,
  IFilterItems,
  FilterItemsType
} from '../access/AccessItems'
import { composeDocument } from '../engines/EngineItemComposer'

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

export interface IExerciseItem {
  uuid: string
  author: string
  title: string
  headers?: Array<string> // string of uuid
  license?: string
  content: string
}

export interface ITemplateItem {
  uuid: string
  title: string
  author?: string
  fields?: Array<string> // string of fields
  license?: string
  content: string
}

export interface IRetDoc {
  document: any
  exception?: any
}

export interface IFilterExercises {
  author?: string
}

export interface IFilterTemplates {
  author?: string
}

export function filterExercises(filter?: IFilterExercises): Array<IExerciseItem> {
  const lfilter: Array<IFilterItems> = [
    {
      itemType: FilterItemsType.Exercise
    }
  ]
  return filterExerciseItems(lfilter)
}

export function filterTemplates(filter?: IFilterTemplates): Array<ITemplateItem> {
  const lfilter: Array<IFilterItems> = [
    {
      itemType: FilterItemsType.Template
    }
  ]
  return filterTemplateItems(lfilter)
}

export async function generateDocument(cfg: IDocCfg) {
  let documentString = composeDocument(cfg)
  return createPdf(documentString)
}
