(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\RoMyChY\Documents\Proyectos\happy-bitcoin\src\main.ts */"zUnb");


/***/ }),

/***/ "2eXD":
/*!***********************************************!*\
  !*** ./src/app/pages/layout/layout.module.ts ***!
  \***********************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.component */ "PGY2");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "nm/E");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "wKXb");







class LayoutModule {
}
LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                ],
                declarations: [
                    _layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]
                ],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BgzB":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 2, vars: 0, template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Esta P\u00E1gina no se encontro Jajajaj\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "PGY2":
/*!**************************************************!*\
  !*** ./src/app/pages/layout/layout.component.ts ***!
  \**************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "nm/E");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "wKXb");





class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 3, vars: 0, template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







function DashboardComponent_div_10_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_10_ng_container_5_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.openMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.triangle);
} }
function DashboardComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_div_10_ng_container_5_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.justifyIcons);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.grid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("routerLink", item_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.displayLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.label);
} }
class DashboardComponent {
    constructor() {
        this.menuAction = '';
        this.displayMenu = '';
        this.displayLogo = 'd-none';
        this.justifyIcons = 'd-flex justify-content-center';
        this.displayLabel = 'd-none';
        this.grid = 'col-12';
        this.hidden = '';
        this.hiddenMovil = '';
        this.loginGrid = 'col-2';
        this.triangle = 'menuTriangleExpand';
        this.coinType = 'bitcoin';
        this.date = new Date();
        this.locale = 'es-MX';
        this.formattedDate = '';
        this.m = '';
        this.e = '';
        this.d = '';
        this.y = '';
        this.items = [
            {
                label: 'HAPPY HOME',
                path: '/dashboard',
                icon: '../../assets/img/home.svg'
            }, {
                label: 'HAPPY HISTORY',
                path: 'happy-history',
                icon: '../../assets/img/history.svg'
            }, {
                label: 'HAPPY TRADING',
                path: 'happy-trading',
                icon: '../../assets/img/trading.svg'
            }, {
                label: 'HAPPY SETTINGS',
                path: 'happy-settings',
                icon: '../../assets/img/settings.svg'
            }
        ];
    }
    ngOnInit() {
        this.e = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(this.date, 'EEEE', this.locale);
        this.d = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(this.date, 'd', this.locale);
        this.m = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(this.date, 'MMMM', this.locale);
        this.y = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(this.date, 'y', this.locale);
        this.formattedDate = `${this.e.charAt(0).toUpperCase() + this.e.slice(1)} ${this.d} de ${this.m.charAt(0).toUpperCase() + this.m.slice(1)} de ${this.y}`;
    }
    openMenu() {
        if (this.menuAction == 'sidenavOpen') {
            this.menuAction = 'sidenavClose';
            this.displayMenu = 'imageAnimation good active';
            this.displayLogo = 'imageAnimation';
            this.displayLabel = 'd-none';
            this.grid = 'col-12';
            this.hidden = '';
            this.hiddenMovil = '';
            this.loginGrid = 'col-2';
            this.triangle = 'menuTriangleExpand';
        }
        else {
            this.menuAction = 'sidenavOpen';
            this.displayMenu = 'imageAnimation';
            this.displayLogo = 'imageAnimation good active';
            this.displayLabel = 'labelAnimation col-8';
            this.grid = 'labelAnimation col-4';
            this.hidden = 'd-none d-sm-none d-md-block';
            this.hiddenMovil = 'd-none d-sm-none d-sm-block';
            this.loginGrid = 'col-sm-2';
            this.triangle = 'menuTriangleCollapse';
        }
    }
    logout() {
        console.log('logout');
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 36, vars: 10, consts: [[1, "container-fluid", "pr-0", "pb-0", "content"], [1, "row", "mr-0"], [1, "sidenav", "pb-0", "mb-0", 3, "ngClass"], [1, "row", "mr-0", "ml-0"], [1, "col-12", "d-flex", "justify-content-center", "align-items-center", "menuContent"], ["src", "../../assets/img/burger.svg", "height", "40px", "width", "40px", "alt", "menu", 1, "mousePointer", 3, "ngClass", "click"], ["src", "../../assets/img/happyBit2.png", "height", "50px", "width", "100px", "alt", "logo", 1, "mousePointer", 3, "ngClass", "click"], [1, "col", "d-flex", "align-items-center", "pl-0", "pr-0", "iconsContent"], [1, "container-fluid", "pl-0", "pr-0"], ["class", "col-12 mb-5 pr-0 pl-0", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col", "pr-0", "pl-0", "overflow-auto"], [1, "container-fluid", "pr-0", "pb-0"], [1, "col-12", "pt-0", "pb-0", "navbar"], [1, "col-6", 3, "ngClass"], [1, "mb-0", "fontUser"], [1, "d-none", "d-sm-none", "d-md-block", "mb-0", "fontDate"], [1, "col-4", "pr-0", "pl-0", "d-flex", "justify-content-end"], ["id", "exampleFormControlSelect1", "name", "coin", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["value", "bitcoin"], ["value", "etherum"], [1, "pl-0", 3, "ngClass"], [1, "container-fluid", "pr-0", "pb-0", "d-flex", "justify-content-center"], [1, "row", "pl-0"], [1, "col", "d-flex", "justify-content-center", "pr-0", "pl-0"], ["src", "../../assets/img/login.png", "width", "35px", "height", "35px", "alt", "Login", 1, "d-block", "usLogin", "mousePointer", 3, "click"], [1, "col", "d-flex", "align-items-center", "justify-content-center", "mt-1"], [1, "d-none", "d-sm-none", "d-md-block", "fontOptions", "mousePointer", "logout", 3, "click"], [1, "col-12", "contentRouter", "overflow-auto", 3, "ngClass"], [1, "col-12", "mb-5", "pr-0", "pl-0", 3, "ngClass"], [1, "row", "ml-0", "mr-0", "d-flex", "align-items-center"], [1, "pr-0", "pl-0", "d-flex", "justify-content-center", 3, "ngClass"], ["height", "40px", "width", "40px", "alt", "icon", "routerLinkActive", "selected", 1, "mousePointer", "icon", 3, "src", "routerLink"], [4, "ngIf"], [1, "pr-0", "pl-0", "mr-0", 3, "ngClass"], ["routerLinkActive", "selected", 1, "text-start", "mb-0", "fontMenu", "mousePointer", "options", 3, "routerLink"], [1, "d-none", "d-sm-none", "d-md-block", 3, "ngClass", "click"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_img_click_5_listener() { return ctx.openMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_img_click_6_listener() { return ctx.openMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DashboardComponent_div_10_Template, 9, 8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Hola Juan Pablo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_select_ngModelChange_21_listener($event) { return ctx.coinType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "BITCOIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "ETHERUM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_img_click_30_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h6", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_h6_click_32_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "LOGOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.menuAction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.displayMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.displayLogo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formattedDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.hidden)("ngModel", ctx.coinType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.loginGrid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.hiddenMovil);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["@font-face {\n  font-family: RobotoLight;\n  src: url('Roboto-Light.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: RobotoBold;\n  src: url('Roboto-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: RobotoRegular;\n  src: url('Roboto-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: TitilliumWebBold;\n  src: url('TitilliumWeb-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: TitilliumWebSemiBold;\n  src: url('TitilliumWeb-SemiBold.ttf') format(\"truetype\");\n}\n[_nghost-%COMP%]   select[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  background-image: url('chevron-down.svg');\n  background-position: calc(100%), calc(100% ) 14px, 100% 0;\n  background-repeat: no-repeat;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  color: #191938;\n  font-family: RobotoLight;\n  font-size: 15px;\n  width: 98px;\n}\n[_nghost-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n[_nghost-%COMP%]   select[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  background-color: #FF8300;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n[_nghost-%COMP%]   .fontMenu[_ngcontent-%COMP%] {\n  color: white;\n  font-family: RobotoRegular;\n}\n[_nghost-%COMP%]   .fontUser[_ngcontent-%COMP%] {\n  color: black;\n  font-family: RobotoLight;\n}\n[_nghost-%COMP%]   .fontDate[_ngcontent-%COMP%] {\n  color: black;\n  font-family: RobotoLight;\n  font-size: 12px;\n}\n[_nghost-%COMP%]   .fontOptions[_ngcontent-%COMP%] {\n  color: black;\n  font-family: RobotoLight;\n  font-size: 15px;\n}\n[_nghost-%COMP%]   img.usLogin[_ngcontent-%COMP%]:hover {\n  border-radius: 48%;\n  -ms-box-shadow: 0 0 10px #C9C9C9;\n  box-shadow: 0 0 10px #C9C9C9;\n}\n[_nghost-%COMP%]   .logout[_ngcontent-%COMP%]:hover {\n  border-bottom: 2px solid black;\n}\n[_nghost-%COMP%]   .options[_ngcontent-%COMP%]:hover {\n  filter: drop-shadow(0 2px 5px #C9C9C9);\n}\n[_nghost-%COMP%]   .contentRouter[_ngcontent-%COMP%] {\n  height: calc(100vh - 10vh);\n}\n[_nghost-%COMP%]   .sidenav[_ngcontent-%COMP%] {\n  background-color: #191938;\n  height: calc(100vh);\n  width: 90px;\n}\n[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  background-color: #FF9400;\n  height: calc(10vh);\n}\n[_nghost-%COMP%]   .sidenavOpen[_ngcontent-%COMP%] {\n  width: 250px;\n  transition: width 0.3s;\n}\n[_nghost-%COMP%]   .sidenavClose[_ngcontent-%COMP%] {\n  width: 90px;\n  transition: width 0.3s ease-in-out;\n}\n[_nghost-%COMP%]   .iconsContent[_ngcontent-%COMP%] {\n  height: calc(90vh);\n}\n[_nghost-%COMP%]   .menuContent[_ngcontent-%COMP%] {\n  height: calc(10vh);\n}\n[_nghost-%COMP%]   .imageAnimation[_ngcontent-%COMP%] {\n  display: none;\n  transform: scale(0);\n  opacity: 0;\n  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;\n}\n[_nghost-%COMP%]   .imageAnimation.active[_ngcontent-%COMP%] {\n  display: block;\n  transform: scale(1);\n  opacity: 1;\n}\n[_nghost-%COMP%]   .imageAnimation.active.good[_ngcontent-%COMP%] {\n  animation: anim 0.4s ease-in-out;\n}\n[_nghost-%COMP%]   .labelAnimation[_ngcontent-%COMP%] {\n  animation: anim 0.7s ease-in-out;\n}\n@keyframes anim {\n  0% {\n    display: none;\n    opacity: 0;\n  }\n  1% {\n    display: block;\n    opacity: 0;\n    transform: scale(0);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n[_nghost-%COMP%]   img.icon[_ngcontent-%COMP%]:hover {\n  filter: drop-shadow(0 2px 5px #C9C9C9);\n}\n[_nghost-%COMP%]   .mousePointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .menuTriangleExpand[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 100%;\n  right: 0;\n  top: 60%;\n  border-left: 25px solid #FF9400;\n  border-top: 35px solid transparent;\n  border-bottom: 35px solid transparent;\n  z-index: 1;\n}\n[_nghost-%COMP%]   .menuTriangleCollapse[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  top: 60%;\n  border-right: 25px solid #FF9400;\n  border-top: 35px solid transparent;\n  border-bottom: 35px solid transparent;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFxmb250cy5zY3NzIiwiLi5cXC4uXFwuLlxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSwrQ0FBQTtBQ0NKO0FERUE7RUFDSSx1QkFBQTtFQUNBLDhDQUFBO0FDQUo7QURHQTtFQUNJLDBCQUFBO0VBQ0EsaURBQUE7QUNESjtBRElBO0VBQ0ksNkJBQUE7RUFDQSxvREFBQTtBQ0ZKO0FES0E7RUFDSSxpQ0FBQTtFQUNBLHdEQUFBO0FDSEo7QUFkSTtFQUNJLFlBQUE7RUFDQSw2QkFBQTtFQUNBLHlDQUFBO0VBQ0EseURBQ0U7RUFHRiw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQ0pEO0VES0Msd0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQWFSO0FBWFE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFhWjtBQVRJO0VBQ0kseUJDakJDO0FENEJUO0FBUkk7RUFDSSxhQUFBO0FBVVI7QUFQSTtFQUNJLFlDbkNBO0VEb0NBLDBCQUFBO0FBU1I7QUFOSTtFQUNJLFlDdkNBO0VEd0NBLHdCQUFBO0FBUVI7QUFMSTtFQUNJLFlDNUNBO0VENkNBLHdCQUFBO0VBQ0EsZUFBQTtBQU9SO0FBSkk7RUFDSSxZQ2xEQTtFRG1EQSx3QkFBQTtFQUNBLGVBQUE7QUFNUjtBQUhJO0VBQ0ksa0JBQUE7RUFHQSxnQ0FBQTtFQUNBLDRCQUFBO0FBS1I7QUFGSTtFQUNJLDhCQUFBO0FBSVI7QUFESTtFQUNJLHNDQUFBO0FBR1I7QUFBSTtFQUNJLDBCQUFBO0FBRVI7QUFDRztFQUNLLHlCQ2xFRDtFRG1FQyxtQkFBQTtFQUNBLFdDMURRO0FEMkRoQjtBQUVHO0VBQ0sseUJDMUVDO0VEMkVELGtCQUFBO0FBQVI7QUFHRztFQUNLLFlDbEVhO0VEbUViLHNCQUFBO0FBRFI7QUFJRztFQUNLLFdDeEVRO0VEeUVSLGtDQUFBO0FBRlI7QUFLRztFQUNLLGtCQUFBO0FBSFI7QUFNRztFQUNLLGtCQUFBO0FBSlI7QUFPRztFQUNLLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxnRUFBQTtBQUxSO0FBT1E7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBTFo7QUFPWTtFQUNJLGdDQUFBO0FBTGhCO0FBVUc7RUFDSyxnQ0FBQTtBQVJSO0FBV0c7RUFDSztJQUNJLGFBQUE7SUFDQSxVQUFBO0VBVFY7RUFXTTtJQUNJLGNBQUE7SUFDQSxVQUFBO0lBQ0EsbUJBQUE7RUFUVjtFQVdNO0lBQ0ksVUFBQTtJQUNBLG1CQUFBO0VBVFY7QUFDRjtBQVlJO0VBQ0ksc0NBQUE7QUFWUjtBQWFHO0VBQ0ksZUFBQTtBQVhQO0FBY0c7RUFDSyxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7RUFDQSxVQUFBO0FBWlI7QUFlRztFQUNLLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQ0FBQTtFQUNBLFVBQUE7QUFiUiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG9MaWdodDtcclxuICAgIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tTGlnaHQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvQm9sZDtcclxuICAgIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG9SZWd1bGFyO1xyXG4gICAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFRpdGlsbGl1bVdlYkJvbGQ7XHJcbiAgICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvVGl0aWxsaXVtV2ViLUJvbGQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogVGl0aWxsaXVtV2ViU2VtaUJvbGQ7XHJcbiAgICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvVGl0aWxsaXVtV2ViLVNlbWlCb2xkLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90b0xpZ2h0O1xuICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvUm9ib3RvLUxpZ2h0LnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90b0JvbGQ7XG4gIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9SZWd1bGFyO1xuICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogVGl0aWxsaXVtV2ViQm9sZDtcbiAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1RpdGlsbGl1bVdlYi1Cb2xkLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFRpdGlsbGl1bVdlYlNlbWlCb2xkO1xuICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvVGl0aWxsaXVtV2ViLVNlbWlCb2xkLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG46aG9zdCBzZWxlY3Qge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2NoZXZyb24tZG93bi5zdmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoMTAwJSksIGNhbGMoMTAwJSApIDE0cHgsIDEwMCUgMDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGNvbG9yOiAjMTkxOTM4O1xuICBmb250LWZhbWlseTogUm9ib3RvTGlnaHQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgd2lkdGg6IDk4cHg7XG59XG46aG9zdCBzZWxlY3Q6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuOmhvc3Qgc2VsZWN0ICoge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MzAwO1xufVxuOmhvc3QgLmNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuOmhvc3QgLmZvbnRNZW51IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogUm9ib3RvUmVndWxhcjtcbn1cbjpob3N0IC5mb250VXNlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFJvYm90b0xpZ2h0O1xufVxuOmhvc3QgLmZvbnREYXRlIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogUm9ib3RvTGlnaHQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbjpob3N0IC5mb250T3B0aW9ucyB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFJvYm90b0xpZ2h0O1xuICBmb250LXNpemU6IDE1cHg7XG59XG46aG9zdCBpbWcudXNMb2dpbjpob3ZlciB7XG4gIGJvcmRlci1yYWRpdXM6IDQ4JTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTBweCAjQzlDOUM5O1xuICAtbW96LWJveC1zaGFkb3c6IDAgMCAxMHB4ICNDOUM5Qzk7XG4gIC1tcy1ib3gtc2hhZG93OiAwIDAgMTBweCAjQzlDOUM5O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjQzlDOUM5O1xufVxuOmhvc3QgLmxvZ291dDpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbn1cbjpob3N0IC5vcHRpb25zOmhvdmVyIHtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDJweCA1cHggI0M5QzlDOSk7XG59XG46aG9zdCAuY29udGVudFJvdXRlciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwdmgpO1xufVxuOmhvc3QgLnNpZGVuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTM4O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmgpO1xuICB3aWR0aDogOTBweDtcbn1cbjpob3N0IC5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5NDAwO1xuICBoZWlnaHQ6IGNhbGMoMTB2aCk7XG59XG46aG9zdCAuc2lkZW5hdk9wZW4ge1xuICB3aWR0aDogMjUwcHg7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3M7XG59XG46aG9zdCAuc2lkZW5hdkNsb3NlIHtcbiAgd2lkdGg6IDkwcHg7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG46aG9zdCAuaWNvbnNDb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDkwdmgpO1xufVxuOmhvc3QgLm1lbnVDb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwdmgpO1xufVxuOmhvc3QgLmltYWdlQW5pbWF0aW9uIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQsIG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcbn1cbjpob3N0IC5pbWFnZUFuaW1hdGlvbi5hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgb3BhY2l0eTogMTtcbn1cbjpob3N0IC5pbWFnZUFuaW1hdGlvbi5hY3RpdmUuZ29vZCB7XG4gIGFuaW1hdGlvbjogYW5pbSAwLjRzIGVhc2UtaW4tb3V0O1xufVxuOmhvc3QgLmxhYmVsQW5pbWF0aW9uIHtcbiAgYW5pbWF0aW9uOiBhbmltIDAuN3MgZWFzZS1pbi1vdXQ7XG59XG5Aa2V5ZnJhbWVzIGFuaW0ge1xuICAwJSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDElIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG46aG9zdCBpbWcuaWNvbjpob3ZlciB7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAycHggNXB4ICNDOUM5QzkpO1xufVxuOmhvc3QgLm1vdXNlUG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IC5tZW51VHJpYW5nbGVFeHBhbmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDYwJTtcbiAgYm9yZGVyLWxlZnQ6IDI1cHggc29saWQgI0ZGOTQwMDtcbiAgYm9yZGVyLXRvcDogMzVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMzVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgei1pbmRleDogMTtcbn1cbjpob3N0IC5tZW51VHJpYW5nbGVDb2xsYXBzZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNjAlO1xuICBib3JkZXItcmlnaHQ6IDI1cHggc29saWQgI0ZGOTQwMDtcbiAgYm9yZGVyLXRvcDogMzVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMzVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgei1pbmRleDogMTtcbn0iLCIvL0NvbG9yc1xyXG4kd2hpdGU6IHdoaXRlO1xyXG4kYmxhY2s6IGJsYWNrO1xyXG4kYmxhY2stdHdvOiAjMTkxOTE5O1xyXG4kZ3JheTogI0M5QzlDOTtcclxuJGdyYXktYmFubmVyOiAjRURFREVEO1xyXG4kZ3JheS1mb250OiAjNEM0QzRDO1xyXG4kZ3JheS1zaGFkb3c6ICNCQkJCQkI7XHJcbiRncmF5LWZvcm06ICNFRkVGRUY7XHJcbiRncmF5LXRhYmxlOiAjQzdDN0NDO1xyXG4keWVsbG93OiAjRkY5NDAwO1xyXG4kb3JhbmdlOiAjRkY4MzAwO1xyXG4kYmx1ZTogIzE5MTkzODtcclxuJGJsdWUtbGlnaHQ6ICMwRjYzODc7XHJcbiRibHVlLXNreTogIzAwOURGRjtcclxuJGJsdWUtdHdvOiAjMDA2ZWIzO1xyXG4kcmVkOiAjQzIwRDE5O1xyXG5cclxuXHJcbi8vU2l6ZXNcclxuJGhlYWRlci1oZWlnaHQ6IDExMHB4O1xyXG4kZm9vdGVyLWhlaWdodDogMTEwcHg7XHJcbiRzaWRlbmF2LXdpZHRoOiA5MHB4O1xyXG4kc2lkZW5hdi1vcGVuLXdpZHRoOiAyNTBweDtcclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'front';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "BgzB");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pages_layout_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/layout/layout.module */ "2eXD");
/* harmony import */ var _pages_register_register_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/register/register.module */ "fhSy");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/es-MX */ "LMmM");
/* harmony import */ var _angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_11__);














Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["registerLocaleData"])(_angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_11___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: "es-MX" }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _pages_layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
            _pages_register_register_module__WEBPACK_IMPORTED_MODULE_9__["RegisterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _pages_layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
        _pages_register_register_module__WEBPACK_IMPORTED_MODULE_9__["RegisterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _pages_layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
                    _pages_register_register_module__WEBPACK_IMPORTED_MODULE_9__["RegisterModule"]
                ],
                providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: "es-MX" }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fNfI":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 3, vars: 0, consts: [[1, "content", "overflow-auto"], [1, "form-content"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: calc(100vh - 220px);\n  background-image: url('banner2.jpg');\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQUZSIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuOmhvc3Qge1xyXG4gICAgLmNvbnRlbnR7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skaGVhZGVyLWhlaWdodCArICRmb290ZXItaGVpZ2h0fSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFubmVyMi5qcGcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fhSy":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register.component */ "fNfI");






