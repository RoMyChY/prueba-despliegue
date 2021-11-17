(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-step2-step2-module"],{

/***/ "6422":
/*!*********************************************************!*\
  !*** ./src/app/pages/register/step2/step2.component.ts ***!
  \*********************************************************/
/*! exports provided: Step2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step2Component", function() { return Step2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class Step2Component {
    constructor(router) {
        this.router = router;
        this.opc = 1;
    }
    ngOnInit() {
    }
    show() {
        console.log(this.opc);
    }
    next() {
        this.router.navigate(['register/step3']);
    }
}
Step2Component.ɵfac = function Step2Component_Factory(t) { return new (t || Step2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
Step2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Step2Component, selectors: [["app-step2"]], decls: 71, vars: 8, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-6", "mt-4", "mb-5", "mr-5", "ml-5", "d-flex", "justify-content-center"], [1, "col-12", "d-flex", "justify-content-center"], [1, "circle", "d-flex", "justify-content-center", "align-items-center"], [1, "number", "colorYellow"], [1, "col-12", "mt-3", "text"], [1, "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-center", "text"], [1, "text-center", 3, "ngSubmit"], [1, "yellow", "mb-4"], [1, "col-6", "mb-4"], [1, "contOpc"], [1, "mb-0", "pl-1", "d-flex", "justify-content-start", "textOpc"], [1, "mb-0", "pl-1", "moneyOpc"], [1, "mb-0", "pl-1", "d-flex", "justify-content-start", "subTextOpc"], [1, "form-check"], ["type", "radio", "name", "opc", "id", "opc", "checked", "", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange", "change"], ["for", "exampleRadios1", 1, "form-check-label"], ["type", "radio", "name", "opc", "id", "opc", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange", "change"], [1, "col-6"], ["type", "submit", 1, "btn", "my-4", "btn-block"], ["routerLink", "/register/login", 1, "yellow"]], template: function Step2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Please choose the plan you want to take to start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " saving in Crypto. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function Step2Component_Template_form_ngSubmit_17_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "HAPPY SUBSCRIPTIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "$5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Per month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Step2Component_Template_input_ngModelChange_30_listener($event) { return ctx.opc = $event; })("change", function Step2Component_Template_input_change_30_listener() { return ctx.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Premium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "$10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Per month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Step2Component_Template_input_ngModelChange_41_listener($event) { return ctx.opc = $event; })("change", function Step2Component_Template_input_change_41_listener() { return ctx.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Golden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "$20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Per month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Step2Component_Template_input_ngModelChange_52_listener($event) { return ctx.opc = $event; })("change", function Step2Component_Template_input_change_52_listener() { return ctx.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Platinum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "$100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Per month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Step2Component_Template_input_ngModelChange_63_listener($event) { return ctx.opc = $event; })("change", function Step2Component_Template_input_change_63_listener() { return ctx.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "NEXT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1)("ngModel", ctx.opc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2)("ngModel", ctx.opc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3)("ngModel", ctx.opc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4)("ngModel", ctx.opc);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["@font-face {\n  font-family: RobotoLight;\n  src: url('Roboto-Light.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: RobotoBold;\n  src: url('Roboto-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: RobotoRegular;\n  src: url('Roboto-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: TitilliumWebBold;\n  src: url('TitilliumWeb-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: TitilliumWebSemiBold;\n  src: url('TitilliumWeb-SemiBold.ttf') format(\"truetype\");\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #FF9400;\n  border-color: #FF9400;\n  font-family: RobotoBold;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 0.1rem #FF8300;\n  color: white;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%]::marker {\n  color: #FF9400;\n  font-size: 12px;\n}\n[_nghost-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   input[type=radio][_ngcontent-%COMP%]:after {\n  width: 15px;\n  height: 15px;\n  border-radius: 15px;\n  top: -11px;\n  left: -1px;\n  position: relative;\n  background-color: white;\n  content: \"\";\n  display: inline-block;\n  visibility: visible;\n  border: 2px solid #191938;\n}\n[_nghost-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked:after {\n  width: 15px;\n  height: 15px;\n  border-radius: 15px;\n  top: -11px;\n  left: -1px;\n  position: relative;\n  background-color: #006eb3;\n  content: \"\";\n  display: inline-block;\n  visibility: visible;\n  border: 2px solid #191938;\n}\n[_nghost-%COMP%]   .yellow[_ngcontent-%COMP%] {\n  color: #FF9400;\n}\n[_nghost-%COMP%]   .circle[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 100%;\n  border: solid 5px;\n  background: white;\n}\n[_nghost-%COMP%]   .circle[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  font-family: TitilliumWebSemiBold;\n  font-size: 59px;\n  color: #FF9400;\n}\n[_nghost-%COMP%]   .contOpc[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: solid 4px #191919;\n  background: white;\n}\n[_nghost-%COMP%]   .contOpc[_ngcontent-%COMP%]   .moneyOpc[_ngcontent-%COMP%] {\n  color: #FF9400;\n  font-family: RobotoBold;\n  font-size: 50px;\n}\n[_nghost-%COMP%]   .contOpc[_ngcontent-%COMP%]   .textOpc[_ngcontent-%COMP%] {\n  color: #191938;\n  font-family: RobotoBold;\n  font-size: 28px;\n}\n[_nghost-%COMP%]   .contOpc[_ngcontent-%COMP%]   .subTextOpc[_ngcontent-%COMP%] {\n  color: #FF9400;\n  font-family: RobotoRegular;\n  font-size: 18px;\n}\n[_nghost-%COMP%]   .text[_ngcontent-%COMP%] {\n  color: white;\n  font-family: RobotoRegular;\n  font-size: 22px;\n}\n@media (max-width: 576px) {\n  [_nghost-%COMP%]   .contOpc[_ngcontent-%COMP%]   .moneyOpc[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n  [_nghost-%COMP%]   .contOpc[_ngcontent-%COMP%]   .textOpc[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  [_nghost-%COMP%]   .contOpc[_ngcontent-%COMP%]   .subTextOpc[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcZm9udHMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3RlcDIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSwrQ0FBQTtBQ0NKO0FERUE7RUFDSSx1QkFBQTtFQUNBLDhDQUFBO0FDQUo7QURHQTtFQUNJLDBCQUFBO0VBQ0EsaURBQUE7QUNESjtBRElBO0VBQ0ksNkJBQUE7RUFDQSxvREFBQTtBQ0ZKO0FES0E7RUFDSSxpQ0FBQTtFQUNBLHdEQUFBO0FDSEo7QUFkSTtFQUNJLHlCQ0lDO0VESEQscUJDR0M7RURGRCx1QkFBQTtBQWdCUjtBQWJJO0VBQ0ksZ0NBQUE7RUFDQSxZQ1pBO0FEMkJSO0FBWkk7RUFDSSxjQ1BDO0VEUUQsZUFBQTtBQWNSO0FBWEk7RUFDSSxlQUFBO0FBYVI7QUFWSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJDL0JBO0VEZ0NBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFZUjtBQVRJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkMvQkc7RURnQ0gsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQVdSO0FBUkk7RUFDSSxjQzVDQztBRHNEVDtBQVBJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFHQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJDL0RBO0FEd0VSO0FBUFE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQzNESDtBRG9FVDtBQUxJO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQzNFQTtBRGtGUjtBQUxRO0VBQ0ksY0NyRUg7RURzRUcsdUJBQUE7RUFDQSxlQUFBO0FBT1o7QUFKUTtFQUNJLGNDekVMO0VEMEVLLHVCQUFBO0VBQ0EsZUFBQTtBQU1aO0FBSFE7RUFDSSxjQ2pGSDtFRGtGRywwQkFBQTtFQUNBLGVBQUE7QUFLWjtBQURJO0VBQ0ksWUNqR0E7RURrR0EsMEJBQUE7RUFDQSxlQUFBO0FBR1I7QUFBSTtFQUVRO0lBQ0ksZUFBQTtFQUNkO0VBRVU7SUFDSSxlQUFBO0VBQWQ7RUFHVTtJQUNJLGVBQUE7RUFEZDtBQUNGIiwiZmlsZSI6InN0ZXAyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvTGlnaHQ7XHJcbiAgICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvUm9ib3RvLUxpZ2h0LnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90b0JvbGQ7XHJcbiAgICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvUm9ib3RvLUJvbGQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvUmVndWxhcjtcclxuICAgIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tUmVndWxhci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBUaXRpbGxpdW1XZWJCb2xkO1xyXG4gICAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1RpdGlsbGl1bVdlYi1Cb2xkLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFRpdGlsbGl1bVdlYlNlbWlCb2xkO1xyXG4gICAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1RpdGlsbGl1bVdlYi1TZW1pQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9MaWdodDtcbiAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1MaWdodC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9Cb2xkO1xuICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvUm9ib3RvLUJvbGQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogUm9ib3RvUmVndWxhcjtcbiAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFRpdGlsbGl1bVdlYkJvbGQ7XG4gIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9UaXRpbGxpdW1XZWItQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBUaXRpbGxpdW1XZWJTZW1pQm9sZDtcbiAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1RpdGlsbGl1bVdlYi1TZW1pQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuOmhvc3QgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOTQwMDtcbiAgYm9yZGVyLWNvbG9yOiAjRkY5NDAwO1xuICBmb250LWZhbWlseTogUm9ib3RvQm9sZDtcbn1cbjpob3N0IGJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMXJlbSAjRkY4MzAwO1xuICBjb2xvcjogd2hpdGU7XG59XG46aG9zdCBsaTo6bWFya2VyIHtcbiAgY29sb3I6ICNGRjk0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbjpob3N0IGlucHV0W3R5cGU9cmFkaW9dIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgaW5wdXRbdHlwZT1yYWRpb106YWZ0ZXIge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0b3A6IC0xMXB4O1xuICBsZWZ0OiAtMXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxOTE5Mzg7XG59XG46aG9zdCBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkOmFmdGVyIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgdG9wOiAtMTFweDtcbiAgbGVmdDogLTFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2ZWIzO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxOTE5Mzg7XG59XG46aG9zdCAueWVsbG93IHtcbiAgY29sb3I6ICNGRjk0MDA7XG59XG46aG9zdCAuY2lyY2xlIHtcbiAgd2lkdGg6IDcycHg7XG4gIGhlaWdodDogNzJweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMDAlO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbjpob3N0IC5jaXJjbGUgLm51bWJlciB7XG4gIGZvbnQtZmFtaWx5OiBUaXRpbGxpdW1XZWJTZW1pQm9sZDtcbiAgZm9udC1zaXplOiA1OXB4O1xuICBjb2xvcjogI0ZGOTQwMDtcbn1cbjpob3N0IC5jb250T3BjIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IHNvbGlkIDRweCAjMTkxOTE5O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbjpob3N0IC5jb250T3BjIC5tb25leU9wYyB7XG4gIGNvbG9yOiAjRkY5NDAwO1xuICBmb250LWZhbWlseTogUm9ib3RvQm9sZDtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuOmhvc3QgLmNvbnRPcGMgLnRleHRPcGMge1xuICBjb2xvcjogIzE5MTkzODtcbiAgZm9udC1mYW1pbHk6IFJvYm90b0JvbGQ7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cbjpob3N0IC5jb250T3BjIC5zdWJUZXh0T3BjIHtcbiAgY29sb3I6ICNGRjk0MDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9SZWd1bGFyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG46aG9zdCAudGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFJvYm90b1JlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICA6aG9zdCAuY29udE9wYyAubW9uZXlPcGMge1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgfVxuICA6aG9zdCAuY29udE9wYyAudGV4dE9wYyB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG4gIDpob3N0IC5jb250T3BjIC5zdWJUZXh0T3BjIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn0iLCIvL0NvbG9yc1xyXG4kd2hpdGU6IHdoaXRlO1xyXG4kYmxhY2s6IGJsYWNrO1xyXG4kYmxhY2stdHdvOiAjMTkxOTE5O1xyXG4kZ3JheTogI0M5QzlDOTtcclxuJGdyYXktYmFubmVyOiAjRURFREVEO1xyXG4kZ3JheS1mb250OiAjNEM0QzRDO1xyXG4kZ3JheS1zaGFkb3c6ICNCQkJCQkI7XHJcbiRncmF5LWZvcm06ICNFRkVGRUY7XHJcbiRncmF5LXRhYmxlOiAjQzdDN0NDO1xyXG4keWVsbG93OiAjRkY5NDAwO1xyXG4kb3JhbmdlOiAjRkY4MzAwO1xyXG4kYmx1ZTogIzE5MTkzODtcclxuJGJsdWUtbGlnaHQ6ICMwRjYzODc7XHJcbiRibHVlLXNreTogIzAwOURGRjtcclxuJGJsdWUtdHdvOiAjMDA2ZWIzO1xyXG4kcmVkOiAjQzIwRDE5O1xyXG5cclxuXHJcbi8vU2l6ZXNcclxuJGhlYWRlci1oZWlnaHQ6IDExMHB4O1xyXG4kZm9vdGVyLWhlaWdodDogMTEwcHg7XHJcbiRzaWRlbmF2LXdpZHRoOiA5MHB4O1xyXG4kc2lkZW5hdi1vcGVuLXdpZHRoOiAyNTBweDtcclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Step2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-step2',
                templateUrl: './step2.component.html',
                styleUrls: ['./step2.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "bxlG":
/*!******************************************************!*\
  !*** ./src/app/pages/register/step2/step2.module.ts ***!
  \******************************************************/
/*! exports provided: Step2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step2Module", function() { return Step2Module; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _step2_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./step2-routing.module */ "gpUg");
/* harmony import */ var _step2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./step2.component */ "6422");






class Step2Module {
}
Step2Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Step2Module });
Step2Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function Step2Module_Factory(t) { return new (t || Step2Module)(); }, imports: [[
            _step2_routing_module__WEBPACK_IMPORTED_MODULE_3__["Step2RoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Step2Module, { declarations: [_step2_component__WEBPACK_IMPORTED_MODULE_4__["Step2Component"]], imports: [_step2_routing_module__WEBPACK_IMPORTED_MODULE_3__["Step2RoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Step2Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _step2_routing_module__WEBPACK_IMPORTED_MODULE_3__["Step2RoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                declarations: [
                    _step2_component__WEBPACK_IMPORTED_MODULE_4__["Step2Component"]
                ],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "gpUg":
/*!**************************************************************!*\
  !*** ./src/app/pages/register/step2/step2-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: Step2RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step2RoutingModule", function() { return Step2RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _step2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step2.component */ "6422");





const routes = [
    {
        path: '',
        component: _step2_component__WEBPACK_IMPORTED_MODULE_2__["Step2Component"]
    }
];
class Step2RoutingModule {
}
Step2RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Step2RoutingModule });
Step2RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Step2RoutingModule_Factory(t) { return new (t || Step2RoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Step2RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Step2RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-register-step2-step2-module.js.map