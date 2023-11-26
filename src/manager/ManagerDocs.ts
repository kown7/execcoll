import json from "../assets/data.json"
import { createPdf } from "../access/AccessPDF"
import demostring from "./demo.txt?raw"

export interface IDocCfgTemplate {
	uuid: string;
	fields: Map<string, string>;
}

export interface IDocCfgItem {
	uuid: string;
	subElements: Array<string>;  // string of uuid
}

export interface IDocCfg {
	itemSelection: Array<IDocCfgItem>;
	template: IDocCfgTemplate;
}

export interface ExerciseItem {
	uuid: string;
	author: string;
	title: string;
	headers?: Array<string>;  // string of uuid
	license?: string
	content: string
}

export interface IRetDoc {
	document: any;
	exception?: any;
}

export interface IFilterExercises {
	author?: string;
}

export function filterExercises(filter?: IFilterExercises): Array<ExerciseItem> {
	// expose managed state as return value
	return json['exercises']
}

//export function filterTemplates(filter?: FilterTemplates): Array<TemplateItem> {
//	// expose managed state as return value
//	return json['templates']
//}

export async function generateDocument(cfg: IDocCfg) {
	return createPdf(demostring);
}
