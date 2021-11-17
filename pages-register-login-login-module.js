(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-login-login-module"],{

/***/ "+EAq":
/*!******************************************************!*\
  !*** ./src/app/pages/register/login/login.module.ts ***!
  \******************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "MLfS");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "oob0");






class LoginModule {
}
LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function LoginModule_Factory(t) { return new (t || LoginModule)(); }, imports: [[
            _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]], imports: [_login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                declarations: [
                    _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
                ],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "MLfS":
/*!**************************************************************!*\
  !*** ./src/app/pages/register/login/login-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "oob0");





const routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }
];
class LoginRoutingModule {
}
LoginRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginRoutingModule });
LoginRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginRoutingModule_Factory(t) { return new (t || LoginRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ULEu":
/*!*******************************************************************!*\
  !*** ./src/app/pages/modals/forgot-pass/forgot-pass.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPassComponent", function() { return ForgotPassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ForgotPassComponent {
    constructor(activeModal, router) {
        this.activeModal = activeModal;
        this.router = router;
    }
    ngOnInit() { }
    closeModal() {
        this.activeModal.dismiss();
    }
    buttonAction() {
        console.log('Action');
    }
}
ForgotPassComponent.ɵfac = function ForgotPassComponent_Factory(t) { return new (t || ForgotPassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ForgotPassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotPassComponent, selectors: [["app-forgot-pass"]], inputs: { msg: "msg" }, decls: 12, vars: 0, consts: [[1, "container"], [1, "mr-5", "ml-5"], [1, "text-center", 3, "ngSubmit"], [1, "text-center", "mt-2", "mb-4", "title"], [1, "text-center", "msg"], ["type", "email", "id", "email", "name", "email", "placeholder", "EMAIL", "required", "", 1, "form-control", "mb-4"], ["type", "submit", 1, "btn", "my-4", "mb-4", "btn-block"]], template: function ForgotPassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotPassComponent_Template_form_ngSubmit_2_listener() { return ctx.buttonAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "FORGOT PASSWORD?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Please enter the email of the account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "you want to recover.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "SUBMIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\n  font-family: RobotoLight;\n  src: url('Roboto-Light.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: RobotoBold;\n  src: url('Roboto-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: RobotoRegular;\n  src: url('Roboto-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: TitilliumWebBold;\n  src: url('TitilliumWeb-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: TitilliumWebSemiBold;\n  src: url('TitilliumWeb-SemiBold.ttf') format(\"truetype\");\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #C9C9C9;\n  text-align: center;\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]:-moz-placeholder {\n  \n  color: #C9C9C9;\n  text-align: center;\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: RobotoBold;\n  border: 4px solid #191938;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #FF9400;\n  border-color: #FF9400;\n  color: #191938;\n  font-family: RobotoBold;\n  font-size: 22px;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 0.1rem #FF8300;\n  color: white;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #FF9400;\n  font-family: RobotoBold;\n  font-size: 25px;\n}\n[_nghost-%COMP%]   .msg[_ngcontent-%COMP%] {\n  color: #191938;\n  font-family: RobotoBold;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcZm9udHMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcZm9yZ290LXBhc3MuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSwrQ0FBQTtBQ0NKO0FERUE7RUFDSSx1QkFBQTtFQUNBLDhDQUFBO0FDQUo7QURHQTtFQUNJLDBCQUFBO0VBQ0EsaURBQUE7QUNESjtBRElBO0VBQ0ksNkJBQUE7RUFDQSxvREFBQTtBQ0ZKO0FES0E7RUFDSSxpQ0FBQTtFQUNBLHdEQUFBO0FDSEo7QUFmSTtFQUNJLGNDREQ7RURFQyxrQkFBQTtBQWlCUjtBQWRJO0VBQ0ksZ0JBQUE7RUFDQSxjQ1BEO0VEUUMsa0JBQUE7QUFnQlI7QUFiSTtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7QUFlUjtBQVpJO0VBQ0kseUJDWEM7RURZRCxxQkNaQztFRGFELGNDWEQ7RURZQyx1QkFBQTtFQUNBLGVBQUE7QUFjUjtBQVhJO0VBQ0ksZ0NBQUE7RUFDQSxZQzdCQTtBRDBDUjtBQVZJO0VBQ0ksY0N4QkM7RUR5QkQsdUJBQUE7RUFDQSxlQUFBO0FBWVI7QUFUSTtFQUNJLGNDNUJEO0VENkJDLHVCQUFBO0VBQ0EsZUFBQTtBQVdSIiwiZmlsZSI6ImZvcmdvdC1wYXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvTGlnaHQ7XHJcbiAgICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvUm9ib3RvLUxpZ2h0LnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90b0JvbGQ7XHJcbiAgICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvUm9ib3RvLUJvbGQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvUmVndWxhcjtcclxuICAgIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tUmVndWxhci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBUaXRpbGxpdW1XZWJCb2xkO1xyXG4gICAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1RpdGlsbGl1bVdlYi1Cb2xkLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFRpdGlsbGl1bVdlYlNlbWlCb2xkO1xyXG4gICAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1RpdGlsbGl1bVdlYi1TZW1pQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9MaWdodDtcbiAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1MaWdodC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9Cb2xkO1xuICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvUm9ib3RvLUJvbGQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogUm9ib3RvUmVndWxhcjtcbiAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFRpdGlsbGl1bVdlYkJvbGQ7XG4gIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9UaXRpbGxpdW1XZWItQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBUaXRpbGxpdW1XZWJTZW1pQm9sZDtcbiAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1RpdGlsbGl1bVdlYi1TZW1pQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuOmhvc3QgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNDOUM5Qzk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IDotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOC0gKi9cbiAgY29sb3I6ICNDOUM5Qzk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IGlucHV0IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90b0JvbGQ7XG4gIGJvcmRlcjogNHB4IHNvbGlkICMxOTE5Mzg7XG59XG46aG9zdCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5NDAwO1xuICBib3JkZXItY29sb3I6ICNGRjk0MDA7XG4gIGNvbG9yOiAjMTkxOTM4O1xuICBmb250LWZhbWlseTogUm9ib3RvQm9sZDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuOmhvc3QgYnV0dG9uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xcmVtICNGRjgzMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjpob3N0IC50aXRsZSB7XG4gIGNvbG9yOiAjRkY5NDAwO1xuICBmb250LWZhbWlseTogUm9ib3RvQm9sZDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuOmhvc3QgLm1zZyB7XG4gIGNvbG9yOiAjMTkxOTM4O1xuICBmb250LWZhbWlseTogUm9ib3RvQm9sZDtcbiAgZm9udC1zaXplOiAyNXB4O1xufSIsIi8vQ29sb3JzXHJcbiR3aGl0ZTogd2hpdGU7XHJcbiRibGFjazogYmxhY2s7XHJcbiRibGFjay10d286ICMxOTE5MTk7XHJcbiRncmF5OiAjQzlDOUM5O1xyXG4kZ3JheS1iYW5uZXI6ICNFREVERUQ7XHJcbiRncmF5LWZvbnQ6ICM0QzRDNEM7XHJcbiRncmF5LXNoYWRvdzogI0JCQkJCQjtcclxuJGdyYXktZm9ybTogI0VGRUZFRjtcclxuJGdyYXktdGFibGU6ICNDN0M3Q0M7XHJcbiR5ZWxsb3c6ICNGRjk0MDA7XHJcbiRvcmFuZ2U6ICNGRjgzMDA7XHJcbiRibHVlOiAjMTkxOTM4O1xyXG4kYmx1ZS1saWdodDogIzBGNjM4NztcclxuJGJsdWUtc2t5OiAjMDA5REZGO1xyXG4kYmx1ZS10d286ICMwMDZlYjM7XHJcbiRyZWQ6ICNDMjBEMTk7XHJcblxyXG5cclxuLy9TaXplc1xyXG4kaGVhZGVyLWhlaWdodDogMTEwcHg7XHJcbiRmb290ZXItaGVpZ2h0OiAxMTBweDtcclxuJHNpZGVuYXYtd2lkdGg6IDkwcHg7XHJcbiRzaWRlbmF2LW9wZW4td2lkdGg6IDI1MHB4O1xyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgot-pass',
                templateUrl: './forgot-pass.component.html',
                styleUrls: ['./forgot-pass.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { msg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "oob0":
/*!*********************************************************!*\
  !*** ./src/app/pages/register/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modals_forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modals/forgot-pass/forgot-pass.component */ "ULEu");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class LoginComponent {
    constructor(ngbModal) {
        this.ngbModal = ngbModal;
    }
    ngOnInit() { }
    forgotPass() {
        const refModal = this.ngbModal.open(_modals_forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_1__["ForgotPassComponent"], { size: 'md', centered: true });
    }
    login() {
        console.log('login');
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 18, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-6", "mt-4", "mb-5", "mr-5", "ml-5", "d-flex", "justify-content-center"], [1, "col-12", "mt-5", "d-flex", "justify-content-center", "text"], [1, "text-center", 3, "ngSubmit"], [1, "yellow", "mb-4"], [1, "mb-5"], ["routerLink", "/register", 1, "yellow"], ["type", "email", "id", "email", "name", "email", "placeholder", "EMAIL", "required", "", 1, "form-control", "mb-4"], ["type", "password", "id", "password", "name", "password", "placeholder", "PASSWORD", "required", "", 1, "form-control", "mb-4"], [1, "yellow", 3, "click"], ["type", "submit", 1, "btn", "my-4", "btn-block"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ACCOUNT LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Not a member yet? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Sing up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_14_listener() { return ctx.forgotPass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "NEXT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["@font-face {\n  font-family: RobotoLight;\n  src: url('Roboto-Light.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: RobotoBold;\n  src: url('Roboto-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: RobotoRegular;\n  src: url('Roboto-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: TitilliumWebBold;\n  src: url('TitilliumWeb-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: TitilliumWebSemiBold;\n  src: url('TitilliumWeb-SemiBold.ttf') format(\"truetype\");\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #C9C9C9;\n  text-align: center;\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]:-moz-placeholder {\n  \n  color: #C9C9C9;\n  text-align: center;\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: RobotoBold;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #FF9400;\n  border-color: #FF9400;\n  font-family: RobotoBold;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 0.1rem #FF8300;\n  color: white;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .yellow[_ngcontent-%COMP%] {\n  color: #FF9400;\n}\n[_nghost-%COMP%]   .text[_ngcontent-%COMP%] {\n  color: white;\n  font-family: RobotoRegular;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcZm9udHMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9naW4uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSwrQ0FBQTtBQ0NKO0FERUE7RUFDSSx1QkFBQTtFQUNBLDhDQUFBO0FDQUo7QURHQTtFQUNJLDBCQUFBO0VBQ0EsaURBQUE7QUNESjtBRElBO0VBQ0ksNkJBQUE7RUFDQSxvREFBQTtBQ0ZKO0FES0E7RUFDSSxpQ0FBQTtFQUNBLHdEQUFBO0FDSEo7QUFkSTtFQUNJLGNDRkQ7RURHQyxrQkFBQTtBQWdCUjtBQWJJO0VBQ0ksZ0JBQUE7RUFDQSxjQ1JEO0VEU0Msa0JBQUE7QUFlUjtBQVpJO0VBQ0ksdUJBQUE7QUFjUjtBQVhJO0VBQ0kseUJDWEM7RURZRCxxQkNaQztFRGFELHVCQUFBO0FBYVI7QUFWSTtFQUNJLGdDQUFBO0VBQ0EsWUMzQkE7QUR1Q1I7QUFUSTtFQUNJLGVBQUE7QUFXUjtBQVJJO0VBQ0ksY0MxQkM7QURvQ1Q7QUFQSTtFQUNJLFlDdkNBO0VEd0NBLDBCQUFBO0VBQ0EsZUFBQTtBQVNSIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvTGlnaHQ7XHJcbiAgICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvUm9ib3RvLUxpZ2h0LnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90b0JvbGQ7XHJcbiAgICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvUm9ib3RvLUJvbGQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvUmVndWxhcjtcclxuICAgIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tUmVndWxhci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBUaXRpbGxpdW1XZWJCb2xkO1xyXG4gICAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1RpdGlsbGl1bVdlYi1Cb2xkLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFRpdGlsbGl1bVdlYlNlbWlCb2xkO1xyXG4gICAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1RpdGlsbGl1bVdlYi1TZW1pQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9MaWdodDtcbiAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1MaWdodC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9Cb2xkO1xuICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvUm9ib3RvLUJvbGQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogUm9ib3RvUmVndWxhcjtcbiAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFRpdGlsbGl1bVdlYkJvbGQ7XG4gIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9UaXRpbGxpdW1XZWItQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBUaXRpbGxpdW1XZWJTZW1pQm9sZDtcbiAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1RpdGlsbGl1bVdlYi1TZW1pQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuOmhvc3QgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNDOUM5Qzk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IDotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOC0gKi9cbiAgY29sb3I6ICNDOUM5Qzk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IGlucHV0IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90b0JvbGQ7XG59XG46aG9zdCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5NDAwO1xuICBib3JkZXItY29sb3I6ICNGRjk0MDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9Cb2xkO1xufVxuOmhvc3QgYnV0dG9uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xcmVtICNGRjgzMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjpob3N0IGE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCAueWVsbG93IHtcbiAgY29sb3I6ICNGRjk0MDA7XG59XG46aG9zdCAudGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFJvYm90b1JlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn0iLCIvL0NvbG9yc1xyXG4kd2hpdGU6IHdoaXRlO1xyXG4kYmxhY2s6IGJsYWNrO1xyXG4kYmxhY2stdHdvOiAjMTkxOTE5O1xyXG4kZ3JheTogI0M5QzlDOTtcclxuJGdyYXktYmFubmVyOiAjRURFREVEO1xyXG4kZ3JheS1mb250OiAjNEM0QzRDO1xyXG4kZ3JheS1zaGFkb3c6ICNCQkJCQkI7XHJcbiRncmF5LWZvcm06ICNFRkVGRUY7XHJcbiRncmF5LXRhYmxlOiAjQzdDN0NDO1xyXG4keWVsbG93OiAjRkY5NDAwO1xyXG4kb3JhbmdlOiAjRkY4MzAwO1xyXG4kYmx1ZTogIzE5MTkzODtcclxuJGJsdWUtbGlnaHQ6ICMwRjYzODc7XHJcbiRibHVlLXNreTogIzAwOURGRjtcclxuJGJsdWUtdHdvOiAjMDA2ZWIzO1xyXG4kcmVkOiAjQzIwRDE5O1xyXG5cclxuXHJcbi8vU2l6ZXNcclxuJGhlYWRlci1oZWlnaHQ6IDExMHB4O1xyXG4kZm9vdGVyLWhlaWdodDogMTEwcHg7XHJcbiRzaWRlbmF2LXdpZHRoOiA5MHB4O1xyXG4kc2lkZW5hdi1vcGVuLXdpZHRoOiAyNTBweDtcclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-register-login-login-module.js.map