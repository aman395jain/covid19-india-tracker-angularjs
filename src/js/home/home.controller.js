class HomeCtrl {
  constructor($scope, $rootScope, covidDataAPI) {
    "ngInject";

    this.self = $scope;
    this._covidDataAPI = covidDataAPI;

    this.covidData;

    this.self.$broadcast("myCustomEvent", "Data to send");

    this.tableHeaderNames = [
      "State/UT",
      "Confirmed Cases",
      "Active Cases",
      "Recovered",
      "Deceased",
      "Last Update",
    ];

    $rootScope.countryName = "India";
  }

  $onInit() {
    let testData = this._covidDataAPI.data.statewise;

    let gggg = [];

    angular.forEach(testData, (data, index) => {
      data["territory"] = data.state;
      gggg.push(data);
    });

    this.covidData = gggg;
  }

  // changeList(newList) {
  //   this.self.$broadcast("setListTo", newList);
  // }
}

export default HomeCtrl;
