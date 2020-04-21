export default class SortTable {
  constructor() {}

  sortValues(input, colName, revFlag) {
    let sortArray = [];

    if (input && colName) {
      angular.forEach(input, (value) => {
        sortArray.push(value);
      });

      sortArray.sort((a, b) => {
        if (revFlag) {
          return b[colName] - a[colName];
        } else {
          return a[colName] - b[colName];
        }
      });
    } else {
      sortArray = input;
    }
    // console.log("testArray", testArray);
    return sortArray;
  }

  static sortTableFactory(value, param, param1) {
    let sortTableObj = new SortTable();
    return sortTableObj.sortValues(value, param, param1);
  }
}
