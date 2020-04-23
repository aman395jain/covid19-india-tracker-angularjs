import angular from "angular";

// Create the module where our functionality can attach to
let servicesModule = angular.module("app.services", []);
let stateServicesModule = angular.module("app.stateServices", []);

import Covid19DataService from "./covid19Data.service";
servicesModule.service("Covid19DataService", Covid19DataService);

import StateTotalDataService from "./stateTotalData.service";
servicesModule.service("StateTotalDataService", StateTotalDataService);

import StateWiseData from "./covid19StatewiseData.service";
stateServicesModule.service("StateWiseDataService", StateWiseData);

export default { servicesModule, stateServicesModule };
