export default class Covid19DataService {
  constructor(AppConstants, $http) {
    "ngInject";

    this._AppConstants = AppConstants;
    this._http = $http;
  }

  getCovidData() {
    return this._http
      .get("https://api.covid19india.org/data.json")
      .then((res) => res);
  }
}
