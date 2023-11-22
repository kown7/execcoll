import json from "./assets/data.json"

export interface docCfgTemplate {
  uuid: string;
  fields: Map<string, string>;
}

export interface docCfgItem {
  uuid: string;
  subElements: Array<string>;  // string of uuid
}

export interface docCfg {
  itemSelection: Array<docCfgItem>;
  template: docCfgTemplate;
}

export interface ExerciseItem {
  uuid: string;
  author: string;
  title: string;
  headers: Array<string>;  // string of uuid
  license?: string
  content: string
}

export interface RetDoc {
  document: any;
  exception?: any;
}

export interface FilterExercises {
  author?: string;
}

export function filterExercises(filter?: FilterExercises): Array<ExerciseItem> {
  // expose managed state as return value
  return json['exercises']
}

export function filterTemplates(filter?: FilterTemplates): Array<TemplateItem> {
  // expose managed state as return value
  return json['templates']
}

export function generateDocument(cfg: docCfg) {
  return null;
}
