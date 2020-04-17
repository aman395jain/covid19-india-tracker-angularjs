class TotalCasesComponentCtrl {
  constructor() {
    "ngInject";
  }
}

const TotalCases = {
  bindings: { totalCasesData: "=" },
  controller: TotalCasesComponentCtrl,
  templateUrl: "components/total-cases/total-cases.html",
};

export default TotalCases;
