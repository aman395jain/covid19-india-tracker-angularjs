class AppHeaderCtrl {
  constructor($rootScope) {
    "ngInject";

    this.countryName = $rootScope.countryName;
  }
}

let AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: "layout/header.html",
};

export default AppHeader;
