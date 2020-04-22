class HomeCtrl {
  constructor($scope, $rootScope, covidDataAPI) {
    "ngInject";

    this.self = $scope;

    this.covidData = covidDataAPI.data.statewise;

    console.log("dataNeeded---", covidDataAPI);

    this.self.$broadcast("myCustomEvent", "Data to send");

    $rootScope.countryName = "India";
  }

  // changeList(newList) {
  //   this.self.$broadcast("setListTo", newList);
  // }
}

export default HomeCtrl;
