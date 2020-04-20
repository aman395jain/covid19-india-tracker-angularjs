class CovidStateComponentCtrl {
  constructor() {
    "ngInject";
    this.columnName;
    this.reverse = false;
  }

  $onChanges() {
    // console.log("in component--->>>", this.covidData);
  }

  reverseSorting(value) {
    this.columnName = value;
    // console.log("in the reverseSorting", this.columnName);
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
