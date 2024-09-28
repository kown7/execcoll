import { createPdf } from '../access/AccessPDF'
import {
  filterExerciseItems,
  filterTemplateItems,
  IFilterItems,
  FilterItemsType
} from '../access/AccessItems'
import { composeDocument } from '../engines/EngineItemComposer'

export enum FileType {
  PDF = 'PDF',
  Source = 'SOURCE'
}

export interface IDocCfgTemplate {
  uuid: string
  fields: Map<string, string>
  isoLang: string
}

export interface IDocCfgItem {
  uuid: string
  subElements: Array<string> // string of uuid
}

export interface IDocCfg {
  itemSelection: Array<IDocCfgItem>
  template: IDocCfgTemplate
  docType: FileType
}

export interface IExerciseItem {
  uuid: string
  author: string
  title: string
  headers?: Array<string> // string of uuid
  license?: string
  content: string
}

export interface ITagItem {
  uuid: string
  tag: string
  selected: boolean
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

export interface IFilteredExercises {
  exercises: Array<IExerciseItem>
  tags: Array<ITagItem>
}

export interface IFilterTemplates {
  author?: string
}

class FilteredExercises implements IFilteredExercises {
  exercises: Array<IExerciseItem>
  tags: Array<ITagItem>

  constructor(exercises: Array<IExerciseItem>, tags: Array<ITagItem>) {
    this.exercises = exercises
    this.tags = tags
  }
}

export function filterExercises(filter?: IFilterExercises): IFilteredExercises {
  const lfilter: Array<IFilterItems> = [
    {
      itemType: FilterItemsType.Exercise
    }
  ]
  let exercises: Array<IExerciseItem> = filterExerciseItems(lfilter)
  let tags: Array<ITagItem> = []
  return new FilteredExercises(exercises, tags)
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
  if (cfg.docType == FileType.PDF) {
    return createPdf(documentString)
  } else if (cfg.docType == FileType.Source) {
    return documentString
  }
  throw Error('Wrong configuration')
}
