import angular from "angular";

let stateDataModule = angular.module("app.stateData", ["app.stateServices"]);

import StateDataConfig from "./stateData.config";
stateDataModule.config(StateDataConfig);

import StateDataCtrl from "./stateData.controller";
stateDataModule.controller("StateDataCtrl", StateDataCtrl);

export default stateDataModule;
