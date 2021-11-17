(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-step1-step1-module"],{

/***/ "9JRQ":
/*!**************************************************************!*\
  !*** ./src/app/pages/register/step1/step1-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: Step1RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step1RoutingModule", function() { return Step1RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _step1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step1.component */ "PLo6");





const routes = [
    {
        path: '',
        component: _step1_component__WEBPACK_IMPORTED_MODULE_2__["Step1Component"]
    }
];
class Step1RoutingModule {
}
Step1RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Step1RoutingModule });
Step1RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Step1RoutingModule_Factory(t) { return new (t || Step1RoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Step1RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Step1RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "HuL4":
/*!******************************************************!*\
  !*** ./src/app/pages/register/step1/step1.module.ts ***!
  \******************************************************/
/*! exports provided: Step1Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step1Module", function() { return Step1Module; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _step1_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./step1-routing.module */ "9JRQ");
/* harmony import */ var _step1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./step1.component */ "PLo6");






class Step1Module {
}
Step1Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Step1Module });
Step1Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function Step1Module_Factory(t) { return new (t || Step1Module)(); }, imports: [[
            _step1_routing_module__WEBPACK_IMPORTED_MODULE_3__["Step1RoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Step1Module, { declarations: [_step1_component__WEBPACK_IMPORTED_MODULE_4__["Step1Component"]], imports: [_step1_routing_module__WEBPACK_IMPORTED_MODULE_3__["Step1RoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Step1Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _step1_routing_module__WEBPACK_IMPORTED_MODULE_3__["Step1RoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                declarations: [
                    _step1_component__WEBPACK_IMPORTED_MODULE_4__["Step1Component"]
                ],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "PLo6":
/*!*********************************************************!*\
  !*** ./src/app/pages/register/step1/step1.component.ts ***!
  \*********************************************************/
/*! exports provided: Step1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step1Component", function() { return Step1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_interfaces_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/interfaces/User */ "LifX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class Step1Component {
    constructor(router) {
        this.router = router;
        this.passConfirm = '';
        this.userInfo = new src_interfaces_User__WEBPACK_IMPORTED_MODULE_1__["User"];
    }
    ngOnInit() {
        console.log(this.userInfo.email);
    }
    passCheck() {
        if (this.userInfo.pass == this.passConfirm) {
            return true;
        }
        else {
            return false;
        }
    }
    next() {
        if (this.passCheck() == true) {
            this.router.navigate(['register/step2']);
        }
        else {
            console.log('La contraseña no es la misma');
        }
    }
}
Step1Component.ɵfac = function Step1Component_Factory(t) { return new (t || Step1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
Step1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Step1Component, selectors: [["app-step1"]], decls: 41, vars: 4, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-6", "mt-4", "mb-5", "mr-5", "ml-5", "d-flex", "justify-content-center"], [1, "col-12", "d-flex", "justify-content-center"], [1, "circle", "d-flex", "justify-content-center", "align-items-center"], [1, "number", "colorYellow"], [1, "col-12", "mt-3", "text"], [1, "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-center", "text"], ["name", "newForm", 1, "text-center", 3, "ngSubmit"], ["form", "ngForm"], [1, "yellow", "mb-4"], ["type", "email", "id", "email", "name", "email", "placeholder", "EMAIL", "required", "", 1, "form-control", "mb-4", 3, "ngModel", "ngModelChange"], ["type", "password", "id", "password", "name", "password", "placeholder", "PASSWORD", "required", "", 1, "form-control", "mb-4", 3, "ngModel", "ngModelChange"], ["type", "password", "id", "passwordConfirm", "name", "passwordConfirm", "placeholder", "CONFIRM PASSWORD", "required", "", 1, "form-control", "mb-4", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "my-4", "btn-block", 3, "disabled"], ["routerLink", "login", 1, "yellow"]], template: function Step1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " You can save bitcoin for at least $5 per month.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Start saving now to escape from fiat money. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " By subscribing to your monthly bitcoin saving");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " account, we will charge your credit card through");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Stripe. Please take into account your country's");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " regulation and remember that your bitcoin will be");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " in our custody. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "form", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function Step1Component_Template_form_ngSubmit_28_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "WELCOME TO HAPPY BITCOIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Step1Component_Template_input_ngModelChange_32_listener($event) { return ctx.userInfo.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Step1Component_Template_input_ngModelChange_33_listener($event) { return ctx.userInfo.pass = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Step1Component_Template_input_ngModelChange_34_listener($event) { return ctx.passConfirm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "NEXT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Sign in");
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
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userInfo.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userInfo.pass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.passConfirm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["@font-face {\n  font-family: RobotoLight;\n  src: url('Roboto-Light.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: RobotoBold;\n  src: url('Roboto-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: RobotoRegular;\n  src: url('Roboto-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: TitilliumWebBold;\n  src: url('TitilliumWeb-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: TitilliumWebSemiBold;\n  src: url('TitilliumWeb-SemiBold.ttf') format(\"truetype\");\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #C9C9C9;\n  text-align: center;\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]:-moz-placeholder {\n  \n  color: #C9C9C9;\n  text-align: center;\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: RobotoBold;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #FF9400;\n  border-color: #FF9400;\n  font-family: RobotoBold;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 0.1rem #FF8300;\n  color: white;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  box-shadow: none;\n  color: #191938;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%]::marker {\n  color: #FF9400;\n  font-size: 12px;\n}\n[_nghost-%COMP%]   .yellow[_ngcontent-%COMP%] {\n  color: #FF9400;\n}\n[_nghost-%COMP%]   .circle[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 100%;\n  border: solid 5px;\n  background: white;\n}\n[_nghost-%COMP%]   .circle[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  font-family: TitilliumWebSemiBold;\n  font-size: 59px;\n  color: #FF9400;\n}\n[_nghost-%COMP%]   .text[_ngcontent-%COMP%] {\n  color: white;\n  font-family: RobotoRegular;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcZm9udHMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3RlcDEuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSwrQ0FBQTtBQ0NKO0FERUE7RUFDSSx1QkFBQTtFQUNBLDhDQUFBO0FDQUo7QURHQTtFQUNJLDBCQUFBO0VBQ0EsaURBQUE7QUNESjtBRElBO0VBQ0ksNkJBQUE7RUFDQSxvREFBQTtBQ0ZKO0FES0E7RUFDSSxpQ0FBQTtFQUNBLHdEQUFBO0FDSEo7QUFkSTtFQUNJLGNDRkQ7RURHQyxrQkFBQTtBQWdCUjtBQWJJO0VBQ0ksZ0JBQUE7RUFDQSxjQ1JEO0VEU0Msa0JBQUE7QUFlUjtBQVpJO0VBQ0ksdUJBQUE7QUFjUjtBQVhJO0VBQ0kseUJDWEM7RURZRCxxQkNaQztFRGFELHVCQUFBO0FBYVI7QUFWSTtFQUNJLGdDQUFBO0VBQ0EsWUMzQkE7QUR1Q1I7QUFUSTtFQUNRLGdCQUFBO0VBQ0EsY0NyQkw7QURnQ1A7QUFSSTtFQUNJLGNDM0JDO0VENEJELGVBQUE7QUFVUjtBQVBJO0VBQ0ksY0NoQ0M7QUR5Q1Q7QUFOSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBR0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQ25EQTtBRDJEUjtBQU5RO0VBQ0ksaUNBQUE7RUFDQSxlQUFBO0VBQ0EsY0MvQ0g7QUR1RFQ7QUFKSTtFQUNJLFlDN0RBO0VEOERBLDBCQUFBO0VBQ0EsZUFBQTtBQU1SIiwiZmlsZSI6InN0ZXAxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvTGlnaHQ7XHJcbiAgICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvUm9ib3RvLUxpZ2h0LnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90b0JvbGQ7XHJcbiAgICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvUm9ib3RvLUJvbGQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvUmVndWxhcjtcclxuICAgIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tUmVndWxhci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBUaXRpbGxpdW1XZWJCb2xkO1xyXG4gICAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1RpdGlsbGl1bVdlYi1Cb2xkLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFRpdGlsbGl1bVdlYlNlbWlCb2xkO1xyXG4gICAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1RpdGlsbGl1bVdlYi1TZW1pQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9MaWdodDtcbiAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1MaWdodC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9Cb2xkO1xuICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvUm9ib3RvLUJvbGQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogUm9ib3RvUmVndWxhcjtcbiAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFRpdGlsbGl1bVdlYkJvbGQ7XG4gIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9UaXRpbGxpdW1XZWItQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBUaXRpbGxpdW1XZWJTZW1pQm9sZDtcbiAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1RpdGlsbGl1bVdlYi1TZW1pQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuOmhvc3QgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNDOUM5Qzk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IDotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOC0gKi9cbiAgY29sb3I6ICNDOUM5Qzk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IGlucHV0IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90b0JvbGQ7XG59XG46aG9zdCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5NDAwO1xuICBib3JkZXItY29sb3I6ICNGRjk0MDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9Cb2xkO1xufVxuOmhvc3QgYnV0dG9uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xcmVtICNGRjgzMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjpob3N0IGJ1dHRvbjpkaXNhYmxlZCwgOmhvc3QgYnV0dG9uW2Rpc2FibGVkXSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGNvbG9yOiAjMTkxOTM4O1xufVxuOmhvc3QgbGk6Om1hcmtlciB7XG4gIGNvbG9yOiAjRkY5NDAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG46aG9zdCAueWVsbG93IHtcbiAgY29sb3I6ICNGRjk0MDA7XG59XG46aG9zdCAuY2lyY2xlIHtcbiAgd2lkdGg6IDcycHg7XG4gIGhlaWdodDogNzJweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMDAlO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbjpob3N0IC5jaXJjbGUgLm51bWJlciB7XG4gIGZvbnQtZmFtaWx5OiBUaXRpbGxpdW1XZWJTZW1pQm9sZDtcbiAgZm9udC1zaXplOiA1OXB4O1xuICBjb2xvcjogI0ZGOTQwMDtcbn1cbjpob3N0IC50ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogUm9ib3RvUmVndWxhcjtcbiAgZm9udC1zaXplOiAyMnB4O1xufSIsIi8vQ29sb3JzXHJcbiR3aGl0ZTogd2hpdGU7XHJcbiRibGFjazogYmxhY2s7XHJcbiRibGFjay10d286ICMxOTE5MTk7XHJcbiRncmF5OiAjQzlDOUM5O1xyXG4kZ3JheS1iYW5uZXI6ICNFREVERUQ7XHJcbiRncmF5LWZvbnQ6ICM0QzRDNEM7XHJcbiRncmF5LXNoYWRvdzogI0JCQkJCQjtcclxuJGdyYXktZm9ybTogI0VGRUZFRjtcclxuJGdyYXktdGFibGU6ICNDN0M3Q0M7XHJcbiR5ZWxsb3c6ICNGRjk0MDA7XHJcbiRvcmFuZ2U6ICNGRjgzMDA7XHJcbiRibHVlOiAjMTkxOTM4O1xyXG4kYmx1ZS1saWdodDogIzBGNjM4NztcclxuJGJsdWUtc2t5OiAjMDA5REZGO1xyXG4kYmx1ZS10d286ICMwMDZlYjM7XHJcbiRyZWQ6ICNDMjBEMTk7XHJcblxyXG5cclxuLy9TaXplc1xyXG4kaGVhZGVyLWhlaWdodDogMTEwcHg7XHJcbiRmb290ZXItaGVpZ2h0OiAxMTBweDtcclxuJHNpZGVuYXYtd2lkdGg6IDkwcHg7XHJcbiRzaWRlbmF2LW9wZW4td2lkdGg6IDI1MHB4O1xyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Step1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-step1',
                templateUrl: './step1.component.html',
                styleUrls: ['./step1.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-register-step1-step1-module.js.map