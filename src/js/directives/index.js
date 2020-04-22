import angular from "angular";

let directiveModule = angular.module("app.directive", []);

import TableHeaderDirective from "./table-header.directive";
directiveModule.directive(
  "tableHeaderDirective",
  () => new TableHeaderDirective()
);

import DateFormatDirective from "./data-format.directive";
directiveModule.directive("dateFormat", () => new DateFormatDirective());

export default directiveModule;
