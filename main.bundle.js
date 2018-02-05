webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css\" rel=\"stylesheet\">\n<div class=\"container\">\n\t<div class=\"row\">\n\n\n\n\n    <div class=\"col-xs-12\">\n    <div class=\"   col-md-10   col-sm-8 col-lg-6\">\n        <div class=\"well profile\">\n             <div class=\"col-sm-12\">\n                 <div class=\"col-xs-12 col-sm-8\">\n                     <h2>Shyam Patel</h2>\n                     <p><strong>About: </strong> Web Devoloper / Angular. </p>\n                     <p><strong>Hobbies: </strong> Read, out with friends, listen to music, play cricketand learn new things. </p>\n                     <p><strong>Skills: </strong>\n                       <span class=\"tags\">Angular</span>\n\n                         <span class=\"tags\">Java</span>\n                         <span class=\"tags\">Android</span>\n                         <span class=\"tags\">bootstrap3</span>\n                     </p>\n                 </div>\n                 <div class=\"col-xs-12 col-sm-4 text-center\">\n                     <figure>\n                         <img src=\"assets\\image\\16807792_833207796820204_3144936117578313933_n.jpg\" alt=\"\" class=\"img-circle img-responsive\">\n                         <br>\n                         <div class=\"bottom\">\n                             <a class=\"btn btn-primary btn-twitter btn-sm\" href=\"https://twitter.com/webmaniac\">\n                                 <i class=\"fa fa-twitter\"></i>\n                             </a>\n                             <a class=\"btn btn-danger btn-sm\" rel=\"publisher\"\n                                href=\"https://plus.google.com/u/1/+ShyamPatelredrose\">\n                                 <i class=\"fa fa-google-plus\"></i>\n                             </a>\n                             <a class=\"btn btn-primary btn-sm\" rel=\"publisher\"\n                                href=\"https://www.facebook.com/shyam.patel.92351995\">\n                                 <i class=\"fa fa-facebook\"></i>\n                             </a>\n\n                         </div>\n                         <figcaption class=\"ratings\">\n                             <p>Ratings\n                             <a href=\"#\">\n                                 <span class=\"fa fa-star\"></span>\n                             </a>\n                             <a href=\"#\">\n                                 <span class=\"fa fa-star\"></span>\n                             </a>\n                             <a href=\"#\">\n                                 <span class=\"fa fa-star\"></span>\n                             </a>\n                             <a href=\"#\">\n                                 <span class=\"fa fa-star\"></span>\n                             </a>\n                             <a href=\"#\">\n                                  <span class=\"fa fa-star-o\"></span>\n                             </a>\n                             </p>\n                         </figcaption>\n                     </figure>\n                 </div>\n             </div>\n             <div class=\"profile-userbuttons\">\n\n                 <button type=\"button\" class=\"btn btn-danger btn-sm\">Message</button>\n               </div>\n             <div class=\"col-xs-12 divider text-center\">\n                 <div class=\"col-xs-12 col-sm-4 emphasis\">\n                     <h2><strong> 20,7K </strong></h2>\n                     <p><small>Followers</small></p>\n                     <button class=\"btn btn-success btn-block\"><span class=\"fa fa-plus-circle\"></span> Follow </button>\n                 </div>\n                 <div class=\"col-xs-12 col-sm-4 emphasis\">\n                     <h2><strong>245</strong></h2>\n                     <p><small>Following</small></p>\n                     <button class=\"btn btn-info btn-block\"><span class=\"fa fa-user\"></span> View Profile </button>\n                 </div>\n                 <div class=\"col-xs-12 col-sm-4 emphasis\">\n                     <h2><strong>43</strong></h2>\n                     <p><small>Snippets</small></p>\n                     <div class=\"btn-group dropup btn-block\">\n                       <button type=\"button\" class=\"btn btn-primary\"><span class=\"fa fa-gear\"></span> Options </button>\n                       <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\n                         <span class=\"caret\"></span>\n                         <span class=\"sr-only\">Toggle Dropdown</span>\n                       </button>\n                       <ul class=\"dropdown-menu text-left\" role=\"menu\">\n                         <li><a href=\"#\"><span class=\"fa fa-envelope pull-right\"></span> Send an email </a></li>\n                         <li><a href=\"#\"><span class=\"fa fa-list pull-right\"></span> Add or remove from a list  </a></li>\n                         <li class=\"divider\"></li>\n                         <li><a href=\"#\"><span class=\"fa fa-warning pull-right\"></span>Report this user for spam</a></li>\n                         <li class=\"divider\"></li>\n                         <li><a href=\"#\" class=\"btn disabled\" role=\"button\"> Unfollow </a></li>\n                       </ul>\n                     </div>\n                 </div>\n             </div>\n        </div>\n     </div>\n</div>\n\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Lato:400,700);", ""]);

