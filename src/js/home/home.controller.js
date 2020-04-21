class HomeCtrl {
  constructor(Covid19DataService, AppConstants, $scope) {
    "ngInject";

    this.appName = AppConstants.appName;
    this.self = $scope;

    // Get list of all tags

    Covid19DataService.getCovidData().then((res) => {
      this.covidData = res.data.statewise;
    });

    // Set current list to either feed or all, depending on auth status.
    // this.listConfig = {
    //   type: User.current ? "feed" : "all",
    // };
  }

  // changeList(newList) {
  //   this.self.$broadcast("setListTo", newList);
  // }
}

export default HomeCtrl;
