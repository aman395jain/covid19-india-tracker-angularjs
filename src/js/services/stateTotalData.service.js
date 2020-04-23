export default class StateTotalDataService {
  constructor() {
    this.stateTotalCases;
  }

  getTotalCases() {
    return this.stateTotalCases;
  }

  setTotalCases(totalCases) {
    this.stateTotalCases = totalCases;
  }
}
