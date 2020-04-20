export default class SortTable {
  constructor(value) {
    "ngInject";
  }

  static SortTableFactory(input) {
    console.log("in the filter--->", input);
    let sortFilter = new SortTable(input);
    return sortFilter;
  }
}
