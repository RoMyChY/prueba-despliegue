(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-happy-trading-happy-trading-module"],{

/***/ "1CQ8":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/happy-trading/happy-trading.module.ts ***!
  \*****************************************************************/
/*! exports provided: HappyTradingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HappyTradingModule", function() { return HappyTradingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _happy_trading_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./happy-trading-routing.module */ "bM8E");
/* harmony import */ var _happy_trading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./happy-trading.component */ "aDoy");






class HappyTradingModule {
}
HappyTradingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HappyTradingModule });
HappyTradingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HappyTradingModule_Factory(t) { return new (t || HappyTradingModule)(); }, imports: [[
            _happy_trading_routing_module__WEBPACK_IMPORTED_MODULE_3__["HappyTradingRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HappyTradingModule, { declarations: [_happy_trading_component__WEBPACK_IMPORTED_MODULE_4__["HappyTradingComponent"]], imports: [_happy_trading_routing_module__WEBPACK_IMPORTED_MODULE_3__["HappyTradingRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HappyTradingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _happy_trading_routing_module__WEBPACK_IMPORTED_MODULE_3__["HappyTradingRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ],
                declarations: [
                    _happy_trading_component__WEBPACK_IMPORTED_MODULE_4__["HappyTradingComponent"],
                ],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "aDoy":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/happy-trading/happy-trading.component.ts ***!
  \********************************************************************/
/*! exports provided: HappyTradingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HappyTradingComponent", function() { return HappyTradingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_interfaces_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/interfaces/Card */ "trBq");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class HappyTradingComponent {
    constructor() {
        this.hidden = '';
        this.cardInfo = new src_interfaces_Card__WEBPACK_IMPORTED_MODULE_1__["Card"];
    }
    ngOnInit() { }
    buttonState() {
        return !this.cardInfo.policy;
    }
    purchase() {
        console.log('suscribe');
    }
    buyBitcoin() {
        console.log('Buy Bitcoin');
    }
    buyEtherum() {
        console.log('Buy Etherum');
    }
    sellBitcoin() {
        console.log('Sell Bitcoin');
    }
    sellEtherum() {
        console.log('Sell Etherum');
    }
}
HappyTradingComponent.ɵfac = function HappyTradingComponent_Factory(t) { return new (t || HappyTradingComponent)(); };
HappyTradingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HappyTradingComponent, selectors: [["app-trading"]], decls: 102, vars: 8, consts: [[1, "container-fluid", "pr-5", "pl-5"], [1, "row"], [1, "col-sm", "mt-4", "mb-5", "pt-4", "pb-4", "pr-4", "pl-4", "d-flex", "justify-content-center", "box"], [1, "col-12", "mt-3", "text"], [1, "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-center", "text"], [1, "text-center", 3, "ngSubmit"], [1, "yellow", "mb-4"], ["for", "name", 1, "d-flex", "justify-content-start", "yellow"], ["type", "text", "id", "name", "name", "name", "placeholder", "FIRST AND LAST NAME", "required", "", 1, "form-control", "mb-4", "text-center", 3, "ngModel", "ngModelChange"], [1, "d-flex", "justify-content-start"], ["src", "../../../../assets/img/card.png", "alt", "card", "height", "20px", "width", "30px"], [1, "d-flex", "align-items-center", "ml-2"], ["for", "cardNumber", 1, "yellow"], ["type", "text", "id", "cardNumber", "name", "cardNumber", "placeholder", "CARD NUMBER", "required", "", 1, "form-control", "mb-4", "mt-2", "text-center", 3, "ngModel", "ngModelChange"], [1, "col"], ["src", "../../../../assets/img/calendar.png", "alt", "card", "height", "20px", "width", "30px"], ["for", "expires", 1, "yellow"], ["type", "text", "id", "expires", "name", "expires", "placeholder", "MM / YY", "required", "", 1, "form-control", "mb-4", "mr-5", "text-center", 3, "ngModel", "ngModelChange"], ["src", "../../../../assets/img/cvv.png", "alt", "card", "height", "20px", "width", "30px"], ["for", "cvv", 1, "yellow"], ["type", "text", "id", "cvv", "name", "cvv", "placeholder", "CVV", "required", "", 1, "form-control", "mb-4", "text-center", 3, "ngModel", "ngModelChange"], ["for", "ammount", 1, "d-flex", "justify-content-center", "yellow"], ["type", "number", "id", "ammount", "name", "ammount", "placeholder", "1,00", "required", "", 1, "form-control", "mb-4", "text-center", 3, "ngModel", "ngModelChange"], [1, "mb-0"], ["href", "#", 1, "yellow"], [1, "squaredThree"], ["type", "checkbox", "value", "None", "id", "squaredThree", "name", "check", "name", "policy", 3, "checked", "ngModel", "ngModelChange"], ["for", "squaredThree", 1, "labelCheck"], ["type", "submit", 1, "btn", "my-4", "btn-block", 3, "disabled"], [1, "col-sm", "mt-4", "mb-5"], [1, "container-fluid", "pr-0", "pl-0"], [1, "col-12", "mb-5", "box"], [1, "container-fluid", "pt-5", "pb-5"], [1, "col-12", "d-flex", "justify-content-center"], ["src", "../../../assets/img/wallet.svg", "height", "60px", "width", "80px", "alt", "wallet"], [1, "col-12", "mt-5"], [1, "text"], [1, "col-md-6", "mt-3"], ["src", "../../../assets/img/bitcoin.svg", "height", "60px", "width", "60px", "alt", "bitcoin", 1, "d-flex", "justify-content-center"], ["type", "number", "id", "dollarsB", "name", "dollarsB", "placeholder", "DOLLARS", "required", "", 1, "form-control", "mb-4", "mt-4", "text-center"], ["type", "text", "id", "ammountB", "name", "ammountB", "placeholder", "AMMOUNT", "required", "", 1, "form-control", "mb-4", "text-center"], ["type", "submit", 1, "btn", "my-4", "btn-block", "mt-5"], ["src", "../../../assets/img/ethereum.svg", "height", "60px", "width", "60px", "alt", "bitcoin", 1, "d-flex", "justify-content-center"], ["type", "number", "id", "dollarsE", "name", "dollarsE", "placeholder", "DOLLARS", "required", "", 1, "form-control", "mb-4", "mt-4", "text-center"], ["type", "text", "id", "ammountE", "name", "ammountE", "placeholder", "AMMOUNT", "required", "", 1, "form-control", "mb-4", "text-center"], [1, "col-12", "pt-4", "pb-4", "box"], [1, "container-fluid"], [1, "col-md-6"], [1, "btn", "my-4", "btn-block", "btn-white", 3, "click"]], template: function HappyTradingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Please fill your payment information. You");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " will subcribe for a fixed fee. Once you create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " your account, you will be able to buy more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Crypto apart from subscription if you want.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HappyTradingComponent_Template_form_ngSubmit_18_listener() { return ctx.purchase(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "HAPPY PAYMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "FULL NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HappyTradingComponent_Template_input_ngModelChange_23_listener($event) { return ctx.cardInfo.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "CARD NUMBER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HappyTradingComponent_Template_input_ngModelChange_30_listener($event) { return ctx.cardInfo.cardNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "EXPIRES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HappyTradingComponent_Template_input_ngModelChange_39_listener($event) { return ctx.cardInfo.expires = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "CVV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HappyTradingComponent_Template_input_ngModelChange_47_listener($event) { return ctx.cardInfo.cvv = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "AMMOUNT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HappyTradingComponent_Template_input_ngModelChange_50_listener($event) { return ctx.cardInfo.ammount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "I agree to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Terms of Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "& ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HappyTradingComponent_Template_input_ngModelChange_62_listener($event) { return ctx.cardInfo.policy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "PURCHASE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Account Balance $1,200.34");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HappyTradingComponent_Template_form_ngSubmit_80_listener() { return ctx.buyBitcoin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "BUY BITCOIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HappyTradingComponent_Template_form_ngSubmit_88_listener() { return ctx.buyEtherum(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "BUY ETHERUM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HappyTradingComponent_Template_button_click_97_listener() { return ctx.sellBitcoin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "SELL BITCOIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HappyTradingComponent_Template_button_click_100_listener() { return ctx.sellEtherum(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "SELL ETHERUM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cardInfo.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cardInfo.cardNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cardInfo.expires);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cardInfo.cvv);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cardInfo.ammount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.cardInfo.policy)("ngModel", ctx.cardInfo.policy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.buttonState());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"]], styles: ["@font-face {\n  font-family: RobotoLight;\n  src: url('Roboto-Light.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: RobotoBold;\n  src: url('Roboto-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: RobotoRegular;\n  src: url('Roboto-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: TitilliumWebBold;\n  src: url('TitilliumWeb-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: TitilliumWebSemiBold;\n  src: url('TitilliumWeb-SemiBold.ttf') format(\"truetype\");\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #C9C9C9;\n  text-align: center;\n}\n[_nghost-%COMP%]   [_ngcontent-%COMP%]:-moz-placeholder {\n  \n  color: #C9C9C9;\n  text-align: center;\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: RobotoBold;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #FF9400;\n  border-color: #FF9400;\n  color: #191938;\n  font-family: RobotoBold;\n}\n[_nghost-%COMP%]   .btn-white[_ngcontent-%COMP%] {\n  background-color: white;\n  border-color: white;\n  color: #FF9400;\n  font-family: RobotoBold;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 0.1rem #FF8300;\n  color: white;\n}\n[_nghost-%COMP%]   .btn-white[_ngcontent-%COMP%]:hover {\n  color: #FF9400;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  box-shadow: none;\n  color: #191938;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%]::marker {\n  color: #FF9400;\n  font-size: 12px;\n}\n[_nghost-%COMP%]   .squaredThree[_ngcontent-%COMP%] {\n  width: 20px;\n  position: relative;\n}\n[_nghost-%COMP%]   .squaredThree[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: white;\n  border: 1px solid #191938;\n  border-radius: 4px;\n}\n[_nghost-%COMP%]   .squaredThree[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 9px;\n  height: 5px;\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  border: 3px solid #FF9400;\n  border-top: none;\n  border-right: none;\n  background: transparent;\n  opacity: 0;\n  transform: rotate(-45deg);\n}\n[_nghost-%COMP%]   .squaredThree[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n[_nghost-%COMP%]   .squaredThree[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\n  opacity: 1;\n}\n[_nghost-%COMP%]   .yellow[_ngcontent-%COMP%] {\n  color: #FF9400;\n}\n[_nghost-%COMP%]   .circle[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 100%;\n  border: solid 5px;\n  background: white;\n}\n[_nghost-%COMP%]   .circle[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  font-family: TitilliumWebSemiBold;\n  font-size: 59px;\n  color: #FF9400;\n}\n[_nghost-%COMP%]   .text[_ngcontent-%COMP%] {\n  color: #191938;\n  font-family: RobotoRegular;\n}\n[_nghost-%COMP%]   .box[_ngcontent-%COMP%] {\n  background-color: #EDEDED;\n  border-radius: 15px;\n  -ms-box-shadow: 0 0 20px #BBBBBB;\n  box-shadow: 0 0 20px #BBBBBB;\n}\n@media (min-width: 576px) {\n  [_nghost-%COMP%]   .box[_ngcontent-%COMP%] {\n    margin-right: 5%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXGZvbnRzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcaGFwcHktdHJhZGluZy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSwrQ0FBQTtBQ0NKO0FERUE7RUFDSSx1QkFBQTtFQUNBLDhDQUFBO0FDQUo7QURHQTtFQUNJLDBCQUFBO0VBQ0EsaURBQUE7QUNESjtBRElBO0VBQ0ksNkJBQUE7RUFDQSxvREFBQTtBQ0ZKO0FES0E7RUFDSSxpQ0FBQTtFQUNBLHdEQUFBO0FDSEo7QUFkSTtFQUNJLGNDRkQ7RURHQyxrQkFBQTtBQWdCUjtBQWJJO0VBQ0ksZ0JBQUE7RUFDQSxjQ1JEO0VEU0Msa0JBQUE7QUFlUjtBQVpJO0VBQ0ksdUJBQUE7QUFjUjtBQVhJO0VBQ0kseUJDWEM7RURZRCxxQkNaQztFRGFELGNDWEQ7RURZQyx1QkFBQTtBQWFSO0FBVkk7RUFDSSx1QkMzQkE7RUQ0QkEsbUJDNUJBO0VENkJBLGNDcEJDO0VEcUJELHVCQUFBO0FBWVI7QUFUSTtFQUNJLGdDQUFBO0VBQ0EsWUNuQ0E7QUQ4Q1I7QUFSSTtFQUNJLGNDOUJDO0FEd0NUO0FBUEk7RUFDSSxnQkFBQTtFQUNBLGNDakNEO0FEMENQO0FBTkk7RUFDSSxjQ3ZDQztFRHdDRCxlQUFBO0FBUVI7QUFMSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQU9SO0FBSkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsaUJDaEVBO0VEaUVBLHlCQUFBO0VBQ0Esa0JBQUE7QUFNUjtBQUhJO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUVRLHlCQUFBO0FBS2hCO0FBRkk7RUFDSSxrQkFBQTtBQUlSO0FBREk7RUFDSSxVQUFBO0FBR1I7QUFBSTtFQUNJLGNDckZDO0FEdUZUO0FBQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUdBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkN4R0E7QUR5R1I7QUFDUTtFQUNJLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGNDcEdIO0FEcUdUO0FBR0k7RUFDSSxjQ3ZHRDtFRHdHQywwQkFBQTtBQURSO0FBSUk7RUFDSSx5QkNuSE07RURvSE4sbUJBQUE7RUFHQSxnQ0FBQTtFQUNBLDRCQUFBO0FBRlI7QUFNSTtFQUNJO0lBQ0ksZ0JBQUE7RUFKVjtBQUNGIiwiZmlsZSI6ImhhcHB5LXRyYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG9MaWdodDtcclxuICAgIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tTGlnaHQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvQm9sZDtcclxuICAgIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG9SZWd1bGFyO1xyXG4gICAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFRpdGlsbGl1bVdlYkJvbGQ7XHJcbiAgICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvVGl0aWxsaXVtV2ViLUJvbGQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogVGl0aWxsaXVtV2ViU2VtaUJvbGQ7XHJcbiAgICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvVGl0aWxsaXVtV2ViLVNlbWlCb2xkLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90b0xpZ2h0O1xuICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvUm9ib3RvLUxpZ2h0LnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90b0JvbGQ7XG4gIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9SZWd1bGFyO1xuICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogVGl0aWxsaXVtV2ViQm9sZDtcbiAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1RpdGlsbGl1bVdlYi1Cb2xkLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFRpdGlsbGl1bVdlYlNlbWlCb2xkO1xuICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvVGl0aWxsaXVtV2ViLVNlbWlCb2xkLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG46aG9zdCA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI0M5QzlDOTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgOi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE4LSAqL1xuICBjb2xvcjogI0M5QzlDOTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgaW5wdXQge1xuICBmb250LWZhbWlseTogUm9ib3RvQm9sZDtcbn1cbjpob3N0IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjk0MDA7XG4gIGJvcmRlci1jb2xvcjogI0ZGOTQwMDtcbiAgY29sb3I6ICMxOTE5Mzg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9Cb2xkO1xufVxuOmhvc3QgLmJ0bi13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBjb2xvcjogI0ZGOTQwMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90b0JvbGQ7XG59XG46aG9zdCBidXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjFyZW0gI0ZGODMwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuOmhvc3QgLmJ0bi13aGl0ZTpob3ZlciB7XG4gIGNvbG9yOiAjRkY5NDAwO1xufVxuOmhvc3QgYnV0dG9uOmRpc2FibGVkLCA6aG9zdCBidXR0b25bZGlzYWJsZWRdIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgY29sb3I6ICMxOTE5Mzg7XG59XG46aG9zdCBsaTo6bWFya2VyIHtcbiAgY29sb3I6ICNGRjk0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbjpob3N0IC5zcXVhcmVkVGhyZWUge1xuICB3aWR0aDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgLnNxdWFyZWRUaHJlZSBsYWJlbCB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTkxOTM4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG46aG9zdCAuc3F1YXJlZFRocmVlIGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDlweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIGxlZnQ6IDVweDtcbiAgYm9yZGVyOiAzcHggc29saWQgI0ZGOTQwMDtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuOmhvc3QgLnNxdWFyZWRUaHJlZSBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbjpob3N0IC5zcXVhcmVkVGhyZWUgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbjpob3N0IC55ZWxsb3cge1xuICBjb2xvcjogI0ZGOTQwMDtcbn1cbjpob3N0IC5jaXJjbGUge1xuICB3aWR0aDogNzJweDtcbiAgaGVpZ2h0OiA3MnB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyOiBzb2xpZCA1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuOmhvc3QgLmNpcmNsZSAubnVtYmVyIHtcbiAgZm9udC1mYW1pbHk6IFRpdGlsbGl1bVdlYlNlbWlCb2xkO1xuICBmb250LXNpemU6IDU5cHg7XG4gIGNvbG9yOiAjRkY5NDAwO1xufVxuOmhvc3QgLnRleHQge1xuICBjb2xvcjogIzE5MTkzODtcbiAgZm9udC1mYW1pbHk6IFJvYm90b1JlZ3VsYXI7XG59XG46aG9zdCAuYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VERURFRDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMjBweCAjQkJCQkJCO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMCAyMHB4ICNCQkJCQkI7XG4gIC1tcy1ib3gtc2hhZG93OiAwIDAgMjBweCAjQkJCQkJCO1xuICBib3gtc2hhZG93OiAwIDAgMjBweCAjQkJCQkJCO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIDpob3N0IC5ib3gge1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gIH1cbn0iLCIvL0NvbG9yc1xyXG4kd2hpdGU6IHdoaXRlO1xyXG4kYmxhY2s6IGJsYWNrO1xyXG4kYmxhY2stdHdvOiAjMTkxOTE5O1xyXG4kZ3JheTogI0M5QzlDOTtcclxuJGdyYXktYmFubmVyOiAjRURFREVEO1xyXG4kZ3JheS1mb250OiAjNEM0QzRDO1xyXG4kZ3JheS1zaGFkb3c6ICNCQkJCQkI7XHJcbiRncmF5LWZvcm06ICNFRkVGRUY7XHJcbiRncmF5LXRhYmxlOiAjQzdDN0NDO1xyXG4keWVsbG93OiAjRkY5NDAwO1xyXG4kb3JhbmdlOiAjRkY4MzAwO1xyXG4kYmx1ZTogIzE5MTkzODtcclxuJGJsdWUtbGlnaHQ6ICMwRjYzODc7XHJcbiRibHVlLXNreTogIzAwOURGRjtcclxuJGJsdWUtdHdvOiAjMDA2ZWIzO1xyXG4kcmVkOiAjQzIwRDE5O1xyXG5cclxuXHJcbi8vU2l6ZXNcclxuJGhlYWRlci1oZWlnaHQ6IDExMHB4O1xyXG4kZm9vdGVyLWhlaWdodDogMTEwcHg7XHJcbiRzaWRlbmF2LXdpZHRoOiA5MHB4O1xyXG4kc2lkZW5hdi1vcGVuLXdpZHRoOiAyNTBweDtcclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HappyTradingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-trading',
                templateUrl: './happy-trading.component.html',
                styleUrls: ['./happy-trading.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "bM8E":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/happy-trading/happy-trading-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: HappyTradingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HappyTradingRoutingModule", function() { return HappyTradingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _happy_trading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./happy-trading.component */ "aDoy");





const routes = [
    {
        path: '',
        component: _happy_trading_component__WEBPACK_IMPORTED_MODULE_2__["HappyTradingComponent"]
    }
];
class HappyTradingRoutingModule {
}
HappyTradingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HappyTradingRoutingModule });
HappyTradingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HappyTradingRoutingModule_Factory(t) { return new (t || HappyTradingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HappyTradingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HappyTradingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=dashboard-happy-trading-happy-trading-module.js.map