class RegisterModule {
}
RegisterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RegisterModule });
RegisterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function RegisterModule_Factory(t) { return new (t || RegisterModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RegisterModule, { declarations: [_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                declarations: [
                    _register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
                ],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "nm/E":
/*!*********************************************************!*\
  !*** ./src/app/pages/layout/header/header.component.ts ***!
  \*********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HeaderComponent {
    constructor() {
        this.hola = 'hola amiguitos';
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 16, vars: 0, consts: [[1, "content"], [1, "container", "pt-2", "pb-2"], [1, "row", "d-flex", "justify-content-center", "align-items-center"], [1, "col"], [1, "col", "d-flex", "justify-content-center", "logo"], ["routerLink", ""], ["src", "../../../../assets/img/happyBit.png", "alt", "Logo HappyBitcoin", 1, "d-block"], [1, "row", "pr-5"], [1, "col-8", "d-flex", "justify-content-end", "pr-0"], ["routerLink", "register/login"], ["src", "../../../../assets/img/login.png", "alt", "Login", 1, "usLogin", "d-block"], [1, "col-4", "d-flex", "align-items-center", "pl-2", "pr-3"], ["routerLink", "register/login", 1, "login"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["@font-face {\n  font-family: RobotoLight;\n  src: url('Roboto-Light.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: RobotoBold;\n  src: url('Roboto-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: RobotoRegular;\n  src: url('Roboto-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: TitilliumWebBold;\n  src: url('TitilliumWeb-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: TitilliumWebSemiBold;\n  src: url('TitilliumWeb-SemiBold.ttf') format(\"truetype\");\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 110px;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding: 12px 0;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n  color: #191938;\n  font-family: RobotoLight;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  border-bottom: 2px solid #FF9400;\n  color: #FF9400;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%]   img.usLogin[_ngcontent-%COMP%]:hover {\n  border-radius: 48%;\n  -ms-box-shadow: 0 0 10px #C9C9C9;\n  box-shadow: 0 0 10px #C9C9C9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcZm9udHMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EsK0NBQUE7QUNDSjtBREVBO0VBQ0ksdUJBQUE7RUFDQSw4Q0FBQTtBQ0FKO0FER0E7RUFDSSwwQkFBQTtFQUNBLGlEQUFBO0FDREo7QURJQTtFQUNJLDZCQUFBO0VBQ0Esb0RBQUE7QUNGSjtBREtBO0VBQ0ksaUNBQUE7RUFDQSx3REFBQTtBQ0hKO0FBZEk7RUFDSSx1QkNMQTtFRE1BLGFDYVE7QURHaEI7QUFkUTtFQUNJLGVBQUE7QUFnQlo7QUFiUTtFQUNJLGNDRkw7RURHSyx3QkFBQTtBQWVaO0FBWlE7RUFDSSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0NYSDtBRHlCVDtBQVhRO0VBQ0ksa0JBQUE7RUFHQSxnQ0FBQTtFQUNBLDRCQUFBO0FBYVoiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvTGlnaHQ7XHJcbiAgICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvUm9ib3RvLUxpZ2h0LnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90b0JvbGQ7XHJcbiAgICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvUm9ib3RvLUJvbGQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvUmVndWxhcjtcclxuICAgIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tUmVndWxhci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBUaXRpbGxpdW1XZWJCb2xkO1xyXG4gICAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1RpdGlsbGl1bVdlYi1Cb2xkLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFRpdGlsbGl1bVdlYlNlbWlCb2xkO1xyXG4gICAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1RpdGlsbGl1bVdlYi1TZW1pQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9MaWdodDtcbiAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1MaWdodC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9Cb2xkO1xuICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvUm9ib3RvLUJvbGQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogUm9ib3RvUmVndWxhcjtcbiAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFRpdGlsbGl1bVdlYkJvbGQ7XG4gIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9UaXRpbGxpdW1XZWItQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBUaXRpbGxpdW1XZWJTZW1pQm9sZDtcbiAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1RpdGlsbGl1bVdlYi1TZW1pQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuOmhvc3QgLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxMTBweDtcbn1cbjpob3N0IC5jb250ZW50IC5sb2dvIHtcbiAgcGFkZGluZzogMTJweCAwO1xufVxuOmhvc3QgLmNvbnRlbnQgLmxvZ2luIHtcbiAgY29sb3I6ICMxOTE5Mzg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9MaWdodDtcbn1cbjpob3N0IC5jb250ZW50IC5sb2dpbjpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNGRjk0MDA7XG4gIGNvbG9yOiAjRkY5NDAwO1xufVxuOmhvc3QgLmNvbnRlbnQgaW1nLnVzTG9naW46aG92ZXIge1xuICBib3JkZXItcmFkaXVzOiA0OCU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEwcHggI0M5QzlDOTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgMTBweCAjQzlDOUM5O1xuICAtbXMtYm94LXNoYWRvdzogMCAwIDEwcHggI0M5QzlDOTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggI0M5QzlDOTtcbn0iLCIvL0NvbG9yc1xyXG4kd2hpdGU6IHdoaXRlO1xyXG4kYmxhY2s6IGJsYWNrO1xyXG4kYmxhY2stdHdvOiAjMTkxOTE5O1xyXG4kZ3JheTogI0M5QzlDOTtcclxuJGdyYXktYmFubmVyOiAjRURFREVEO1xyXG4kZ3JheS1mb250OiAjNEM0QzRDO1xyXG4kZ3JheS1zaGFkb3c6ICNCQkJCQkI7XHJcbiRncmF5LWZvcm06ICNFRkVGRUY7XHJcbiRncmF5LXRhYmxlOiAjQzdDN0NDO1xyXG4keWVsbG93OiAjRkY5NDAwO1xyXG4kb3JhbmdlOiAjRkY4MzAwO1xyXG4kYmx1ZTogIzE5MTkzODtcclxuJGJsdWUtbGlnaHQ6ICMwRjYzODc7XHJcbiRibHVlLXNreTogIzAwOURGRjtcclxuJGJsdWUtdHdvOiAjMDA2ZWIzO1xyXG4kcmVkOiAjQzIwRDE5O1xyXG5cclxuXHJcbi8vU2l6ZXNcclxuJGhlYWRlci1oZWlnaHQ6IDExMHB4O1xyXG4kZm9vdGVyLWhlaWdodDogMTEwcHg7XHJcbiRzaWRlbmF2LXdpZHRoOiA5MHB4O1xyXG4kc2lkZW5hdi1vcGVuLXdpZHRoOiAyNTBweDtcclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _pages_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/layout/layout.component */ "PGY2");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "BgzB");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/register/register.component */ "fNfI");








const routes = [
    {
        path: '',
        component: _pages_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-home-home-module */ "pages-home-home-module").then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "99Un")).then(m => m.HomeModule),
                pathMatch: 'full'
            }, {
                path: 'register',
                component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | pages-register-step1-step1-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-register-step1-step1-module")]).then(__webpack_require__.bind(null, /*! ./pages/register/step1/step1.module */ "HuL4")).then(m => m.Step1Module),
                        pathMatch: 'full'
                    }, {
                        path: 'step2',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-register-step2-step2-module */ "pages-register-step2-step2-module").then(__webpack_require__.bind(null, /*! ./pages/register/step2/step2.module */ "bxlG")).then(m => m.Step2Module)
                    }, {
                        path: 'step3',
                        loadChildren: () => Promise.all(/*! import() | pages-register-step3-step3-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-register-step3-step3-module")]).then(__webpack_require__.bind(null, /*! ./pages/register/step3/step3.module */ "o8j3")).then(m => m.Step3Module)
                    }, {
                        path: 'login',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-register-login-login-module */ "pages-register-login-login-module").then(__webpack_require__.bind(null, /*! ./pages/register/login/login.module */ "+EAq")).then(m => m.LoginModule)
                    }
                ]
            }
        ]
    }, {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | dashboard-happy-home-happy-home-module */ "dashboard-happy-home-happy-home-module").then(__webpack_require__.bind(null, /*! ./dashboard/happy-home/happy-home.module */ "vXZd")).then(m => m.HappyHomeModule),
                pathMatch: 'full'
            }, {
                path: 'happy-history',
                loadChildren: () => __webpack_require__.e(/*! import() | dashboard-happy-history-happy-home-module */ "dashboard-happy-history-happy-home-module").then(__webpack_require__.bind(null, /*! ./dashboard/happy-history/happy-home.module */ "O16z")).then(m => m.HappyHistoryModule)
            }, {
                path: 'happy-trading',
                loadChildren: () => Promise.all(/*! import() | dashboard-happy-trading-happy-trading-module */[__webpack_require__.e("common"), __webpack_require__.e("dashboard-happy-trading-happy-trading-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/happy-trading/happy-trading.module */ "1CQ8")).then(m => m.HappyTradingModule)
            }, {
                path: 'happy-settings',
                loadChildren: () => Promise.all(/*! import() | dashboard-happy-settings-happy-settings-module */[__webpack_require__.e("common"), __webpack_require__.e("dashboard-happy-settings-happy-settings-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/happy-settings/happy-settings.module */ "KBFe")).then(m => m.HappySettingsModule)
            }
        ]
    }, {
        path: '**',
        component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                initialNavigation: 'enabled',
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                relativeLinkResolution: 'legacy'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        initialNavigation: 'enabled',
                        scrollPositionRestoration: 'enabled',
                        anchorScrolling: 'enabled',
                        relativeLinkResolution: 'legacy'
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wKXb":
/*!*********************************************************!*\
  !*** ./src/app/pages/layout/footer/footer.component.ts ***!
  \*********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 22, vars: 0, consts: [[1, "copyright"], [1, "container-fluid"], [1, "row", "pt-3", "pb-3"], [1, "col-md-8", "d-flex", "justify-content-center"], [1, "row", "d-flex", "justify-content-center"], [1, "col-9"], [1, "copyText"], [1, "col-lg-3", "d-none", "d-sm-none", "d-lg-block"], ["href", "#"], ["src", "../../../../assets/img/bear.png", "alt", "BearSolutions", 1, "d-block", "img-fluid", "bear-logo"], [1, "col-lg-12", "d-block", "d-sm-block", "d-lg-none", "d-sm-flex", "d-flex", "justify-content-center"], ["src", "../../../../assets/img/bear.png", "alt", "BearSolutions", 1, "d-block", "img-fluid"], [1, "col-md-4"], [1, "row"], [1, "col-lg-7", "d-flex", "justify-content-center"], ["href", "#", 1, "text-center", "yellow"], [1, "col-lg-5", "d-flex", "justify-content-center"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A92021 todos los derechos reservados / Desarrollado por");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Terms and conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Privacy policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\n  font-family: RobotoLight;\n  src: url('Roboto-Light.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: RobotoBold;\n  src: url('Roboto-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: RobotoRegular;\n  src: url('Roboto-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: TitilliumWebBold;\n  src: url('TitilliumWeb-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: TitilliumWebSemiBold;\n  src: url('TitilliumWeb-SemiBold.ttf') format(\"truetype\");\n}\n[_nghost-%COMP%]   .yellow[_ngcontent-%COMP%] {\n  color: #FF9400;\n  font-family: RobotoLight;\n  line-height: 77px;\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 110px;\n}\n[_nghost-%COMP%]   .copyright[_ngcontent-%COMP%]   .bear-logo[_ngcontent-%COMP%] {\n  padding: 22px 0;\n}\n[_nghost-%COMP%]   .copyText[_ngcontent-%COMP%] {\n  color: black;\n  font-family: RobotoLight;\n  line-height: 77px;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcZm9udHMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EsK0NBQUE7QUNDSjtBREVBO0VBQ0ksdUJBQUE7RUFDQSw4Q0FBQTtBQ0FKO0FER0E7RUFDSSwwQkFBQTtFQUNBLGlEQUFBO0FDREo7QURJQTtFQUNJLDZCQUFBO0VBQ0Esb0RBQUE7QUNGSjtBREtBO0VBQ0ksaUNBQUE7RUFDQSx3REFBQTtBQ0hKO0FBZEk7RUFDSSxjQ0lDO0VESEQsd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBZ0JSO0FBYkk7RUFDSSx1QkNaQTtFRGFBLGFDT1E7QURRaEI7QUFiUTtFQUNJLGVBQUE7QUFlWjtBQVhJO0VBQ0ksWUNwQkE7RURxQkEsd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBYVIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvTGlnaHQ7XHJcbiAgICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvUm9ib3RvLUxpZ2h0LnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90b0JvbGQ7XHJcbiAgICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvUm9ib3RvLUJvbGQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvUmVndWxhcjtcclxuICAgIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tUmVndWxhci50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBUaXRpbGxpdW1XZWJCb2xkO1xyXG4gICAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1RpdGlsbGl1bVdlYi1Cb2xkLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFRpdGlsbGl1bVdlYlNlbWlCb2xkO1xyXG4gICAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1RpdGlsbGl1bVdlYi1TZW1pQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9MaWdodDtcbiAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1MaWdodC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9Cb2xkO1xuICBzcmM6IHVybCguLi8uLi9hc3NldHMvZm9udHMvUm9ib3RvLUJvbGQudHRmKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogUm9ib3RvUmVndWxhcjtcbiAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFRpdGlsbGl1bVdlYkJvbGQ7XG4gIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9mb250cy9UaXRpbGxpdW1XZWItQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBUaXRpbGxpdW1XZWJTZW1pQm9sZDtcbiAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2ZvbnRzL1RpdGlsbGl1bVdlYi1TZW1pQm9sZC50dGYpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuOmhvc3QgLnllbGxvdyB7XG4gIGNvbG9yOiAjRkY5NDAwO1xuICBmb250LWZhbWlseTogUm9ib3RvTGlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiA3N3B4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuOmhvc3QgLmNvcHlyaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDExMHB4O1xufVxuOmhvc3QgLmNvcHlyaWdodCAuYmVhci1sb2dvIHtcbiAgcGFkZGluZzogMjJweCAwO1xufVxuOmhvc3QgLmNvcHlUZXh0IHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogUm9ib3RvTGlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiA3N3B4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufSIsIi8vQ29sb3JzXHJcbiR3aGl0ZTogd2hpdGU7XHJcbiRibGFjazogYmxhY2s7XHJcbiRibGFjay10d286ICMxOTE5MTk7XHJcbiRncmF5OiAjQzlDOUM5O1xyXG4kZ3JheS1iYW5uZXI6ICNFREVERUQ7XHJcbiRncmF5LWZvbnQ6ICM0QzRDNEM7XHJcbiRncmF5LXNoYWRvdzogI0JCQkJCQjtcclxuJGdyYXktZm9ybTogI0VGRUZFRjtcclxuJGdyYXktdGFibGU6ICNDN0M3Q0M7XHJcbiR5ZWxsb3c6ICNGRjk0MDA7XHJcbiRvcmFuZ2U6ICNGRjgzMDA7XHJcbiRibHVlOiAjMTkxOTM4O1xyXG4kYmx1ZS1saWdodDogIzBGNjM4NztcclxuJGJsdWUtc2t5OiAjMDA5REZGO1xyXG4kYmx1ZS10d286ICMwMDZlYjM7XHJcbiRyZWQ6ICNDMjBEMTk7XHJcblxyXG5cclxuLy9TaXplc1xyXG4kaGVhZGVyLWhlaWdodDogMTEwcHg7XHJcbiRmb290ZXItaGVpZ2h0OiAxMTBweDtcclxuJHNpZGVuYXYtd2lkdGg6IDkwcHg7XHJcbiRzaWRlbmF2LW9wZW4td2lkdGg6IDI1MHB4O1xyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map