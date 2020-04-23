function StateDataConfig($stateProvider) {
  "ngInject";

  $stateProvider.state("app.stateData", {
    url: "/state/:stateName",
    controller: "StateDataCtrl",
    controllerAs: "$stateCtrl",
    templateUrl: "stateData/stateData.html",
    resolve: {
      covidStateWiseData: function (StateWiseDataService) {
        return StateWiseDataService.getStateWiseData().then((data) => data);
      },
    },
  });
}

export default StateDataConfig;
