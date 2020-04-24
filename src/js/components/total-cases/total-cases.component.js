class TotalCasesComponentCtrl {
  constructor($scope) {
    "ngInject";
    this.dateWithLocale;
  }

  $onInit() {
    // console.log("in the component--->>", this);
    this.changeHook({ value: "us-en" });
  }

  dateFn(value) {
    // console.log("in the testFn---", value);
    this.dateWithLocale = value;
  }
}

const TotalCases = {
  bindings: { totalCasesData: "=", territoriesAffected: "<", changeHook: "&" },
  controller: TotalCasesComponentCtrl,
  templateUrl: "components/total-cases/total-cases.html",
};

export default TotalCases;
