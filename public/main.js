(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n  <div class=\"container\">\n\n    <div id=\"logo\" class=\"pull-left\">\n      <h1>\n        <a href=\"javascript:void(0)\" class=\"scrollto\">HEADER</a>\n      </h1>\n      <!-- Uncomment below if you prefer to use an image logo -->\n      <!-- <a href=\"#intro\"><img src=\"img/logo.png\" alt=\"\" title=\"\" /></a>-->\n    </div>\n\n   \n    <!-- #nav-menu-container -->\n\n  </div>\n</header>\n<!-- #header -->\n\n<div class=\"container\">\n\n\n  \n  <div class=\"container bootstrap snippet\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"main-box no-header clearfix\">\n          <div class=\"row search-container\">\n              <div class=\"col-md-2\">\n                  <div class=\"input-group input-group-unstyled\">\n                          <select [(ngModel)]=folderID name=\"folderID\" (change)=getRecords(folderID) class=\"form-control\">\n                            <option value=\"p1\">P1</option>\n                            <option value=\"p2\">P2</option>\n                          </select>\n                        \n                  </div>\n              </div>\n            <div class=\"col-md-4\">\n              <div class=\"input-group input-group-unstyled\">\n                  <input type=\"text\" placeholder=\"Search Env variabels\" class=\"form-control\" name=\"search\" [(ngModel)]=\"search\" />\n                  <span class=\"input-group-addon\">\n                      <i class=\"fa fa-search\"></i>\n                  </span>\n              </div>\n          </div>\n          \n          <div class=\"col-md-6 text-right\">\n            \n            \n            <button (click)=\"createItem()\" class=\"btn btn-success\"> <i class=\"fa fa-plus\"></i> &nbsp; Create </button>\n          </div>\n          </div>\n          <div class=\"main-box-body clearfix\">\n              <div class=\"alert alert-info\" *ngIf=\"message\">\n                  {{message}}\n                </div>\n            <div class=\"table-responsive\">\n              <table class=\"table user-list\">\n                <thead>\n                  <tr>\n                    <th>Folder</th>\n                    <th>Key</th>\n                    <th>Value</th>\n                    <th>Edit</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngIf=\"(!details || details.length == 0)  && !createItemData\">\n                    <td colspan=\"5\">No Data Found</td>\n                  </tr>\n                  <tr *ngFor=\"let item of searchValue(details); let i = index\">\n                    <td>{{folderID}}</td>\n                    <td>\n                      <span *ngIf=\"i != selectedItem\" >{{item.key}}</span>\n                      <span *ngIf=\"i == selectedItem\"><input [(ngModel)]=item.key name=\"key\" placeholder='Enter Key' type=\"text\" pattern=\"^\\S*$\" class=\"form-control\" id=\"key\" required></span>\n                    </td>\n                    <td>\n                        <span *ngIf=\"i != selectedItem\" >{{item.value}}</span>\n                          <span *ngIf=\"i == selectedItem\"><input [(ngModel)]=item.value name=\"value\" placeholder='Enter value' type=\"text\" class=\"form-control\" id=\"key\" required></span>\n                    </td>\n                    <td>\n                      <button *ngIf=\"i != selectedItem\" (click)=\"selectEditItem(i)\">Edit</button>\n                      <button *ngIf=\"i == selectedItem\" class=\"btn-success\" (click)=\"edit(item)\">Save</button>\n                      <button *ngIf=\"i == selectedItem\" class=\"btn-danger\" (click)=\"selectedItem = null\">Cancel</button>\n                    </td>\n                  </tr>\n                  <tr *ngIf=\"createItemData\">\n                    <td>\n                      <select [(ngModel)]=folderID readonly name=\"folder\" placeholder='Select Folder' class=\"form-control\" id=\"folder\" required>\n                          <option value=\"p1\">P1</option>\n                          <option value=\"p2\">P2</option>\n                      </select>\n                    </td>\n                    <td>\n                      <input [(ngModel)]=createItemData.key name=\"key\" placeholder='Enter Key' type=\"text\" pattern=\"^\\S*$\" class=\"form-control\" id=\"key\" required>\n                    </td>\n                    <td>\n                      <input [(ngModel)]=createItemData.value name=\"value\" placeholder='Enter Value' type=\"text\" class=\"form-control\" id=\"value\" required>\n                    </td>\n                    <td>\n                        <button *ngIf=\"i == selectedItem\" class=\"btn-success\" (click)=\"edit(createItemData)\">Save</button>\n                        <button *ngIf=\"i == selectedItem\" class=\"btn-danger\" (click)=\"createItemData = null\">Cancel</button>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.service */ "./src/app/details.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(detailsService) {
        this.detailsService = detailsService;
        this.folderID = 'p1';
        this.createItemData = false;
        this.search = '';
        this.message = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getRecords(this.folderID);
    };
    AppComponent.prototype.getRecords = function (folder) {
        var _this = this;
        this.detailsService.getdetails(folder).subscribe(function (data) {
            _this.details = _this.objectToArray(data);
        });
    };
    AppComponent.prototype.selectEditItem = function (i, item) {
        this.selectedItem = i;
    };
    AppComponent.prototype.edit = function (item) {
        var _this = this;
        this.detailsService.updateDetails(this.folderID, item.key, item.value).subscribe(function (data) {
            _this.details = _this.objectToArray(data);
            _this.selectedItem = null;
            if (_this.createItemData)
                _this.message = "New Enveronment was created successfully";
            else
                _this.message = "Enveronment veraible updated successfully";
            setTimeout(function () { _this.message = false; }, 5000);
            _this.createItemData = false;
        });
    };
    AppComponent.prototype.createItem = function (item) {
        this.selectedItem = null;
        this.createItemData = {};
    };
    AppComponent.prototype.objectToArray = function (obj) {
        var result = [];
        Object.keys(obj).forEach(function (i) {
            var temp = {};
            temp.key = i;
            temp.value = obj[i];
            result.push(temp);
        });
        return result;
    };
    AppComponent.prototype.searchValue = function () {
        var _this = this;
        if (this.search != '')
            return this.details.filter(function (item) { return (item.key.indexOf(_this.search) != -1 || item.value.indexOf(_this.search) != -1); });
        else
            return this.details;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_details_service__WEBPACK_IMPORTED_MODULE_1__["DetailsService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _details_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details.service */ "./src/app/details.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [_details_service__WEBPACK_IMPORTED_MODULE_5__["DetailsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/details.service.ts":
/*!************************************!*\
  !*** ./src/app/details.service.ts ***!
  \************************************/
/*! exports provided: DetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsService", function() { return DetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailsService = /** @class */ (function () {
    function DetailsService(http) {
        this.http = http;
        this.url = 'http://localhost:8002/api/';
    }
    DetailsService.prototype.getdetails = function (id) {
        console.log(id);
        return this.http.get(this.url + id, {});
    };
    DetailsService.prototype.updateDetails = function (id, key, value) {
        return this.http.get(this.url + id + '/' + key + '/' + value, {});
    };
    DetailsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DetailsService);
    return DetailsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Praveen\testing\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map