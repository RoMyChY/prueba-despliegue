(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-step3-step3-module"],{

/***/ "5EKl":
/*!***************************************************************************!*\
  !*** ./src/app/pages/modals/congratulations/congratulations.component.ts ***!
  \***************************************************************************/
/*! exports provided: CongratulationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongratulationsComponent", function() { return CongratulationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class CongratulationsComponent {
    constructor(activeModal, router) {
        this.activeModal = activeModal;
        this.router = router;
    }
    ngOnInit() { }
    buttonAction() {
        this.router.navigate(['register/step3']);
        this.activeModal.dismiss();
    }
}
CongratulationsComponent.ɵfac = function CongratulationsComponent_Factory(t) { return new (t || CongratulationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CongratulationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CongratulationsComponent, selectors: [["app-congratulations"]], decls: 12, vars: 0, consts: [[1, "container"], [1, "mr-5", "ml-5"], [1, "text-center", "mt-2", "mb-4", "title"], [1, "text-center", "msg"], ["type", "submit", 1, "btn", "my-4", "mb-4", "btn-block", 3, "click"]], template: function CongratulationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CONGRATULATIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "You have successfully subscribed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Now you are ready to start saving");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "with us.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CongratulationsComponent_Template_button_click_10_listener() { return ctx.buttonAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "CONTINUE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\n  font-family: RobotoLight;\n  src: url('Roboto-Light.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: RobotoBold;\n  src: url('Roboto-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: RobotoRegular;\n  src: url('Roboto-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: TitilliumWebBold;\n  src: url('TitilliumWeb-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: TitilliumWebSemiBold;\n  src: url('TitilliumWeb-SemiBold.ttf') format(\"truetype\");\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #FF9400;\n  border-color: #FF9400;\n  color: #191938;\n  font-family: RobotoBold;\n  font-size: 22px;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 0.1rem #FF8300;\n  color: white;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #FF9400;\n  font-family: RobotoBold;\n  font-size: 25px;\n}\n[_nghost-%COMP%]   .msg[_ngcontent-%COMP%] {\n  color: #191938;\n  font-family: RobotoBold;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcZm9udHMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcY29uZ3JhdHVsYXRpb25zLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EsK0NBQUE7QUNDSjtBREVBO0VBQ0ksdUJBQUE7RUFDQSw4Q0FBQTtBQ0FKO0FER0E7RUFDSSwwQkFBQTtFQUNBLGlEQUFBO0FDREo7QURJQTtFQUNJLDZCQUFBO0VBQ0Esb0RBQUE7QUNGSjtBREtBO0VBQ0ksaUNBQUE7RUFDQSx3REFBQTtBQ0hKO0FBZkk7RUFDSSx5QkNLQztFREpELHFCQ0lDO0VESEQsY0NLRDtFREpDLHVCQUFBO0VBQ0EsZUFBQTtBQWlCUjtBQWRJO0VBQ0ksZ0NBQUE7RUFDQSxZQ2JBO0FENkJSO0FBYkk7RUFDSSxjQ1JDO0VEU0QsdUJBQUE7RUFDQSxlQUFBO0FBZVI7QUFaSTtFQUNJLGNDWkQ7RURhQyx1QkFBQTtFQUNBLGVBQUE7QUFjUiIsImZpbGUiOiJjb25ncmF0dWxhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG9MaWdodDtcclxuICAgIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tTGlnaHQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvQm9sZDtcclxuICAgIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG9SZWd1bGFyO1xyXG4gICAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFRpdGlsbGl1bVdlYkJvbGQ7XHJcbiAgICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvVGl0aWxsaXVtV2ViLUJvbGQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogVGl0aWxsaXVtV2ViU2VtaUJvbGQ7XHJcbiAgICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvVGl0aWxsaXVtV2ViLVNlbWlCb2xkLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90b0xpZ2h0O1xuICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvUm9ib3RvLUxpZ2h0LnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90b0JvbGQ7XG4gIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9SZWd1bGFyO1xuICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogVGl0aWxsaXVtV2ViQm9sZDtcbiAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1RpdGlsbGl1bVdlYi1Cb2xkLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFRpdGlsbGl1bVdlYlNlbWlCb2xkO1xuICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvVGl0aWxsaXVtV2ViLVNlbWlCb2xkLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG46aG9zdCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5NDAwO1xuICBib3JkZXItY29sb3I6ICNGRjk0MDA7XG4gIGNvbG9yOiAjMTkxOTM4O1xuICBmb250LWZhbWlseTogUm9ib3RvQm9sZDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuOmhvc3QgYnV0dG9uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xcmVtICNGRjgzMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjpob3N0IC50aXRsZSB7XG4gIGNvbG9yOiAjRkY5NDAwO1xuICBmb250LWZhbWlseTogUm9ib3RvQm9sZDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuOmhvc3QgLm1zZyB7XG4gIGNvbG9yOiAjMTkxOTM4O1xuICBmb250LWZhbWlseTogUm9ib3RvQm9sZDtcbiAgZm9udC1zaXplOiAyNXB4O1xufSIsIi8vQ29sb3JzXHJcbiR3aGl0ZTogd2hpdGU7XHJcbiRibGFjazogYmxhY2s7XHJcbiRibGFjay10d286ICMxOTE5MTk7XHJcbiRncmF5OiAjQzlDOUM5O1xyXG4kZ3JheS1iYW5uZXI6ICNFREVERUQ7XHJcbiRncmF5LWZvbnQ6ICM0QzRDNEM7XHJcbiRncmF5LXNoYWRvdzogI0JCQkJCQjtcclxuJGdyYXktZm9ybTogI0VGRUZFRjtcclxuJGdyYXktdGFibGU6ICNDN0M3Q0M7XHJcbiR5ZWxsb3c6ICNGRjk0MDA7XHJcbiRvcmFuZ2U6ICNGRjgzMDA7XHJcbiRibHVlOiAjMTkxOTM4O1xyXG4kYmx1ZS1saWdodDogIzBGNjM4NztcclxuJGJsdWUtc2t5OiAjMDA5REZGO1xyXG4kYmx1ZS10d286ICMwMDZlYjM7XHJcbiRyZWQ6ICNDMjBEMTk7XHJcblxyXG5cclxuLy9TaXplc1xyXG4kaGVhZGVyLWhlaWdodDogMTEwcHg7XHJcbiRmb290ZXItaGVpZ2h0OiAxMTBweDtcclxuJHNpZGVuYXYtd2lkdGg6IDkwcHg7XHJcbiRzaWRlbmF2LW9wZW4td2lkdGg6IDI1MHB4O1xyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CongratulationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-congratulations',
                templateUrl: './congratulations.component.html',
                styleUrls: ['./congratulations.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "hS1C":
/*!*********************************************************!*\
  !*** ./src/app/pages/register/step3/step3.component.ts ***!
  \*********************************************************/
/*! exports provided: Step3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step3Component", function() { return Step3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_interfaces_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/interfaces/Card */ "trBq");
/* harmony import */ var _modals_congratulations_congratulations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modals/congratulations/congratulations.component */ "5EKl");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class Step3Component {
    constructor(ngbModal) {
        this.ngbModal = ngbModal;
        this.cardInfo = new src_interfaces_Card__WEBPACK_IMPORTED_MODULE_1__["Card"];
    }
    ngOnInit() {
    }
    show() {
        console.log(this.cardInfo.expires);
    }
    suscribe() {
        const refModal = this.ngbModal.open(_modals_congratulations_congratulations_component__WEBPACK_IMPORTED_MODULE_2__["CongratulationsComponent"], { size: 'md', centered: true });
    }
    buttonState() {
        return !this.cardInfo.policy;
    }
}
Step3Component.ɵfac = function Step3Component_Factory(t) { return new (t || Step3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"])); };
Step3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Step3Component, selectors: [["app-step3"]], decls: 67, vars: 7, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-6", "mt-4", "mb-5", "mr-5", "ml-5", "d-flex", "justify-content-center"], [1, "col-12", "d-flex", "justify-content-center"], [1, "circle", "d-flex", "justify-content-center", "align-items-center"], [1, "number", "colorYellow"], [1, "col-12", "mt-3", "text"], [1, "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-center", "text"], [1, "text-center", 3, "ngSubmit"], [1, "yellow", "mb-4"], ["for", "name", 1, "d-flex", "justify-content-start", "yellow"], ["type", "text", "id", "name", "name", "name", "placeholder", "FIRST AND LAST NAME", "required", "", 1, "form-control", "mb-4", 3, "ngModel", "ngModelChange"], [1, "d-flex", "justify-content-start"], ["src", "../../../../assets/img/card.png", "alt", "card", "height", "30px", "width", "40px"], [1, "d-flex", "align-items-center", "ml-2"], ["for", "cardNumber", 1, "yellow"], ["type", "text", "id", "cardNumber", "name", "cardNumber", "placeholder", "CARD NUMBER", "required", "", 1, "form-control", "mb-4", "mt-2", 3, "ngModel", "ngModelChange"], [1, "col"], ["src", "../../../../assets/img/calendar.png", "alt", "card", "height", "30px", "width", "40px"], ["for", "expires", 1, "yellow"], ["type", "text", "id", "expires", "name", "expires", "placeholder", "MM / YY", "required", "", 1, "form-control", "mb-4", "mr-5", 3, "ngModel", "ngModelChange"], ["src", "../../../../assets/img/cvv.png", "alt", "card", "height", "30px", "width", "40px"], ["for", "cvv", 1, "yellow"], ["type", "text", "id", "cvv", "name", "cvv", "placeholder", "CVV", "required", "", 1, "form-control", "mb-4", 3, "ngModel", "ngModelChange"], ["href", "#", 1, "yellow"], [1, "squaredThree"], ["type", "checkbox", "value", "None", "id", "squaredThree", "name", "check", "name", "policy", 3, "checked", "ngModel", "ngModelChange"], ["for", "squaredThree", 1, "labelCheck"], ["type", "submit", 1, "btn", "my-4", "btn-block", 3, "disabled"]], template: function Step3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Please fill your payment information. You");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " will subcribe for a fixed fee. Once you create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " your account, you will be able to buy more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Crypto apart from subscription if you want.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function Step3Component_Template_form_ngSubmit_22_listener() { return ctx.suscribe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "HAPPY PAYMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "FULL NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Step3Component_Template_input_ngModelChange_27_listener($event) { return ctx.cardInfo.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "CARD NUMBER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Step3Component_Template_input_ngModelChange_34_listener($event) { return ctx.cardInfo.cardNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "EXPIRES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Step3Component_Template_input_ngModelChange_43_listener($event) { return ctx.cardInfo.expires = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "CVV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Step3Component_Template_input_ngModelChange_51_listener($event) { return ctx.cardInfo.cvv = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "I agree to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Terms of Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "& ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function Step3Component_Template_input_ngModelChange_63_listener($event) { return ctx.cardInfo.policy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "SUBSCRIBE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cardInfo.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cardInfo.cardNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cardInfo.expires);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cardInfo.cvv);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.cardInfo.policy)("ngModel", ctx.cardInfo.policy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.buttonState());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"]], styles: ["@font-face {\n  font-family: RobotoLight;\n  src: url('Roboto-Light.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: RobotoBold;\n  src: url('Roboto-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: RobotoRegular;\n  src: url('Roboto-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: TitilliumWebBold;\n  src: url('TitilliumWeb-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: TitilliumWebSemiBold;\n  src: url('TitilliumWeb-SemiBold.ttf') format(\"truetype\");\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #C9C9C9;\n  text-align: center;\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]:-moz-placeholder {\n  \n  color: #C9C9C9;\n  text-align: center;\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: RobotoBold;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #FF9400;\n  border-color: #FF9400;\n  color: #191938;\n  font-family: RobotoBold;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 0.1rem #FF8300;\n  color: white;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  box-shadow: none;\n  color: #191938;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%]::marker {\n  color: #FF9400;\n  font-size: 12px;\n}\n[_nghost-%COMP%]   .squaredThree[_ngcontent-%COMP%] {\n  width: 20px;\n  position: relative;\n}\n[_nghost-%COMP%]   .squaredThree[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: white;\n  border: 1px solid #191938;\n  border-radius: 4px;\n}\n[_nghost-%COMP%]   .squaredThree[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 9px;\n  height: 5px;\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  border: 3px solid #FF9400;\n  border-top: none;\n  border-right: none;\n  background: transparent;\n  opacity: 0;\n  transform: rotate(-45deg);\n}\n[_nghost-%COMP%]   .squaredThree[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n[_nghost-%COMP%]   .squaredThree[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\n  opacity: 1;\n}\n[_nghost-%COMP%]   .yellow[_ngcontent-%COMP%] {\n  color: #FF9400;\n}\n[_nghost-%COMP%]   .circle[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 100%;\n  border: solid 5px;\n  background: white;\n}\n[_nghost-%COMP%]   .circle[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  font-family: TitilliumWebSemiBold;\n  font-size: 59px;\n  color: #FF9400;\n}\n[_nghost-%COMP%]   .text[_ngcontent-%COMP%] {\n  color: white;\n  font-family: RobotoRegular;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcZm9udHMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3RlcDMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSwrQ0FBQTtBQ0NKO0FERUE7RUFDSSx1QkFBQTtFQUNBLDhDQUFBO0FDQUo7QURHQTtFQUNJLDBCQUFBO0VBQ0EsaURBQUE7QUNESjtBRElBO0VBQ0ksNkJBQUE7RUFDQSxvREFBQTtBQ0ZKO0FES0E7RUFDSSxpQ0FBQTtFQUNBLHdEQUFBO0FDSEo7QUFkSTtFQUNJLGNDRkQ7RURHQyxrQkFBQTtBQWdCUjtBQWJJO0VBQ0ksZ0JBQUE7RUFDQSxjQ1JEO0VEU0Msa0JBQUE7QUFlUjtBQVpJO0VBQ0ksdUJBQUE7QUFjUjtBQVhJO0VBQ0kseUJDWEM7RURZRCxxQkNaQztFRGFELGNDWEQ7RURZQyx1QkFBQTtBQWFSO0FBVkk7RUFDSSxnQ0FBQTtFQUNBLFlDNUJBO0FEd0NSO0FBVEk7RUFDSSxnQkFBQTtFQUNBLGNDdEJEO0FEaUNQO0FBUkk7RUFDSSxjQzVCQztFRDZCRCxlQUFBO0FBVVI7QUFQSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQVNSO0FBTkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsaUJDckRBO0VEc0RBLHlCQUFBO0VBQ0Esa0JBQUE7QUFRUjtBQUxJO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUVRLHlCQUFBO0FBT2hCO0FBSkk7RUFDSSxrQkFBQTtBQU1SO0FBSEk7RUFDSSxVQUFBO0FBS1I7QUFGSTtFQUNJLGNDMUVDO0FEOEVUO0FBREk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUdBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkM3RkE7QURnR1I7QUFEUTtFQUNJLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGNDekZIO0FENEZUO0FBQ0k7RUFDSSxZQ3ZHQTtFRHdHQSwwQkFBQTtFQUNBLGVBQUE7QUFDUiIsImZpbGUiOiJzdGVwMy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90b0xpZ2h0O1xyXG4gICAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1MaWdodC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG9Cb2xkO1xyXG4gICAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1Cb2xkLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90b1JlZ3VsYXI7XHJcbiAgICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogVGl0aWxsaXVtV2ViQm9sZDtcclxuICAgIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9UaXRpbGxpdW1XZWItQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBUaXRpbGxpdW1XZWJTZW1pQm9sZDtcclxuICAgIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9UaXRpbGxpdW1XZWItU2VtaUJvbGQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogUm9ib3RvTGlnaHQ7XG4gIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tTGlnaHQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogUm9ib3RvQm9sZDtcbiAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1Cb2xkLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90b1JlZ3VsYXI7XG4gIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tUmVndWxhci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBUaXRpbGxpdW1XZWJCb2xkO1xuICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvVGl0aWxsaXVtV2ViLUJvbGQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogVGl0aWxsaXVtV2ViU2VtaUJvbGQ7XG4gIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9UaXRpbGxpdW1XZWItU2VtaUJvbGQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbjpob3N0IDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjQzlDOUM5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCA6LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTgtICovXG4gIGNvbG9yOiAjQzlDOUM5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCBpbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9Cb2xkO1xufVxuOmhvc3QgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOTQwMDtcbiAgYm9yZGVyLWNvbG9yOiAjRkY5NDAwO1xuICBjb2xvcjogIzE5MTkzODtcbiAgZm9udC1mYW1pbHk6IFJvYm90b0JvbGQ7XG59XG46aG9zdCBidXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjFyZW0gI0ZGODMwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuOmhvc3QgYnV0dG9uOmRpc2FibGVkLCA6aG9zdCBidXR0b25bZGlzYWJsZWRdIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgY29sb3I6ICMxOTE5Mzg7XG59XG46aG9zdCBsaTo6bWFya2VyIHtcbiAgY29sb3I6ICNGRjk0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbjpob3N0IC5zcXVhcmVkVGhyZWUge1xuICB3aWR0aDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgLnNxdWFyZWRUaHJlZSBsYWJlbCB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTkxOTM4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG46aG9zdCAuc3F1YXJlZFRocmVlIGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDlweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIGxlZnQ6IDVweDtcbiAgYm9yZGVyOiAzcHggc29saWQgI0ZGOTQwMDtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuOmhvc3QgLnNxdWFyZWRUaHJlZSBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbjpob3N0IC5zcXVhcmVkVGhyZWUgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbjpob3N0IC55ZWxsb3cge1xuICBjb2xvcjogI0ZGOTQwMDtcbn1cbjpob3N0IC5jaXJjbGUge1xuICB3aWR0aDogNzJweDtcbiAgaGVpZ2h0OiA3MnB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyOiBzb2xpZCA1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuOmhvc3QgLmNpcmNsZSAubnVtYmVyIHtcbiAgZm9udC1mYW1pbHk6IFRpdGlsbGl1bVdlYlNlbWlCb2xkO1xuICBmb250LXNpemU6IDU5cHg7XG4gIGNvbG9yOiAjRkY5NDAwO1xufVxuOmhvc3QgLnRleHQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9SZWd1bGFyO1xuICBmb250LXNpemU6IDIycHg7XG59IiwiLy9Db2xvcnNcclxuJHdoaXRlOiB3aGl0ZTtcclxuJGJsYWNrOiBibGFjaztcclxuJGJsYWNrLXR3bzogIzE5MTkxOTtcclxuJGdyYXk6ICNDOUM5Qzk7XHJcbiRncmF5LWJhbm5lcjogI0VERURFRDtcclxuJGdyYXktZm9udDogIzRDNEM0QztcclxuJGdyYXktc2hhZG93OiAjQkJCQkJCO1xyXG4kZ3JheS1mb3JtOiAjRUZFRkVGO1xyXG4kZ3JheS10YWJsZTogI0M3QzdDQztcclxuJHllbGxvdzogI0ZGOTQwMDtcclxuJG9yYW5nZTogI0ZGODMwMDtcclxuJGJsdWU6ICMxOTE5Mzg7XHJcbiRibHVlLWxpZ2h0OiAjMEY2Mzg3O1xyXG4kYmx1ZS1za3k6ICMwMDlERkY7XHJcbiRibHVlLXR3bzogIzAwNmViMztcclxuJHJlZDogI0MyMEQxOTtcclxuXHJcblxyXG4vL1NpemVzXHJcbiRoZWFkZXItaGVpZ2h0OiAxMTBweDtcclxuJGZvb3Rlci1oZWlnaHQ6IDExMHB4O1xyXG4kc2lkZW5hdi13aWR0aDogOTBweDtcclxuJHNpZGVuYXYtb3Blbi13aWR0aDogMjUwcHg7XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Step3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-step3',
                templateUrl: './step3.component.html',
                styleUrls: ['./step3.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "nMYE":
/*!**************************************************************!*\
  !*** ./src/app/pages/register/step3/step3-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: Step3RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step3RoutingModule", function() { return Step3RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _step3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step3.component */ "hS1C");





const routes = [
    {
        path: '',
        component: _step3_component__WEBPACK_IMPORTED_MODULE_2__["Step3Component"]
    }
];
class Step3RoutingModule {
}
Step3RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Step3RoutingModule });
Step3RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Step3RoutingModule_Factory(t) { return new (t || Step3RoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Step3RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Step3RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "o8j3":
/*!******************************************************!*\
  !*** ./src/app/pages/register/step3/step3.module.ts ***!
  \******************************************************/
/*! exports provided: Step3Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step3Module", function() { return Step3Module; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _step3_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./step3-routing.module */ "nMYE");
/* harmony import */ var _step3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./step3.component */ "hS1C");






class Step3Module {
}
Step3Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Step3Module });
Step3Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function Step3Module_Factory(t) { return new (t || Step3Module)(); }, imports: [[
            _step3_routing_module__WEBPACK_IMPORTED_MODULE_3__["Step3RoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Step3Module, { declarations: [_step3_component__WEBPACK_IMPORTED_MODULE_4__["Step3Component"]], imports: [_step3_routing_module__WEBPACK_IMPORTED_MODULE_3__["Step3RoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Step3Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _step3_routing_module__WEBPACK_IMPORTED_MODULE_3__["Step3RoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                declarations: [
                    _step3_component__WEBPACK_IMPORTED_MODULE_4__["Step3Component"]
                ],
                exports: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-register-step3-step3-module.js.map