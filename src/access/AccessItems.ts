import json from "../assets/data.json"

export enum FilterItemsType {
  All = 0,
  Exercise = 1,
  Template,
  Header,
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
  license?: string;
  content: string;
}

class HeaderItem implements IResultItem {
  uuid: string;
  author: string;
  content: string;
}

class TemplateItem implements IResultItem {
  uuid: string;
  title: string;
  author?: string;
  fields?: Array<string>;  // string of fields
  license?: string;
  content: string;
}

export function filterItems(filter: Array<IFilterItems>): Array<IResultItem> {
  // expose managed state as return value
  var result: IResultItem[] = [];
  console.log(filter);
  for (var filterItem of filter) {
    if (filterItem.itemType == FilterItemsType.Exercise) {
      for (var item of json['exercises']) {
	if (((!filterItem.uuid) || (item.uuid == filterItem.uuid)) &&
	  ((!filterItem.author) || (item.author == filterItem.author))) {
	    var r = new ExerciseItem();
	    r.uuid = item.uuid;
	    r.author = item.author;
	    r.title = item.title;
	    r.headers = item.headers;
	    r.license = item.license;
	    r.content = item.content;
	    result.push(r);
	  }
      }
    }
    if (filterItem.itemType == FilterItemsType.Header) {
      for (var item of json['headers']) {
	if (((!filterItem.uuid) || (item.uuid == filterItem.uuid)) &&
	  ((!filterItem.author) || (item.author == filterItem.author))) {
	    var r = new HeaderItem();
	    r.uuid = item.uuid;
	    r.author = item.author;
	    r.content = item.content;
	    result.push(r);
	  }
      }
    }
    else if (filterItem.itemType == FilterItemsType.Template) {
      for (var item of json['templates']) {
	if (((!filterItem.uuid) || (item.uuid == filterItem.uuid))) {
	  var r = new TemplateItem();
	  r.uuid = item.uuid;
	  r.title = item.title;
	  r.author = item.author;
	  r.fields = item.fields;
	  r.license = item.license;
	  r.content = item.content;
	  result.push(r);
	}
      }
    }
  }
  console.log(result);
  return result;

  throw Error("Invalid Filter");
}
