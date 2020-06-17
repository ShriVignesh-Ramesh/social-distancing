(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["questions-questions-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/questions/questions.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/questions/questions.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  \n  <ion-content>\n    <ion-item>\n      <div id=\"container\">\n        <h2 >Hi {{name}}!!</h2>\n        <i class=\"sub_text\">Please take a minute to respond and help us with evaluation ...</i><br>\n        \n      </div>\n    </ion-item>\n    \n    <ion-list>\n      <ion-radio-group [(ngModel)]=\"fever\">\n        <ion-list-header>\n          <ion-label>\n            1. Do you have fever ?\n          </ion-label>\n        </ion-list-header>\n    \n        <ion-item>\n          <ion-label>Yes</ion-label>\n          <ion-radio value=\"yes\"></ion-radio>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label>No</ion-label>\n          <ion-radio value=\"No\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n    <ion-list>\n      <ion-radio-group [(ngModel)]=\"throat\">\n        <ion-list-header>\n          <ion-label>\n            2. Do you have Sore Throat ?\n          </ion-label>\n        </ion-list-header>\n    \n        <ion-item>\n          <ion-label>Yes</ion-label>\n          <ion-radio value=\"yes\"></ion-radio>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label>No</ion-label>\n          <ion-radio value=\"No\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n    <ion-list>\n      <ion-radio-group [(ngModel)]=\"cough\">\n        <ion-list-header>\n          <ion-label>\n            3. Do you have dry and persistent cough ?\n          </ion-label>\n        </ion-list-header>\n    \n        <ion-item>\n          <ion-label>Yes</ion-label>\n          <ion-radio value=\"yes\"></ion-radio>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label>No</ion-label>\n          <ion-radio value=\"No\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n    <ion-list>\n      <ion-radio-group [(ngModel)]=\"pain\">\n        <ion-list-header>\n          <ion-label>\n            4. Do you suffer from muscle pain ?\n          </ion-label>\n        </ion-list-header>\n    \n        <ion-item>\n          <ion-label>Yes</ion-label>\n          <ion-radio value=\"yes\"></ion-radio>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label>No</ion-label>\n          <ion-radio value=\"No\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n    <ion-list>\n      <ion-radio-group [(ngModel)]=\"contact\">\n        <ion-list-header>\n          <ion-label>\n            5. Have you been in tough with positive COVID-19 patients ?\n          </ion-label>\n        </ion-list-header>\n    \n        <ion-item>\n          <ion-label>Yes</ion-label>\n          <ion-radio value=\"yes\"></ion-radio>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label>No</ion-label>\n          <ion-radio value=\"No\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n    <ion-list>\n      <ion-radio-group [(ngModel)]=\"hotspot\">\n        <ion-list-header>\n          <ion-label>\n            6. Have you gone to any COVID-19 hotspot recently ?\n          </ion-label>\n        </ion-list-header>\n    \n        <ion-item>\n          <ion-label>Yes</ion-label>\n          <ion-radio value=\"yes\"></ion-radio>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label>No</ion-label>\n          <ion-radio value=\"No\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n    <div class=\" pad_50 align_center\">\n      <ion-button color=\"secondary\" class=\"button_home\" shape=\"round\" (click)=\"submitSurvey()\">Submit</ion-button>\n    </div>\n    \n  </ion-content>\n  \n  \n  \n");

/***/ }),

/***/ "./src/app/questions/questions-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/questions/questions-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: QuestionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsRoutingModule", function() { return QuestionsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _questions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questions.component */ "./src/app/questions/questions.component.ts");




const routes = [
    {
        path: '',
        component: _questions_component__WEBPACK_IMPORTED_MODULE_3__["QuestionsComponent"],
    }
];
let QuestionsRoutingModule = class QuestionsRoutingModule {
};
QuestionsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], QuestionsRoutingModule);



/***/ }),

