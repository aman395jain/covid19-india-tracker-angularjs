import angular from "angular";

let filterModule = angular.module("app.filter", []);

import SortTable from "./sortTable.filter";
SortTable.SortTableFactory.$inject = ["input"];
filterModule.filter("sortTable", () => SortTable.SortTableFactory);

export default filterModule;
