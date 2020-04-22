export default class Covid19DataService {
  constructor($http) {
    "ngInject";

    this._http = $http;
  }

  getCovidData() {
    return this._http
      .get("https://api.covid19india.org/data.json")
      .then((res) => res);
  }
}
