export default class DateFormatDirective {
  constructor() {
    this.template =
      "<span>{{dateCtrl.dateInput}}</span> <span>{{dateCtrl.localeData}}</span>";
    this.restrict = "A";
    this.scope = {
      dateInput: "=",
      localeData: "@",
    };
    this.controller = DateFormatController;
    this.controllerAs = "dateCtrl";
    this.bindToController = true;
  }

  link(scope, ele, attr, controller) {
    // controller.dateInput = controller.dateInput + controller.dateLocale;
    ele.css("background", "#FFBF00");
    ele.css("color", "#ffffff");
    console.log("linking foo", scope.dateCtrl);
  }
}

class DateFormatController {
  constructor() {}

  $onInit() {}
}
