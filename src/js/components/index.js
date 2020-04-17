import angular from "angular";

let componentsModule = angular.module("app.components", []);

import StateTable from "./covid-state-table/covid-state.component";
componentsModule.component("stateTable", StateTable);

import TotalCases from "./total-cases/total-cases.component";
componentsModule.component("totalCases", TotalCases);

export default componentsModule;
