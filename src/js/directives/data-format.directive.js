export default class DateFormatDirective {
  constructor() {
    // this.template =
    //   "<span>{{dateCtrl.dateInput}}</span>";
    this.restrict = "A";
    this.scope = {
      dateInput: "=",
      localeData: "@",
      formattedDate: "&",
    };
    this.controller = DateFormatController;
    this.controllerAs = "dateCtrl";
    this.bindToController = true;
  }

  link(scope, ele, attr, controller) {
    // ele.css("background", "#FFBF00");
    // ele.css("color", "#373a3c");
    // ele.css('font-size', '14px')
    // ele.css('font-weight', '600')
    ele.addClass("date-format");
    // console.log("linking foo", scope);
  }
}

class DateFormatController {
  constructor() {}

  $onInit() {
    let dateValues = this.dateInput.split(" ");
    let dateArray = dateValues[0].split("/");
    let month = this.formatMonth(dateArray[1]);

    let formatDate = dateArray[0] + " " + month;
    let formatTime =
      dateValues[1].split(":")[0] + ":" + dateValues[1].split(":")[1];
    let formattedDate = formatDate + ", " + formatTime;

    this.dateInput = formattedDate + " " + this.localeData;
    this.formattedDate({ data: this.dateInput });
  }

  formatMonth(month) {
    let fMonth;
    switch (month) {
      case "01":
        fMonth = "Jan";
        break;
      case "02":
        fMonth = "feb";
        break;
      case "03":
        fMonth = "Mar";
        break;
      case "04":
        fMonth = "Apr";
        break;
      case "05":
        fMonth = "May";
        break;
      case "06":
        fMonth = "Jun";
        break;
      case "07":
        fMonth = "Jul";
        break;
      case "08":
        fMonth = "Aug";
        break;
      case "09":
        fMonth = "Sept";
        break;
      case "10":
        fMonth = "Oct";
        break;
      case "11":
        fMonth = "Nov";
        break;
      case "12":
        fMonth = "Dec";
        break;
      default:
        fMonth = "No Month";
    }
    return fMonth;
  }
}
