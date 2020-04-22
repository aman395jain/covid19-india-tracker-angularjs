export default class TableHeaderDirective {
  constructor() {
    "ngInject";
    this.template = "<div>{{ctrl.headname}}</div>";
    this.restrict = "A";
    this.scope = {
      headname: "@",
    };

    this.controller = TableHeaderDirectiveController;
    this.controllerAs = "ctrl";
    this.bindToController = true;
  }

  // Directive compile function
  //   compile(ele, scope) {
  //     console.log("in directive in compile", scope.ctrl);
  //   }

  // Directive link function
  link(scope, ele, attrs) {
    // console.log("in directive in link", scope.ctrl);
    ele.addClass("header-color");
    if (scope.ctrl.headname === "Confirmed Cases") {
      ele.css("color", "#ff0000");
    } else if (scope.ctrl.headname === "Active Cases") {
      ele.css("color", "#017cff");
    } else if (scope.ctrl.headname === "Recovered") {
      ele.css("color", "#5cb85c");
    } else if (scope.ctrl.headname === "Deceased") {
      ele.css("color", "#6c757d");
    }
  }
}

// Directive's controller
class TableHeaderDirectiveController {
  constructor() {}
}