/***/ "./src/app/questions/questions.component.scss":
/*!****************************************************!*\
  !*** ./src/app/questions/questions.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  padding: 10px;\n  left: 0;\n  right: 0;\n  padding-bottom: 30px;\n}\n\n.sub_text {\n  font-size: 12px;\n  margin-bottom: 10px;\n}\n\nion-label {\n  font-weight: bolder;\n}\n\n.align_center {\n  text-align: center;\n}\n\n.pad_50 {\n  padding: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWhhL3NvY2lhbC1kaXN0YW5jaW5nL3NyYy9hcHAvcXVlc3Rpb25zL3F1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcXVlc3Rpb25zL3F1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURDRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0VKOztBREFFO0VBQ0ksbUJBQUE7QUNHTjs7QURBRTtFQUNJLGtCQUFBO0FDR047O0FEREU7RUFDSSxhQUFBO0FDSU4iLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbnMvcXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgfVxuICAuc3ViX3RleHR7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgaW9uLWxhYmVse1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgIC8vZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduX2NlbnRlcntcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAucGFkXzUwe1xuICAgICAgcGFkZGluZzogNTBweDtcbiAgfSIsIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLnN1Yl90ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uYWxpZ25fY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGFkXzUwIHtcbiAgcGFkZGluZzogNTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/questions/questions.component.ts":
/*!**************************************************!*\
  !*** ./src/app/questions/questions.component.ts ***!
  \**************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let QuestionsComponent = class QuestionsComponent {
    constructor(toastController, router) {
        this.toastController = toastController;
        this.router = router;
        this.name = '';
        this.fever = '';
        this.hotspot = '';
        this.contact = '';
        this.cough = '';
        this.pain = '';
        this.throat = '';
        this.primaryaffected = '';
        this.numberAffected = 0;
    }
    ngOnInit() {
        this.name = localStorage.getItem('name');
    }
    submitSurvey() {
        this.numberAffected = 0;
        if (this.fever == '' || this.contact == '' || this.cough == '' || this.hotspot == '' || this.pain == '' || this.throat == '') {
            this.showToastOnImage("Answer all questions");
        }
        else {
            if (this.contact == "yes") {
                localStorage.setItem("risk", "HIGH");
                this.navigateToResult();
            }
            else {
                if (this.fever == "yes") {
                    this.numberAffected = this.numberAffected + 1;
                }
                if (this.cough == "yes") {
                    this.numberAffected = this.numberAffected + 1;
                }
                if (this.hotspot == "yes") {
                    this.numberAffected = this.numberAffected + 1;
                }
                if (this.pain == "yes") {
                    this.numberAffected = this.numberAffected + 1;
                }
                if (this.throat == "yes") {
                    this.numberAffected = this.numberAffected + 1;
                }
                this.calculateRisk(this.numberAffected);
            }
        }
    }
    calculateRisk(number) {
        if (number >= 3) {
            localStorage.setItem("risk", "HIGH");
        }
        else {
            localStorage.setItem("risk", "LOW");
        }
        this.navigateToResult();
    }
    navigateToResult() {
        this.router.navigateByUrl("/result");
    }
    showToastOnImage(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000,
                position: 'bottom',
            });
            toast.present();
        });
    }
};
QuestionsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
QuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-questions',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./questions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/questions/questions.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./questions.component.scss */ "./src/app/questions/questions.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], QuestionsComponent);



/***/ }),

/***/ "./src/app/questions/questions.module.ts":
/*!***********************************************!*\
  !*** ./src/app/questions/questions.module.ts ***!
  \***********************************************/
/*! exports provided: QuestionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsModule", function() { return QuestionsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _questions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _questions_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./questions-routing.module */ "./src/app/questions/questions-routing.module.ts");







let QuestionsModule = class QuestionsModule {
};
QuestionsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _questions_routing_module__WEBPACK_IMPORTED_MODULE_6__["QuestionsRoutingModule"]
        ],
        declarations: [_questions_component__WEBPACK_IMPORTED_MODULE_5__["QuestionsComponent"]]
    })
], QuestionsModule);



/***/ })

}]);
//# sourceMappingURL=questions-questions-module-es2015.js.map