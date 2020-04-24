class StateDataCtrl {
  constructor(
    $rootScope,
    covidStateWiseData,
    $state,
    $stateParams,
    StateTotalDataService
  ) {
    this._urlParam = $stateParams;
    this._state = $state;
    this._covidStateWiseData = covidStateWiseData;
    $rootScope.countryName = "India";
    this._stateTotalDataService = StateTotalDataService;

    this.totalStateData;
    this.districtData;
    this.totalAffected;
    this.distictDataToDisplay;

    this.tableHeaderNames = [
      "District/City",
      "Confirmed Cases",
      "Active Cases",
      "Recovered",
      "Deceased",
    ];
  }

  $onInit() {
    let count = 0;
    let stateDataToDisplay = [];

    this.totalStateData = this._stateTotalDataService.stateTotalCases;
    this.districtData = this._covidStateWiseData.data[this._urlParam.stateName];

    if (
      typeof this._stateTotalDataService.stateTotalCases == "undefined" ||
      typeof this.totalStateData == "undefined"
    ) {
      this._state.go("app.home");
    } else {
      this.totalStateData["territory"] = "Total";
      stateDataToDisplay.push(this.totalStateData);

      angular.forEach(this.districtData["districtData"], (data, index) => {
        data["districtName"] = index;
        data["deaths"] = data["deceased"];
        data["territory"] = index;
        stateDataToDisplay.push(data);
        // console.log("index---", index);

        if (index !== "Unknown" && !(index.indexOf("*") !== -1)) {
          count++;
        }
      });

      this.totalAffected = count;
      this.distictDataToDisplay = stateDataToDisplay;
      // console.log("covidStateWiseData---", this.distictDataToDisplay);
    }
  }
}

export default StateDataCtrl;
