class CovidStateComponentCtrl {
  constructor($state, StateTotalDataService) {
    "ngInject";
    this.state = $state;
    this._stateTotalDataService = StateTotalDataService;

    this.columnName;
    this.reverse = false;
    this.language = "";
    this.affectedStates;
  }

  $onInit() {
    let count = 0;
    angular.forEach(this.covidData, (stateData, index) => {
      if (
        stateData.territory !== "Total" &&
        stateData.territory !== "Unknown" &&
        !(stateData.territory.indexOf("*") !== -1) &&
        stateData.confirmed > 0
      ) {
        count = index;
      }
    });
    console.log("in the comonent---", this.covidData);

    this.affectedStates = count;
  }

  navigateToStatesData(stateName) {
    let totalData;
    angular.forEach(this.covidData, (stateData, index) => {
      if (stateData.state === stateName) {
        totalData = stateData;
      }
    });
    this._stateTotalDataService.setTotalCases(totalData);
    this.state.go("app.stateData", { stateName });
  }

  languageCode(value) {
    this.language = value;
    // console.log("languageCode===>>>", value);
  }

  reverseSorting(value) {
    this.columnName = value;
    if (this.reverse) {
      this.reverse = false;
    } else {
      this.reverse = true;
    }
  }
}

const StateTable = {
  bindings: { covidData: "=", headerNames: "<" },
  controller: CovidStateComponentCtrl,
  templateUrl: "components/covid-state-table/covid-state.html",
};

export default StateTable;
