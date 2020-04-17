class CovidStateComponentCtrl {
  constructor() {
    "ngInject";
  }

  $onChanges() {
    // console.log("in component--->>>", this.covidData);
  }
}

const StateTable = {
  bindings: { covidData: "=" },
  controller: CovidStateComponentCtrl,
  templateUrl: "components/covid-state-table/covid-state.html",
  style: "components/covid-state-table/covid-state.css",
};

export default StateTable;
