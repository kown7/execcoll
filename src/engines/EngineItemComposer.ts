// Engine to stitch the various items together
import { IFilterItems, filterItems } from "../access/AccessItems"
import demostring from "../manager/demo.txt?raw"

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

export function composeDocument(cfg: IDocCfg): string {
  var filterItemsArr: IFilterItems[] = [];
  console.log(cfg);
  for (var filteritem of cfg.itemSelection) {
    filterItemsArr.push({
      uuid: filteritem.uuid
    });
  }
  console.log(filterItemsArr);
  var items = filterItems(filterItemsArr);
  var itemsString = array.map(_ => _.content).join('\n');
  console.log(itemsString);
  docString = "";
  return demostring; // docString;
}
