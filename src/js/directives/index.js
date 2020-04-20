import angular from "angular";

let directiveModule = angular.module("app.directive", []);

import TableHeaderDirective from "./table-header.directive";
directiveModule.directive(
  "tableHeaderDirective",
  () => new TableHeaderDirective()
);

export default directiveModule;
