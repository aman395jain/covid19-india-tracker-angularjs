class TotalCasesComponentCtrl {
  constructor($scope) {
    "ngInject";
  }

  $onInit() {
    console.log("in the component--->>", this);
    this.changeHook({ value: "us-en" });
  }

  localeFn(value) {
    console.log("djdjjdjd", value);
  }
}

const TotalCases = {
  bindings: { totalCasesData: "=", statesAffected: "<", changeHook: "&" },
  controller: TotalCasesComponentCtrl,
  templateUrl: "components/total-cases/total-cases.html",
};

export default TotalCases;
