import json from "../assets/data.json"
import { createPdf } from "../access/AccessPDF.ts"
import demostring from "./demo.txt?raw"

export interface ManagerDocs {
  docCfgTemplate: {
    uuid: string;
    fields: Map<string, string>;
  }

  docCfgItem: {
    uuid: string;
    subElements: Array<string>;  // string of uuid
  }

  docCfg: {
    itemSelection: Array<docCfgItem>;
    template: docCfgTemplate;
  }

  ExerciseItem: {
    uuid: string;
    author: string;
    title: string;
    headers: Array<string>;  // string of uuid
    license?: string
    content: string
  }

  RetDoc: {
    document: any;
    exception?: any;
  }

  FilterExercises: {
    author?: string;
  }
}

export function filterExercises(filter?: FilterExercises): Array<ExerciseItem> {
  // expose managed state as return value
  return json['exercises']
}

export function filterTemplates(filter?: FilterTemplates): Array<TemplateItem> {
  // expose managed state as return value
  return json['templates']
}

export async function generateDocument(cfg: docCfg) {
  return createPdf(demostring);
}
