webpackJsonp([0],{

/***/ 159:
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
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 204:
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
webpackEmptyAsyncContext.id = 204;

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_jpush_dist__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_public_utils__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, platform, httpUtils, commonUrl, jPushPlugin, toast) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.httpUtils = httpUtils;
        this.commonUrl = commonUrl;
        this.jPushPlugin = jPushPlugin;
        this.toast = toast;
    }
    /**
     * 初始化方法
     */
    LoginPage.prototype.ionViewWillEnter = function () {
        this.init();
        this.getRegistrationID();
        var phone = localStorage.getItem('phone');
        var code = localStorage.getItem('code');
        if (phone && code) {
            this.account = phone;
            this.password = code;
            this.login();
        }
    };
    /**
     * 登录
     */
    LoginPage.prototype.login = function () {
        console.log(this.account);
        console.log(this.password);
        // if(this.account=="admin"&&this.password=="123456"){
        var data = {
            phone: this.account,
            code: this.password,
            alias: '',
            platform: 'android',
            type: 'login'
        };
        var nav = this.navCtrl;
        this.httpUtils.ajaxPost(this.commonUrl.login, data, function (res) {
            localStorage.setItem('token', res.token);
            localStorage.setItem('id', res.id);
            localStorage.setItem('phone', res.phone);
            localStorage.setItem('code', '123456');
            console.log("登陆成功");
            nav.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        });
        //  }else{
        //     this.httpUtils.openMessage("账号密码错误!");
        //  }
    };
    /**
     * jpush初始化
     */
    LoginPage.prototype.init = function () {
        var _this = this;
        this.jPushPlugin.init()
            .then(function (res) { return _this.httpUtils.openMessage(res); })
            .catch(function (err) { return _this.httpUtils.openMessage(err); });
    };
    /**
    * 获取注册ID
    */
    LoginPage.prototype.getRegistrationID = function () {
        var _this = this;
        this.jPushPlugin.getRegistrationID()
            .then(function (res) { return _this.httpUtils.openMessage(res); })
            .catch(function (err) { return _this.httpUtils.openMessage(err); });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"F:\ionic\ionic-demo\src\pages\login\login.html"*/`<div class="login">\n    <ion-list padding>\n        <ion-item>\n          <ion-label>账号</ion-label>\n          <ion-input type="text" [(ngModel)]="account"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>密码</ion-label>\n          <ion-input type="password" [(ngModel)]="password" ></ion-input>\n        </ion-item>\n      </ion-list>\n</div>\n<div padding>\n  <button ion-button color="danger" block (click)="login()">登录</button>\n</div>\n`/*ion-inline-end:"F:\ionic\ionic-demo\src\pages\login\login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3_ionic2_jpush_dist__["a" /* JPushService */], __WEBPACK_IMPORTED_MODULE_4__assets_public_utils__["c" /* HttpUtils */], __WEBPACK_IMPORTED_MODULE_4__assets_public_utils__["b" /* DataUtils */], __WEBPACK_IMPORTED_MODULE_4__assets_public_utils__["a" /* CommonUrl */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__assets_public_utils__["c" /* HttpUtils */],
            __WEBPACK_IMPORTED_MODULE_4__assets_public_utils__["a" /* CommonUrl */],
            __WEBPACK_IMPORTED_MODULE_3_ionic2_jpush_dist__["a" /* JPushService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pay_pay__ = __webpack_require__(255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.toMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */]);
    };
    HomePage.prototype.toAliPay = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pay_pay__["a" /* PayPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\ionic\ionic-demo\src\pages\home\home.html"*/`<ion-header>\n  <ion-title>demo</ion-title>\n</ion-header>\n\n<ion-content padding>\n  <button type="button" class="" (click)="toMap()">百度地图</button>\n  <button type="button" class="" (click)="toAliPay()">支付宝</button>\n</ion-content>\n`/*ion-inline-end:"F:\ionic\ionic-demo\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_public_utils__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapPage = (function () {
    function MapPage(nav, httpUtils, commonUrl, toast) {
        this.nav = nav;
        this.httpUtils = httpUtils;
        this.commonUrl = commonUrl;
        this.toast = toast;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.initMap();
    };
    MapPage.prototype.initMap = function () {
        this.map = new BMap.Map(this.mapElement.nativeElement, { enableMapClick: true }); //创建地图实例
        this.map.enableScrollWheelZoom(true); //启动滚轮放大缩小，默认禁用
        this.map.enableContinuousZoom(true); //连续缩放效果，默认禁用
        var point = new BMap.Point(108.36827, 37.549284); //坐标可以通过百度地图坐标拾取器获取
        this.map.centerAndZoom(point, 15);
        this.getLocation();
    };
    MapPage.prototype.getLocation = function () {
        var bMap = this.map;
        var that = this;
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
            var mk = new BMap.Marker(r.point);
            bMap.addOverlay(mk);
            bMap.panTo(r.point);
            that.lng = r.longitude;
            that.lat = r.latitude;
            that.list();
        }, { enableHighAccuracy: true });
    };
    MapPage.prototype.list = function () {
        var bMap = this.map;
        this.httpUtils.ajaxPost(this.commonUrl.dustbin, {
            lat: this.lat, lng: this.lng, distance: 2000
        }, function (res) {
            res.forEach(function (p) {
                var point = new BMap.Point(p.lng, p.lat);
                var mk = new BMap.Marker(point);
                bMap.addOverlay(mk);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"F:\ionic\ionic-demo\src\pages\map\map.html"*/`<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>百度地图</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div id="map" #map style="width: 100%;height: 100%;display: block;"></div>\n\n\n\n</ion-content>`/*ion-inline-end:"F:\ionic\ionic-demo\src\pages\map\map.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__assets_public_utils__["c" /* HttpUtils */], __WEBPACK_IMPORTED_MODULE_2__assets_public_utils__["b" /* DataUtils */], __WEBPACK_IMPORTED_MODULE_2__assets_public_utils__["a" /* CommonUrl */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__assets_public_utils__["c" /* HttpUtils */],
            __WEBPACK_IMPORTED_MODULE_2__assets_public_utils__["a" /* CommonUrl */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__httpUtils__ = __webpack_require__(396);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__httpUtils__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataUtils__ = __webpack_require__(397);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__dataUtils__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commonUrl__ = __webpack_require__(398);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__commonUrl__["a"]; });
