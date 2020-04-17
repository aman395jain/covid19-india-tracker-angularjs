class HomeCtrl {
  constructor(User, Tags, AppConstants, $scope) {
    "ngInject";

    this.appName = AppConstants.appName;
    this.self = $scope;

    // Get list of all tags
    Tags.getAll().then((tags) => {
      this.tagsLoaded = true;
      this.tags = tags;
    });

    Tags.getCovidData().then((res) => {
      console.log("ggg-->>", res.data.statewise);
      this.covidData = res.data.statewise;
    });

    // Set current list to either feed or all, depending on auth status.
    this.listConfig = {
      type: User.current ? "feed" : "all",
    };
  }

  changeList(newList) {
    this.self.$broadcast("setListTo", newList);
  }
}

export default HomeCtrl;
