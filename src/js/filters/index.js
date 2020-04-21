import angular from "angular";

let filterModule = angular.module("app.filter", []);

import SortTable from "./sortTable.filter";
filterModule.filter("sortTable", () => SortTable.sortTableFactory);

export default filterModule;
