import json from '../assets/data.json'

export enum FilterItemsType {
  All = 0,
  Exercise = 1,
  Template,
  Header
}

export interface IFilterItems {
  itemType?: FilterItemsType
  uuid?: string
  author?: string
  searchString?: string
}

interface IResultItem {
  uuid: string
  author?: string
  title?: string
  headers?: Array<string> // string of uuid
  license?: string
  content: string
}

export class ExerciseItem implements IResultItem {
  uuid: string
  author: string
  title: string
  headers?: Array<string> // string of uuid
  license?: string
  content: string
}

export class HeaderItem implements IResultItem {
  uuid: string
  author: string
  content: string
}

export class TemplateItem implements IResultItem {
  uuid: string
  title: string
  author?: string
  fields?: Array<string> // string of fields
  license?: string
  content: string
}

export function filterExerciseItems(filter: Array<IFilterItems>): Array<ExerciseItem> {
  var result: ExerciseItem[] = []
  for (var filterItem of filter) {
    for (var item of json['exercises']) {
      if (
        (!filterItem.uuid || item.uuid == filterItem.uuid) &&
        (!filterItem.author || item.author == filterItem.author)
      ) {
        var r = new ExerciseItem()
        r.uuid = item.uuid
        r.author = item.author
        r.title = item.title
        r.headers = item.headers
        r.license = item.license
        r.content = item.content
        result.push(r)
      }
    }
  }
  return result
}

export function filterHeadersItems(filter: Array<IFilterItems>): Array<HeaderItem> {
  var result: HeaderItem[] = []
  for (var filterItem of filter) {
    for (var item of json['headers']) {
      if (
        (!filterItem.uuid || item.uuid == filterItem.uuid) &&
        (!filterItem.author || item.author == filterItem.author)
      ) {
        var r = new HeaderItem()
        r.uuid = item.uuid
        r.author = item.author
        r.content = item.content
        result.push(r)
      }
    }
  }
  return result
}

export function filterTemplateItems(filter: Array<IFilterItems>): Array<TemplateItem> {
  // expose managed state as return value
  var result: TemplateItem[] = []
  for (var filterItem of filter) {
    for (var item of json['templates']) {
      if (!filterItem.uuid || item.uuid == filterItem.uuid) {
        let r = new TemplateItem()
        r.uuid = item.uuid
        r.title = item.title
        r.author = item.author
        r.fields = item.fields
        r.license = item.license
        r.content = item.content
        result.push(r)
      }
    }
  }
  return result
}
