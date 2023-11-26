import { createPdf } from "../access/AccessPDF"
import { filterItems, IFilterItems, FilterItemsType } from "../access/AccessItems"
import { composeDocument } from "../engines/EngineItemComposer"


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

export interface IExerciseItem {
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

export function filterExercises(filter?: IFilterExercises): Array<IExerciseItem> {
	// expose managed state as return value
	const lfilter: Array<IFilterItems> = [{
		itemType: FilterItemsType.Exercise,
	}];
	return filterItems(lfilter);
}

export async function generateDocument(cfg: IDocCfg) {
	let documentString = composeDocument(cfg);
	return createPdf(documentString);
}
