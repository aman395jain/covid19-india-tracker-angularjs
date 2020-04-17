export default class Tags {
  constructor(AppConstants, $http) {
    "ngInject";

    this._AppConstants = AppConstants;
    this._http = $http;
  }

  getAll() {
    return this._http({
      url: this._AppConstants.api + "/tags",
      method: "GET",
    }).then((res) => res.data.tags);
  }

  getCovidData() {
    return this._http
      .get("https://api.covid19india.org/data.json")
      .then((res) => res);
  }
}
