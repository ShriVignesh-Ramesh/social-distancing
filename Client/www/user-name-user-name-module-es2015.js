(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-name-user-name-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-name/user-name.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-name/user-name.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content >\n  <div id=\"container\">\n    <ion-icon name=\"person-circle-outline\" class=\"icon_style\"></ion-icon>\n    <h2 class=\"userNameFontColor\">You can be called as ??</h2>\n    <ion-input placeholder=\"Enter a name\" class=\"nameInput\" [(ngModel)]=\"name\"></ion-input>\n    <div class=\"button_align\">\n      <ion-button color=\"light\" shape=\"round\" (click)=\"safeClick()\">Protect me from Everyone</ion-button>\n        <ion-button color=\"danger\" shape=\"round\" (click)=\"riskClick()\">Protect me from high risk </ion-button>\n    </div>\n    \n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/user-name/user-name-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/user-name/user-name-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: UserNameRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNameRoutingModule", function() { return UserNameRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_name_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-name.component */ "./src/app/user-name/user-name.component.ts");




const routes = [
    {
        path: '',
        component: _user_name_component__WEBPACK_IMPORTED_MODULE_3__["UserNameComponent"],
    }
];
let UserNameRoutingModule = class UserNameRoutingModule {
};
UserNameRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserNameRoutingModule);



/***/ }),

/***/ "./src/app/user-name/user-name.component.scss":
/*!****************************************************!*\
  !*** ./src/app/user-name/user-name.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(100,106,253,1) 0%, rgba(0,212,255,1) 100%);\n}\n\n#container {\n  text-align: center;\n  padding: 10px;\n  left: 0;\n  right: 0;\n  margin-top: 100px;\n}\n\n.icon_style {\n  font-size: 50px;\n  color: white;\n}\n\n.userNameFontColor {\n  margin-top: 30px;\n  color: white;\n  font-family: monospace;\n}\n\n.nameInput {\n  margin-top: 50px;\n  color: white;\n  font-family: monospace;\n  border-bottom: 1px solid;\n  border-radius: 10px;\n}\n\n.button_align {\n  margin-top: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWhhL3NvY2lhbC1kaXN0YW5jaW5nL3NyYy9hcHAvdXNlci1uYW1lL3VzZXItbmFtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci1uYW1lL3VzZXItbmFtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtIQUFBO0FDQUo7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNHSjs7QUREQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQ0lKOztBREZBO0VBQ0ksZ0JBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbmFtZS91c2VyLW5hbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jb250ZW50e1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMiwwLDM2LDEpIDAlLCByZ2JhKDEwMCwxMDYsMjUzLDEpIDAlLCByZ2JhKDAsMjEyLDI1NSwxKSAxMDAlKTtcbn1cbiNjb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIH1cbi5pY29uX3N0eWxle1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4udXNlck5hbWVGb250Q29sb3J7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn1cbi5uYW1lSW5wdXR7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5idXR0b25fYWxpZ257XG4gICAgbWFyZ2luLXRvcDogNzVweDtcbn1cbiAgIiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDIsMCwzNiwxKSAwJSwgcmdiYSgxMDAsMTA2LDI1MywxKSAwJSwgcmdiYSgwLDIxMiwyNTUsMSkgMTAwJSk7XG59XG5cbiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLmljb25fc3R5bGUge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnVzZXJOYW1lRm9udENvbG9yIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xufVxuXG4ubmFtZUlucHV0IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5idXR0b25fYWxpZ24ge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/user-name/user-name.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-name/user-name.component.ts ***!
  \**************************************************/
/*! exports provided: UserNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNameComponent", function() { return UserNameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let UserNameComponent = class UserNameComponent {
    constructor(router, toastController) {
        this.router = router;
        this.toastController = toastController;
        this.name = '';
    }
    ngOnInit() {
        if (localStorage.getItem("name")) {
            this.name = localStorage.getItem("name");
        }
    }
    safeClick() {
        localStorage.setItem("safeClick", "ALL");
        if (this.name != '') {
            localStorage.setItem("name", this.name);
            this.router.navigateByUrl("/survey");
        }
        else {
            this.showToastOnImage();
        }
    }
    riskClick() {
        localStorage.setItem("safeClick", "HIGH");
        if (this.name != '') {
            this.router.navigateByUrl("/survey");
            localStorage.setItem("name", this.name);
        }
        else {
            this.showToastOnImage();
        }
    }
    showToastOnImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Enter Name',
                duration: 2000,
                position: 'bottom',
            });
            toast.present();
        });
    }
};
UserNameComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
UserNameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-name',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-name.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-name/user-name.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-name.component.scss */ "./src/app/user-name/user-name.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], UserNameComponent);



/***/ }),

/***/ "./src/app/user-name/user-name.module.ts":
/*!***********************************************!*\
  !*** ./src/app/user-name/user-name.module.ts ***!
  \***********************************************/
/*! exports provided: UserNameModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNameModule", function() { return UserNameModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_name_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-name-routing.module */ "./src/app/user-name/user-name-routing.module.ts");
/* harmony import */ var _user_name_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-name.component */ "./src/app/user-name/user-name.component.ts");







let UserNameModule = class UserNameModule {
};
UserNameModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _user_name_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserNameRoutingModule"]
        ],
        declarations: [_user_name_component__WEBPACK_IMPORTED_MODULE_6__["UserNameComponent"]]
    })
], UserNameModule);



/***/ })

}]);
//# sourceMappingURL=user-name-user-name-module-es2015.js.map