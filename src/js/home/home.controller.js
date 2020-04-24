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
    let covidDataDisplay = [];

    angular.forEach(this._covidDataAPI.data.statewise, (data, index) => {
      data["territory"] = data.state;
      covidDataDisplay.push(data);
    });

    this.covidData = covidDataDisplay;
  }

  // changeList(newList) {
  //   this.self.$broadcast("setListTo", newList);
  // }
}

export default HomeCtrl;