// module
exports.push([module.i, "body {\n  font-family: 'Lato', 'sans-serif'; }\n\n.profile {\n  min-height: 355px;\n  display: inline-block; }\n\nfigcaption.ratings {\n  margin-top: 20px; }\n\nfigcaption.ratings a {\n  color: #f1c40f;\n  font-size: 11px; }\n\nfigcaption.ratings a:hover {\n  color: #f39c12;\n  text-decoration: none; }\n\n.divider {\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\n.emphasis {\n  border-top: 4px solid transparent; }\n\n.emphasis:hover {\n  border-top: 4px solid #1abc9c; }\n\n.emphasis h2 {\n  margin-bottom: 0; }\n\nspan.tags {\n  background: #1abc9c;\n  border-radius: 2px;\n  color: #f5f5f5;\n  font-weight: bold;\n  padding: 2px 4px; }\n\n.dropdown-menu {\n  background-color: #34495e;\n  box-shadow: none;\n  -webkit-box-shadow: none;\n  width: 250px;\n  margin-left: -125px;\n  left: 50%; }\n\n.dropdown-menu .divider {\n  background: none; }\n\n.dropdown-menu > li > a {\n  color: #f5f5f5; }\n\n.dropup .dropdown-menu {\n  margin-bottom: 10px; }\n\n.dropup .dropdown-menu:before {\n  content: \"\";\n  border-top: 10px solid #34495e;\n  border-right: 10px solid transparent;\n  border-left: 10px solid transparent;\n  position: absolute;\n  bottom: -10px;\n  left: 50%;\n  margin-left: -10px;\n  z-index: 10; }\n\n.card.people .card-bottom {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: inline-block;\n  width: 100%;\n  padding: 10px 20px;\n  line-height: 29px;\n  text-align: center;\n  box-sizing: border-box; }\n\n.card.hovercard .bottom {\n  padding: 0 20px;\n  margin-bottom: 17px; }\n\n/* Profile container */\n.profile-userbuttons {\n  text-align: center;\n  margin-top: 10px; }\n\n.profile-userbuttons .btn {\n  text-transform: uppercase;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 6px 15px;\n  margin-right: 5px; }\n\n.profile-userbuttons .btn:last-child {\n  margin-right: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__histroy_histroy_component__ = __webpack_require__("../../../../../src/app/histroy/histroy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_filter_filter_component__ = __webpack_require__("../../../../../src/app/home/filter/filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_signin_signin_component__ = __webpack_require__("../../../../../src/app/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_signup_signup_component__ = __webpack_require__("../../../../../src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_user_user_component__ = __webpack_require__("../../../../../src/app/home/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_search_search_component__ = __webpack_require__("../../../../../src/app/home/search/search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'history', component: __WEBPACK_IMPORTED_MODULE_3__histroy_histroy_component__["a" /* HistroyComponent */], },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_5__auth_signin_signin_component__["a" /* SigninComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_6__auth_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_8__home_user_user_component__["a" /* UserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'filter', component: __WEBPACK_IMPORTED_MODULE_4__home_filter_filter_component__["a" /* FilterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_10__home_search_search_component__["a" /* SearchComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = " <app-header></app-header>\n\n<!-- <router-outlet></router-outlet> -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_firebase__["initializeApp"]({
            apiKey: 'AIzaSyBwOwjKyV5xfO80RakKv5NUgjtskfxUTmY',
            authDomain: 'creativity-fd595.firebaseapp.com'
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__histroy_histroy_component__ = __webpack_require__("../../../../../src/app/histroy/histroy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_search_search_component__ = __webpack_require__("../../../../../src/app/home/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_filter_filter_component__ = __webpack_require__("../../../../../src/app/home/filter/filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_user_user_component__ = __webpack_require__("../../../../../src/app/home/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_signin_signin_component__ = __webpack_require__("../../../../../src/app/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_signup_signup_component__ = __webpack_require__("../../../../../src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_user_userService_service__ = __webpack_require__("../../../../../src/app/home/user/userService.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__histroy_histroy_component__["a" /* HistroyComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_filter_filter_component__["a" /* FilterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_11__auth_signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_12__auth_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_17__about_about_component__["a" /* AboutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_18_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["b" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_16__auth_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_19__home_user_userService_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (!this.authService.login) {
            this.router.navigate(['/signin']);
            alert('To visit to Random Users then first Please Login or Register');
        }
        return this.authService.login;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.email = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["b" /* Subject */]();
    }
    AuthService.prototype.signUp = function (email, password) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().createUserWithEmailAndPassword(email, password)
            .then(function (res) {
            _this.router.navigate(['/signin']);
        })
            .catch(function (error) { return alert("Password must be greater than 6"); });
    };
    AuthService.prototype.signin = function (email, passsword) {
        var _this = this;
        //  this.login = true;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signInWithEmailAndPassword(email, passsword)
            .then(function (res) {
            _this.router.navigate(['/']);
            _this.login = true;
            _this.getUserName(email);
            //  console.log(this.login);
        }).catch(function (error) { return alert("Please Enter valid username and password"); });
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.getToken()
            .then(function (token) { return _this.token = token; });
        return this.token;
    };
    AuthService.prototype.isAuth = function () {
        return this.token != null;
    };
    AuthService.prototype.getUserName = function (email) {
        return this.email.next(email);
    };
    AuthService.prototype.displayUsername = function () {
        return this.email;
    };
    AuthService.prototype.logout = function () {
        this.login = false;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signOut();
        this.token = null;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n      <form (ngSubmit)=\"onSignIn(f)\" #f=\"ngForm\" class=\"col-md-6 col-sm-12\" style=\"margin:0 auto;float:none;display:block;\">\n          <h2 align=\"center\"><strong><marquee>Login Form </marquee>  </strong></h2>\n          <hr>\n          <div class=\"form-group \">\n          <label for=\"email\">Email</label>\n              <input type=\"email\" id=\"email\" name=\"email\" ngModel required class=\"form-control input-normal\" >\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n                <input type=\"password\" id=\"password\" name=\"password\" required ngModel class=\"form-control\">\n          </div>\n\n            <br>\n            <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\" > Sign In</button>\n            <a routerLink=\"/signup\" style=\"cursor: pointer;margin-left:300px \">Do Register</a>\n        </form>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SigninComponent = (function () {
    function SigninComponent(authService) {
        this.authService = authService;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSignIn = function (form) {
        var email = form.value.email;
        this.email = email;
        var pass = form.value.password;
        this.authService.signin(email, pass);
        // if (this.authService.login) {
        //   this.authService.getUserName(email);
        //   console.log("Shyam");
        // }
        form.reset();
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signin',
            template: __webpack_require__("../../../../../src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/signin/signin.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n <div class=\"page-wrapper\">\n\n  <div class=\"row\">\n    <div class=\"col-xs-4\" style=\"margin-top:50px\">\n        <video idth=\"320\"  height=\"240\" controls=\"controls\">\n            <source src=\"assets\\videos\\Horses in 4K (96fps) ULTRA HD.mp4\" type=\"video/mp4\">\n            <source src=\"assets\\videos\\Horses in 4K (96fps) ULTRA HD.ogv\" type=\"video/ogg\">\n            Your browser does not support the Video .\n        </video>\n    </div>\n    <div class=\"col-xs-8\">\n        <form (ngSubmit)=\"onSignUp(f)\" #f=\"ngForm\" class=\"col-md-6 col-sm-12\" style=\"margin:0 auto;float:none;display:block;\">\n            <h2 align=\"center\"><strong>  Register Form </strong></h2>\n            <hr>\n            <div class=\"form-group \">\n            <label for=\"email\">Email</label>\n                <input type=\"email\" id=\"email\" name=\"email\"  required ngModel class=\"form-control\" >\n                <span *ngIf=\"!f.get('email.').valid\">Please enter valid Email Id</span>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n                  <input type=\"password\" id=\"password\" name=\"password\" required ngModel class=\"form-control\">\n            </div>\n\n              <br>\n              <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\" > Sign Up</button>\n          </form>\n\n    </div>\n  </div>\n\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = (function () {
    function SignupComponent(authService) {
        this.authService = authService;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignUp = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authService.signUp(email, password);
        form.reset();
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n\n<head>\n  <title>Bootstrap Example</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n</head>\n\n<body>\n\n  <nav class=\"navbar\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n   <a class=\"navbar-brand\" href=\"#\" style=\"color:green\" *ngIf=\"flag\">Active User: {{email}}</a>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\">\n            <a href=\"#\">Home</a>\n          </li>\n          <li class=\"dropdown\">\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Page 1\n              <span class=\"caret\"></span>\n            </a>\n\n          </li>\n\n        </ul>\n\n        <ul class=\"nav navbar-nav navbar-right\">\n           <form class=\"navbar-form navbar-left\" action=\"/action_page.php\">\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search\" *ngIf=\"flag\">\n              <div class=\"input-group-btn\">\n                <button class=\"btn btn-default\" type=\"submit\" *ngIf=\"flag\">\n                  <i class=\"glyphicon glyphicon-search\"></i>\n                </button>\n              </div>\n            </div>\n          </form>\n          <li>\n            <a routerLink=\"/signup\">\n              <span class=\"glyphicon glyphicon-user\"></span> Sign Up</a>\n          </li>\n          <li *ngIf=\"!flag\" style=\"cursor: pointer\">\n            <a routerLink=\"/signin\">\n\n              <span class=\"glyphicon glyphicon-log-in\" *ngIf=\"!flag\"></span> {{ flag ? 'Logout' : 'Login'}}</a>\n          </li>\n          <li style=\"cursor: pointer\" *ngIf=\"flag\" (click)=\"onLogout()\">\n              <a routerLink=\"/signin\">\n                <span class=\"glyphicon glyphicon-log-out\" *ngIf=\"flag\"></span>\n               {{ flag ? 'Logout' : 'Login'}}</a>\n            </li>\n        </ul>\n      </div>\n    </div>\n    <app-sidebar></app-sidebar>\n\n  </nav>\n\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n      <!-- <app-user *ngIf=\"flag\"></app-user> -->\n  </div>\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  background-color: black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.displayUsername()
            .subscribe(function (email) {
            _this.email = email;
            _this.flag = true;
        });
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.router.navigate(['/']);
        this.flag = false;
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/histroy/histroy.component.html":
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\">\n  <div class=\"input-group\">\n    <input type=\"text\" class=\"form-control\" name=\"search\" [(ngModel)]=\"search\" placeholder=\"Search\">\n    <div class=\"input-group-btn\">\n      <button class=\"btn btn-default\" type=\"submit\" >\n        <i class=\"glyphicon glyphicon-search\" (click)=\"onSearch(f)\"></i>\n      </button>\n      <button class=\"btn btn-warning\" type=\"button\" (click)=\"onAll()\">Get All</button>\n    </div>\n  </div>\n</form>\n\n<table class=\"table table-hover table-bordered\">\n<tr>\n  <th>Image</th>\n  <th>Name</th>\n  <th>Email</th>\n  <th>UserName</th>\n  <th>Phone</th>\n  <th>Gender</th>\n\n</tr>\n<tr *ngFor=\"let user of usersData;let i=index\"  class=\"danger\">\n\n  <td> <img class=\"card-img-top\" style=\"margin: 10px;\" [src]=\"user.picture.thumbnail\" alt=\"Not Available\"></td>\n  <td >{{user.name.first  | uppercase}} {{user.name.last  | uppercase}}</td>\n  <td >{{user.email}}</td>\n  <td>{{user.login.username}}</td>\n  <td>{{user.phone}}</td>\n  <td>{{user.gender}}</td>\n\n</tr>\n</table>\n\n"

/***/ }),

/***/ "../../../../../src/app/histroy/histroy.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/histroy/histroy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistroyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_user_userService_service__ = __webpack_require__("../../../../../src/app/home/user/userService.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistroyComponent = (function () {
    function HistroyComponent(http, userService) {
        this.http = http;
        this.userService = userService;
        this.usersData = [];
    }
    HistroyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getData()
            .subscribe(function (data) {
            console.log(data);
            var temp = data.json();
            for (var elm in temp) {
                if (temp.hasOwnProperty(elm)) {
                    _this.usersData.push(temp[elm]);
                }
            }
        });
    };
    HistroyComponent.prototype.onSearch = function (form) {
        for (var _i = 0, _a = this.usersData; _i < _a.length; _i++) {
            var data = _a[_i];
            if (form.value.search === data.login.username || form.value.search === data.name.first ||
                form.value.search === data.name.last || form.value.search === data.gender || form.value.search === data.email
                || form.value.search === data.phone) {
                this.usersData.splice(0);
                this.usersData.push(data);
                form.reset();
            }
        }
    };
    HistroyComponent.prototype.onAll = function () {
        var _this = this;
        this.usersData.splice(0);
        this.userService.getData()
            .subscribe(function (data) {
            var temp = data.json();
            for (var elm in temp) {
                if (temp.hasOwnProperty(elm)) {
                    _this.usersData.push(temp[elm]);
                }
            }
        });
    };
    HistroyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-histroy',
            template: __webpack_require__("../../../../../src/app/histroy/histroy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/histroy/histroy.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__home_user_userService_service__["a" /* UserService */]])
    ], HistroyComponent);
    return HistroyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/filter/filter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-6\">\n    <div class=\"box card list-group-item col-md-3 col-lg-3 \" style=\"cursor: pointer; width: 50rem;height: 25rem;;margin: 4px;\">\n      <div class=\"col-xs-4\">\n        <img class=\"card-img-top\" style=\"margin: 10px;\" [src]=\"userData.picture.large\" alt=\"\">\n\n      </div>\n      <div class=\"col-xs-8\" style=\"margin: 0px;\">\n        <div class=\"card-body\">\n          <h3>\n            <strong>Full Name:</strong>{{userData.name.first  | uppercase}} {{userData.name.last  | uppercase}}</h3>\n          <h5 class=\"card-title\">\n            <strong>Emial ID: </strong> {{userData.email}} </h5>\n          <h5 class=\"card-title\">\n            <strong> Gender: </strong> {{userData.gender}} </h5>\n          <h5 class=\"card-title\">\n            <strong> DOB: </strong> {{userData.dob | date:\"MM/dd/yy\"}} </h5>\n          <h5 class=\"card-title\">\n            <strong>Phone: </strong> {{userData.phone}} </h5>\n          <h5 class=\"card-title\">\n            <strong> City: </strong> {{userData.location.city}}</h5>\n          <h5 class=\"card-title\">\n            <strong> Username: </strong> {{userData.login.username}} </h5>\n\n        </div>\n\n      </div>\n\n    </div>\n    <div class=\"float-left\">\n      <button class=\"btn btn-primary\" type=\"button\" (click)=\"onAddHistory()\">Select User</button>\n      <button class=\"btn btn-danger\" type=\"button\" (click)=\"onCancle()\">Cancle</button>\n    </div>\n\n  </div>\n  <!-- <div class=\"col-xs-6\">\n    <app-search></app-search>\n</div> -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/filter/filter.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/filter/filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_userService_service__ = __webpack_require__("../../../../../src/app/home/user/userService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FilterComponent = (function () {
    function FilterComponent(http, router, userService, route) {
        this.http = http;
        this.router = router;
        this.userService = userService;
        this.route = route;
        this.userData = [];
    }
    FilterComponent.prototype.ngOnInit = function () {
        this.userData = this.userService.userInfo;
    };
    FilterComponent.prototype.onAddHistory = function () {
        this.userService.addDatabase(this.userData)
            .subscribe(function (res) {
            return console.log(res);
        });
        this.router.navigate(['/user'], { relativeTo: this.route });
    };
    FilterComponent.prototype.onCancle = function () {
        this.router.navigate(['/user']);
    };
    FilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-filter',
            template: __webpack_require__("../../../../../src/app/home/filter/filter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/filter/filter.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__user_userService_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 align=\"center\">Creativity</h2>\n\n<img align=\"center\" src=\"https://cdn-images-1.medium.com/max/1920/1*UMsG3LGMxocow73__5orvQ.jpeg\" height=\"300\" width=\"1000\" alt=\"\">\n<p>  <mark>\n    Creativity </mark> is a phenomenon whereby something new and somehow valuable is formed through human activity. The created item may be intangible (such as an idea, a scientific theory, a musical composition, or a joke) or a physical object (such as an invention, a literary work, or a painting).\n\n    Scholarly interest in creativity involves many definitions and concepts pertaining to a number of disciplines: engineering, psychology, cognitive science, education, philosophy (particularly philosophy of science), technology, theology, sociology, linguistics, business studies, songwriting, and economics, covering the relations between creativity and general intelligence, mental and neurological processes, personality type and creative ability, creativity and mental health; the potential for fostering creativity through education and training, especially as augmented by technology; the maximization of creativity for national economic benefit, and the application of creative resources to improve the effectiveness of teaching and learning.\n  </p>\n\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\nh2 {\n  color: black; }\n\np {\n  -webkit-text-decoration-color: bisque;\n          text-decoration-color: bisque;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  -webkit-text-decoration-style: dotted;\n          text-decoration-style: dotted;\n  font-size: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  search works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/search/search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/home/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 align=\"center\">\n  <strong>Random Users</strong></h2>\n <div class=\"row\">\n   <div class=\"col-xs-12\">\n      <form #f=\"ngForm\">\n        <h3>Search:</h3>\n        <div class=\"col-xs-2\">\n            <div class=\"radio\" *ngFor=\"let gender of genders\">\n                <label  >\n                  <input type=\"radio\"  name=\"gender\" [value]=\"gender\" ngModel>\n                  {{gender}}\n                </label>\n              </div>\n              </div>\n              <div class=\"col-xs-8\">\n               Enter Country   <input type=\"text\" class=\"form-control\" name=\"nal\" ngModel>\n\n              </div>\n              <div class=\"row\">\n                <div class=\"col-xs-4\">\n                    <button class=\"btn btn-success\" type=\"button\" (click)=\"getGender(f)\">Apply</button>\n                </div>\n                <div class=\"col-xs-4\">\n\n                </div>\n\n              </div>\n\n\n          </form>\n\n   </div>\n\n  </div>\n\n<div class=\"row\">\n  <div class=\"col-xs-4\">\n\n  </div>\n  <div class=\"col-xs-8\">\n      <pagination-controls (pageChange)=\"p =$event\"></pagination-controls>\n\n  </div>\n</div>\n\n    <div class=\"box card list-group-item col-md-3 col-lg-3 \"\n     style=\"cursor: pointer; width: 50rem;height: 28rem;;margin: 4px;\"\n    *ngFor=\"let user of users1 | paginate:{itemsPerPage:6,currentPage:p}; \">\n    <div class=\"col-xs-4\">\n      <img class=\"card-img-top\" style=\"margin: 10px;\" [src]=\"user.picture.large\" alt=\"\">\n      <div class=\"row\" style=\"margin-top:30px;margin-left: 15px;\">\n        <button class=\"btn btn-primary\" type=\"button\" (click)=\"onSelectUser(user)\" >Add User</button>\n      </div>\n    </div>\n    <div class=\"col-xs-8\" style=\"margin: 0px;\">\n      <div class=\"card-body\">\n        <h4>\n          <strong>Full Name:</strong>{{user.name.first | uppercase}} {{user.name.last | uppercase}}</h4>\n        <h5 class=\"card-title\">\n          <strong>Emial ID: </strong> {{user.email}} </h5>\n        <h5 class=\"card-title\">\n          <strong> Gender: </strong> {{user.gender}} </h5>\n        <h5 class=\"card-title\">\n          <strong> DOB: </strong> {{user.dob | date:\"yyyy-MM-dd\"}} </h5>\n        <h5 class=\"card-title\">\n          <strong>Phone: </strong> {{user.phone}} </h5>\n        <h5 class=\"card-title\">\n          <strong> City: </strong> {{user.location.city}}</h5>\n          <h5 class=\"card-title\">\n              <strong> National: </strong> {{user.nat}}</h5>\n        <h5 class=\"card-title\">\n          <strong> Username: </strong> {{user.login.username}} </h5>\n\n      </div>\n\n    </div>\n  </div>\n\n\n\n\n<div class=\"row\">\n  <div class=\"col-xs-4\">\n\n  </div>\n  <div class=\"col-xs-8\">\n      <pagination-controls (pageChange)=\"p =$event\"></pagination-controls>\n\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/home/user/user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n  color: blue;\n  font-family: Cambria, Cochin, Georgia, Times, Times New Roman, serif;\n  -webkit-text-decoration-color: aqua;\n          text-decoration-color: aqua; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__userService_service__ = __webpack_require__("../../../../../src/app/home/user/userService.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = (function () {
    function UserComponent(http, router, userService, route) {
        this.http = http;
        this.router = router;
        this.userService = userService;
        this.route = route;
        this.users1 = [];
        this.genders = ['Male', 'Female'];
        // pages = [];
        this.date = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subsciption = this.userService.generateRandomUser()
            .subscribe(function (res) {
            _this.users1 = res.json()['results'];
            //  this.pages.length = res.json()['info'].page;
            for (var _i = 0, _a = res.json()['results']; _i < _a.length; _i++) {
                var result = _a[_i];
                _this.date.push(result.dob.substr(0, 10));
            }
        });
        console.log(this.date);
    };
    UserComponent.prototype.getGender = function (form) {
        var _this = this;
        if (this.userService.random = form.value.gender) {
            this.subsciption = this.userService.getRandomGender('nat', form.value.nal)
                .subscribe(function (res) {
                _this.users1 = res.json()['results'];
                //    this.pages.length = res.json()['info'].page;
            });
        }
        else if (this.userService.random = form.value.gender) {
            this.subsciption = this.userService.getRandomGender('nat', form.value.nal)
                .subscribe(function (res) {
                _this.users1 = res.json()['results'];
                //     this.pages.length = res.json()['info'].page;
            });
        }
    };
    UserComponent.prototype.onSelectUser = function (data) {
        console.log(data);
        this.userService.userInfo = data;
        this.router.navigate(['filter']);
    };
    UserComponent.prototype.ngOnDestroy = function () {
        this.subsciption.unsubscribe();
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/home/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__userService_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/user/userService.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.random = 'Male';
        this.userInfo = [];
    }
    UserService.prototype.generateRandomUser = function () {
        return this.http.get('https://randomuser.me/api/?results=100&page=5');
    };
    UserService.prototype.getRandomGender = function (key, value) {
        if (this.random === 'Male') {
            return this.http.get('https://randomuser.me/api/?gender=male&' + key + '=' + value + '&results=100');
        }
        else if (this.random === 'Female') {
            return this.http.get('https://randomuser.me/api/?gender=female&' + key + '=' + value + '&results=100');
        }
    };
    UserService.prototype.addDatabase = function (data) {
        return this.http.post('https://creativity-fd595.firebaseio.com/data.json', data);
    };
    UserService.prototype.getData = function () {
        return this.http.get('https://creativity-fd595.firebaseio.com/data.json');
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n\n        <title>Collapsible sidebar using Bootstrap 3</title>\n\n         <!-- Bootstrap CSS CDN -->\n        <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n        <!-- Our Custom CSS -->\n        <!-- <link rel=\"stylesheet\" href=\"style5.css\"> -->\n    </head>\n    <body>\n\n\n\n        <div class=\"wrapper\">\n            <!-- Sidebar Holder -->\n            <nav id=\"sidebar\">\n\n                <div class=\"sidebar-header\">\n                    <h3>Creativity</h3>\n                </div>\n\n                <ul class=\"list-unstyled components\">\n                    <p>Menus</p>\n                    <li [routerLinkActiveOptions]=\"{exact:true}\" routerLinkActive=\"active\">\n                        <!-- <a href=\"#homeSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\">Home</a> -->\n                        <a routerLink=\"/\">Dashborad</a>\n\n                    </li>\n                    <li routerLinkActive=\"active\">  <a routerLink=\"/user\">Random User</a></li>\n                    <li routerLinkActive=\"active\"> <a routerLink=\"/history\">Histroy</a></li>\n                    <li>\n                        <a routerLink=\"/about\" routerLinkActive=\"active\">About</a>\n\n                </ul>\n            </nav>\n            <button type=\"button\" id=\"sidebarCollapse\" class=\"navbar-btn\">\n                <span></span>\n                <span></span>\n                <span></span>\n            </button>\n\n            <!-- <nav class=\"navbar navbar-default\">\n                <div class=\"container-fluid\">\n\n                    <div class=\"navbar-header\">\n\n                    </div>\n<!\n                    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                        <ul class=\"nav navbar-nav navbar-right\">\n                            <li><a href=\"#\">Page</a></li>\n                            <li><a href=\"#\">Page</a></li>\n                            <li><a href=\"#\">Page</a></li>\n                            <li><a href=\"#\">Page</a></li>\n                        </ul>\n                    </div> -->\n                <!-- </div>\n            </nav> -->\n            <!-- Page Content Holder -->\n            <div id=\"content\" class=\"container\">\n                  <router-outlet></router-outlet>\n\n              </div>\n            </div>\n    </body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n    DEMO STYLE\r\n*/\nbody {\n  font-family: 'Times New Roman', Times, serif, sans-serif;\n  background: #fafafa; }\n\np {\n  font-family: 'Poppins', sans-serif;\n  font-size: 1.1em;\n  font-weight: 300;\n  line-height: 1.7em;\n  color: #999; }\n\na, a:hover, a:focus {\n  color: inherit;\n  text-decoration: none;\n  transition: all 0.3s; }\n\n.navbar {\n  padding: 15px 10px;\n  background: #fff;\n  border: none;\n  border-radius: 0;\n  margin-bottom: 40px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1); }\n\n.navbar-btn {\n  box-shadow: none;\n  outline: none !important;\n  border: none; }\n\n.line {\n  width: 100%;\n  height: 1px;\n  border-bottom: 1px dashed #ddd;\n  margin: 40px 0; }\n\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\n.wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-perspective: 1500px;\n          perspective: 1500px; }\n\n#sidebar {\n  min-width: 250px;\n  max-width: 250px;\n  background: #7386D5;\n  color: #fff;\n  transition: all 0.6s cubic-bezier(0.945, 0.02, 0.27, 0.665);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left; }\n\n#sidebar.active {\n  margin-left: -250px;\n  -webkit-transform: rotateY(100deg);\n          transform: rotateY(100deg); }\n\n#sidebar .sidebar-header {\n  padding: 20px;\n  background: #6d7fcc; }\n\n#sidebar ul.components {\n  padding: 20px 0;\n  border-bottom: 1px solid #47748b; }\n\n#sidebar ul p {\n  color: #fff;\n  padding: 10px; }\n\n#sidebar ul li a {\n  padding: 10px;\n  font-size: 1.1em;\n  display: block; }\n\n#sidebar ul li a:hover {\n  color: #7386D5;\n  background: #fff; }\n\n#sidebar ul li.active > a, a[aria-expanded=\"true\"] {\n  color: #fff;\n  background: #6d7fcc; }\n\na[data-toggle=\"collapse\"] {\n  position: relative; }\n\na[aria-expanded=\"false\"]::before, a[aria-expanded=\"true\"]::before {\n  content: '\\E259';\n  display: block;\n  position: absolute;\n  right: 20px;\n  font-family: 'Glyphicons Halflings';\n  font-size: 0.6em; }\n\na[aria-expanded=\"true\"]::before {\n  content: '\\E260'; }\n\nul ul a {\n  font-size: 0.9em !important;\n  padding-left: 30px !important;\n  background: #6d7fcc; }\n\nul.CTAs {\n  padding: 20px; }\n\nul.CTAs a {\n  text-align: center;\n  font-size: 0.9em !important;\n  display: block;\n  border-radius: 5px;\n  margin-bottom: 5px; }\n\na.download {\n  background: #fff;\n  color: #7386D5; }\n\na.article, a.article:hover {\n  background: #6d7fcc !important;\n  color: #fff !important; }\n\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\n#content {\n  padding: 20px;\n  min-height: 100vh;\n  transition: all 0.3s; }\n\n#sidebarCollapse {\n  width: 40px;\n  height: 40px;\n  background: #f5f5f5; }\n\n#sidebarCollapse span {\n  width: 80%;\n  height: 2px;\n  margin: 0 auto;\n  display: block;\n  background: #555;\n  transition: all 0.8s cubic-bezier(0.81, -0.33, 0.345, 1.375);\n  transition-delay: 0.2s; }\n\n#sidebarCollapse span:first-of-type {\n  -webkit-transform: rotate(45deg) translate(2px, 2px);\n          transform: rotate(45deg) translate(2px, 2px); }\n\n#sidebarCollapse span:nth-of-type(2) {\n  opacity: 0; }\n\n#sidebarCollapse span:last-of-type {\n  -webkit-transform: rotate(-45deg) translate(1px, -1px);\n          transform: rotate(-45deg) translate(1px, -1px); }\n\n#sidebarCollapse.active span {\n  -webkit-transform: none;\n          transform: none;\n  opacity: 1;\n  margin: 5px auto; }\n\n/* ---------------------------------------------------\r\n    MEDIAQUERIES\r\n----------------------------------------------------- */\n@media (max-width: 768px) {\n  #sidebar {\n    margin-left: -250px;\n    -webkit-transform: rotateY(90deg);\n            transform: rotateY(90deg); }\n  #sidebar.active {\n    margin-left: 0;\n    -webkit-transform: none;\n            transform: none; }\n  #sidebarCollapse span:first-of-type,\n  #sidebarCollapse span:nth-of-type(2),\n  #sidebarCollapse span:last-of-type {\n    -webkit-transform: none;\n            transform: none;\n    opacity: 1;\n    margin: 5px auto; }\n  #sidebarCollapse.active span {\n    margin: 0 auto; }\n  #sidebarCollapse.active span:first-of-type {\n    -webkit-transform: rotate(45deg) translate(2px, 2px);\n            transform: rotate(45deg) translate(2px, 2px); }\n  #sidebarCollapse.active span:nth-of-type(2) {\n    opacity: 0; }\n  #sidebarCollapse.active span:last-of-type {\n    -webkit-transform: rotate(-45deg) translate(1px, -1px);\n            transform: rotate(-45deg) translate(1px, -1px); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map