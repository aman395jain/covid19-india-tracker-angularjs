import angular from "angular";

// Create the module where our functionality can attach to
let servicesModule = angular.module("app.services", []);

import Covid19DataService from "./covid19Data.service";
servicesModule.service("Covid19DataService", Covid19DataService);

export default servicesModule;