/**
 * Created by youp on 2018/2/8.
 */



//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PayPage = (function () {
    function PayPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PayPage.prototype.toPay = function () {
        alert("pay");
    };
    PayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-paye',template:/*ion-inline-start:"F:\ionic\ionic-demo\src\pages\pay\pay.html"*/`<ion-header>\n    <ion-navbar>\n        <ion-title>demo</ion-title>\n      </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <input type="text" name=""/>金额\n  <button type="button" class="" (click)="pay()">支付</button>\n</ion-content>\n`/*ion-inline-end:"F:\ionic\ionic-demo\src\pages\pay\pay.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], PayPage);
    return PayPage;
}());

//# sourceMappingURL=pay.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(352);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_map_map__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_pay_pay__ = __webpack_require__(255);
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pay_pay__["a" /* PayPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    backButtonText: "返回"
                }, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pay_pay__["a" /* PayPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\ionic\ionic-demo\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"F:\ionic\ionic-demo\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpUtils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 *
 * http请求工具
 * Created by youp on 2018/2/2.
 */
var HttpUtils = (function () {
    function HttpUtils(
        // public navCtrl: NavController,
        app, http, toast) {
        this.app = app;
        this.http = http;
        this.toast = toast;
    }
    /**
     * 序列化数据，生成formdata
     * @param data map对象
     */
    HttpUtils.prototype.serializeData = function (data) {
        var formData = '';
        for (var key in data) {
            if (formData === '') {
                formData += key + '=' + data[key];
            }
            else {
                formData += '&' + key + '=' + data[key];
            }
        }
        return formData;
    };
    /**
     * 请求后台
     */
    HttpUtils.prototype.ajaxPost = function (url, data, callback) {
        var _this = this;
        // let nav = this.navCtrl;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        // headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        headers.append('Content-Type', 'application/json');
        this.http.post(url, data, { headers: headers }).subscribe(function (res) {
            var resData = JSON.parse(res['_body']);
            if (resData.code === '99999') {
                _this.openMessage(resData.message);
                localStorage.removeItem('token');
                //  let nav :NavController = this.app.getActiveNav();
                //  nav.push(LoginPage);
            }
            else {
                callback(resData.response);
            }
        });
    };
    HttpUtils.prototype.openMessage = function (msg) {
        var toast = this.toast.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    /**
     * 获取成功的code值
     * @return {string}
     */
    HttpUtils.prototype.success_code = function () {
        return '001000';
    };
    /**
     * 获取失败的code值
     * @return {string}
     */
    HttpUtils.prototype.error_code = function () {
        return '001000';
    };
    HttpUtils = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ToastController */]])
    ], HttpUtils);
    return HttpUtils;
}());

//# sourceMappingURL=httpUtils.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataUtils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by youp on 2018/2/5.
 */

var DataUtils = (function () {
    function DataUtils() {
    }
    DataUtils.prototype.getStatus = function (status) {
        switch (status) {
            case 'Y': return '启用';
            default: return '禁用';
        }
    };
    /**
     * 获取数组对象中的id字符串
     * @param data
     * @return {string}
     */
    DataUtils.prototype.getDataIds = function (data) {
        var ids = '';
        for (var i in data) {
            if (ids === '') {
                ids += data[i].id;
            }
            else {
                ids += ',' + data[i].id;
            }
        }
        return ids;
    };
    /**
     * 生成下拉框的数据
     * @param data
     */
    DataUtils.prototype.getSelectData = function (data, name, code) {
        var select = [];
        data.forEach(function (i) {
            select.push({ label: i[name], value: i[code] });
        });
        return select;
    };
    /**
     * 获取下拉框的值对应名称
     * @param code
     * @param array
     * @return {string}
     */
    DataUtils.prototype.getValueBySelectData = function (code, array) {
        for (var i in array) {
            if (code === array[i].value) {
                return array[i].label;
            }
        }
        return '';
    };
    DataUtils = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataUtils);
    return DataUtils;
}());

//# sourceMappingURL=dataUtils.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonUrl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by youp on 2018/2/2.
 */

var CommonUrl = (function () {
    function CommonUrl() {
        this.token = localStorage.getItem('token');
        /**请求ip*/
        this.ip = 'http://192.168.1.107:8080/web';
        /**上传*/
        this.upload = this.packingUrl(this.ip + '/upload/upload.action');
        /**登录*/
        this.login = this.packingUrl(this.ip + '/api/login/login.action');
        this.dustbin = this.packingUrl(this.ip + '/api/equ/dustbinList.action');
    }
    /**请求参数包装*/
    CommonUrl.prototype.packingUrl = function (url) {
        if (url.indexOf('?') > -1) {
            return url + '&token=' + this.token;
        }
        return url + '?token=' + this.token;
    };
    CommonUrl = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CommonUrl);
    return CommonUrl;
}());

//# sourceMappingURL=commonUrl.js.map

/***/ })

},[347]);
//# sourceMappingURL=main.js.map