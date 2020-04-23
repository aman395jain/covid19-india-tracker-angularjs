class StateDataCtrl {
  constructor(
    $rootScope,
    covidStateWiseData,
    $stateParams,
    StateTotalDataService
  ) {
    this.urlParam = $stateParams;
    $rootScope.countryName = "India";

    this._stateTotalDataService = StateTotalDataService;
    console.log(
      "covidStateWiseDatadddd---",
      this._stateTotalDataService.stateTotalCases
    );
  }
}

export default StateDataCtrl;
