import json from "../assets/data.json"

export enum FilterItemsType {
  All = 0,
  Exercise = 1,
  Template,
}

export interface IFilterItems {
  itemType?: FilterItemsType;
  uuid?: string;
  author?: string;
  searchString?: string;
}

export interface IResultItem {
  uuid: string;
  author?: string;
  title?: string;
  headers?: Array<string>;  // string of uuid
  license?: string
  content: string
}

class ExerciseItem implements IResultItem {
  uuid: string;
  author: string;
  title: string;
  headers?: Array<string>;  // string of uuid
  license?: string
  content: string
}

export function filterItems(filter: Array<IFilterItems> = null): Array<IResultItem> {
  // expose managed state as return value
  if (filter.length == 1 && filter[0].itemType == FilterItemsType.Exercise) {
    return json['exercises']
  }
  var retArr: IResultItem[];
  for (var filteritem of filter) {
    console.log(filteritem.uuid);
  }
  throw Error("Invalid Filter");
}
