export default class StateWiseData {
  constructor($http) {
    "ngInject";

    this._http = $http;
  }

  getStateWiseData() {
    return this._http
      .get("https://api.covid19india.org/state_district_wise.json")
      .then((data) => data);
  }
}
