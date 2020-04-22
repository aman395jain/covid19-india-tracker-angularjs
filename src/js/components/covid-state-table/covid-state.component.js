class CovidStateComponentCtrl {
  constructor() {
    "ngInject";
    this.columnName;
    this.reverse = false;
    this.language = "";
    this.attectedStates;
  }

  $onInit() {
    let count = 0;
    angular.forEach(this.covidData, (stateData, index) => {
      if (stateData.state !== "Total" && stateData.active > 0) {
        count = index + 1;
      }
    });
    this.attectedStates = count;
  }

  languageCode(value) {
    this.language = value;
    console.log("languageCode===>>>", value);
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
  bindings: { covidData: "=" },
  controller: CovidStateComponentCtrl,
  templateUrl: "components/covid-state-table/covid-state.html",
};

export default StateTable;
