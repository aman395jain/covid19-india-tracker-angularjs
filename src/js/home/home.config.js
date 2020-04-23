function HomeConfig($stateProvider) {
  "ngInject";

  $stateProvider.state("app.home", {
    url: "/",
    controller: "HomeCtrl",
    controllerAs: "$ctrl",
    templateUrl: "home/home.html",
    title: "Covid19-Tracker",
    resolve: {
      covidDataAPI: function (Covid19DataService) {
        return Covid19DataService.getCovidData().then((data) => data);
      },
    },
  });
}

export default HomeConfig;
