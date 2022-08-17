function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./modules/actions/actions.module": ["./src/app/modules/actions/actions.module.ts", "common", "modules-actions-actions-module"],
      "./modules/emrpage/emrpage.module": ["./src/app/modules/emrpage/emrpage.module.ts", "common", "modules-emrpage-emrpage-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--<app-header></app-header>\r\n<app-sidebar></app-sidebar>\r\n<router-outlet *ngIf=\"showhideApp\"></router-outlet>\r\n\r\n<div class=\"loader-wrap\" *ngIf=\"loadingData\">\r\n  <mat-spinner [diameter]=\"70\"></mat-spinner>\r\n</div>-->\r\n<!--<app-header></app-header>\r\n<app-sidebar></app-sidebar>\r\n<router-outlet *ngIf=\"showhideApp\"></router-outlet>\r\n\r\n<div class=\"loader-wrap\" *ngIf=\"loadingData\">\r\n  <mat-spinner [diameter]=\"70\"></mat-spinner>\r\n</div>-->\r\n<nav class=\"sidebar bg-blur-dark border-right border-dark\" id=\"sidebar\" style=\"left:-350px\">\r\n    <div class=\"sidebar-sticky\" (mouseleave)=\"closeSidebar()\" id=\"sidebarid\">\r\n        <ul class=\"nav flex-column px-4\">\r\n            <li class=\"nav-item pt-3\">\r\n                <a class=\"nav-link ion-icon-link d-flex alert-link\" [routerLink]=\"['/actions']\" (click)=\"closeSidebar()\" [ngClass]=\"{'active' : activeView === 'actions' }\">\r\n                    <ion-icon name=\"home-outline\"></ion-icon> Home\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item pt-3\" *ngIf=\"loggedInUserDetails!=undefined && (loggedInUserDetails?.Roles?.trim().toLowerCase() == 'front desk' ||\r\n                loggedInUserDetails?.Roles?.trim().toLowerCase() == 'system administrator')\">\r\n                <a class=\"nav-link ion-icon-link d-flex\" [routerLink]=\"['/referrer/incomingmessage']\" (click)=\"closeSidebar()\" [ngClass]=\"{'active' : activeView === 'actions' }\">\r\n                    <ion-icon name=\"mail-unread-outline\"></ion-icon> Incoming Messages\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item pt-3\" *ngIf=\"loggedInUserDetails!=undefined && (loggedInUserDetails?.Roles?.trim().toLowerCase() == 'system administrator')\">\r\n                <a class=\"nav-link ion-icon-link d-flex\" [routerLink]=\"['/referrer']\" (click)=\"closeSidebar()\" [ngClass]=\"{'active' : activeView === 'actions' }\">\r\n                    <ion-icon name=\"people-outline\"></ion-icon> Referrer Maintenance\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item pt-3\" *ngIf=\"loggedInUserDetails!=undefined && (loggedInUserDetails?.Roles?.trim().toLowerCase() == 'front desk')\">\r\n                <a class=\"nav-link ion-icon-link d-flex\" [routerLink]=\"['/referrer/processedmessages']\" (click)=\"closeSidebar()\" [ngClass]=\"{'active' : activeView === 'actions' }\">\r\n                    <ion-icon name=\"mail-open-outline\"></ion-icon> Referral Processed \r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item pt-3\" *ngIf=\"loggedInUserDetails!=undefined && (loggedInUserDetails?.Roles?.trim().toLowerCase() == 'system administrator')\">\r\n                <a class=\"nav-link ion-icon-link d-flex\" [routerLink]=\"['/referrer/clinicmapping']\" (click)=\"closeSidebar()\" [ngClass]=\"{'active' : activeView === 'actions' }\">\r\n                    <ion-icon name=\"medkit-outline\"></ion-icon> Cilnic Mapping\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item pt-3\" *ngIf=\"loggedInUserDetails!=undefined && (loggedInUserDetails?.Roles?.trim().toLowerCase() == 'front desk')\">\r\n                <a class=\"nav-link ion-icon-link d-flex\" [routerLink]=\"['/referrer/sentPocs']\" (click)=\"closeSidebar()\" [ngClass]=\"{'active' : activeView === 'actions' }\">\r\n                    <ion-icon name=\"cloud-upload-outline\"></ion-icon> POC's Sent For Approval\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item pt-3\" *ngIf=\"loggedInUserDetails!=undefined && (loggedInUserDetails?.Roles?.trim().toLowerCase() == 'front desk')\">\r\n                <a class=\"nav-link ion-icon-link d-flex\" [routerLink]=\"['/referrer/ProcessedPocs']\" (click)=\"closeSidebar()\" [ngClass]=\"{'active' : activeView === 'actions' }\">\r\n                    <ion-icon name=\"checkmark-circle-outline\"></ion-icon> POC's Processed\r\n                </a>\r\n            </li>\r\n            <!--<li class=\"nav-item py-1\">\r\n        <a class=\"nav-link ion-icon-link d-flex\" href=\"#\">\r\n            <ion-icon name=\"briefcase\"></ion-icon> Strategies\r\n        </a>\r\n    </li>-->\r\n\r\n        </ul>\r\n    </div>\r\n</nav>\r\n\r\n<nav class=\"navbar sticky-top navbar-expand navbar-dark bg-blur-dark border-bottom border-dark\" id=\"horizonatlsidebar\" style=\"padding-left: 0px\">\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarid\">\r\n        <ul class=\"nav navbar-nav pl-3\" *ngIf=\"showSidebar\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link ion-icon-link toggler collapsed\" (click)=\"toggleSidebar()\" (mouseenter)=\"toggleSidebar()\">\r\n                    <!--(mouseenter)=\"toggleSidebar()\"-->\r\n                    <ion-icon name=\"menu-outline\" id=\"menu\" style=\"font-size: 3rem;\"></ion-icon>\r\n                    <ion-icon name=\"close-outline\" id=\"close\" style=\"font-size: 3rem;\"></ion-icon>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n\r\n        <span class=\"navbar-brand px-3\">\r\n            <!--<img class=\"mr-3 mt-n1\" src=\"../assets/img/pg_light.svg\" height=\"32\">-->\r\n            <svg class=\"svgdecorator\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" height=\"32\" viewBox=\"0 0 1280 280\" enable-background=\"new 0 0 1280 280\" xml:space=\"preserve\">\r\n            <g id=\"circle-outer\">\r\n            <path fill=\"none\" stroke=\"#ffffff\" stroke-width=\"6\" stroke-miterlimit=\"10\" stroke-dasharray=\"20.125,20.125\" d=\"M140.955,4.981\r\n                            C66.663,4.981,6.436,65.208,6.436,139.5c0,74.297,60.227,134.523,134.519,134.523S275.477,213.797,275.477,139.5\r\n                            C275.477,65.208,215.247,4.981,140.955,4.981z\"></path>\r\n                </g>\r\n            <g id=\"Ellipse_2\">\r\n            <circle fill=\"none\" stroke=\"#00aaa8\" stroke-width=\"4\" stroke-miterlimit=\"10\" cx=\"142.346\" cy=\"139.964\" r=\"111.326\"></circle>\r\n                </g>\r\n            <g id=\"figure\">\r\n            <path fill=\"#ffffff\" d=\"M155.336,124.191h-27.832c-7.686,0-13.915,6.232-13.915,13.917v88.129c0,7.69,6.229,13.923,13.915,13.923h27.832\r\n                        c7.685,0,13.917-6.232,13.917-13.923v-88.129C169.252,130.423,163.021,124.191,155.336,124.191z\"></path>\r\n            <path fill=\"#ffffff\" d=\"M110.739,118.589L74.658,82.511c-3.621-3.621-9.495-3.621-13.12,0c-3.621,3.621-3.621,9.499,0,13.12l36.081,36.079\r\n                        c3.625,3.627,9.496,3.627,13.12,0C114.363,128.088,114.363,122.216,110.739,118.589z\"></path>\r\n            <path fill=\"#ffffff\" d=\"M219.444,82.511c-3.621-3.621-9.495-3.621-13.121,0l-36.078,36.078c-3.622,3.627-3.622,9.5,0,13.121\r\n                        c3.621,3.627,9.498,3.627,13.12,0l36.079-36.079C223.07,92.009,223.07,86.131,219.444,82.511z\"></path>\r\n            <circle fill=\"#ffffff\" cx=\"141.418\" cy=\"94.505\" r=\"27.832\"></circle>\r\n                </g>\r\n            <g>\r\n            <path fill=\"#ffffff\" d=\"M374.604,36.384v84.386c0,1.686,0.378,2.964,1.141,3.832c0.76,0.87,2.12,1.578,4.077,2.12v2.609h-34.733v-2.609\r\n                        c1.957-0.542,3.314-1.25,4.077-2.12c0.761-0.868,1.141-2.146,1.141-3.832V36.384h-34.569c-1.63,0-2.882,0.373-3.75,1.12\r\n                        c-0.87,0.745-1.577,2.111-2.12,4.099h-2.609V12.822h2.609c0.597,1.981,1.317,3.345,2.161,4.095\r\n                        c0.842,0.748,2.079,1.123,3.709,1.123h93.354c1.684,0,2.962-0.375,3.833-1.123c0.868-0.75,1.575-2.113,2.12-4.095h2.609v28.781\r\n                        h-2.609c-0.544-1.988-1.251-3.354-2.12-4.099c-0.871-0.747-2.149-1.12-3.833-1.12H374.604z\"></path>\r\n            <path fill=\"#ffffff\" d=\"M338.355,217.5v36.934c0,1.631,0.393,2.895,1.183,3.791c0.786,0.896,2.131,1.59,4.035,2.079v2.608H308.84v-2.608\r\n                        c1.957-0.542,3.314-1.249,4.077-2.12c0.76-0.868,1.142-2.119,1.142-3.75v-94.251c0-1.684-0.381-2.962-1.142-3.832\r\n                        c-0.762-0.868-2.12-1.575-4.077-2.12v-2.608h69.628c8.479,0,15.206,0.489,20.179,1.468s9.307,2.69,13.004,5.137\r\n                        c4.292,2.826,7.5,6.658,9.621,11.495c2.01,4.677,3.017,9.676,3.017,15.003c0,18.154-10.083,28.78-30.248,31.878l21.605,30.737\r\n                        c3.804,5.382,6.59,8.847,8.357,10.396c1.765,1.549,3.926,2.405,6.482,2.568v2.608h-40.209v-2.608\r\n                        c2.767-0.435,4.151-1.413,4.151-2.935c0-0.979-1.274-3.344-3.826-7.094L368.063,217.5H338.355z M338.355,199.155h37.505\r\n                        c5.544,0,9.458-0.164,11.741-0.489c2.283-0.327,4.374-1.005,6.277-2.038c4.13-2.229,6.197-6.25,6.197-12.067\r\n                        c0-5.815-2.067-9.837-6.197-12.066c-1.957-1.087-4.035-1.779-6.237-2.079c-2.202-0.298-6.129-0.448-11.781-0.448h-37.505V199.155z\r\n                        \"></path>\r\n            <path fill=\"#ffffff\" d=\"M442.93,102.285v15.303h39.854c1.158,0,2.044-0.258,2.662-0.772c0.615-0.515,1.111-1.453,1.484-2.815h1.569v18.553h-1.569\r\n                        c-0.334-1.308-0.822-2.233-1.456-2.774c-0.636-0.542-1.533-0.813-2.69-0.813H424.32v-1.569c1.308-0.336,2.233-0.821,2.774-1.458\r\n                        c0.542-0.635,0.813-1.532,0.813-2.69V71.904c0-1.158-0.262-2.037-0.785-2.635c-0.523-0.598-1.457-1.102-2.802-1.514v-1.569h56.726\r\n                        c1.197,0,2.102-0.261,2.719-0.785c0.615-0.523,1.111-1.458,1.486-2.803h1.513v18.554h-1.513c-0.375-1.361-0.871-2.3-1.486-2.815\r\n                        c-0.618-0.515-1.522-0.772-2.719-0.772H442.93v13.789h23.654c1.158,0,2.046-0.261,2.662-0.784\r\n                        c0.617-0.523,1.131-1.458,1.541-2.803h1.515v18.105h-1.515c-0.373-1.324-0.868-2.253-1.484-2.787\r\n                        c-0.617-0.533-1.522-0.8-2.719-0.8H442.93z\"></path>\r\n            <path fill=\"#ffffff\" d=\"M545.54,113.271h-28.87l-3.253,6.838c-0.785,1.645-1.178,2.935-1.178,3.868c0,1.793,1.196,2.934,3.589,3.419v1.569\r\n                        h-23.065v-1.569c1.418-0.224,2.474-0.653,3.166-1.29c0.691-0.635,1.504-1.886,2.44-3.755l22.925-46.412\r\n                        c0.86-1.755,1.29-3.288,1.29-4.596c0-1.532-1.048-2.727-3.139-3.587v-1.569h24.382v1.569c-2.055,0.823-3.082,2.093-3.082,3.812\r\n                        c0,1.233,0.467,2.747,1.4,4.54l23.767,45.011c1.309,2.445,2.336,4.029,3.084,4.75c0.747,0.723,1.886,1.232,3.418,1.528v1.569\r\n                        h-25.644v-1.569c2.425-0.408,3.64-1.544,3.64-3.406c0-1.154-0.469-2.586-1.402-4.299L545.54,113.271z M541.021,104.471\r\n                        L530.74,84.278l-9.786,20.192H541.021z\"></path>\r\n            <path fill=\"#ffffff\" d=\"M617.787,128.966l-22.898-41.296v35.525c0,1.158,0.261,2.044,0.785,2.661c0.524,0.617,1.458,1.13,2.802,1.541v1.569\r\n                        h-20.851v-1.569c1.309-0.336,2.231-0.821,2.773-1.458c0.542-0.635,0.814-1.532,0.814-2.69V71.904c0-1.158-0.262-2.047-0.785-2.662\r\n                        c-0.523-0.618-1.457-1.112-2.802-1.486v-1.569h26.524v1.569c-1.757,0.561-2.636,1.625-2.636,3.195\r\n                        c0,1.532,0.634,3.401,1.906,5.605l15.658,28.398l15.768-28.006c1.793-2.952,2.693-5.044,2.693-6.278\r\n                        c0-1.532-0.917-2.503-2.748-2.915v-1.569h25.848v1.569c-1.346,0.373-2.279,0.869-2.801,1.484\r\n                        c-0.523,0.617-0.787,1.502-0.787,2.661v51.296c0,1.158,0.264,2.054,0.787,2.688c0.521,0.635,1.455,1.139,2.801,1.512v1.569\r\n                        h-22.197v-1.569c1.309-0.336,2.234-0.824,2.776-1.459c0.54-0.636,0.812-1.533,0.812-2.692V87.669L617.787,128.966z\"></path>\r\n            <path fill=\"#ffffff\" d=\"M454.409,236.91v15.304h39.855c1.158,0,2.045-0.259,2.662-0.773c0.616-0.515,1.111-1.453,1.484-2.814h1.569v18.553h-1.569\r\n                        c-0.334-1.309-0.821-2.233-1.455-2.773c-0.636-0.543-1.533-0.813-2.691-0.813H435.8v-1.569c1.308-0.337,2.232-0.822,2.773-1.457\r\n                        c0.542-0.637,0.813-1.533,0.813-2.691v-51.345c0-1.158-0.262-2.036-0.785-2.635c-0.524-0.599-1.458-1.101-2.802-1.513v-1.57\r\n                        h56.726c1.196,0,2.102-0.261,2.719-0.784c0.616-0.523,1.111-1.457,1.486-2.803h1.512v18.553h-1.512\r\n                        c-0.375-1.36-0.871-2.3-1.486-2.815c-0.617-0.513-1.522-0.771-2.719-0.771h-38.117v13.79h23.655c1.158,0,2.046-0.263,2.662-0.786\r\n                        c0.617-0.521,1.13-1.455,1.542-2.801h1.513v18.104h-1.513c-0.374-1.325-0.87-2.254-1.485-2.786\r\n                        c-0.618-0.534-1.523-0.801-2.719-0.801H454.409z\"></path>\r\n            <path fill=\"#ffffff\" d=\"M563.153,236.238h-35.089v21.58c0,1.158,0.261,2.045,0.785,2.662c0.524,0.616,1.458,1.13,2.803,1.542v1.569h-22.197\r\n                        v-1.569c1.309-0.337,2.232-0.822,2.774-1.457c0.542-0.637,0.813-1.533,0.813-2.691v-51.345c0-1.158-0.261-2.036-0.785-2.635\r\n                        s-1.457-1.101-2.803-1.513v-1.57h22.197v1.57c-1.345,0.372-2.279,0.865-2.803,1.481s-0.785,1.501-0.785,2.656v18.341h35.089\r\n                        V206.52c0-1.155-0.253-2.033-0.756-2.628c-0.505-0.598-1.449-1.101-2.831-1.51v-1.57h22.197v1.57\r\n                        c-1.345,0.372-2.278,0.867-2.803,1.483c-0.523,0.616-0.784,1.503-0.784,2.66v51.297c0,1.158,0.261,2.045,0.784,2.66\r\n                        c0.524,0.616,1.458,1.13,2.803,1.54v1.569h-22.197v-1.569c1.309-0.337,2.232-0.824,2.774-1.459\r\n                        c0.542-0.639,0.813-1.538,0.813-2.698V236.238z\"></path>\r\n            <path fill=\"#ffffff\" d=\"M640.314,247.896h-28.87l-3.253,6.839c-0.785,1.645-1.178,2.933-1.178,3.866c0,1.794,1.197,2.936,3.59,3.421v1.569\r\n                        h-23.066v-1.569c1.419-0.225,2.475-0.655,3.166-1.288c0.691-0.637,1.504-1.889,2.44-3.758l22.925-46.411\r\n                        c0.86-1.757,1.291-3.288,1.291-4.597c0-1.532-1.048-2.727-3.139-3.587v-1.57h24.382v1.57c-2.055,0.82-3.082,2.094-3.082,3.812\r\n                        c0,1.232,0.467,2.747,1.4,4.541l23.767,45.01c1.309,2.445,2.336,4.029,3.084,4.751c0.745,0.722,1.885,1.231,3.418,1.527v1.569\r\n                        h-25.645v-1.569c2.426-0.41,3.641-1.546,3.641-3.406c0-1.153-0.469-2.587-1.402-4.299L640.314,247.896z M635.795,239.095\r\n                        l-10.281-20.19l-9.786,20.19H635.795z\"></path>\r\n            <path fill=\"#ffffff\" d=\"M730.078,229.848c3.104,1.421,5.383,2.84,6.842,4.26c2.727,2.69,4.092,6.314,4.092,10.874\r\n                        c0,6.13-2.318,10.856-6.953,14.183c-4.109,2.951-9.77,4.428-16.984,4.428H672.4v-1.569c1.31-0.337,2.232-0.822,2.775-1.457\r\n                        c0.541-0.637,0.813-1.533,0.813-2.691v-51.345c0-1.158-0.261-2.036-0.784-2.635c-0.524-0.599-1.458-1.101-2.804-1.513v-1.57\r\n                        h43.947c7.699,0,13.34,1.382,16.928,4.148c3.811,2.915,5.717,6.914,5.717,11.995c0,2.99-0.664,5.438-1.988,7.342\r\n                        C735.676,226.205,733.369,228.054,730.078,229.848z M691.011,224.354h22.815c3.586,0,6.127-0.457,7.623-1.374\r\n                        c1.494-0.915,2.242-2.495,2.242-4.737c0-2.203-0.74-3.762-2.215-4.68c-1.477-0.915-4.027-1.373-7.65-1.373h-22.815V224.354z\r\n                         M691.011,252.214h23.374c7.549,0,11.324-2.748,11.324-8.241s-3.775-8.24-11.324-8.24h-23.374V252.214z\"></path>\r\n            <path fill=\"#ffffff\" d=\"M768.756,206.525v51.297c0,1.158,0.26,2.045,0.785,2.66c0.523,0.616,1.457,1.13,2.803,1.54v1.569h-22.197v-1.569\r\n                        c1.309-0.337,2.232-0.822,2.773-1.457c0.543-0.637,0.813-1.533,0.813-2.691v-51.345c0-1.158-0.26-2.036-0.783-2.635\r\n                        s-1.457-1.101-2.803-1.513v-1.57h22.197v1.57c-1.346,0.372-2.279,0.867-2.803,1.483\r\n                        C769.016,204.481,768.756,205.368,768.756,206.525z\"></path>\r\n            <path fill=\"#ffffff\" d=\"M801.996,252.214h35.146c1.195,0,2.092-0.259,2.691-0.773c0.596-0.515,1.1-1.453,1.512-2.814h1.512v18.553h-1.512\r\n                        c-0.373-1.345-0.869-2.278-1.486-2.803c-0.615-0.523-1.521-0.784-2.717-0.784h-53.756v-1.569c1.309-0.337,2.232-0.822,2.773-1.457\r\n                        c0.543-0.637,0.814-1.533,0.814-2.691v-51.345c0-1.158-0.262-2.036-0.785-2.635s-1.457-1.101-2.803-1.513v-1.57h22.197v1.57\r\n                        c-1.346,0.372-2.279,0.867-2.803,1.485c-0.523,0.615-0.785,1.504-0.785,2.662V252.214z\"></path>\r\n            <path fill=\"#ffffff\" d=\"M867.916,206.525v51.297c0,1.158,0.26,2.045,0.783,2.66c0.523,0.616,1.457,1.13,2.803,1.54v1.569h-22.197v-1.569\r\n                        c1.309-0.337,2.232-0.822,2.773-1.457c0.543-0.637,0.814-1.533,0.814-2.691v-51.345c0-1.158-0.26-2.036-0.785-2.635\r\n                        c-0.523-0.599-1.457-1.101-2.803-1.513v-1.57h22.197v1.57c-1.346,0.372-2.279,0.867-2.803,1.483S867.916,205.368,867.916,206.525z\r\n                        \"></path>\r\n            <path fill=\"#ffffff\" d=\"M917.188,212.19v45.632c0,1.158,0.26,2.045,0.783,2.66c0.525,0.616,1.459,1.13,2.805,1.54v1.569h-22.197v-1.569\r\n                        c1.307-0.337,2.23-0.822,2.773-1.457c0.541-0.637,0.813-1.533,0.813-2.691V212.19h-18.498c-1.195,0-2.1,0.268-2.719,0.8\r\n                        c-0.615,0.534-1.109,1.464-1.486,2.787h-1.512v-18.553h1.512c0.34,1.309,0.816,2.234,1.432,2.774\r\n                        c0.617,0.541,1.523,0.813,2.721,0.813h52.066c1.197,0,2.104-0.261,2.723-0.784c0.615-0.523,1.111-1.457,1.486-2.803h1.514v18.553\r\n                        h-1.514c-0.375-1.323-0.869-2.253-1.484-2.787c-0.619-0.532-1.523-0.8-2.721-0.8H917.188z\"></path>\r\n            <path fill=\"#ffffff\" d=\"M988.521,247.896H959.65l-3.254,6.839c-0.783,1.645-1.178,2.933-1.178,3.866c0,1.794,1.197,2.936,3.59,3.421v1.569\r\n                        h-23.064v-1.569c1.418-0.225,2.475-0.655,3.164-1.288c0.691-0.637,1.504-1.889,2.439-3.758l22.926-46.411\r\n                        c0.859-1.757,1.291-3.288,1.291-4.597c0-1.532-1.049-2.727-3.141-3.587v-1.57h24.383v1.57c-2.055,0.82-3.082,2.094-3.082,3.812\r\n                        c0,1.232,0.467,2.747,1.4,4.541l23.768,45.01c1.309,2.445,2.336,4.029,3.084,4.751c0.744,0.722,1.885,1.231,3.418,1.527v1.569\r\n                        H989.75v-1.569c2.426-0.41,3.641-1.546,3.641-3.406c0-1.153-0.469-2.587-1.402-4.299L988.521,247.896z M984.002,239.095\r\n                        l-10.281-20.19l-9.785,20.19H984.002z\"></path>\r\n            <path fill=\"#ffffff\" d=\"M1055.248,212.19v45.632c0,1.158,0.262,2.045,0.785,2.66c0.525,0.616,1.457,1.13,2.803,1.54v1.569h-22.197v-1.569\r\n                        c1.309-0.337,2.232-0.822,2.773-1.457c0.543-0.637,0.814-1.533,0.814-2.691V212.19h-18.498c-1.195,0-2.102,0.268-2.719,0.8\r\n                        c-0.615,0.534-1.111,1.464-1.486,2.787h-1.512v-18.553h1.512c0.338,1.309,0.816,2.234,1.432,2.774\r\n                        c0.617,0.541,1.525,0.813,2.721,0.813h52.066c1.195,0,2.104-0.261,2.721-0.784c0.615-0.523,1.113-1.457,1.488-2.803h1.512v18.553\r\n                        h-1.512c-0.375-1.323-0.871-2.253-1.486-2.787c-0.617-0.532-1.523-0.8-2.719-0.8H1055.248z\"></path>\r\n            <path fill=\"#ffffff\" d=\"M1104.521,206.525v51.297c0,1.158,0.26,2.045,0.783,2.66c0.523,0.616,1.457,1.13,2.803,1.54v1.569h-22.197v-1.569\r\n                        c1.309-0.337,2.232-0.822,2.775-1.457c0.541-0.637,0.813-1.533,0.813-2.691v-51.345c0-1.158-0.26-2.036-0.783-2.635\r\n                        c-0.525-0.599-1.459-1.101-2.805-1.513v-1.57h22.197v1.57c-1.346,0.372-2.279,0.867-2.803,1.483\r\n                        S1104.521,205.368,1104.521,206.525z\"></path>\r\n            <path fill=\"#ffffff\" d=\"M1154.494,199.467c9.982,0,18.307,2.541,24.963,7.623c7.963,6.129,11.947,14.668,11.947,25.617\r\n                        c0,10.274-3.984,18.478-11.947,24.606c-6.584,5.081-14.867,7.623-24.852,7.623s-18.27-2.542-24.852-7.623\r\n                        c-8.004-6.129-12.004-14.498-12.004-25.111c0-10.726,4-19.095,12.004-25.112C1136.373,202.121,1144.621,199.578,1154.494,199.467z\r\n                         M1154.549,211.35c-6.473,0-11.748,2.076-15.828,6.222c-3.779,3.887-5.668,8.764-5.668,14.631c0,5.829,1.889,10.687,5.668,14.573\r\n                        c4.08,4.185,9.373,6.278,15.885,6.278c6.471,0,11.748-2.094,15.828-6.278c3.779-3.848,5.668-8.614,5.668-14.293\r\n                        c0-6.167-1.889-11.137-5.668-14.911C1166.318,213.498,1161.021,211.426,1154.549,211.35z\"></path>\r\n            <path fill=\"#ffffff\" d=\"M1218.254,222.225v35.601c0,1.155,0.27,2.053,0.813,2.687c0.541,0.634,1.467,1.138,2.773,1.511v1.569h-20.852v-1.569\r\n                        c1.311-0.337,2.232-0.822,2.773-1.457c0.543-0.637,0.814-1.533,0.814-2.691v-51.345c0-1.158-0.26-2.036-0.785-2.635\r\n                        c-0.523-0.599-1.457-1.101-2.803-1.513v-1.57h24.111v1.57c-1.645,0.412-2.467,1.139-2.467,2.186c0,0.896,0.598,1.944,1.795,3.139\r\n                        l33.682,33.407v-34.584c0-1.158-0.264-2.047-0.787-2.662c-0.523-0.618-1.457-1.113-2.801-1.485v-1.57h20.852v1.57\r\n                        c-1.346,0.372-2.281,0.867-2.805,1.483c-0.521,0.616-0.783,1.503-0.783,2.66v51.297c0,1.158,0.262,2.045,0.783,2.66\r\n                        c0.523,0.616,1.459,1.13,2.805,1.54v1.569h-22.486v-1.569c1.645-0.333,2.469-1.02,2.469-2.057c0-0.52-0.227-1.059-0.676-1.613\r\n                        c-0.449-0.556-1.477-1.65-3.084-3.28L1218.254,222.225z\"></path>\r\n                </g>\r\n            </svg>\r\n            <!--<span class=\"px-3 py-2 border-left border-secondary\">Team Rehab</span>-->\r\n        </span>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\">\r\n        <ul class=\"nav navbar-nav ml-auto px-3\" *ngIf=\"showSidebar\">\r\n\r\n\r\n            <li class=\"nav-item handcursor\">\r\n                <div class=\"d-flex w-100 justify-content-start align-items-center\">\r\n                    <ion-icon name=\"person-circle-outline\" class=\"text-secondary mr-3\" style=\"font-size: 3rem;\"></ion-icon>\r\n                    <div [popover]=\"profileTemplate\"\r\n                            #profilePopButton=\"bs-popover\" [outsideClick]=\"true\"\r\n                            containerClass=\"shadow\"\r\n                            container=\"body\" placement=\"bottom\">\r\n                        <h6 class=\"mb-0\">\r\n                            {{loggedInUserDetails.CommonName}}\r\n                        </h6>\r\n                        <small class=\"text-secondary\">\r\n                            {{loggedInUserDetails.EmailId}}\r\n                        </small>\r\n                    </div>\r\n                    <button class=\"btn btn-link px-3\"\r\n                            [popover]=\"profileTemplate\"\r\n                            #profilePopButton=\"bs-popover\"\r\n                            placement=\"bottom\"\r\n                            [outsideClick]=\"true\"\r\n                            containerClass=\"shadow\"\r\n                            container=\"body\">\r\n                        <small>\r\n                         \r\n                            <ion-icon name=\"caret-down\"></ion-icon>\r\n                        </small>\r\n                    </button>\r\n                </div>\r\n               \r\n\r\n            </li>\r\n\r\n            <!--<li class=\"nav-item border-left border-secondary px-2\">\r\n                <a class=\"nav-link ion-icon-link\" href=\"#\">\r\n                    <ion-icon name=\"help-circle\"></ion-icon>\r\n                </a>\r\n            </li>-->\r\n        </ul>\r\n    </div>\r\n</nav>\r\n\r\n<main class=\"container-fluid px-5 maincontentStyle\">\r\n    <router-outlet></router-outlet>\r\n    <!--<router-outlet *ngIf=\"showSidebar\"></router-outlet>-->\r\n</main>\r\n\r\n<ng-template #profileTemplate>\r\n    <ul class=\"list-group list-group-flush\">\r\n        <li class=\"list-group-item\">\r\n            <div class=\"d-flex w-100 justify-content-start align-items-center\">\r\n                <ion-icon name=\"person-circle-outline\" class=\"text-secondary mr-3\" style=\"font-size: 3rem;\"></ion-icon>\r\n                <div>\r\n                    <h6 class=\"mb-0\">\r\n                        {{loggedInUserDetails.CommonName}}\r\n                    </h6>\r\n                    <small class=\"text-secondary\">\r\n                        {{loggedInUserDetails.EmailId}}\r\n                    </small>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <a class=\"list-group-item list-group-item-action py-3\" [routerLink]=\"['logout/false']\">\r\n            Sign Out\r\n        </a>\r\n    </ul>\r\n</ng-template>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/login/login.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/login/login.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-content-wrapper\">\r\n    <!--<mat-grid-list rowHeight=\"300\" [cols]=\"1\">\r\n\r\n        <mat-grid-tile>\r\n          <form #loginForm=\"ngForm\" *ngIf=\"!loadingData\">\r\n              <div class=\"row action-card-row\">\r\n                  <div class=\"col-sm-12\">\r\n            <mat-form-field class=\"example-full-width long-field\" style=\"width:100%\">\r\n              <input matInput placeholder=\"User Name\" required name=\"userNameInput\" [(ngModel)]=\"userName\"\r\n                     #userNameInput=\"ngModel\" maxlength=\"60\">\r\n\r\n              <mat-error *ngIf=\"userNameInput.hasError('required')\">\r\n                User Name is required.\r\n              </mat-error>\r\n\r\n\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"row action-card-row\">\r\n            <div class=\"col-sm-12\">\r\n            <mat-form-field style=\"width:100%\">\r\n                <input matInput placeholder=\"Password\" required name=\"passwordInput\" [(ngModel)]=\"password\"\r\n                #passwordInput=\"ngModel\" maxlength=\"60\" type=\"password\">\r\n\r\n                <mat-error *ngIf=\"passwordInput.hasError('required')\">\r\n                  Password is required.\r\n                </mat-error>\r\n            </mat-form-field>\r\n           </div>\r\n          </div>\r\n        <div class=\"row action-card-row\">\r\n            <div class=\"col-sm-6\">\r\n                <button mat-button class=\"primary-button-2\" (click)=\"nextButtonClicked()\">Login</button>\r\n            </div>\r\n            <div class=\"col-sm-6\" style=\"top:8px;\">\r\n                <div class=\"handcursor\" (click)=\"authenticate()\"><img src=\"../../../../../assets/images/googlebutton.png\" style=\"height:30px;\" /></div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n          </form>\r\n          <div class=\"loader-wrap\" *ngIf=\"loadingData\">\r\n            <mat-spinner [diameter]=\"70\"></mat-spinner>\r\n          </div>\r\n        </mat-grid-tile>\r\n\r\n    </mat-grid-list>-->\r\n    <div class=\"loader-wrap\" *ngIf=\"loadingData\">\r\n        <mat-spinner [diameter]=\"70\"></mat-spinner>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/logout/logout.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/logout/logout.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreComponentsLogoutLogoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--<div class=\"main-content-wrapper\">\r\n  <mat-grid-list rowHeight=\"150\" cols=\"1\">\r\n    <mat-grid-tile [colspan]=\"1\" class=\"logout-grid-tile\">\r\n      <div>\r\n        <h1>Logout<small><font face=\"Tahoma\" color=\"red\"></font></small></h1>\r\n        <br />\r\n        <p><span *ngIf=\"autoLogout == 'true'\">Oops! Timeout! You’ve been disconnected, please <a class=\"anchor-css\" (click)=\"navigateToLogin()\">log-in</a> again.</span></p>\r\n        <p><span *ngIf=\"autoLogout == 'false'\">You have been logged out from the website. Please click this <a class=\"anchor-css\" (click)=\"navigateToLogin()\">link</a> to login again.</span></p>\r\n      </div>\r\n    </mat-grid-tile>\r\n  </mat-grid-list>\r\n</div>-->\r\n\r\n\r\n<div class=\"main-content-wrapper logout-padding\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"text-left logout-text-container\">\r\n                <h1>\r\n                    Logout\r\n                </h1>\r\n                <br />\r\n                <p>\r\n                    <span *ngIf=\"autoLogout == 'true'\">\r\n                        Oops! Timeout! You’ve been disconnected, please\r\n                        <a class=\"anchor-css\" (click)=\"navigateToLogin()\">log-in</a> again.\r\n                    </span>\r\n                </p>\r\n                <p>\r\n                    <span *ngIf=\"autoLogout == 'false'\">\r\n                        You have been logged out from the website. Please click this\r\n                        <a class=\"anchor-css\" (click)=\"navigateToLogin()\">link</a> to login again.\r\n                    </span>\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/unauthorized/unauthorized.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/unauthorized/unauthorized.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreComponentsUnauthorizedUnauthorizedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-content-wrapper\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"text-center\">\r\n        <h1>Access denied <small><font face=\"Tahoma\" color=\"red\"></font></small></h1>\r\n        <br />\r\n        <p class=\"text-center\">\r\n          You don't have Application access.\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/footer/footer.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/footer/footer.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--<div class=\"row footer\">\r\n  <div class=\"col-sm-12\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-8 col-lg-10 text-center\">\r\n        <p class=\"interTxt\">\r\n          For internal use only\r\n        </p>\r\n        <p class=\"copyTxt\">\r\n          Copyright &copy; 2019 Procter &amp; Gamble. All rights reserved.\r\n        </p>\r\n      </div>\r\n      <div class=\"col-sm-4 col-lg-2 text-right foot-right\">\r\n        <a class=\"txt-bold\" href=\"https://pgone.sharepoint.com/sites/PrivacyCentral/Pages/employeepolicy.aspx\" target=\"blank\">\r\n          P&amp;G Employee Privacy Policy\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>-->\r\n\r\n<section class=\"vc-footer\">\r\n\r\n  <div class=\"leftFContent\">\r\n    <p class=\"interTxt txt-bold\">\r\n      For internal use only\r\n    </p>\r\n    <p class=\"copyTxt\">\r\n      Copyright &copy; {{ currentYear }} Procter &amp; Gamble. All rights reserved.\r\n    </p>\r\n  </div>\r\n  <div class=\"rightFContent\">\r\n    <a class=\"vc-foot-left txt-bold\" href=\"https://pgone.sharepoint.com/sites/PrivacyCentral/Pages/employeepolicy.aspx\" target=\"blank\">\r\n      P&amp;G Employee Privacy Policy\r\n    </a>\r\n  </div>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/header/header.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/header/header.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar class=\"header wrapper\">\r\n    <div class=\"app-name\">\r\n       \r\n            <svg class=\"svgdecorator\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"100%\" height=\"100%\" viewBox=\"0 0 1280 280\" enable-background=\"new 0 0 1280 280\" xml:space=\"preserve\">\r\n                <g id=\"circle-outer\">\r\n                    <path fill=\"none\" stroke=\"#ffffff\" stroke-width=\"6\" stroke-miterlimit=\"10\" stroke-dasharray=\"20.125,20.125\" d=\"M140.955,4.981\r\n                            C66.663,4.981,6.436,65.208,6.436,139.5c0,74.297,60.227,134.523,134.519,134.523S275.477,213.797,275.477,139.5\r\n                            C275.477,65.208,215.247,4.981,140.955,4.981z\"></path>\r\n                </g>\r\n                <g id=\"Ellipse_2\">\r\n                    <circle fill=\"none\" stroke=\"#00aaa8\" stroke-width=\"4\" stroke-miterlimit=\"10\" cx=\"142.346\" cy=\"139.964\" r=\"111.326\"></circle>\r\n                </g>\r\n                <g id=\"figure\">\r\n                    <path fill=\"#ffffff\" d=\"M155.336,124.191h-27.832c-7.686,0-13.915,6.232-13.915,13.917v88.129c0,7.69,6.229,13.923,13.915,13.923h27.832\r\n                        c7.685,0,13.917-6.232,13.917-13.923v-88.129C169.252,130.423,163.021,124.191,155.336,124.191z\"></path>\r\n                    <path fill=\"#ffffff\" d=\"M110.739,118.589L74.658,82.511c-3.621-3.621-9.495-3.621-13.12,0c-3.621,3.621-3.621,9.499,0,13.12l36.081,36.079\r\n                        c3.625,3.627,9.496,3.627,13.12,0C114.363,128.088,114.363,122.216,110.739,118.589z\"></path>\r\n                    <path fill=\"#ffffff\" d=\"M219.444,82.511c-3.621-3.621-9.495-3.621-13.121,0l-36.078,36.078c-3.622,3.627-3.622,9.5,0,13.121\r\n                        c3.621,3.627,9.498,3.627,13.12,0l36.079-36.079C223.07,92.009,223.07,86.131,219.444,82.511z\"></path>\r\n                    <circle fill=\"#ffffff\" cx=\"141.418\" cy=\"94.505\" r=\"27.832\"></circle>\r\n                </g>\r\n                <g>\r\n                    <path fill=\"#ffffff\" d=\"M374.604,36.384v84.386c0,1.686,0.378,2.964,1.141,3.832c0.76,0.87,2.12,1.578,4.077,2.12v2.609h-34.733v-2.609\r\n                        c1.957-0.542,3.314-1.25,4.077-2.12c0.761-0.868,1.141-2.146,1.141-3.832V36.384h-34.569c-1.63,0-2.882,0.373-3.75,1.12\r\n                        c-0.87,0.745-1.577,2.111-2.12,4.099h-2.609V12.822h2.609c0.597,1.981,1.317,3.345,2.161,4.095\r\n                        c0.842,0.748,2.079,1.123,3.709,1.123h93.354c1.684,0,2.962-0.375,3.833-1.123c0.868-0.75,1.575-2.113,2.12-4.095h2.609v28.781\r\n                        h-2.609c-0.544-1.988-1.251-3.354-2.12-4.099c-0.871-0.747-2.149-1.12-3.833-1.12H374.604z\"></path>\r\n                    <path fill=\"#ffffff\" d=\"M338.355,217.5v36.934c0,1.631,0.393,2.895,1.183,3.791c0.786,0.896,2.131,1.59,4.035,2.079v2.608H308.84v-2.608\r\n                        c1.957-0.542,3.314-1.249,4.077-2.12c0.76-0.868,1.142-2.119,1.142-3.75v-94.251c0-1.684-0.381-2.962-1.142-3.832\r\n                        c-0.762-0.868-2.12-1.575-4.077-2.12v-2.608h69.628c8.479,0,15.206,0.489,20.179,1.468s9.307,2.69,13.004,5.137\r\n                        c4.292,2.826,7.5,6.658,9.621,11.495c2.01,4.677,3.017,9.676,3.017,15.003c0,18.154-10.083,28.78-30.248,31.878l21.605,30.737\r\n                        c3.804,5.382,6.59,8.847,8.357,10.396c1.765,1.549,3.926,2.405,6.482,2.568v2.608h-40.209v-2.608\r\n                        c2.767-0.435,4.151-1.413,4.151-2.935c0-0.979-1.274-3.344-3.826-7.094L368.063,217.5H338.355z M338.355,199.155h37.505\r\n                        c5.544,0,9.458-0.164,11.741-0.489c2.283-0.327,4.374-1.005,6.277-2.038c4.13-2.229,6.197-6.25,6.197-12.067\r\n                        c0-5.815-2.067-9.837-6.197-12.066c-1.957-1.087-4.035-1.779-6.237-2.079c-2.202-0.298-6.129-0.448-11.781-0.448h-37.505V199.155z\r\n                        \"></path>\r\n                    <path fill=\"#ffffff\" d=\"M442.93,102.285v15.303h39.854c1.158,0,2.044-0.258,2.662-0.772c0.615-0.515,1.111-1.453,1.484-2.815h1.569v18.553h-1.569\r\n                        c-0.334-1.308-0.822-2.233-1.456-2.774c-0.636-0.542-1.533-0.813-2.69-0.813H424.32v-1.569c1.308-0.336,2.233-0.821,2.774-1.458\r\n                        c0.542-0.635,0.813-1.532,0.813-2.69V71.904c0-1.158-0.262-2.037-0.785-2.635c-0.523-0.598-1.457-1.102-2.802-1.514v-1.569h56.726\r\n                        c1.197,0,2.102-0.261,2.719-0.785c0.615-0.523,1.111-1.458,1.486-2.803h1.513v18.554h-1.513c-0.375-1.361-0.871-2.3-1.486-2.815\r\n                        c-0.618-0.515-1.522-0.772-2.719-0.772H442.93v13.789h23.654c1.158,0,2.046-0.261,2.662-0.784\r\n                        c0.617-0.523,1.131-1.458,1.541-2.803h1.515v18.105h-1.515c-0.373-1.324-0.868-2.253-1.484-2.787\r\n                        c-0.617-0.533-1.522-0.8-2.719-0.8H442.93z\"></path>\r\n                    <path fill=\"#ffffff\" d=\"M545.54,113.271h-28.87l-3.253,6.838c-0.785,1.645-1.178,2.935-1.178,3.868c0,1.793,1.196,2.934,3.589,3.419v1.569\r\n                        h-23.065v-1.569c1.418-0.224,2.474-0.653,3.166-1.29c0.691-0.635,1.504-1.886,2.44-3.755l22.925-46.412\r\n                        c0.86-1.755,1.29-3.288,1.29-4.596c0-1.532-1.048-2.727-3.139-3.587v-1.569h24.382v1.569c-2.055,0.823-3.082,2.093-3.082,3.812\r\n                        c0,1.233,0.467,2.747,1.4,4.54l23.767,45.011c1.309,2.445,2.336,4.029,3.084,4.75c0.747,0.723,1.886,1.232,3.418,1.528v1.569\r\n                        h-25.644v-1.569c2.425-0.408,3.64-1.544,3.64-3.406c0-1.154-0.469-2.586-1.402-4.299L545.54,113.271z M541.021,104.471\r\n                        L530.74,84.278l-9.786,20.192H541.021z\"></path>\r\n                    <path fill=\"#ffffff\" d=\"M617.787,128.966l-22.898-41.296v35.525c0,1.158,0.261,2.044,0.785,2.661c0.524,0.617,1.458,1.13,2.802,1.541v1.569\r\n                        h-20.851v-1.569c1.309-0.336,2.231-0.821,2.773-1.458c0.542-0.635,0.814-1.532,0.814-2.69V71.904c0-1.158-0.262-2.047-0.785-2.662\r\n                        c-0.523-0.618-1.457-1.112-2.802-1.486v-1.569h26.524v1.569c-1.757,0.561-2.636,1.625-2.636,3.195\r\n                        c0,1.532,0.634,3.401,1.906,5.605l15.658,28.398l15.768-28.006c1.793-2.952,2.693-5.044,2.693-6.278\r\n                        c0-1.532-0.917-2.503-2.748-2.915v-1.569h25.848v1.569c-1.346,0.373-2.279,0.869-2.801,1.484\r\n                        c-0.523,0.617-0.787,1.502-0.787,2.661v51.296c0,1.158,0.264,2.054,0.787,2.688c0.521,0.635,1.455,1.139,2.801,1.512v1.569\r\n                        h-22.197v-1.569c1.309-0.336,2.234-0.824,2.776-1.459c0.54-0.636,0.812-1.533,0.812-2.692V87.669L617.787,128.966z\"></path>\r\n                    <path fill=\"#ffffff\" d=\"M454.409,236.91v15.304h39.855c1.158,0,2.045-0.259,2.662-0.773c0.616-0.515,1.111-1.453,1.484-2.814h1.569v18.553h-1.569\r\n                        c-0.334-1.309-0.821-2.233-1.455-2.773c-0.636-0.543-1.533-0.813-2.691-0.813H435.8v-1.569c1.308-0.337,2.232-0.822,2.773-1.457\r\n                        c0.542-0.637,0.813-1.533,0.813-2.691v-51.345c0-1.158-0.262-2.036-0.785-2.635c-0.524-0.599-1.458-1.101-2.802-1.513v-1.57\r\n                        h56.726c1.196,0,2.102-0.261,2.719-0.784c0.616-0.523,1.111-1.457,1.486-2.803h1.512v18.553h-1.512\r\n                        c-0.375-1.36-0.871-2.3-1.486-2.815c-0.617-0.513-1.522-0.771-2.719-0.771h-38.117v13.79h23.655c1.158,0,2.046-0.263,2.662-0.786\r\n                        c0.617-0.521,1.13-1.455,1.542-2.801h1.513v18.104h-1.513c-0.374-1.325-0.87-2.254-1.485-2.786\r\n                        c-0.618-0.534-1.523-0.801-2.719-0.801H454.409z\"></path>\r\n                    <path fill=\"#ffffff\" d=\"M563.153,236.238h-35.089v21.58c0,1.158,0.261,2.045,0.785,2.662c0.524,0.616,1.458,1.13,2.803,1.542v1.569h-22.197\r\n                        v-1.569c1.309-0.337,2.232-0.822,2.774-1.457c0.542-0.637,0.813-1.533,0.813-2.691v-51.345c0-1.158-0.261-2.036-0.785-2.635\r\n                        s-1.457-1.101-2.803-1.513v-1.57h22.197v1.57c-1.345,0.372-2.279,0.865-2.803,1.481s-0.785,1.501-0.785,2.656v18.341h35.089\r\n                        V206.52c0-1.155-0.253-2.033-0.756-2.628c-0.505-0.598-1.449-1.101-2.831-1.51v-1.57h22.197v1.57\r\n                        c-1.345,0.372-2.278,0.867-2.803,1.483c-0.523,0.616-0.784,1.503-0.784,2.66v51.297c0,1.158,0.261,2.045,0.784,2.66\r\n                        c0.524,0.616,1.458,1.13,2.803,1.54v1.569h-22.197v-1.569c1.309-0.337,2.232-0.824,2.774-1.459\r\n                        c0.542-0.639,0.813-1.538,0.813-2.698V236.238z\"></path>\r\n                    <path fill=\"#ffffff\" d=\"M640.314,247.896h-28.87l-3.253,6.839c-0.785,1.645-1.178,2.933-1.178,3.866c0,1.794,1.197,2.936,3.59,3.421v1.569\r\n                        h-23.066v-1.569c1.419-0.225,2.475-0.655,3.166-1.288c0.691-0.637,1.504-1.889,2.44-3.758l22.925-46.411\r\n                        c0.86-1.757,1.291-3.288,1.291-4.597c0-1.532-1.048-2.727-3.139-3.587v-1.57h24.382v1.57c-2.055,0.82-3.082,2.094-3.082,3.812\r\n                        c0,1.232,0.467,2.747,1.4,4.541l23.767,45.01c1.309,2.445,2.336,4.029,3.084,4.751c0.745,0.722,1.885,1.231,3.418,1.527v1.569\r\n                        h-25.645v-1.569c2.426-0.41,3.641-1.546,3.641-3.406c0-1.153-0.469-2.587-1.402-4.299L640.314,247.896z M635.795,239.095\r\n                        l-10.281-20.19l-9.786,20.19H635.795z\"></path>\r\n                    <path fill=\"#ffffff\" d=\"M730.078,229.848c3.104,1.421,5.383,2.84,6.842,4.26c2.727,2.69,4.092,6.314,4.092,10.874\r\n                        c0,6.13-2.318,10.856-6.953,14.183c-4.109,2.951-9.77,4.428-16.984,4.428H672.4v-1.569c1.31-0.337,2.232-0.822,2.775-1.457\r\n                        c0.541-0.637,0.813-1.533,0.813-2.691v-51.345c0-1.158-0.261-2.036-0.784-2.635c-0.524-0.599-1.458-1.101-2.804-1.513v-1.57\r\n                        h43.947c7.699,0,13.34,1.382,16.928,4.148c3.811,2.915,5.717,6.914,5.717,11.995c0,2.99-0.664,5.438-1.988,7.342\r\n                        C735.676,226.205,733.369,228.054,730.078,229.848z M691.011,224.354h22.815c3.586,0,6.127-0.457,7.623-1.374\r\n                        c1.494-0.915,2.242-2.495,2.242-4.737c0-2.203-0.74-3.762-2.215-4.68c-1.477-0.915-4.027-1.373-7.65-1.373h-22.815V224.354z\r\n                         M691.011,252.214h23.374c7.549,0,11.324-2.748,11.324-8.241s-3.775-8.24-11.324-8.24h-23.374V252.214z\"></path>\r\n                    <path fill=\"#ffffff\" d=\"M768.756,206.525v51.297c0,1.158,0.26,2.045,0.785,2.66c0.523,0.616,1.457,1.13,2.803,1.54v1.569h-22.197v-1.569\r\n                        c1.309-0.337,2.232-0.822,2.773-1.457c0.543-0.637,0.813-1.533,0.813-2.691v-51.345c0-1.158-0.26-2.036-0.783-2.635\r\n                        s-1.457-1.101-2.803-1.513v-1.57h22.197v1.57c-1.346,0.372-2.279,0.867-2.803,1.483\r\n                        C769.016,204.481,768.756,205.368,768.756,206.525z\"></path>\r\n                    <path fill=\"#ffffff\" d=\"M801.996,252.214h35.146c1.195,0,2.092-0.259,2.691-0.773c0.596-0.515,1.1-1.453,1.512-2.814h1.512v18.553h-1.512\r\n                        c-0.373-1.345-0.869-2.278-1.486-2.803c-0.615-0.523-1.521-0.784-2.717-0.784h-53.756v-1.569c1.309-0.337,2.232-0.822,2.773-1.457\r\n                        c0.543-0.637,0.814-1.533,0.814-2.691v-51.345c0-1.158-0.262-2.036-0.785-2.635s-1.457-1.101-2.803-1.513v-1.57h22.197v1.57\r\n                        c-1.346,0.372-2.279,0.867-2.803,1.485c-0.523,0.615-0.785,1.504-0.785,2.662V252.214z\"></path>\r\n                    <path fill=\"#ffffff\" d=\"M867.916,206.525v51.297c0,1.158,0.26,2.045,0.783,2.66c0.523,0.616,1.457,1.13,2.803,1.54v1.569h-22.197v-1.569\r\n                        c1.309-0.337,2.232-0.822,2.773-1.457c0.543-0.637,0.814-1.533,0.814-2.691v-51.345c0-1.158-0.26-2.036-0.785-2.635\r\n                        c-0.523-0.599-1.457-1.101-2.803-1.513v-1.57h22.197v1.57c-1.346,0.372-2.279,0.867-2.803,1.483S867.916,205.368,867.916,206.525z\r\n                        \"></path>\r\n                    <path fill=\"#ffffff\" d=\"M917.188,212.19v45.632c0,1.158,0.26,2.045,0.783,2.66c0.525,0.616,1.459,1.13,2.805,1.54v1.569h-22.197v-1.569\r\n                        c1.307-0.337,2.23-0.822,2.773-1.457c0.541-0.637,0.813-1.533,0.813-2.691V212.19h-18.498c-1.195,0-2.1,0.268-2.719,0.8\r\n                        c-0.615,0.534-1.109,1.464-1.486,2.787h-1.512v-18.553h1.512c0.34,1.309,0.816,2.234,1.432,2.774\r\n                        c0.617,0.541,1.523,0.813,2.721,0.813h52.066c1.197,0,2.104-0.261,2.723-0.784c0.615-0.523,1.111-1.457,1.486-2.803h1.514v18.553\r\n                        h-1.514c-0.375-1.323-0.869-2.253-1.484-2.787c-0.619-0.532-1.523-0.8-2.721-0.8H917.188z\"></path>\r\n                    <path fill=\"#ffffff\" d=\"M988.521,247.896H959.65l-3.254,6.839c-0.783,1.645-1.178,2.933-1.178,3.866c0,1.794,1.197,2.936,3.59,3.421v1.569\r\n                        h-23.064v-1.569c1.418-0.225,2.475-0.655,3.164-1.288c0.691-0.637,1.504-1.889,2.439-3.758l22.926-46.411\r\n                        c0.859-1.757,1.291-3.288,1.291-4.597c0-1.532-1.049-2.727-3.141-3.587v-1.57h24.383v1.57c-2.055,0.82-3.082,2.094-3.082,3.812\r\n                        c0,1.232,0.467,2.747,1.4,4.541l23.768,45.01c1.309,2.445,2.336,4.029,3.084,4.751c0.744,0.722,1.885,1.231,3.418,1.527v1.569\r\n                        H989.75v-1.569c2.426-0.41,3.641-1.546,3.641-3.406c0-1.153-0.469-2.587-1.402-4.299L988.521,247.896z M984.002,239.095\r\n                        l-10.281-20.19l-9.785,20.19H984.002z\"></path>\r\n                    <path fill=\"#ffffff\" d=\"M1055.248,212.19v45.632c0,1.158,0.262,2.045,0.785,2.66c0.525,0.616,1.457,1.13,2.803,1.54v1.569h-22.197v-1.569\r\n                        c1.309-0.337,2.232-0.822,2.773-1.457c0.543-0.637,0.814-1.533,0.814-2.691V212.19h-18.498c-1.195,0-2.102,0.268-2.719,0.8\r\n                        c-0.615,0.534-1.111,1.464-1.486,2.787h-1.512v-18.553h1.512c0.338,1.309,0.816,2.234,1.432,2.774\r\n                        c0.617,0.541,1.525,0.813,2.721,0.813h52.066c1.195,0,2.104-0.261,2.721-0.784c0.615-0.523,1.113-1.457,1.488-2.803h1.512v18.553\r\n                        h-1.512c-0.375-1.323-0.871-2.253-1.486-2.787c-0.617-0.532-1.523-0.8-2.719-0.8H1055.248z\"></path>\r\n                    <path fill=\"#ffffff\" d=\"M1104.521,206.525v51.297c0,1.158,0.26,2.045,0.783,2.66c0.523,0.616,1.457,1.13,2.803,1.54v1.569h-22.197v-1.569\r\n                        c1.309-0.337,2.232-0.822,2.775-1.457c0.541-0.637,0.813-1.533,0.813-2.691v-51.345c0-1.158-0.26-2.036-0.783-2.635\r\n                        c-0.525-0.599-1.459-1.101-2.805-1.513v-1.57h22.197v1.57c-1.346,0.372-2.279,0.867-2.803,1.483\r\n                        S1104.521,205.368,1104.521,206.525z\"></path>\r\n                    <path fill=\"#ffffff\" d=\"M1154.494,199.467c9.982,0,18.307,2.541,24.963,7.623c7.963,6.129,11.947,14.668,11.947,25.617\r\n                        c0,10.274-3.984,18.478-11.947,24.606c-6.584,5.081-14.867,7.623-24.852,7.623s-18.27-2.542-24.852-7.623\r\n                        c-8.004-6.129-12.004-14.498-12.004-25.111c0-10.726,4-19.095,12.004-25.112C1136.373,202.121,1144.621,199.578,1154.494,199.467z\r\n                         M1154.549,211.35c-6.473,0-11.748,2.076-15.828,6.222c-3.779,3.887-5.668,8.764-5.668,14.631c0,5.829,1.889,10.687,5.668,14.573\r\n                        c4.08,4.185,9.373,6.278,15.885,6.278c6.471,0,11.748-2.094,15.828-6.278c3.779-3.848,5.668-8.614,5.668-14.293\r\n                        c0-6.167-1.889-11.137-5.668-14.911C1166.318,213.498,1161.021,211.426,1154.549,211.35z\"></path>\r\n                    <path fill=\"#ffffff\" d=\"M1218.254,222.225v35.601c0,1.155,0.27,2.053,0.813,2.687c0.541,0.634,1.467,1.138,2.773,1.511v1.569h-20.852v-1.569\r\n                        c1.311-0.337,2.232-0.822,2.773-1.457c0.543-0.637,0.814-1.533,0.814-2.691v-51.345c0-1.158-0.26-2.036-0.785-2.635\r\n                        c-0.523-0.599-1.457-1.101-2.803-1.513v-1.57h24.111v1.57c-1.645,0.412-2.467,1.139-2.467,2.186c0,0.896,0.598,1.944,1.795,3.139\r\n                        l33.682,33.407v-34.584c0-1.158-0.264-2.047-0.787-2.662c-0.523-0.618-1.457-1.113-2.801-1.485v-1.57h20.852v1.57\r\n                        c-1.346,0.372-2.281,0.867-2.805,1.483c-0.521,0.616-0.783,1.503-0.783,2.66v51.297c0,1.158,0.262,2.045,0.783,2.66\r\n                        c0.523,0.616,1.459,1.13,2.805,1.54v1.569h-22.486v-1.569c1.645-0.333,2.469-1.02,2.469-2.057c0-0.52-0.227-1.059-0.676-1.613\r\n                        c-0.449-0.556-1.477-1.65-3.084-3.28L1218.254,222.225z\"></path>\r\n                </g>\r\n            </svg>\r\n        <!-- <div class=\"environment-label\">\r\n            App\r\n        </div> -->\r\n    </div>\r\n\r\n    <div class=\"user-div\" *ngIf=\"showLoggedInUserDetails\">\r\n        <!--SHOW THIS WHEN THE USER IS NOT AN ADMIN-->\r\n        <button mat-button *ngIf=\"!showAdminToggleButton\" class=\"admin-dropdown-toggle\">\r\n            <button mat-icon-button class=\"user-button\">\r\n                <div class=\"user-img-css-div\">\r\n                    <i class=\"icon-user-login icon-user-login-css\"></i>\r\n                </div>\r\n            </button>\r\n            {{loggedInUserDetails.CommonName}}\r\n        </button>\r\n\r\n        <!--SHOW THIS WHEN THE USER IS AN ADMIN-->\r\n        <button mat-button [matMenuTriggerFor]=\"userMenu\" *ngIf=\"showAdminToggleButton\" class=\"admin-dropdown-toggle\">\r\n            <button mat-icon-button class=\"user-button\">\r\n                <div class=\"user-img-css-div\">\r\n                    <i class=\"icon-user-login icon-user-login-css\"></i>\r\n                </div>\r\n            </button>\r\n            <span>{{loggedInUserDetails.CommonName}}</span><mat-icon>arrow_drop_down</mat-icon><br />\r\n        </button>\r\n\r\n        <!-- <app-notification></app-notification> -->\r\n\r\n        <button mat-button class=\"logout-button\" (click)=\"logOut()\" matTooltip=\"Logout\" [matTooltipClass]=\"{'sidebar-tooltip': true}\">\r\n            <i class=\"icon-logout\"></i>\r\n        </button>\r\n        <mat-menu #userMenu=\"matMenu\" class=\"user-group\" xPosition=\"before\">\r\n\r\n            <mat-radio-group aria-labelledby=\"example-radio-group-label\"\r\n                             class=\"header-radio-group\"\r\n                             [(ngModel)]=\"userRole\" (change)=\"changeUserRole()\">\r\n                <mat-radio-button class=\"header-radio-button\" *ngFor=\"let role of userRoleList\" [value]=\"role.ID\">\r\n                    {{role.Value}}\r\n                </mat-radio-button>\r\n            </mat-radio-group>\r\n        </mat-menu>\r\n\r\n        \r\n\r\n    </div>\r\n</mat-toolbar>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/sidebar/sidebar.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/sidebar/sidebar.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutComponentsSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container class=\"example-container\" *ngIf=\"showSidebar\">\r\n    <mat-sidenav #drawer mode=\"side\" opened role=\"navigation\">\r\n        <mat-nav-list>\r\n            <div class=\"top-navigation-items\">\r\n                <a class=\"sidenav-icon\" mat-list-item (click)=\"navigateToFigOrBuyerDashboard()\" matTooltip=\"actions\" [matTooltipClass]=\"{'sidebar-tooltip': true}\" [ngClass]=\"{'active': activeState == 'actions'}\">\r\n                    <i class=\"icon-dashboard\"></i>\r\n                </a>\r\n                <!--<a class=\"sidenav-icon\" mat-list-item (click)=\"navigateToProjectOrContract()\" matTooltip=\"{{folderIconText}}\" [matTooltipClass]=\"{'sidebar-tooltip': true}\" [ngClass]=\"{'active': activeState == 'projects' || activeState == 'contracts'}\">\r\n                    <i class=\"icon-projects\"></i>\r\n                </a>\r\n                <a class=\"sidenav-icon vcborder-bottom\" mat-list-item routerLink='/actions' matTooltip=\"Actions\" [matTooltipClass]=\"{'sidebar-tooltip': true}\" [ngClass]=\"{'active': activeState == 'actions'}\">\r\n                    <i class=\"icon-action\"></i>\r\n                </a>\r\n                <a class=\"sidenav-icon\" mat-list-item routerLink='/backupbuyers' matTooltip=\"Backup Buyers\" [matTooltipClass]=\"{'sidebar-tooltip': true}\" [ngClass]=\"{'active': activeState == 'backupbuyers'}\">\r\n                    <i class=\"icon-backup-buyer\"></i>\r\n                </a>\r\n                <a class=\"sidenav-icon\" mat-list-item #fddfigTrigger=\"matMenuTrigger\" [matMenuTriggerFor]=\"menu\"\r\n                   matTooltip=\"Module\" [matTooltipClass]=\"{'sidebar-tooltip': true}\" *ngIf=\"showModuleSwitch\" [ngClass]=\"{'active': fddfigTrigger.menuOpen}\">\r\n                    <i class=\"icon-module\"></i>\r\n                </a>-->\r\n            </div>\r\n            <div class=\"bottom-navigation-items\">\r\n                <!--<a class=\"sidenav-icon vcborder-top\" mat-list-item routerLink='/reports' matTooltip=\"Reports\" [matTooltipClass]=\"{'sidebar-tooltip': true}\"\r\n                   [ngClass]=\"{'active': activeState == 'reports'}\">\r\n                    <i class=\"icon-reports\"></i>\r\n                </a>-->\r\n                <a class=\"sidenav-icon\" mat-list-item routerLink='/support' matTooltip=\"Support\" \r\n                   [matTooltipClass]=\"{'sidebar-tooltip': true}\" *ngIf=\"supportTeam!=null && supportTeam!='' && supportTeam.includes(loggedInUserDetails.LoginName)\"\r\n                   [ngClass]=\"{'active': activeState == 'support'}\">\r\n                    <i class=\"icon-support\"></i>\r\n                </a>\r\n                <!--<a class=\"sidenav-icon\">\r\n                    <i class=\"icon-settings\"></i>\r\n                </a>-->\r\n                <a class=\"sidenav-icon\" [matMenuTriggerFor]=\"Feedback\" #feedbackTrigger=\"matMenuTrigger\" mat-list-item matTooltip=\"Feedback\" [matTooltipClass]=\"{'sidebar-tooltip': true}\"\r\n                   [ngClass]=\"{'active': feedbackTrigger.menuOpen}\">\r\n                    <i class=\"icon-feedback\"></i>\r\n                </a>\r\n                <a class=\"sidenav-icon\" mat-list-item routerLink='/help' matTooltip=\"Help\" \r\n                   [matTooltipClass]=\"{'sidebar-tooltip': true}\" [ngClass]=\"{'active': activeState == 'help'}\">\r\n                    <i class=\"icon-help\"></i>\r\n                </a>\r\n            </div>\r\n        </mat-nav-list>\r\n\r\n\r\n\r\n        <mat-menu #menu=\"matMenu\" class=\"side-bar-menu\" xPosition=\"after\">\r\n            <div *ngFor=\"let submenu of menuList;\" class=\"side-switch-main-div\">\r\n\r\n                <mat-card class=\"mat-card module-switch\" (click)=\"switchUserRoleView(submenu.UserSwitchMenu)\" [style.background-color]=\"submenu.DivBGColor\"\r\n                          [ngClass]=\"{'isMenuSelected':submenu.isSelected, 'isMenuUnselected': !submenu.isSelected}\">\r\n                    <!--<mat-card-header>\r\n                      <span mat-card-avatar class=\"icon-common\" [ngClass]=\"submenu.IconClass\" [style.background-color]=\"submenu.IconBgColor\"></span>\r\n                      <mat-card-title class=\"actioncard-title\">{{ submenu.Title }}</mat-card-title>\r\n                      <mat-card-subtitle class=\"actioncard-subtitle\">{{ submenu.Description }}</mat-card-subtitle>\r\n                    </mat-card-header>-->\r\n                    <a class=\"action-link mat-card\" (mouseover)=\"setHover(submenu)\" [style.background-color]=\"submenu.DivBGColor\"\r\n                          (mouseout)=\"removeHover(submenu)\">\r\n                        <div>\r\n                            <div [ngClass]=\"submenu.IconClass\" class=\"icon-common\" [style.color]=\"submenu.IconBgColor\">\r\n\r\n                            </div>\r\n                            <div class=\"actioncard-title\" [style.color]=\"submenu.IconBgColor\">\r\n                                {{ submenu.Title }}\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n\r\n                    <!--<mat-card-footer class=\"actioncard-footer\">\r\n                      <span>Go to page </span>\r\n                      <mat-icon style=\"font-size:15px; float:right;\">call_made</mat-icon>\r\n                    </mat-card-footer>-->\r\n                </mat-card>\r\n            </div>\r\n        </mat-menu>\r\n\r\n        <mat-menu #Feedback=\"matMenu\" xPosition=\"after\" class=\"feedback-right-menu\">\r\n            <div (click)=\"$event.stopPropagation();\">\r\n                <form #feedBackForm=\"ngForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-4 text-center px-0 pt-2 center-dis-just\">\r\n                            <span class=\"feedback-icon-container\">\r\n                                <i class=\"icon-vc icon-feedback feedback-white center-position feedback-menu-icon\"></i>\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"col-sm-8 pl-0\">\r\n                            <div class=\"feedback-title\">Feedback</div>\r\n                            <div class=\"feedback-question\">How do you feel about the application?</div>\r\n                            <bar-rating [(rate)]=\"rate\" [max]=\"5\" name=\"rating\" required [theme]=\"'stars'\" [(ngModel)]=\"ratingDetails.Rating\">\r\n                            </bar-rating>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"feedback-comments-title pt-1\">Comments</div>\r\n                    <textarea rows=\"3\" class=\"comments-txtarea form-control\" name=\"feedback\" required [(ngModel)]=\"ratingDetails.Comments\"></textarea>\r\n                    <div class=\"float-right pt-4\">\r\n                        <button mat-button type=\"submit\" class=\"primary-button-1 submit-button\"\r\n                                (click)=\"feedBackForm.valid && submitFeedBack(); feedbackTrigger.closeMenu()\" [disabled]=\"!feedBackForm.valid\">\r\n                            Submit\r\n                        </button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </mat-menu>\r\n\r\n    </mat-sidenav>\r\n</mat-sidenav-container>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/angular-grid/angular-grid.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/angular-grid/angular-grid.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesSharedComponentsAngularGridAngularGridComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table mat-table #table [dataSource]=\"gridDataSource\" matSort>\r\n\r\n    <ng-container [matColumnDef]=\"column.columnDef\" *ngFor=\"let column of columnDetails\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ column.header }}</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n            <u>\r\n                <a fxFlexFill href=\"\" class=\"mat-row-link\" *ngIf=\"column.header == 'Project No'\" [routerLink]=\"'/projects/projectcreation'\">\r\n                    <!-- <a fxFlexFill href=\"\" class=\"mat-row-link\" *ngIf=\"column.header == 'Project No'\" [routerLink]=\"['/projects/projectcreation',element.ProjectNumber]\"> -->\r\n                    {{ column.cell(element) }}\r\n                </a>\r\n            </u>\r\n            <span *ngIf=\"column.header != 'Project No'\">\r\n                {{ column.cell(element) }}\r\n            </span>\r\n            <span *ngIf=\"column.header == 'Actions'\">\r\n                <img src=\"../../../../../assets/images/Copy_Project_Icon.svg\" height=\"20\" />\r\n                <img src=\"../../../../../assets/images/Reassign_Icon.svg\" height=\"20\" />\r\n                <img src=\"../../../../../assets/images/Delete_Icon.svg\" height=\"20\" />\r\n            </span>\r\n        </td>\r\n    </ng-container>\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator [pageSizeOptions]=\"[10, 20, 30]\" showFirstLastButtons></mat-paginator>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/modal/modal.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/modal/modal.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesSharedComponentsModalModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div mat-dialog-container>\r\n  <!--<mat-toolbar *ngIf=\"style==1\" color=\"primary\" class=\"mat-elevation-z2\">\r\n    <mat-card-header>{{title}}</mat-card-header>\r\n  </mat-toolbar>-->\r\n  <div class=\"message\">\r\n    <p>\r\n      {{message}}\r\n    </p>\r\n  </div>\r\n  <div class=\"info\" *ngIf=\"information!==''\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-1\">\r\n        <img src=\"../../../../../assets/images/SUCCESS.png\" *ngIf=\"messageIcon == 0\" />\r\n        <img src=\"../../../../../assets/images/ERROR.png\" *ngIf=\"messageIcon == 1\" />\r\n        <img src=\"../../../../../assets/images/INFO.png\" *ngIf=\"messageIcon == 2\" />\r\n        <img src=\"../../../../../assets/images/ALERT.png\" *ngIf=\"messageIcon == 3\" />\r\n      </div>\r\n      <div class=\"col-sm-11\">\r\n        <p>\r\n          {{information}}\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div style=\"padding: 5px;float:right\">\r\n    <div *ngIf=\"button==0\">\r\n      <button mat-button class=\"primary-button-2\" (click)=\"onOk()\" tabindex=\"-1\">OK</button>\r\n    </div>\r\n    <div *ngIf=\"button==1\">\r\n        <button mat-button class=\"primary-button-2 margin-left\" (click)=\"onCancel()\" tabindex=\"-1\">CANCEL</button>\r\n        <button mat-button class=\"primary-button-2\" (click)=\"onOk()\" tabindex=\"-1\">OK</button>\r\n    </div>\r\n    <div *ngIf=\"button==2\">\r\n        <button mat-button class=\"primary-button-2 margin-left\" (click)=\"onNo()\" tabindex=\"-1\">NO</button>\r\n        <button mat-button class=\"primary-button-2\" (click)=\"onYes()\" tabindex=\"-1\">YES</button>\r\n    </div>\r\n    <div *ngIf=\"button==3\">\r\n        <button mat-button class=\"primary-button-2 margin-left\" (click)=\"onReject()\" tabindex=\"-1\">REJECT</button>\r\n        <button mat-button class=\"primary-button-2\" (click)=\"onAccept()\" tabindex=\"-1\">ACCEPT</button>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _core_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core/components/login/login.component */
    "./src/app/core/components/login/login.component.ts");
    /* harmony import */


    var _core_components_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./core/components/unauthorized/unauthorized.component */
    "./src/app/core/components/unauthorized/unauthorized.component.ts");
    /* harmony import */


    var _core_components_logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./core/components/logout/logout.component */
    "./src/app/core/components/logout/logout.component.ts");
    /* harmony import */


    var _core_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./core/services/auth-guard.service */
    "./src/app/core/services/auth-guard.service.ts");

    var routes = [{
      path: 'login',
      component: _core_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'referrer',
      loadChildren: './modules/emrpage/emrpage.module#EMRPageModule',
      canLoad: [_core_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
    }, {
      path: 'referrer/incomingmessage',
      loadChildren: './modules/emrpage/emrpage.module#EMRPageModule',
      canLoad: [_core_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
    }, {
      path: 'referrer/wipmessage',
      loadChildren: './modules/emrpage/emrpage.module#EMRPageModule',
      canLoad: [_core_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
    }, {
      path: 'referrer/dtpocnotfoundmessage',
      loadChildren: './modules/emrpage/emrpage.module#EMRPageModule',
      canLoad: [_core_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
    }, {
      path: 'referrer/processedmessages',
      loadChildren: './modules/emrpage/emrpage.module#EMRPageModule',
      canLoad: [_core_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
    }, {
      path: 'referrer/clinicmapping',
      loadChildren: './modules/emrpage/emrpage.module#EMRPageModule',
      canLoad: [_core_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
    }, {
      path: 'referrer/sentPocs',
      loadChildren: './modules/emrpage/emrpage.module#EMRPageModule',
      canLoad: [_core_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
    }, {
      path: 'referrer/ProcessedPocs',
      loadChildren: './modules/emrpage/emrpage.module#EMRPageModule',
      canLoad: [_core_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
    }, //{ path: 'incomingmessage', loadChildren: './modules/emrpage/emrpage.module#EMRPageModule' },
    //{ path: 'projects', loadChildren: './modules/project-creation/project.module#ProjectModule', canLoad: [AuthGuardService] },
    // { path: 'backupbuyers', loadChildren: './modules/backup-buyer/backup-buyer.module#BackupBuyerModule', canLoad: [AuthGuardService] },
    // { path: 'reports', loadChildren: './modules/reports/reports.module#ReportsModule', canLoad: [AuthGuardService] },
    {
      path: 'actions',
      loadChildren: './modules/actions/actions.module#ActionsModule',
      canLoad: [_core_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
    }, {
      path: 'unauthorized',
      component: _core_components_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_4__["UnauthorizedComponent"]
    }, {
      path: 'logout/:autoLogout',
      component: _core_components_logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"]
    }, // { path: 'support', loadChildren: './modules/support/support.module#SupportModule', canLoad: [AuthGuardService] },
    //{ path: 'help', loadChildren: './modules/help/help.module#HelpModule', canLoad: [AuthGuardService] },
    // { path: 'contracts', loadChildren: './modules/contracts-creation/contracts.module#ContractsModule', canLoad: [AuthGuardService] },
    // { path: 'commodityImpact', loadChildren: './modules/commodity-impact/commodity-impact.module#CommodityImpactModule', canLoad: [AuthGuardService] },
    // { path: 'figdashboard', loadChildren: './modules/fig-dashboard/fig-dashboard.module#FigDashboardModule', canLoad: [AuthGuardService] },
    //{ path: 'figmasterdatamaintenance', loadChildren: './modules/fig-master-data-maintenance/fig-master-data-maintenance.module#FIGMasterDataMaintenanceModule', canLoad: [AuthGuardService] },
    {
      path: 'index.html',
      redirectTo: '/index.html',
      pathMatch: 'full'
    }, {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container-fluid, .navbar {\n  min-width: 800px;\n}\n\n.navbar.navbar-light .navbar-nav .nav-item .btn-link {\n  color: rgba(0, 0, 0, 0.65) !important;\n}\n\n.navbar.navbar-dark .navbar-nav .nav-item .btn-link {\n  color: rgba(255, 255, 255, 0.65) !important;\n}\n\n.navbar-nav .nav-item .ion-icon-link {\n  padding-bottom: 0;\n}\n\n.navbar-nav .nav-item .ion-icon-link ion-icon {\n  font-size: 1.7rem;\n  line-height: 0.5rem;\n}\n\n.navbar-nav .nav-item .toggler ion-icon {\n  -webkit-transition: opacity 0.3s ease;\n  transition: opacity 0.3s ease;\n}\n\n.navbar-nav .nav-item .toggler #close {\n  margin-left: -27px;\n}\n\n.navbar-nav .nav-item .toggler:not(.collapsed) #menu {\n  opacity: 0;\n}\n\n.navbar-nav .nav-item .toggler.collapsed #close {\n  opacity: 0;\n}\n\n/*\n * Sidebar\n */\n\n.sidebar {\n  position: fixed;\n  top: 79px;\n  bottom: 0;\n  padding: 0;\n  /* Height of navbar */\n  width: 300px;\n  z-index: 1030;\n}\n\n.sidebar .sidebar-sticky {\n  position: relative;\n  top: 0;\n  height: calc(100vh - 58px);\n  overflow-x: hidden;\n  overflow-y: auto;\n  /* Scrollable contents if viewport is shorter than content. */\n}\n\n.sidebar .nav-item .ion-icon-link ion-icon {\n  font-size: 1.3rem;\n  padding-right: 10px;\n}\n\n.sidebar.bg-blur-light .nav-link,\n.sidebar.bg-light .nav-link {\n  color: rgba(0, 0, 0, 0.65);\n}\n\n.sidebar.bg-blur-light .nav-link:hover,\n.sidebar.bg-light .nav-link:hover {\n  color: rgba(0, 0, 0, 0.85);\n}\n\n.sidebar.bg-blur-light .nav-link.active,\n.sidebar.bg-light .nav-link.active {\n  color: #007bff;\n  font-weight: normal !important;\n}\n\n.sidebar.bg-blur-dark .nav-link,\n.sidebar.bg-dark .nav-link {\n  color: rgba(255, 255, 255, 0.65);\n}\n\n.sidebar.bg-blur-dark .nav-link:hover,\n.sidebar.bg-dark .nav-link:hover {\n  /*color: rgba($color: #fff, $alpha: 0.85);*/\n  color: white !important;\n}\n\n.sidebar.bg-blur-dark .nav-link.active,\n.sidebar.bg-dark .nav-link.active {\n  color: white;\n  font-weight: normal !important;\n}\n\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .sidebar-sticky {\n    position: -webkit-sticky;\n    position: sticky;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXERpcmVjdFRydXN0XFxDb2RlXFxUZWFtUmVoYWJcXENsaWVudEFwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0M6XFxEaXJlY3RUcnVzdFxcQ29kZVxcVGVhbVJlaGFiXFxDbGllbnRBcHAvbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGdCQUFBO0FDRko7O0FES0E7RUFDSSxxQ0FBQTtBQ0ZKOztBREtBO0VBQ0ksMkNBQUE7QUNGSjs7QURPUTtFQU1JLGlCQUFBO0FDVFo7O0FESVk7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDRmhCOztBRFNZO0VBQ0kscUNBQUE7RUFHQSw2QkFBQTtBQ1BoQjs7QURVWTtFQUNJLGtCQUFBO0FDUmhCOztBRFlRO0VBQ0ksVUFBQTtBQ1ZaOztBRGFRO0VBQ0ksVUFBQTtBQ1haOztBRGdCQTs7RUFBQTs7QUFJQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFBWSxxQkFBQTtFQUNaLFlBQUE7RUFDQSxhRTRtQmdDO0FEem5CcEM7O0FEZUk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFBa0IsNkRBQUE7QUNaMUI7O0FEaUJZO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQ2ZoQjs7QUR3Qkk7O0VBQ0ksMEJBQUE7QUNwQlI7O0FEdUJJOztFQUNJLDBCQUFBO0FDcEJSOztBRHVCSTs7RUFDSSxjQUFBO0VBQ0EsOEJBQUE7QUNwQlI7O0FEMkJJOztFQUNJLGdDQUFBO0FDdkJSOztBRDBCSTs7RUFDSSwyQ0FBQTtFQUNBLHVCQUFBO0FDdkJSOztBRDBCSTs7RUFDSSxZQUFBO0VBQ0EsOEJBQUE7QUN2QlI7O0FENEJBO0VBQ0k7SUFDSSx3QkFBQTtJQUNBLGdCQUFBO0VDekJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL2Z1bmN0aW9uc1wiO1xuQGltcG9ydCBcIn5ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcblxuLmNvbnRhaW5lci1mbHVpZCwgLm5hdmJhciB7XG4gICAgbWluLXdpZHRoOiA4MDBweDtcbn1cblxuLm5hdmJhci5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5idG4tbGluayB7XG4gICAgY29sb3I6IHJnYmEoJGNvbG9yOiAjMDAwLCAkYWxwaGE6IDAuNjUpICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXIubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5idG4tbGluayB7XG4gICAgY29sb3I6IHJnYmEoJGNvbG9yOiAjZmZmLCAkYWxwaGE6IDAuNjUpICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXItbmF2IHtcbiAgICAubmF2LWl0ZW0ge1xuICAgICAgICAuaW9uLWljb24tbGluayB7XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuNXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICAudG9nZ2xlciB7XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjY2xvc2Uge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMjdweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50b2dnbGVyOm5vdCguY29sbGFwc2VkKSAjbWVudSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRvZ2dsZXIuY29sbGFwc2VkICNjbG9zZSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKlxuICogU2lkZWJhclxuICovXG5cbi5zaWRlYmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA3OXB4O1xuICAgIGJvdHRvbTogMDtcbiAgICBwYWRkaW5nOiAwOyAvKiBIZWlnaHQgb2YgbmF2YmFyICovXG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIHotaW5kZXg6ICR6aW5kZXgtZml4ZWQ7XG5cbiAgICAuc2lkZWJhci1zdGlja3kge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNThweCk7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bzsgLyogU2Nyb2xsYWJsZSBjb250ZW50cyBpZiB2aWV3cG9ydCBpcyBzaG9ydGVyIHRoYW4gY29udGVudC4gKi9cbiAgICB9XG5cbiAgICAubmF2LWl0ZW0ge1xuICAgICAgICAuaW9uLWljb24tbGluayB7XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNpZGViYXIuYmctYmx1ci1saWdodCxcbi5zaWRlYmFyLmJnLWxpZ2h0IHtcblxuICAgIC5uYXYtbGluayB7XG4gICAgICAgIGNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMCwgJGFscGhhOiAwLjY1KTtcbiAgICB9XG5cbiAgICAubmF2LWxpbms6aG92ZXIge1xuICAgICAgICBjb2xvcjogcmdiYSgkY29sb3I6ICMwMDAsICRhbHBoYTogMC44NSk7XG4gICAgfVxuXG4gICAgLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAjMDA3YmZmO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uc2lkZWJhci5iZy1ibHVyLWRhcmssXG4uc2lkZWJhci5iZy1kYXJrIHtcblxuICAgIC5uYXYtbGluayB7XG4gICAgICAgIGNvbG9yOiByZ2JhKCRjb2xvcjogI2ZmZiwgJGFscGhhOiAwLjY1KTtcbiAgICB9XG5cbiAgICAubmF2LWxpbms6aG92ZXIge1xuICAgICAgICAvKmNvbG9yOiByZ2JhKCRjb2xvcjogI2ZmZiwgJGFscGhhOiAwLjg1KTsqL1xuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5cbkBzdXBwb3J0cyAoKHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSkgb3IgKHBvc2l0aW9uOiBzdGlja3kpKSB7XG4gICAgLnNpZGViYXItc3RpY2t5IHtcbiAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIH1cbn1cbiIsIi5jb250YWluZXItZmx1aWQsIC5uYXZiYXIge1xuICBtaW4td2lkdGg6IDgwMHB4O1xufVxuXG4ubmF2YmFyLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLmJ0bi1saW5rIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSkgIWltcG9ydGFudDtcbn1cblxuLm5hdmJhci5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLmJ0bi1saW5rIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NSkgIWltcG9ydGFudDtcbn1cblxuLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5pb24taWNvbi1saW5rIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4ubmF2YmFyLW5hdiAubmF2LWl0ZW0gLmlvbi1pY29uLWxpbmsgaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgbGluZS1oZWlnaHQ6IDAuNXJlbTtcbn1cbi5uYXZiYXItbmF2IC5uYXYtaXRlbSAudG9nZ2xlciBpb24taWNvbiB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cbi5uYXZiYXItbmF2IC5uYXYtaXRlbSAudG9nZ2xlciAjY2xvc2Uge1xuICBtYXJnaW4tbGVmdDogLTI3cHg7XG59XG4ubmF2YmFyLW5hdiAubmF2LWl0ZW0gLnRvZ2dsZXI6bm90KC5jb2xsYXBzZWQpICNtZW51IHtcbiAgb3BhY2l0eTogMDtcbn1cbi5uYXZiYXItbmF2IC5uYXYtaXRlbSAudG9nZ2xlci5jb2xsYXBzZWQgI2Nsb3NlIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLypcbiAqIFNpZGViYXJcbiAqL1xuLnNpZGViYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNzlweDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwO1xuICAvKiBIZWlnaHQgb2YgbmF2YmFyICovXG4gIHdpZHRoOiAzMDBweDtcbiAgei1pbmRleDogMTAzMDtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLXN0aWNreSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1OHB4KTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICAvKiBTY3JvbGxhYmxlIGNvbnRlbnRzIGlmIHZpZXdwb3J0IGlzIHNob3J0ZXIgdGhhbiBjb250ZW50LiAqL1xufVxuLnNpZGViYXIgLm5hdi1pdGVtIC5pb24taWNvbi1saW5rIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5zaWRlYmFyLmJnLWJsdXItbGlnaHQgLm5hdi1saW5rLFxuLnNpZGViYXIuYmctbGlnaHQgLm5hdi1saW5rIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XG59XG4uc2lkZWJhci5iZy1ibHVyLWxpZ2h0IC5uYXYtbGluazpob3Zlcixcbi5zaWRlYmFyLmJnLWxpZ2h0IC5uYXYtbGluazpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xufVxuLnNpZGViYXIuYmctYmx1ci1saWdodCAubmF2LWxpbmsuYWN0aXZlLFxuLnNpZGViYXIuYmctbGlnaHQgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG59XG5cbi5zaWRlYmFyLmJnLWJsdXItZGFyayAubmF2LWxpbmssXG4uc2lkZWJhci5iZy1kYXJrIC5uYXYtbGluayB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpO1xufVxuLnNpZGViYXIuYmctYmx1ci1kYXJrIC5uYXYtbGluazpob3Zlcixcbi5zaWRlYmFyLmJnLWRhcmsgLm5hdi1saW5rOmhvdmVyIHtcbiAgLypjb2xvcjogcmdiYSgkY29sb3I6ICNmZmYsICRhbHBoYTogMC44NSk7Ki9cbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4uc2lkZWJhci5iZy1ibHVyLWRhcmsgLm5hdi1saW5rLmFjdGl2ZSxcbi5zaWRlYmFyLmJnLWRhcmsgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuXG5Ac3VwcG9ydHMgKHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSkgb3IgKHBvc2l0aW9uOiBzdGlja3kpIHtcbiAgLnNpZGViYXItc3RpY2t5IHtcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgfVxufSIsIi8vIFZhcmlhYmxlc1xuLy9cbi8vIFZhcmlhYmxlcyBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1zdGF0ZS1wcm9wZXJ0eS1zaXplYCBmb3JtdWxhIGZvclxuLy8gY29uc2lzdGVudCBuYW1pbmcuIEV4OiAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3IgYW5kICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMuXG5cbi8vIENvbG9yIHN5c3RlbVxuXG4kd2hpdGU6ICAgICNmZmYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICNmOGY5ZmEgIWRlZmF1bHQ7XG4kZ3JheS0yMDA6ICNlOWVjZWYgIWRlZmF1bHQ7XG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICNhZGI1YmQgIWRlZmF1bHQ7XG4kZ3JheS02MDA6ICM2Yzc1N2QgIWRlZmF1bHQ7XG4kZ3JheS03MDA6ICM0OTUwNTcgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICMzNDNhNDAgIWRlZmF1bHQ7XG4kZ3JheS05MDA6ICMyMTI1MjkgIWRlZmF1bHQ7XG4kYmxhY2s6ICAgICMwMDAgIWRlZmF1bHQ7XG5cbiRncmF5czogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJGdyYXlzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcIjEwMFwiOiAkZ3JheS0xMDAsXG4gICAgXCIyMDBcIjogJGdyYXktMjAwLFxuICAgIFwiMzAwXCI6ICRncmF5LTMwMCxcbiAgICBcIjQwMFwiOiAkZ3JheS00MDAsXG4gICAgXCI1MDBcIjogJGdyYXktNTAwLFxuICAgIFwiNjAwXCI6ICRncmF5LTYwMCxcbiAgICBcIjcwMFwiOiAkZ3JheS03MDAsXG4gICAgXCI4MDBcIjogJGdyYXktODAwLFxuICAgIFwiOTAwXCI6ICRncmF5LTkwMFxuICApLFxuICAkZ3JheXNcbik7XG5cbiRibHVlOiAgICAjMDA3YmZmICFkZWZhdWx0O1xuJGluZGlnbzogICM2NjEwZjIgIWRlZmF1bHQ7XG4kcHVycGxlOiAgIzZmNDJjMSAhZGVmYXVsdDtcbiRwaW5rOiAgICAjZTgzZThjICFkZWZhdWx0O1xuJHJlZDogICAgICNkYzM1NDUgIWRlZmF1bHQ7XG4kb3JhbmdlOiAgI2ZkN2UxNCAhZGVmYXVsdDtcbiR5ZWxsb3c6ICAjZmZjMTA3ICFkZWZhdWx0O1xuJGdyZWVuOiAgICMyOGE3NDUgIWRlZmF1bHQ7XG4kdGVhbDogICAgIzIwYzk5NyAhZGVmYXVsdDtcbiRjeWFuOiAgICAjMTdhMmI4ICFkZWZhdWx0O1xuXG4kY29sb3JzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kY29sb3JzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcImJsdWVcIjogICAgICAgJGJsdWUsXG4gICAgXCJpbmRpZ29cIjogICAgICRpbmRpZ28sXG4gICAgXCJwdXJwbGVcIjogICAgICRwdXJwbGUsXG4gICAgXCJwaW5rXCI6ICAgICAgICRwaW5rLFxuICAgIFwicmVkXCI6ICAgICAgICAkcmVkLFxuICAgIFwib3JhbmdlXCI6ICAgICAkb3JhbmdlLFxuICAgIFwieWVsbG93XCI6ICAgICAkeWVsbG93LFxuICAgIFwiZ3JlZW5cIjogICAgICAkZ3JlZW4sXG4gICAgXCJ0ZWFsXCI6ICAgICAgICR0ZWFsLFxuICAgIFwiY3lhblwiOiAgICAgICAkY3lhbixcbiAgICBcIndoaXRlXCI6ICAgICAgJHdoaXRlLFxuICAgIFwiZ3JheVwiOiAgICAgICAkZ3JheS02MDAsXG4gICAgXCJncmF5LWRhcmtcIjogICRncmF5LTgwMFxuICApLFxuICAkY29sb3JzXG4pO1xuXG4kcHJpbWFyeTogICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICRncmVlbiAhZGVmYXVsdDtcbiRpbmZvOiAgICAgICAgICAkY3lhbiAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkeWVsbG93ICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRyZWQgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGRhcms6ICAgICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcblxuJHRoZW1lLWNvbG9yczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHRoZW1lLWNvbG9yczogbWFwLW1lcmdlKFxuICAoXG4gICAgXCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxuICAgIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LFxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcbiAgICBcImluZm9cIjogICAgICAgJGluZm8sXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLFxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxuICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQsXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrXG4gICksXG4gICR0aGVtZS1jb2xvcnNcbik7XG5cbi8vIFNldCBhIHNwZWNpZmljIGp1bXAgcG9pbnQgZm9yIHJlcXVlc3RpbmcgY29sb3IganVtcHNcbiR0aGVtZS1jb2xvci1pbnRlcnZhbDogICAgICA4JSAhZGVmYXVsdDtcblxuLy8gVGhlIHlpcSBsaWdodG5lc3MgdmFsdWUgdGhhdCBkZXRlcm1pbmVzIHdoZW4gdGhlIGxpZ2h0bmVzcyBvZiBjb2xvciBjaGFuZ2VzIGZyb20gXCJkYXJrXCIgdG8gXCJsaWdodFwiLiBBY2NlcHRhYmxlIHZhbHVlcyBhcmUgYmV0d2VlbiAwIGFuZCAyNTUuXG4keWlxLWNvbnRyYXN0ZWQtdGhyZXNob2xkOiAgMTUwICFkZWZhdWx0O1xuXG4vLyBDdXN0b21pemUgdGhlIGxpZ2h0IGFuZCBkYXJrIHRleHQgY29sb3JzIGZvciB1c2UgaW4gb3VyIFlJUSBjb2xvciBjb250cmFzdCBmdW5jdGlvbi5cbiR5aXEtdGV4dC1kYXJrOiAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4keWlxLXRleHQtbGlnaHQ6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG5cbi8vIE9wdGlvbnNcbi8vXG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXG5cbiRlbmFibGUtY2FyZXQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yb3VuZGVkOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXNoYWRvd3M6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyYWRpZW50czogICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXRyYW5zaXRpb25zOiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcHJlZmVycy1yZWR1Y2VkLW1vdGlvbi1tZWRpYS1xdWVyeTogICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1ob3Zlci1tZWRpYS1xdWVyeTogICAgICAgICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0OyAvLyBEZXByZWNhdGVkLCBubyBsb25nZXIgYWZmZWN0cyBhbnkgY29tcGlsZWQgQ1NTXG4kZW5hYmxlLWdyaWQtY2xhc3NlczogICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcG9pbnRlci1jdXJzb3ItZm9yLWJ1dHRvbnM6ICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wcmludC1zdHlsZXM6ICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJlc3BvbnNpdmUtZm9udC1zaXplczogICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXZhbGlkYXRpb24taWNvbnM6ICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtZGVwcmVjYXRpb24tbWVzc2FnZXM6ICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuXG5cbi8vIFNwYWNpbmdcbi8vXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxuXG4kc3BhY2VyOiAxcmVtICFkZWZhdWx0O1xuJHNwYWNlcnM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRzcGFjZXJzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICAwOiAwLFxuICAgIDE6ICgkc3BhY2VyICogLjI1KSxcbiAgICAyOiAoJHNwYWNlciAqIC41KSxcbiAgICAzOiAkc3BhY2VyLFxuICAgIDQ6ICgkc3BhY2VyICogMS41KSxcbiAgICA1OiAoJHNwYWNlciAqIDMpXG4gICksXG4gICRzcGFjZXJzXG4pO1xuXG4vLyBUaGlzIHZhcmlhYmxlIGFmZmVjdHMgdGhlIGAuaC0qYCBhbmQgYC53LSpgIGNsYXNzZXMuXG4kc2l6ZXM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRzaXplczogbWFwLW1lcmdlKFxuICAoXG4gICAgMjU6IDI1JSxcbiAgICA1MDogNTAlLFxuICAgIDc1OiA3NSUsXG4gICAgMTAwOiAxMDAlLFxuICAgIGF1dG86IGF1dG9cbiAgKSxcbiAgJHNpemVzXG4pO1xuXG5cbi8vIEJvZHlcbi8vXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXG5cbiRib2R5LWJnOiAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kYm9keS1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuXG5cbi8vIExpbmtzXG4vL1xuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS1jb2xvcihcInByaW1hcnlcIikgIWRlZmF1bHQ7XG4kbGluay1kZWNvcmF0aW9uOiAgICAgICAgICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xuJGxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgZGFya2VuKCRsaW5rLWNvbG9yLCAxNSUpICFkZWZhdWx0O1xuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lICFkZWZhdWx0O1xuLy8gRGFya2VuIHBlcmNlbnRhZ2UgZm9yIGxpbmtzIHdpdGggYC50ZXh0LSpgIGNsYXNzIChlLmcuIGAudGV4dC1zdWNjZXNzYClcbiRlbXBoYXNpemVkLWxpbmstaG92ZXItZGFya2VuLXBlcmNlbnRhZ2U6IDE1JSAhZGVmYXVsdDtcblxuLy8gUGFyYWdyYXBoc1xuLy9cbi8vIFN0eWxlIHAgZWxlbWVudC5cblxuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAgIDFyZW0gIWRlZmF1bHQ7XG5cblxuLy8gR3JpZCBicmVha3BvaW50c1xuLy9cbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxuXG4kZ3JpZC1icmVha3BvaW50czogKFxuICB4czogMCxcbiAgc206IDU3NnB4LFxuICBtZDogNzY4cHgsXG4gIGxnOiA5OTJweCxcbiAgeGw6IDEyMDBweFxuKSAhZGVmYXVsdDtcblxuQGluY2x1ZGUgX2Fzc2VydC1hc2NlbmRpbmcoJGdyaWQtYnJlYWtwb2ludHMsIFwiJGdyaWQtYnJlYWtwb2ludHNcIik7XG5AaW5jbHVkZSBfYXNzZXJ0LXN0YXJ0cy1hdC16ZXJvKCRncmlkLWJyZWFrcG9pbnRzLCBcIiRncmlkLWJyZWFrcG9pbnRzXCIpO1xuXG5cbi8vIEdyaWQgY29udGFpbmVyc1xuLy9cbi8vIERlZmluZSB0aGUgbWF4aW11bSB3aWR0aCBvZiBgLmNvbnRhaW5lcmAgZm9yIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMuXG5cbiRjb250YWluZXItbWF4LXdpZHRoczogKFxuICBzbTogNTQwcHgsXG4gIG1kOiA3MjBweCxcbiAgbGc6IDk2MHB4LFxuICB4bDogMTE0MHB4XG4pICFkZWZhdWx0O1xuXG5AaW5jbHVkZSBfYXNzZXJ0LWFzY2VuZGluZygkY29udGFpbmVyLW1heC13aWR0aHMsIFwiJGNvbnRhaW5lci1tYXgtd2lkdGhzXCIpO1xuXG5cbi8vIEdyaWQgY29sdW1uc1xuLy9cbi8vIFNldCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYW5kIHNwZWNpZnkgdGhlIHdpZHRoIG9mIHRoZSBndXR0ZXJzLlxuXG4kZ3JpZC1jb2x1bW5zOiAgICAgICAgICAgICAgICAxMiAhZGVmYXVsdDtcbiRncmlkLWd1dHRlci13aWR0aDogICAgICAgICAgIDMwcHggIWRlZmF1bHQ7XG5cblxuLy8gQ29tcG9uZW50c1xuLy9cbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cblxuJGxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgMS41ICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgMS41ICFkZWZhdWx0O1xuXG4kYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAxcHggIWRlZmF1bHQ7XG4kYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgIC4zcmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtc206ICAgICAgICAgICAgLjJyZW0gIWRlZmF1bHQ7XG5cbiRyb3VuZGVkLXBpbGw6ICAgICAgICAgICAgICAgIDUwcmVtICFkZWZhdWx0O1xuXG4kYm94LXNoYWRvdy1zbTogICAgICAgICAgICAgICAwIC4xMjVyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgIDAgLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgLjE1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LWxnOiAgICAgICAgICAgICAgIDAgMXJlbSAzcmVtIHJnYmEoJGJsYWNrLCAuMTc1KSAhZGVmYXVsdDtcblxuJGNvbXBvbmVudC1hY3RpdmUtY29sb3I6ICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNvbXBvbmVudC1hY3RpdmUtYmc6ICAgICAgICAgdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpICFkZWZhdWx0O1xuXG4kY2FyZXQtd2lkdGg6ICAgICAgICAgICAgICAgICAuM2VtICFkZWZhdWx0O1xuJGNhcmV0LXZlcnRpY2FsLWFsaWduOiAgICAgICAgJGNhcmV0LXdpZHRoICogLjg1ICFkZWZhdWx0O1xuJGNhcmV0LXNwYWNpbmc6ICAgICAgICAgICAgICAgJGNhcmV0LXdpZHRoICogLjg1ICFkZWZhdWx0O1xuXG4kdHJhbnNpdGlvbi1iYXNlOiAgICAgICAgICAgICBhbGwgLjJzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuJHRyYW5zaXRpb24tZmFkZTogICAgICAgICAgICAgb3BhY2l0eSAuMTVzIGxpbmVhciAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWNvbGxhcHNlOiAgICAgICAgIGhlaWdodCAuMzVzIGVhc2UgIWRlZmF1bHQ7XG5cbiRlbWJlZC1yZXNwb25zaXZlLWFzcGVjdC1yYXRpb3M6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRlbWJlZC1yZXNwb25zaXZlLWFzcGVjdC1yYXRpb3M6IGpvaW4oXG4gIChcbiAgICAoMjEgOSksXG4gICAgKDE2IDkpLFxuICAgICg0IDMpLFxuICAgICgxIDEpLFxuICApLFxuICAkZW1iZWQtcmVzcG9uc2l2ZS1hc3BlY3QtcmF0aW9zXG4pO1xuXG4vLyBUeXBvZ3JhcGh5XG4vL1xuLy8gRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXG5cbi8vIHN0eWxlbGludC1kaXNhYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgICAgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogICAgICAgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1iYXNlOiAgICAgICAgICAgICRmb250LWZhbWlseS1zYW5zLXNlcmlmICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWVuYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcblxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDsgLy8gQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXG4kZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogLjg3NSAhZGVmYXVsdDtcblxuJGZvbnQtd2VpZ2h0LWxpZ2h0ZXI6ICAgICAgICAgbGlnaHRlciAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1saWdodDogICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ub3JtYWw6ICAgICAgICAgIDQwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkOiAgICAgICAgICAgIDcwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkZXI6ICAgICAgICAgIGJvbGRlciAhZGVmYXVsdDtcblxuJGZvbnQtd2VpZ2h0LWJhc2U6ICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1iYXNlOiAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcblxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMi41ICFkZWZhdWx0O1xuJGgyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMiAhZGVmYXVsdDtcbiRoMy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNzUgIWRlZmF1bHQ7XG4kaDQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XG4kaDUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuJGg2LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcbiRoZWFkaW5ncy1mb250LWZhbWlseTogICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6ICAgICAgICA1MDAgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6ICAgICAgICAxLjIgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtY29sb3I6ICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kZGlzcGxheTEtc2l6ZTogICAgICAgICAgICAgICA2cmVtICFkZWZhdWx0O1xuJGRpc3BsYXkyLXNpemU6ICAgICAgICAgICAgICAgNS41cmVtICFkZWZhdWx0O1xuJGRpc3BsYXkzLXNpemU6ICAgICAgICAgICAgICAgNC41cmVtICFkZWZhdWx0O1xuJGRpc3BsYXk0LXNpemU6ICAgICAgICAgICAgICAgMy41cmVtICFkZWZhdWx0O1xuXG4kZGlzcGxheTEtd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheTItd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheTMtd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheTQtd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheS1saW5lLWhlaWdodDogICAgICAgICAkaGVhZGluZ3MtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRsZWFkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kbGVhZC1mb250LXdlaWdodDogICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG5cbiRzbWFsbC1mb250LXNpemU6ICAgICAgICAgICAgIDgwJSAhZGVmYXVsdDtcblxuJHRleHQtbXV0ZWQ6ICAgICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kYmxvY2txdW90ZS1zbWFsbC1jb2xvcjogICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYmxvY2txdW90ZS1zbWFsbC1mb250LXNpemU6ICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuJGJsb2NrcXVvdGUtZm9udC1zaXplOiAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcblxuJGhyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiRoci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRtYXJrLXBhZGRpbmc6ICAgICAgICAgICAgICAgIC4yZW0gIWRlZmF1bHQ7XG5cbiRkdC1mb250LXdlaWdodDogICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuXG4ka2JkLWJveC1zaGFkb3c6ICAgICAgICAgICAgICBpbnNldCAwIC0uMXJlbSAwIHJnYmEoJGJsYWNrLCAuMjUpICFkZWZhdWx0O1xuJG5lc3RlZC1rYmQtZm9udC13ZWlnaHQ6ICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG5cbiRsaXN0LWlubGluZS1wYWRkaW5nOiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kbWFyay1iZzogICAgICAgICAgICAgICAgICAgICAjZmNmOGUzICFkZWZhdWx0O1xuXG4kaHItbWFyZ2luLXk6ICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuXG5cbi8vIFRhYmxlc1xuLy9cbi8vIEN1c3RvbWl6ZXMgdGhlIGAudGFibGVgIGNvbXBvbmVudCB3aXRoIGJhc2ljIHZhbHVlcywgZWFjaCB1c2VkIGFjcm9zcyBhbGwgdGFibGUgdmFyaWF0aW9ucy5cblxuJHRhYmxlLWNlbGwtcGFkZGluZzogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHRhYmxlLWNlbGwtcGFkZGluZy1zbTogICAgICAgLjNyZW0gIWRlZmF1bHQ7XG5cbiR0YWJsZS1jb2xvcjogICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLWJnOiAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiR0YWJsZS1hY2NlbnQtYmc6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDUpICFkZWZhdWx0O1xuJHRhYmxlLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJHRhYmxlLWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLWhvdmVyLWJnOiAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuJHRhYmxlLWFjdGl2ZS1iZzogICAgICAgICAgICAgJHRhYmxlLWhvdmVyLWJnICFkZWZhdWx0O1xuXG4kdGFibGUtYm9yZGVyLXdpZHRoOiAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHRhYmxlLWJvcmRlci1jb2xvcjogICAgICAgICAgJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJHRhYmxlLWhlYWQtYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHRhYmxlLWhlYWQtY29sb3I6ICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuXG4kdGFibGUtZGFyay1jb2xvcjogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1iZzogICAgICAgICAgICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1hY2NlbnQtYmc6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjA1KSAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICR0YWJsZS1kYXJrLWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstaG92ZXItYmc6ICAgICAgICAgcmdiYSgkd2hpdGUsIC4wNzUpICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstYm9yZGVyLWNvbG9yOiAgICAgbGlnaHRlbigkdGFibGUtZGFyay1iZywgNy41JSkgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1jb2xvcjogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cbiR0YWJsZS1zdHJpcGVkLW9yZGVyOiAgICAgICAgIG9kZCAhZGVmYXVsdDtcblxuJHRhYmxlLWNhcHRpb24tY29sb3I6ICAgICAgICAgJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG5cbiR0YWJsZS1iZy1sZXZlbDogICAgICAgICAgICAgIC05ICFkZWZhdWx0O1xuJHRhYmxlLWJvcmRlci1sZXZlbDogICAgICAgICAgLTYgIWRlZmF1bHQ7XG5cblxuLy8gQnV0dG9ucyArIEZvcm1zXG4vL1xuLy8gU2hhcmVkIHZhcmlhYmxlcyB0aGF0IGFyZSByZWFzc2lnbmVkIHRvIGAkaW5wdXQtYCBhbmQgYCRidG4tYCBzcGVjaWZpYyB2YXJpYWJsZXMuXG5cbiRpbnB1dC1idG4tcGFkZGluZy15OiAgICAgICAgIC4zNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteDogICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtZmFtaWx5OiAgICAgICBudWxsICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemU6ICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1saW5lLWhlaWdodDogICAgICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tZm9jdXMtd2lkdGg6ICAgICAgIC4ycmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1jb2xvcjogICAgICAgcmdiYSgkY29tcG9uZW50LWFjdGl2ZS1iZywgLjI1KSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogIDAgMCAwICRpbnB1dC1idG4tZm9jdXMtd2lkdGggJGlucHV0LWJ0bi1mb2N1cy1jb2xvciAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206ICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206ICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTogICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbTogICAgJGxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogICAgICAuNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZzogICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZzogICAgJGxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLWJvcmRlci13aWR0aDogICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG5cbi8vIEJ1dHRvbnNcbi8vXG4vLyBGb3IgZWFjaCBvZiBCb290c3RyYXAncyBidXR0b25zLCBkZWZpbmUgdGV4dCwgYmFja2dyb3VuZCwgYW5kIGJvcmRlciBjb2xvci5cblxuJGJ0bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteDogICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRidG4tZm9udC1mYW1pbHk6ICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRidG4tcGFkZGluZy15LXNtOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXgtc206ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZS1zbTogICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQtc206ICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRidG4tcGFkZGluZy15LWxnOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZS1sZzogICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbiRidG4tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kYnRuLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xuJGJ0bi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgaW5zZXQgMCAxcHggMCByZ2JhKCR3aGl0ZSwgLjE1KSwgMCAxcHggMXB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiRidG4tZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kYnRuLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kYnRuLWRpc2FibGVkLW9wYWNpdHk6ICAgICAgICAuNjUgIWRlZmF1bHQ7XG4kYnRuLWFjdGl2ZS1ib3gtc2hhZG93OiAgICAgICBpbnNldCAwIDNweCA1cHggcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuXG4kYnRuLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRidG4tYmxvY2stc3BhY2luZy15OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4vLyBBbGxvd3MgZm9yIGN1c3RvbWl6aW5nIGJ1dHRvbiByYWRpdXMgaW5kZXBlbmRlbnRseSBmcm9tIGdsb2JhbCBib3JkZXIgcmFkaXVzXG4kYnRuLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgJGJvcmRlci1yYWRpdXMtc20gIWRlZmF1bHQ7XG5cbiRidG4tdHJhbnNpdGlvbjogICAgICAgICAgICAgIGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuXG4vLyBGb3Jtc1xuXG4kbGFiZWwtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRpbnB1dC1mb250LWZhbWlseTogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1iYXNlICFkZWZhdWx0O1xuJGlucHV0LWxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXktc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXgtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemUtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcblxuJGlucHV0LWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRpbnB1dC1kaXNhYmxlZC1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbiRpbnB1dC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgJGdyYXktNDAwICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGlucHV0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgIGluc2V0IDAgMXB4IDFweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1zbSAhZGVmYXVsdDtcblxuJGlucHV0LWZvY3VzLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAyNSUpICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy13aWR0aDogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRpbnB1dC1wbGFpbnRleHQtY29sb3I6ICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodC1ib3JkZXI6ICAgICAgICAgICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggKiAyICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0LWlubmVyOiAgICAgICAgICAgICAgICAgICAgY2FsYygjeyRpbnB1dC1saW5lLWhlaWdodCAqIDFlbX0gKyAjeyRpbnB1dC1wYWRkaW5nLXkgKiAyfSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGY6ICAgICAgICAgICAgICAgY2FsYygjeyRpbnB1dC1saW5lLWhlaWdodCAqIC41ZW19ICsgI3skaW5wdXQtcGFkZGluZy15fSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWlubmVyLXF1YXJ0ZXI6ICAgICAgICAgICAgY2FsYygjeyRpbnB1dC1saW5lLWhlaWdodCAqIC4yNWVtfSArICN7JGlucHV0LXBhZGRpbmcteSAvIDJ9KSAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGMoI3skaW5wdXQtbGluZS1oZWlnaHQgKiAxZW19ICsgI3skaW5wdXQtcGFkZGluZy15ICogMn0gKyAjeyRpbnB1dC1oZWlnaHQtYm9yZGVyfSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICAgICAgY2FsYygjeyRpbnB1dC1saW5lLWhlaWdodC1zbSAqIDFlbX0gKyAjeyRpbnB1dC1idG4tcGFkZGluZy15LXNtICogMn0gKyAjeyRpbnB1dC1oZWlnaHQtYm9yZGVyfSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICAgICAgY2FsYygjeyRpbnB1dC1saW5lLWhlaWdodC1sZyAqIDFlbX0gKyAjeyRpbnB1dC1idG4tcGFkZGluZy15LWxnICogMn0gKyAjeyRpbnB1dC1oZWlnaHQtYm9yZGVyfSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuXG4kZm9ybS10ZXh0LW1hcmdpbi10b3A6ICAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuXG4kZm9ybS1jaGVjay1pbnB1dC1ndXR0ZXI6ICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LW1hcmdpbi15OiAgICAgICAgICAgICAuM3JlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LW1hcmdpbi14OiAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlubGluZS1tYXJnaW4teDogICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbmxpbmUtaW5wdXQtbWFyZ2luLXg6ICAgICAgLjMxMjVyZW0gIWRlZmF1bHQ7XG5cbiRmb3JtLWdyaWQtZ3V0dGVyLXdpZHRoOiAgICAgICAgICAgICAgICAxMHB4ICFkZWZhdWx0O1xuJGZvcm0tZ3JvdXAtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1ncm91cC1hZGRvbi1jb2xvcjogICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYmc6ICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiRjdXN0b20tZm9ybXMtdHJhbnNpdGlvbjogICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1ndXR0ZXI6ICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1zcGFjZXIteDogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemU6ICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmc6ICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmctc2l6ZTogICAgICA1MCUgNTAlICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3gtc2hhZG93OiAgICRpbnB1dC1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItY29sb3I6ICRncmF5LTUwMCAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoOiAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWRpc2FibGVkLWJnOiAgICAgICAgICAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtbGFiZWwtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcjogICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtZGlzYWJsZWQtYmc6ICByZ2JhKHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSwgLjUpICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJveC1zaGFkb3c6ICAgbm9uZSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1ib3JkZXItY29sb3I6ICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1mb2N1cy1ib3gtc2hhZG93OiAgICAgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJvcmRlci1jb2xvcjogICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1jb2xvcjogICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDM1JSkgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1ib3gtc2hhZG93OiAgICBub25lICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnJTNlJTNjcGF0aCBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcn0nIGQ9J002LjU2NC43NWwtMy41OSAzLjYxMi0xLjUzOC0xLjU1TDAgNC4yNiAyLjk3NCA3LjI1IDggMi4xOTN6Jy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3I6ICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWluZGV0ZXJtaW5hdGU6ICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0IDQnJTNlJTNjcGF0aCBzdHJva2U9JyN7JGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcn0nIGQ9J00wIDJoNCcvJTNlJTNjL3N2ZyUzZVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1ib3gtc2hhZG93OiAgIG5vbmUgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgICAgNTAlICFkZWZhdWx0O1xuJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM2UlM2NjaXJjbGUgcj0nMycgZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3J9Jy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc3dpdGNoLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSAqIDEuNzUgIWRlZmF1bHQ7XG4kY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUgLyAyICFkZWZhdWx0O1xuJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLXNpemU6ICAgICAgICAgICAgICAgICAgY2FsYygjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZX0gLSAjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoICogNH0pICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXk6ICAgICAgICAgICAkaW5wdXQtcGFkZGluZy15ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14OiAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtZmFtaWx5OiAgICAgICAgICRpbnB1dC1mb250LWZhbWlseSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZTogICAgICAgICAgICRpbnB1dC1mb250LXNpemUgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQ6ICAgICAgICAgICAgICAkaW5wdXQtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmc6ICAgMXJlbSAhZGVmYXVsdDsgLy8gRXh0cmEgcGFkZGluZyB0byBhY2NvdW50IGZvciB0aGUgcHJlc2VuY2Ugb2YgdGhlIGJhY2tncm91bmQtaW1hZ2UgYmFzZWQgaW5kaWNhdG9yXG4kY3VzdG9tLXNlbGVjdC1mb250LXdlaWdodDogICAgICAgICAkaW5wdXQtZm9udC13ZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1saW5lLWhlaWdodDogICAgICAgICAkaW5wdXQtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1jb2xvcjogICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1jb2xvcjogICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1iZzogICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1iZzogICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1iZy1zaXplOiAgICAgICAgICAgICA4cHggMTBweCAhZGVmYXVsdDsgLy8gSW4gcGl4ZWxzIGJlY2F1c2UgaW1hZ2UgZGltZW5zaW9uc1xuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yOiAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yOiAgICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0IDUnJTNlJTNjcGF0aCBmaWxsPScjeyRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcn0nIGQ9J00yIDBMMCAyaDR6bTAgNUwwIDNoNHonLyUzZSUzYy9zdmclM2VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJhY2tncm91bmQ6ICAgICAgICAgICRjdXN0b20tc2VsZWN0LWluZGljYXRvciBuby1yZXBlYXQgcmlnaHQgJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14IGNlbnRlciAvICRjdXN0b20tc2VsZWN0LWJnLXNpemUgIWRlZmF1bHQ7IC8vIFVzZWQgc28gd2UgY2FuIGhhdmUgbXVsdGlwbGUgYmFja2dyb3VuZCBlbGVtZW50cyAoZS5nLiwgYXJyb3cgYW5kIGZlZWRiYWNrIGljb24pXG5cbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcGFkZGluZy1yaWdodDogY2FsYygoMWVtICsgI3syICogJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15fSkgKiAzIC8gNCArICN7JGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICsgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmd9KSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcG9zaXRpb246ICAgICAgY2VudGVyIHJpZ2h0ICgkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggKyAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZykgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXNpemU6ICAgICAgICAgICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LWJvcmRlci13aWR0aDogICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItY29sb3I6ICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1ib3gtc2hhZG93OiAgICAgICAgICBpbnNldCAwIDFweCAycHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3JkZXItY29sb3I6ICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9jdXMtd2lkdGg6ICAgICAgICAgJGlucHV0LWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm94LXNoYWRvdzogICAgMCAwIDAgJGN1c3RvbS1zZWxlY3QtZm9jdXMtd2lkdGggJGlucHV0LWJ0bi1mb2N1cy1jb2xvciAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15LXNtOiAgICAgICAgJGlucHV0LXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1zbTogICAgICAgICRpbnB1dC1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtc206ICAgICAgICAkaW5wdXQtZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LXNtOiAgICAgICAgICAgJGlucHV0LWhlaWdodC1zbSAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15LWxnOiAgICAgICAgJGlucHV0LXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1sZzogICAgICAgICRpbnB1dC1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtbGc6ICAgICAgICAkaW5wdXQtZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LWxnOiAgICAgICAgICAgJGlucHV0LWhlaWdodC1sZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1yYW5nZS10cmFjay13aWR0aDogICAgICAgICAgMTAwJSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2staGVpZ2h0OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1jdXJzb3I6ICAgICAgICAgcG9pbnRlciAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2stYmc6ICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2stYm9yZGVyLXJhZGl1czogIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWJveC1zaGFkb3c6ICAgICBpbnNldCAwIC4yNXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcblxuJGN1c3RvbS1yYW5nZS10aHVtYi13aWR0aDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItaGVpZ2h0OiAgICAgICAgICAgICAgICAgICRjdXN0b20tcmFuZ2UtdGh1bWItd2lkdGggIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWJnOiAgICAgICAgICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYm9yZGVyOiAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgMCAuMXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdzogICAgICAgIDAgMCAwIDFweCAkYm9keS1iZywgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWZvY3VzLWJveC1zaGFkb3ctd2lkdGg6ICAkaW5wdXQtZm9jdXMtd2lkdGggIWRlZmF1bHQ7IC8vIEZvciBmb2N1cyBib3ggc2hhZG93IGlzc3VlIGluIElFL0VkZ2VcbiRjdXN0b20tcmFuZ2UtdGh1bWItYWN0aXZlLWJnOiAgICAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDM1JSkgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWRpc2FibGVkLWJnOiAgICAgICAgICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7XG5cbiRjdXN0b20tZmlsZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICRpbnB1dC1oZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtaGVpZ2h0LWlubmVyOiAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWlubmVyICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWZvY3VzLWJvcmRlci1jb2xvcjogICAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1mb2N1cy1ib3gtc2hhZG93OiAgICAgICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWRpc2FibGVkLWJnOiAgICAgICAgICAgJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWZpbGUtcGFkZGluZy15OiAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy15ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLXBhZGRpbmcteDogICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1saW5lLWhlaWdodDogICAgICAgICAgICRpbnB1dC1saW5lLWhlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1mb250LWZhbWlseTogICAgICAgICAgICRpbnB1dC1mb250LWZhbWlseSAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1mb250LXdlaWdodDogICAgICAgICAgICRpbnB1dC1mb250LXdlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1jb2xvcjogICAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1iZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1ib3JkZXItd2lkdGg6ICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm9yZGVyLWNvbG9yOiAgICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGlucHV0LWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm94LXNoYWRvdzogICAgICAgICAgICAkaW5wdXQtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1idXR0b24tY29sb3I6ICAgICAgICAgICRjdXN0b20tZmlsZS1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1idXR0b24tYmc6ICAgICAgICAgICAgICRpbnB1dC1ncm91cC1hZGRvbi1iZyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS10ZXh0OiAoXG4gIGVuOiBcIkJyb3dzZVwiXG4pICFkZWZhdWx0O1xuXG5cbi8vIEZvcm0gdmFsaWRhdGlvblxuXG4kZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAgICAgICAgICAkZm9ybS10ZXh0LW1hcmdpbi10b3AgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICAgICAgICAgICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3I6ICAgICAgICAgdGhlbWUtY29sb3IoXCJzdWNjZXNzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcjogICAgICAgdGhlbWUtY29sb3IoXCJkYW5nZXJcIikgIWRlZmF1bHQ7XG5cbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3I6ICAgICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZDogICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnJTNlJTNjcGF0aCBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3J9JyBkPSdNMi4zIDYuNzNMLjYgNC41M2MtLjQtMS4wNC40Ni0xLjQgMS4xLS44bDEuMSAxLjQgMy40LTMuOGMuNi0uNjMgMS42LS4yNyAxLjIuN2wtNCA0LjZjLS40My41LS44LjQtMS4xLjF6Jy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3I6ICAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkOiAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfScgdmlld0JveD0nLTIgLTIgNyA3JyUzZSUzY3BhdGggc3Ryb2tlPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nIGQ9J00wIDBsMyAzbTAtM0wwIDMnLyUzZSUzY2NpcmNsZSByPScuNScvJTNlJTNjY2lyY2xlIGN4PSczJyByPScuNScvJTNlJTNjY2lyY2xlIGN5PSczJyByPScuNScvJTNlJTNjY2lyY2xlIGN4PSczJyBjeT0nMycgcj0nLjUnLyUzZSUzYy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcblxuJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcInZhbGlkXCI6IChcbiAgICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IsXG4gICAgICBcImljb25cIjogJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZFxuICAgICksXG4gICAgXCJpbnZhbGlkXCI6IChcbiAgICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcixcbiAgICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWRcbiAgICApLFxuICApLFxuICAkZm9ybS12YWxpZGF0aW9uLXN0YXRlc1xuKTtcblxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuXG4kemluZGV4LWRyb3Bkb3duOiAgICAgICAgICAgICAgICAgICAxMDAwICFkZWZhdWx0O1xuJHppbmRleC1zdGlja3k6ICAgICAgICAgICAgICAgICAgICAgMTAyMCAhZGVmYXVsdDtcbiR6aW5kZXgtZml4ZWQ6ICAgICAgICAgICAgICAgICAgICAgIDEwMzAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsLWJhY2tkcm9wOiAgICAgICAgICAgICAxMDQwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbDogICAgICAgICAgICAgICAgICAgICAgMTA1MCAhZGVmYXVsdDtcbiR6aW5kZXgtcG9wb3ZlcjogICAgICAgICAgICAgICAgICAgIDEwNjAgIWRlZmF1bHQ7XG4kemluZGV4LXRvb2x0aXA6ICAgICAgICAgICAgICAgICAgICAxMDcwICFkZWZhdWx0O1xuXG5cbi8vIE5hdnNcblxuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG5hdi10YWJzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICAkZ3JheS0yMDAgJGdyYXktMjAwICRuYXYtdGFicy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRncmF5LTMwMCAkZ3JheS0zMDAgJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kbmF2LXBpbGxzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRuYXYtcGlsbHMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdi1waWxscy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRuYXYtZGl2aWRlci1jb2xvcjogICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRuYXYtZGl2aWRlci1tYXJnaW4teTogICAgICAgICAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xuXG5cbi8vIE5hdmJhclxuXG4kbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcbiRuYXZiYXItcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZTogICAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuLy8gQ29tcHV0ZSB0aGUgbmF2YmFyLWJyYW5kIHBhZGRpbmcteSBzbyB0aGUgbmF2YmFyLWJyYW5kIHdpbGwgaGF2ZSB0aGUgc2FtZSBoZWlnaHQgYXMgbmF2YmFyLXRleHQgYW5kIG5hdi1saW5rXG4kbmF2LWxpbmstaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAkbGluZS1oZWlnaHQtYmFzZSArICRuYXYtbGluay1wYWRkaW5nLXkgKiAyICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1oZWlnaHQ6ICAgICAgICAgICAgICAgJG5hdmJhci1icmFuZC1mb250LXNpemUgKiAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcbiRuYXZiYXItYnJhbmQtcGFkZGluZy15OiAgICAgICAgICAgICgkbmF2LWxpbmstaGVpZ2h0IC0gJG5hdmJhci1icmFuZC1oZWlnaHQpIC8gMiAhZGVmYXVsdDtcblxuJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteTogICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteDogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLWZvbnQtc2l6ZTogICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci1ib3JkZXItcmFkaXVzOiAgICAgICRidG4tYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJG5hdmJhci1kYXJrLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC41KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1ob3Zlci1jb2xvcjogICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNzUpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvcjogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWRpc2FibGVkLWNvbG9yOiAgICAgICAgcmdiYSgkd2hpdGUsIC4yNSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstdG9nZ2xlci1pY29uLWJnOiAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHZpZXdCb3g9JzAgMCAzMCAzMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzZSUzY3BhdGggc3Ryb2tlPScjeyRuYXZiYXItZGFyay1jb2xvcn0nIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstdG9nZ2xlci1ib3JkZXItY29sb3I6ICByZ2JhKCR3aGl0ZSwgLjEpICFkZWZhdWx0O1xuXG4kbmF2YmFyLWxpZ2h0LWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1ob3Zlci1jb2xvcjogICAgICAgICAgcmdiYSgkYmxhY2ssIC43KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yOiAgICAgICAgIHJnYmEoJGJsYWNrLCAuOSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWRpc2FibGVkLWNvbG9yOiAgICAgICByZ2JhKCRibGFjaywgLjMpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC10b2dnbGVyLWljb24tYmc6ICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB2aWV3Qm94PScwIDAgMzAgMzAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM2UlM2NwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWxpZ2h0LWNvbG9yfScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLyUzZSUzYy9zdmclM2VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtdG9nZ2xlci1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbGlnaHQtYnJhbmQtY29sb3I6ICAgICAgICAgICAgICAgICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1icmFuZC1ob3Zlci1jb2xvcjogICAgICAgICAgJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYnJhbmQtY29sb3I6ICAgICAgICAgICAgICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcblxuXG4vLyBEcm9wZG93bnNcbi8vXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXG5cbiRkcm9wZG93bi1taW4td2lkdGg6ICAgICAgICAgICAgICAgIDEwcmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tc3BhY2VyOiAgICAgICAgICAgICAgICAgICAuMTI1cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYmc6ICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjE1KSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRkcm9wZG93bi1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgIGNhbGMoI3skZHJvcGRvd24tYm9yZGVyLXJhZGl1c30gLSAjeyRkcm9wZG93bi1ib3JkZXItd2lkdGh9KSAhZGVmYXVsdDtcbiRkcm9wZG93bi1kaXZpZGVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1kaXZpZGVyLW1hcmdpbi15OiAgICAgICAgICRuYXYtZGl2aWRlci1tYXJnaW4teSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgIDAgLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgLjE3NSkgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgIGRhcmtlbigkZ3JheS05MDAsIDUlKSAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6ICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6ICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuXG4vLyBQYWdpbmF0aW9uXG5cbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14OiAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy15LXNtOiAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14LXNtOiAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktbGc6ICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1saW5lLWhlaWdodDogICAgICAgICAgICAxLjI1ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAkbGluay1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJnOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci13aWR0aDogICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWZvY3VzLW91dGxpbmU6ICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICRsaW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogICAgJHBhZ2luYXRpb24tYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cblxuLy8gSnVtYm90cm9uXG5cbiRqdW1ib3Ryb24tcGFkZGluZzogICAgICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kanVtYm90cm9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1iZzogICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG5cbi8vIENhcmRzXG5cbiRjYXJkLXNwYWNlci15OiAgICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRjYXJkLXNwYWNlci14OiAgICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XG4kY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICAgICBjYWxjKCN7JGNhcmQtYm9yZGVyLXJhZGl1c30gLSAjeyRjYXJkLWJvcmRlci13aWR0aH0pICFkZWZhdWx0O1xuJGNhcmQtY2FwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wMykgIWRlZmF1bHQ7XG4kY2FyZC1jYXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGNhcmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRjYXJkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuJGNhcmQtaW1nLW92ZXJsYXktcGFkZGluZzogICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcblxuJGNhcmQtZ3JvdXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMiAhZGVmYXVsdDtcbiRjYXJkLWRlY2stbWFyZ2luOiAgICAgICAgICAgICAgICAgICRjYXJkLWdyb3VwLW1hcmdpbiAhZGVmYXVsdDtcblxuJGNhcmQtY29sdW1ucy1jb3VudDogICAgICAgICAgICAgICAgMyAhZGVmYXVsdDtcbiRjYXJkLWNvbHVtbnMtZ2FwOiAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kY2FyZC1jb2x1bW5zLW1hcmdpbjogICAgICAgICAgICAgICAkY2FyZC1zcGFjZXIteSAhZGVmYXVsdDtcblxuXG4vLyBUb29sdGlwc1xuXG4kdG9vbHRpcC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJHRvb2x0aXAtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjAwcHggIWRlZmF1bHQ7XG4kdG9vbHRpcC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kdG9vbHRpcC1iZzogICAgICAgICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiR0b29sdGlwLW9wYWNpdHk6ICAgICAgICAgICAgICAgICAgIC45ICFkZWZhdWx0O1xuJHRvb2x0aXAtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1tYXJnaW46ICAgICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuXG4kdG9vbHRpcC1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAuOHJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC40cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHRvb2x0aXAtYmcgIWRlZmF1bHQ7XG5cbi8vIEZvcm0gdG9vbHRpcHMgbXVzdCBjb21lIGFmdGVyIHJlZ3VsYXIgdG9vbHRpcHNcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy15OiAgICAgJHRvb2x0aXAtcGFkZGluZy15ICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAkdG9vbHRpcC1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLWZvbnQtc2l6ZTogICAgICR0b29sdGlwLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtbGluZS1oZWlnaHQ6ICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLW9wYWNpdHk6ICAgICAgICR0b29sdGlwLW9wYWNpdHkgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLWJvcmRlci1yYWRpdXM6ICR0b29sdGlwLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cblxuLy8gUG9wb3ZlcnNcblxuJHBvcG92ZXItZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwb3BvdmVyLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDI3NnB4ICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRwb3BvdmVyLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgIDAgLjI1cmVtIC41cmVtIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWhlYWRlci1iZzogICAgICAgICAgICAgICAgIGRhcmtlbigkcG9wb3Zlci1iZywgMyUpICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJHBvcG92ZXItYm9keS1wYWRkaW5nLXk6ICAgICAgICAgICAgJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvZHktcGFkZGluZy14OiAgICAgICAgICAgICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXggIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICRwb3BvdmVyLWJnICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjogICAgICAgICBmYWRlLWluKCRwb3BvdmVyLWJvcmRlci1jb2xvciwgLjA1KSAhZGVmYXVsdDtcblxuXG4vLyBUb2FzdHNcblxuJHRvYXN0LW1heC13aWR0aDogICAgICAgICAgICAgICAgICAgMzUwcHggIWRlZmF1bHQ7XG4kdG9hc3QtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAuODc1cmVtICFkZWZhdWx0O1xuJHRvYXN0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiR0b2FzdC1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuODUpICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAuMSkgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAwIC4yNXJlbSAuNzVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcblxuJHRvYXN0LWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHRvYXN0LWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICByZ2JhKDAsIDAsIDAsIC4wNSkgIWRlZmF1bHQ7XG5cblxuLy8gQmFkZ2VzXG5cbiRiYWRnZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgIDc1JSAhZGVmYXVsdDtcbiRiYWRnZS1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjI1ZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAuNGVtICFkZWZhdWx0O1xuJGJhZGdlLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbiRiYWRnZS10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICRidG4tdHJhbnNpdGlvbiAhZGVmYXVsdDtcbiRiYWRnZS1mb2N1cy13aWR0aDogICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG5cbiRiYWRnZS1waWxsLXBhZGRpbmcteDogICAgICAgICAgICAgIC42ZW0gIWRlZmF1bHQ7XG4vLyBVc2UgYSBoaWdoZXIgdGhhbiBub3JtYWwgdmFsdWUgdG8gZW5zdXJlIGNvbXBsZXRlbHkgcm91bmRlZCBlZGdlcyB3aGVuXG4vLyBjdXN0b21pemluZyBwYWRkaW5nIG9yIGZvbnQtc2l6ZSBvbiBsYWJlbHMuXG4kYmFkZ2UtcGlsbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAxMHJlbSAhZGVmYXVsdDtcblxuXG4vLyBNb2RhbHNcblxuLy8gUGFkZGluZyBhcHBsaWVkIHRvIHRoZSBtb2RhbCBib2R5XG4kbW9kYWwtaW5uZXItcGFkZGluZzogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kbW9kYWwtZGlhbG9nLW1hcmdpbjogICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRtb2RhbC1kaWFsb2ctbWFyZ2luLXktc20tdXA6ICAgICAgIDEuNzVyZW0gIWRlZmF1bHQ7XG5cbiRtb2RhbC10aXRsZS1saW5lLWhlaWdodDogICAgICAgICAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuXG4kbW9kYWwtY29udGVudC1jb2xvcjogICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYmc6ICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiAgICAgICAgcmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDogICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHM6ICAgICAgIDAgLjI1cmVtIC41cmVtIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXNtLXVwOiAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC41KSAhZGVmYXVsdDtcblxuJG1vZGFsLWJhY2tkcm9wLWJnOiAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJG1vZGFsLWJhY2tkcm9wLW9wYWNpdHk6ICAgICAgICAgICAgLjUgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6ICAgICAgICAgJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aDogICAgICAgICAkbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDogICAgICAgICAkbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZy15OiAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteDogICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nOiAgICAgICAgICAgICAgJG1vZGFsLWhlYWRlci1wYWRkaW5nLXkgJG1vZGFsLWhlYWRlci1wYWRkaW5nLXggIWRlZmF1bHQ7IC8vIEtlZXAgdGhpcyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblxuJG1vZGFsLXhsOiAgICAgICAgICAgICAgICAgICAgICAgICAgMTE0MHB4ICFkZWZhdWx0O1xuJG1vZGFsLWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgODAwcHggIWRlZmF1bHQ7XG4kbW9kYWwtbWQ6ICAgICAgICAgICAgICAgICAgICAgICAgICA1MDBweCAhZGVmYXVsdDtcbiRtb2RhbC1zbTogICAgICAgICAgICAgICAgICAgICAgICAgIDMwMHB4ICFkZWZhdWx0O1xuXG4kbW9kYWwtZmFkZS10cmFuc2Zvcm06ICAgICAgICAgICAgICB0cmFuc2xhdGUoMCwgLTUwcHgpICFkZWZhdWx0O1xuJG1vZGFsLXNob3ctdHJhbnNmb3JtOiAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiRtb2RhbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAuM3MgZWFzZS1vdXQgIWRlZmF1bHQ7XG5cblxuLy8gQWxlcnRzXG4vL1xuLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXG5cbiRhbGVydC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRhbGVydC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYWxlcnQtbGluay1mb250LXdlaWdodDogICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRhbGVydC1iZy1sZXZlbDogICAgICAgICAgICAgICAgICAgIC0xMCAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItbGV2ZWw6ICAgICAgICAgICAgICAgIC05ICFkZWZhdWx0O1xuJGFsZXJ0LWNvbG9yLWxldmVsOiAgICAgICAgICAgICAgICAgNiAhZGVmYXVsdDtcblxuXG4vLyBQcm9ncmVzcyBiYXJzXG5cbiRwcm9ncmVzcy1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAuNzUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmc6ICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRwcm9ncmVzcy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgIGluc2V0IDAgLjFyZW0gLjFyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItY29sb3I6ICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItYmc6ICAgICAgICAgICAgICAgICAgIHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItYW5pbWF0aW9uLXRpbWluZzogICAgIDFzIGxpbmVhciBpbmZpbml0ZSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItdHJhbnNpdGlvbjogICAgICAgICAgIHdpZHRoIC42cyBlYXNlICFkZWZhdWx0O1xuXG5cbi8vIExpc3QgZ3JvdXBcblxuJGxpc3QtZ3JvdXAtY29sb3I6ICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJnOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci1jb2xvcjogICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci13aWR0aDogICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXk6ICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXg6ICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRsaXN0LWdyb3VwLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJGxpc3QtZ3JvdXAtYmcgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvcjogICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1jb2xvcjogICAgICRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvciAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOiAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cblxuLy8gSW1hZ2UgdGh1bWJuYWlsc1xuXG4kdGh1bWJuYWlsLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci1jb2xvcjogICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgMXB4IDJweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG5cblxuLy8gRmlndXJlc1xuXG4kZmlndXJlLWNhcHRpb24tZm9udC1zaXplOiAgICAgICAgICA5MCUgIWRlZmF1bHQ7XG4kZmlndXJlLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cblxuLy8gQnJlYWRjcnVtYnNcblxuJGJyZWFkY3J1bWItcGFkZGluZy15OiAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItcGFkZGluZy14OiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWl0ZW0tcGFkZGluZzogICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tOiAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyOiAgICAgICAgICAgICAgICBxdW90ZShcIi9cIikgIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG5cbi8vIENhcm91c2VsXG5cbiRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC13aWR0aDogICAgICAgICAgICAgMTUlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtb3BhY2l0eTogICAgICAgICAgIC41ICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtaG92ZXItb3BhY2l0eTogICAgIC45ICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtdHJhbnNpdGlvbjogICAgICAgIG9wYWNpdHkgLjE1cyBlYXNlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXdpZHRoOiAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItaGVpZ2h0OiAgICAgICAgICAzcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWhpdC1hcmVhLWhlaWdodDogMTBweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3Itc3BhY2VyOiAgICAgICAgICAzcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci10cmFuc2l0aW9uOiAgICAgIG9wYWNpdHkgLjZzIGVhc2UgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jYXB0aW9uLXdpZHRoOiAgICAgICAgICAgICA3MCUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY29udHJvbC1pY29uLXdpZHRoOiAgICAgICAgMjBweCAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLWJnOiAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfScgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGQ9J001LjI1IDBsLTQgNCA0IDQgMS41LTEuNS0yLjUtMi41IDIuNS0yLjUtMS41LTEuNXonLyUzZSUzYy9zdmclM2VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbi1iZzogICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHZpZXdCb3g9JzAgMCA4IDgnJTNlJTNjcGF0aCBkPSdNMi43NSAwbC0xLjUgMS41IDIuNSAyLjUtMi41IDIuNSAxLjUgMS41IDQtNC00LTR6Jy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC10cmFuc2l0aW9uLWR1cmF0aW9uOiAgICAgICAuNnMgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgdHJhbnNmb3JtICRjYXJvdXNlbC10cmFuc2l0aW9uLWR1cmF0aW9uIGVhc2UtaW4tb3V0ICFkZWZhdWx0OyAvLyBEZWZpbmUgdHJhbnNmb3JtIHRyYW5zaXRpb24gZmlyc3QgaWYgdXNpbmcgbXVsdGlwbGUgdHJhbnNpdGlvbnMgKGUuZy4sIGB0cmFuc2Zvcm0gMnMgZWFzZSwgb3BhY2l0eSAuNXMgZWFzZS1vdXRgKVxuXG5cbi8vIFNwaW5uZXJzXG5cbiRzcGlubmVyLXdpZHRoOiAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kc3Bpbm5lci1oZWlnaHQ6ICAgICAgICAkc3Bpbm5lci13aWR0aCAhZGVmYXVsdDtcbiRzcGlubmVyLWJvcmRlci13aWR0aDogIC4yNWVtICFkZWZhdWx0O1xuXG4kc3Bpbm5lci13aWR0aC1zbTogICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kc3Bpbm5lci1oZWlnaHQtc206ICAgICAgICRzcGlubmVyLXdpZHRoLXNtICFkZWZhdWx0O1xuJHNwaW5uZXItYm9yZGVyLXdpZHRoLXNtOiAuMmVtICFkZWZhdWx0O1xuXG5cbi8vIENsb3NlXG5cbiRjbG9zZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcbiRjbG9zZS1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuJGNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJGNsb3NlLXRleHQtc2hhZG93OiAgICAgICAgICAgICAgICAgMCAxcHggMCAkd2hpdGUgIWRlZmF1bHQ7XG5cblxuLy8gQ29kZVxuXG4kY29kZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICA4Ny41JSAhZGVmYXVsdDtcbiRjb2RlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICRwaW5rICFkZWZhdWx0O1xuXG4ka2JkLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAuMnJlbSAhZGVmYXVsdDtcbiRrYmQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgIC40cmVtICFkZWZhdWx0O1xuJGtiZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgJGNvZGUtZm9udC1zaXplICFkZWZhdWx0O1xuJGtiZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGtiZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuXG4kcHJlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kcHJlLXNjcm9sbGFibGUtbWF4LWhlaWdodDogICAgICAgICAzNDBweCAhZGVmYXVsdDtcblxuXG4vLyBVdGlsaXRpZXNcblxuJGRpc3BsYXlzOiBub25lLCBpbmxpbmUsIGlubGluZS1ibG9jaywgYmxvY2ssIHRhYmxlLCB0YWJsZS1yb3csIHRhYmxlLWNlbGwsIGZsZXgsIGlubGluZS1mbGV4ICFkZWZhdWx0O1xuJG92ZXJmbG93czogYXV0bywgaGlkZGVuICFkZWZhdWx0O1xuJHBvc2l0aW9uczogc3RhdGljLCByZWxhdGl2ZSwgYWJzb2x1dGUsIGZpeGVkLCBzdGlja3kgIWRlZmF1bHQ7XG5cblxuLy8gUHJpbnRpbmdcblxuJHByaW50LXBhZ2Utc2l6ZTogICAgICAgICAgICAgICAgICAgYTMgIWRlZmF1bHQ7XG4kcHJpbnQtYm9keS1taW4td2lkdGg6ICAgICAgICAgICAgICBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBcImxnXCIpICFkZWZhdWx0O1xuIl19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./layout/services/sidebar.service */
    "./src/app/layout/services/sidebar.service.ts");
    /* harmony import */


    var _core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./core/services/storage-helper.service */
    "./src/app/core/services/storage-helper.service.ts");
    /* harmony import */


    var src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/layout/services/application-header.service */
    "./src/app/layout/services/application-header.service.ts");
    /* harmony import */


    var _modules_shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modules/shared/components/modal/ModalStaticClass */
    "./src/app/modules/shared/components/modal/ModalStaticClass.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var angular_user_idle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-user-idle */
    "./node_modules/angular-user-idle/fesm2015/angular-user-idle.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__); //import { Component, OnInit, ViewChild, HostListener } from "@angular/core";
    //import { Router } from '@angular/router';
    //import { SidebarService } from './layout/services/sidebar.service';
    //import { StorageHelper } from './core/services/storage-helper.service';
    //import { ApplicationHeaderService } from 'src/app/layout/services/application-header.service';
    //import { ModalStaticClass } from './modules/shared/components/modal/ModalStaticClass';
    //import { MatDialog } from "@angular/material";
    //import { UserIdleService } from 'angular-user-idle';
    //import { Observable } from 'rxjs';
    //@Component({
    //  selector: 'app-root',
    //  templateUrl: './app.component.html',
    //  styleUrls: ['./app.component.scss']
    //})
    //export class AppComponent implements OnInit {
    //  constructor(private _applicationHeaderService: ApplicationHeaderService, private modalDialog: MatDialog, private _userIdleService: UserIdleService,
    //    private _router: Router) { }
    //  showhideApp: boolean = true;
    //  loadingData: boolean = false;
    //  errorMessage: string = "Your session will expire after 2 mins, please save your data or it will be lost.";
    //  @HostListener('window:beforeunload')
    //  canDeactivate(): Observable<boolean> | boolean {
    //    return true;
    //    // insert logic to check if there are pending changes here;
    //    // returning true will navigate without confirmation
    //    // returning false will show a confirm dialog before navigating away
    //  }
    //  ngOnInit() {
    //    this._applicationHeaderService.changeUserRoleasObservable.subscribe(
    //      response => {
    //        if (response) {
    //          this.showhideApp = false;
    //          this.loadingData = true;
    //          setTimeout(() => {
    //            this.loadingData = false;
    //            this.showhideApp = true;
    //          }, 1000);
    //        }
    //      });
    //    this._userIdleService.startWatching();
    //    this._userIdleService.onTimerStart().subscribe(count => {
    //      if (!(this._router.url == '/logout/true' || this._router.url == '/logout/false') && count != null && count == 1) {
    //        ModalStaticClass.show(this.modalDialog, "", "Warning", this.errorMessage, 0, false, 1, "400px", 2).subscribe(response => {
    //            if (response) {
    //            this._userIdleService.stopWatching();
    //            this._userIdleService.startWatching();
    //          }
    //        });
    //      }
    //    });
    //    this._userIdleService.onTimeout().subscribe(() => {
    //      this.modalDialog.closeAll();
    //      this._router.navigate(['/logout', true]);
    //    });
    //  }
    //}


    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(_applicationHeaderService, modalDialog, _userIdleService, _storageHelper, _sideBarService, cdr, _router) {
        _classCallCheck(this, AppComponent);

        this._applicationHeaderService = _applicationHeaderService;
        this.modalDialog = modalDialog;
        this._userIdleService = _userIdleService;
        this._storageHelper = _storageHelper;
        this._sideBarService = _sideBarService;
        this.cdr = cdr;
        this._router = _router;
        this.showhideApp = true;
        this.loadingData = false;
        this.errorMessage = "Your session will expire after 2 mins, please save your data or it will be lost.";
        this.showSidebar = true;
        this.activeState = "dashboard";
        this.loggedInUserDetails = {};
        this.showLoggedInUserDetails = true;
        this.showAdminToggleButton = false;
      }

      _createClass(AppComponent, [{
        key: "canDeactivate",
        value: function canDeactivate() {
          return true; // insert logic to check if there are pending changes here;
          // returning true will navigate without confirmation
          // returning false will show a confirm dialog before navigating away
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this._applicationHeaderService.castLoggedInUserDetails.subscribe(function (response) {
            _this.loggedInUserDetails = response;
            _this.showLoggedInUserDetails = true;
            _this.loggedInUserDetails = _this._storageHelper.getItem("loggedInUserDetails");

            if (_this.loggedInUserDetails == null) {
              _this.showLoggedInUserDetails = false;
              _this.showAdminToggleButton = false;
              _this.loggedInUserDetails = {};
            }

            if (_this._router.url == "/logout/false" || _this._router.url == "/logout/true") {
              _this.showLoggedInUserDetails = false;
              _this.showAdminToggleButton = false;
              _this.loggedInUserDetails = {};
            }
          }); //this._applicationHeaderService.changeUserRoleasObservable.subscribe(
          //    response => {
          //        if (response) {
          //            this.showhideApp = false;
          //            this.loadingData = true;
          //            setTimeout(() => {
          //                this.loadingData = false;
          //                this.showhideApp = true;
          //                console.log("showhideApp" + response);
          //            }, 1000);
          //        }
          //    });


          this._sideBarService.showSideBarAsObservable.subscribe(function (response) {
            debugger; // this.showSidebar = response;

            setTimeout(function () {
              _this.loadingData = false;
              _this.showSidebar = response; // console.log("showSidebar" + this.showSidebar);
            }, 1000);
          });

          this._sideBarService.activeState.asObservable().subscribe(function (response) {
            _this.activeState = response;
            console.log('activestate' + _this.activeState);

            _this._sideBarService.editSidebarShowValue(true);
          });

          this._userIdleService.startWatching();

          this._userIdleService.onTimerStart().subscribe(function (count) {
            if (!(_this._router.url == '/logout/true' || _this._router.url == '/logout/false') && count != null && count == 1) {
              _modules_shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_6__["ModalStaticClass"].show(_this.modalDialog, "", "Warning", _this.errorMessage, 0, false, 1, "400px", 2).subscribe(function (response) {
                if (response) {
                  _this._userIdleService.stopWatching();

                  _this._userIdleService.startWatching();
                }
              });
            }
          });

          this._userIdleService.onTimeout().subscribe(function () {
            _this.modalDialog.closeAll();

            _this._router.navigate(['/logout', true]);
          });
        }
      }, {
        key: "toggleSidebar",
        value: function toggleSidebar() {
          var value = jquery__WEBPACK_IMPORTED_MODULE_9___default()('#sidebar').css('left');

          if (value === '0px') {//$('.toggler').addClass('collapsed');
            //$('#sidebar').animate({
            //    left: "-350px"
            //}, 300)
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_9___default()('.toggler').removeClass('collapsed');
            jquery__WEBPACK_IMPORTED_MODULE_9___default()('#sidebar').animate({
              left: "0px"
            }, 500);
          }
        }
      }, {
        key: "closeSidebar",
        value: function closeSidebar() {
          jquery__WEBPACK_IMPORTED_MODULE_9___default()('.toggler').addClass('collapsed');
          jquery__WEBPACK_IMPORTED_MODULE_9___default()('#sidebar').animate({
            left: "-300px"
          }, 500);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.cdr.detectChanges(); //this._sideBarService.showSideBarAsObservable.subscribe(
          //    response => {
          //        this.showSidebar = response;
          //        setTimeout(() => {
          //            this.loadingData = false;
          //            this.showSidebar = response;
          //            console.log("showSidebar" + this.showSidebar);
          //        }, 1000);
          //    })
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this._router.navigate(['/logout', false]);
        }
      }, {
        key: "navigateToFigOrBuyerDashboard",
        value: function navigateToFigOrBuyerDashboard() {
          this._router.navigateByUrl("/actions");
        } //ngAfterContentChecked(): void {
        //    this.cdr.detectChanges();
        //}

      }, {
        key: "ngDestory",
        value: function ngDestory() {
          jquery__WEBPACK_IMPORTED_MODULE_9___default()('.toggler').addClass('collapsed');
          jquery__WEBPACK_IMPORTED_MODULE_9___default()('#sidebar').animate({
            left: "-300px"
          }, 300);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationHeaderService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: angular_user_idle__WEBPACK_IMPORTED_MODULE_8__["UserIdleService"]
      }, {
        type: _core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_4__["StorageHelper"]
      }, {
        type: _layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["SidebarService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:beforeunload'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Object)], AppComponent.prototype, "canDeactivate", null);
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationHeaderService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], angular_user_idle__WEBPACK_IMPORTED_MODULE_8__["UserIdleService"], _core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_4__["StorageHelper"], _layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["SidebarService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modules/shared/shared.module */
    "./src/app/modules/shared/shared.module.ts");
    /* harmony import */


    var angular_user_idle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-user-idle */
    "./node_modules/angular-user-idle/fesm2015/angular-user-idle.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _core_components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./core/components/login/login.component */
    "./src/app/core/components/login/login.component.ts");
    /* harmony import */


    var _core_components_logout_logout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./core/components/logout/logout.component */
    "./src/app/core/components/logout/logout.component.ts");
    /* harmony import */


    var _core_components_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./core/components/unauthorized/unauthorized.component */
    "./src/app/core/components/unauthorized/unauthorized.component.ts");
    /* harmony import */


    var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-bootstrap/popover */
    "./node_modules/ngx-bootstrap/popover/fesm2015/ngx-bootstrap-popover.js");
    /* harmony import */


    var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-bootstrap/pagination */
    "./node_modules/ngx-bootstrap/pagination/fesm2015/ngx-bootstrap-pagination.js");
    /* harmony import */


    var _core_services_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./core/services/config */
    "./src/app/core/services/config.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _core_components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _core_components_logout_logout_component__WEBPACK_IMPORTED_MODULE_10__["LogoutComponent"], _core_components_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_11__["UnauthorizedComponent"]],
      imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], angular_user_idle__WEBPACK_IMPORTED_MODULE_6__["UserIdleModule"].forRoot({
        idle: 1080,
        timeout: 120,
        ping: 0
      }), ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_12__["PopoverModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginationModule"].forRoot()],
      providers: [_core_services_config__WEBPACK_IMPORTED_MODULE_14__["ConfigService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/core/components/login/login.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/core/components/login/login.component.ts ***!
    \**********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppCoreComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_authorization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/authorization.service */
    "./src/app/core/services/authorization.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */


    var _services_storage_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/storage-helper.service */
    "./src/app/core/services/storage-helper.service.ts");
    /* harmony import */


    var _layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../layout/services/application-header.service */
    "./src/app/layout/services/application-header.service.ts");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/login.service */
    "./src/app/core/services/login.service.ts");
    /* harmony import */


    var src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/layout/services/sidebar.service */
    "./src/app/layout/services/sidebar.service.ts");
    /* harmony import */


    var _modules_shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../modules/shared/components/modal/ModalStaticClass */
    "./src/app/modules/shared/components/modal/ModalStaticClass.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _services_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../services/config */
    "./src/app/core/services/config.ts"); //import appConfig from '../../../../assets/appConfig.json';


    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(_ConfigService, _authService, _router, _cookieService, modalDialog, storageHelper, _applicationHeaderService, _loginService, _sidebarService) {
        _classCallCheck(this, LoginComponent);

        this._ConfigService = _ConfigService;
        this._authService = _authService;
        this._router = _router;
        this._cookieService = _cookieService;
        this.modalDialog = modalDialog;
        this.storageHelper = storageHelper;
        this._applicationHeaderService = _applicationHeaderService;
        this._loginService = _loginService;
        this._sidebarService = _sidebarService;
        this.loggedInUserDetails = {};
        this.userName = '';
        this.password = '';
        this.loadingData = false;
        this.config = _ConfigService.loadJSON('./assets/config.json');
        this.clientId = this.config.ClientID;
      } //Google Autghentication code commented


      _createClass(LoginComponent, [{
        key: "initGoogleAuth",
        value: function initGoogleAuth() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var pload;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    //  Create a new Promise where the resolve 
                    // function is the callback passed to gapi.load
                    debugger;
                    pload = new Promise(function (resolve) {
                      gapi.load('auth2', resolve);
                    }); // When the first promise resolves, it means we have gapi
                    // loaded and that we can call gapi.init

                    return _context2.abrupt("return", pload.then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        var _this3 = this;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                debugger;
                                _context.next = 3;
                                return gapi.auth2.init({
                                  client_id: this.clientId,
                                  //client_id: '439128424113-psvh4v5dosvnstbm3u816krvejeoojgs.apps.googleusercontent.com',
                                  ux_mode: 'popup' // ux_mode: 'redirect',
                                  // redirect_uri: 'http://localhost:50001/'

                                }).then(function (auth) {
                                  _this3.gapiSetup = true;
                                  _this3.authInstance = auth;
                                });

                              case 3:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    }));

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }, {
        key: "authenticate",
        value: function authenticate() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (this.gapiSetup) {
                      _context4.next = 3;
                      break;
                    }

                    _context4.next = 3;
                    return this.initGoogleAuth();

                  case 3:
                    return _context4.abrupt("return", new Promise(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee3() {
                        var _this5 = this;

                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                _context3.next = 2;
                                return this.authInstance.signIn().then(function (user) {
                                  _this5.googleuser = user;

                                  _this5.googleAuthenticatedUserDetails(_this5.authInstance.currentUser.get().getBasicProfile().getEmail());
                                }, function (error) {
                                  return _this5.googlerror = error;
                                });

                              case 2:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    }));

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "checkIfUserAuthenticated",
        value: function checkIfUserAuthenticated() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (this.gapiSetup) {
                      _context5.next = 3;
                      break;
                    }

                    _context5.next = 3;
                    return this.initGoogleAuth();

                  case 3:
                    return _context5.abrupt("return", this.authInstance.isSignedIn.get());

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "signOut",
        value: function signOut() {
          var auth2 = gapi.auth2.getAuthInstance();
          auth2.signOut().then(function () {
            console.log('User signed out.'); //ModalStaticClass.show(this.modalDialog, "", "Success", "you are successfully Sign Out.Please Login with other Google Account", 0, false, 1, "500px", 1);
            //alert("you are successfully Sign Out.Please Login with other Google Account");

            window.open("https://mail.google.com/mail/u/0/?logout&hl=en", '_blank', 'resizable');
          });
        }
      }, {
        key: "googleAuthenticatedUserDetails",
        value: function googleAuthenticatedUserDetails(googleusername) {
          var _this6 = this;

          this.loadingData = true;
          console.log("googleusername" + googleusername); //if (googleusername == '' || googleusername == undefined) {
          //googleusername = 'gillian.charbeneau@team-rehab.com';
          //googleusername = 'shukraj.khadse@team-rehab.com';
          //googleusername ='abhijeet.karve@team-rehab.com'
          // }

          if (this.storageHelper.getItem('loggedInUserDetails') == null) {
            //this._cookieService.set('userName', this.userName);
            this.cookieValue = this._cookieService.get('userName'); //if (this.cookieValue != "" && this.cookieValue != undefined) {

            this._loginService.getUserDetails(googleusername).subscribe(function (response) {
              _this6.loadingData = false;

              if (response != null) {
                _this6._cookieService.delete("userName");

                _this6.loggedInUserDetails.CommonName = response.FirstName + ' ' + response.LastName;
                _this6.loggedInUserDetails.LoginName = response.UserID;
                _this6.loggedInUserDetails.Roles = response.Role.trim();

                if (_this6.loggedInUserDetails != null && _this6.loggedInUserDetails != undefined && Object.keys(_this6.loggedInUserDetails).length > 0) {
                  _this6.storageHelper.setItem("loggedInUserDetails", _this6.loggedInUserDetails);

                  _this6._applicationHeaderService.editLoggedInUserDetails(_this6.loggedInUserDetails);

                  _this6._router.navigateByUrl('/actions');
                } else {
                  _modules_shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_9__["ModalStaticClass"].show(_this6.modalDialog, "", "Error", "your google account does not have access to application", 0, false, 1, "500px", 1);

                  _this6._router.navigateByUrl('/unauthorized'); //ModalStaticClass.show(this.modalDialog, "", "Confirm", "No Account Exist for this google user, Do you want to sign out from this account?", 2, false, 0, "500px", 3)
                  //    .subscribe(res => {
                  //        if (res.result == 'yes') {
                  //            this.signOut();
                  //            //if (this.gapiSetup) {
                  //            //    const pload = new Promise((resolve) => {
                  //            //        gapi.load('auth2', resolve);
                  //            //        // When the first promise resolves, it means we have gapi
                  //            //        // loaded and that we can call gapi.init
                  //            //        return pload.then(async () => {
                  //            //            await gapi.auth2
                  //            //                .init({ client_id: '480789291030-d1lrj1ir2v3gb28d417tl77ge0bk2o7p.apps.googleusercontent.com' })
                  //            //                .then(auth => {
                  //            //                    this.gapiSetup = true;
                  //            //                    this.authInstance = auth;
                  //            //                    return new Promise(async () => {
                  //            //                        await this.authInstance.signOut().then(
                  //            //                            user => {
                  //            //                                this.authenticate();
                  //            //                            },
                  //            //                            error => this.googlerror = error);
                  //            //                    });
                  //            //                });
                  //            //        });
                  //            //    });
                  //            //}
                  //        }
                  //        else {
                  //            this._router.navigateByUrl('/unauthorized');
                  //        }
                  //    });

                }
              } else {
                _modules_shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_9__["ModalStaticClass"].show(_this6.modalDialog, "", "Error", "your google account does not have access to application", 0, false, 1, "500px", 1);

                _this6._router.navigateByUrl('/unauthorized'); //ModalStaticClass.show(this.modalDialog, "", "Confirm", "No Account Exist for this google user, Do you want to sign out from this account?", 2, false, 0, "500px", 3)
                //    .subscribe(res => {
                //        if (res.result == 'yes') {
                //            this.signOut();
                //            //if (this.gapiSetup) {
                //            //    const pload = new Promise((resolve) => {
                //            //        gapi.load('auth2', resolve);
                //            //        // When the first promise resolves, it means we have gapi
                //            //        // loaded and that we can call gapi.init
                //            //        return pload.then(async () => {
                //            //            await gapi.auth2
                //            //                .init({ client_id: '480789291030-d1lrj1ir2v3gb28d417tl77ge0bk2o7p.apps.googleusercontent.com' })
                //            //                .then(auth => {
                //            //                    this.gapiSetup = true;
                //            //                    this.authInstance = auth;
                //            //                    return new Promise(async () => {
                //            //                        await this.authInstance.signOut().then(
                //            //                            user => {
                //            //                                this.authenticate();
                //            //                            },
                //            //                            error => this.googlerror = error);
                //            //                    });
                //            //                });
                //            //        });
                //            //    });
                //            //}
                //        }
                //        else {
                //            this._router.navigateByUrl('/unauthorized');
                //        }
                //    });

              }
            }, function (err) {
              _this6.loadingData = false;

              _this6._router.navigateByUrl('/unauthorized');
            }); //}
            //else {
            //    //redirect To PING URL
            //    //window.location.href = 'https://fedauthtst.pg.com/idp/startSSO.ping?PartnerSpId=https%3A%2F%2Fsigfadev.pg.com%3A8312%2Flogin&targetResource=';
            //    //window.location.href = 'https://fedauthtst.pg.com/idp/startSSO.ping?PartnerSpId=https%3A%2F%2Fsgraqa.pg.com%3A8212%2Flogin';
            //}

          } else {
            this.loggedInUserDetails = this.storageHelper.getItem('loggedInUserDetails');

            this._applicationHeaderService.editLoggedInUserDetails(this.loggedInUserDetails);

            console.log('here'); //this.ProcessRelayStateData();

            this._router.navigateByUrl('/actions');
          }
        } //user.Qt.Au
        //Google Autghentication code commented

      }, {
        key: "nextButtonClicked",
        value: function nextButtonClicked() {
          var _this7 = this;

          // let encryptedRelayState = this._cookieService.get('relayState');
          // this.relayState = atob(encryptedRelayState);
          if (this.storageHelper.getItem('loggedInUserDetails') == null) {
            this._cookieService.set('userName', this.userName);

            this.cookieValue = this._cookieService.get('userName'); //this.cookieValue = this._cookieService.get('samlData');
            //this.cookieValue = atob(this.cookieValue);

            if (this.cookieValue != "" && this.cookieValue != undefined) {
              // this.loadingData = true;
              //    this.loggedInUserDetails.CommonName=this.userName;
              //    this.loggedInUserDetails.LoginName=this.userName;
              //    this.storageHelper.setItem("loggedInUserDetails", this.loggedInUserDetails);
              //    this._applicationHeaderService.editLoggedInUserDetails(this.loggedInUserDetails);
              //     this._router.navigateByUrl('/dashboard');
              this._loginService.getAuthenticateUserDetails(this.userName, this.password).subscribe(function (response) {
                _this7.loadingData = false;

                if (response != null) {
                  _this7._cookieService.delete("userName");

                  _this7.loggedInUserDetails.CommonName = response.FirstName + ' ' + response.LastName;
                  _this7.loggedInUserDetails.LoginName = _this7.userName;
                  _this7.loggedInUserDetails.Roles = response.Role.trim();

                  if (_this7.loggedInUserDetails != null && _this7.loggedInUserDetails != undefined && Object.keys(_this7.loggedInUserDetails).length > 0) {
                    _this7.storageHelper.setItem("loggedInUserDetails", _this7.loggedInUserDetails);

                    _this7._applicationHeaderService.editLoggedInUserDetails(_this7.loggedInUserDetails); // if (this.loggedInUserDetails.Roles.length > 0) {
                    //     for (var i = 0; i < this.loggedInUserDetails.Roles.length; i++) {
                    //         if (this.loggedInUserDetails.Roles[i].toLowerCase().includes("buyer") || this.loggedInUserDetails.Roles[i].toLowerCase().includes("gso")) {
                    //             this.storageHelper.setItem("selectedRole", "buyer");
                    //             break;
                    //         }
                    //         else if (this.loggedInUserDetails.Roles[i].toLowerCase().includes("fna")) {
                    //             this.storageHelper.setItem("selectedRole", "fna");
                    //             break;
                    //         }
                    //         else if (this.loggedInUserDetails.Roles[i].toLowerCase().includes("admin")) {
                    //             this.storageHelper.setItem("selectedRole", "fddAdmin");
                    //             break;
                    //         }
                    //     }
                    // }
                    //this.ProcessRelayStateData();
                    // this.navigateToFigOrBuyerDashboard();


                    _this7._router.navigateByUrl('/actions');
                  } else {
                    _this7._router.navigateByUrl('/unauthorized');
                  }
                } else {
                  _this7._router.navigateByUrl('/unauthorized');
                }
              }, function (err) {
                _this7.loadingData = false;

                _this7._router.navigateByUrl('/unauthorized');
              });
            } else {//redirect To PING URL
              //window.location.href = 'https://fedauthtst.pg.com/idp/startSSO.ping?PartnerSpId=https%3A%2F%2Fsigfadev.pg.com%3A8312%2Flogin&targetResource=';
              //window.location.href = 'https://fedauthtst.pg.com/idp/startSSO.ping?PartnerSpId=https%3A%2F%2Fsgraqa.pg.com%3A8212%2Flogin';
            }
          } else {
            this.loggedInUserDetails = this.storageHelper.getItem('loggedInUserDetails');

            this._applicationHeaderService.editLoggedInUserDetails(this.loggedInUserDetails); //this.ProcessRelayStateData();


            this._router.navigateByUrl('/actions');
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    debugger;

                    this._sidebarService.editSidebarShowValue(false); // if (await this.checkIfUserAuthenticated()) {


                    _context6.next = 4;
                    return this.checkIfUserAuthenticated();

                  case 4:
                    if (!_context6.sent) {
                      _context6.next = 10;
                      break;
                    }

                    debugger; // this.googleuser = this.authInstance.currentUser.get();

                    console.log("Authentication return result");
                    this.googleAuthenticatedUserDetails(this.authInstance.currentUser.get().getBasicProfile().getEmail());
                    _context6.next = 12;
                    break;

                  case 10:
                    _context6.next = 12;
                    return this.authenticate();

                  case 12:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "navigateToFigOrBuyerDashboard",
        value: function navigateToFigOrBuyerDashboard() {
          this._router.navigateByUrl("/dashboard");
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_config__WEBPACK_IMPORTED_MODULE_11__["ConfigService"]
      }, {
        type: _services_authorization_service__WEBPACK_IMPORTED_MODULE_3__["AuthorizationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]
      }, {
        type: _services_storage_helper_service__WEBPACK_IMPORTED_MODULE_5__["StorageHelper"]
      }, {
        type: _layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationHeaderService"]
      }, {
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"]
      }, {
        type: src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_8__["SidebarService"]
      }];
    };

    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/login/login.component.html")).default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_config__WEBPACK_IMPORTED_MODULE_11__["ConfigService"], _services_authorization_service__WEBPACK_IMPORTED_MODULE_3__["AuthorizationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"], _services_storage_helper_service__WEBPACK_IMPORTED_MODULE_5__["StorageHelper"], _layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationHeaderService"], _services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"], src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_8__["SidebarService"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/core/components/logout/logout.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/core/components/logout/logout.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreComponentsLogoutLogoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*#003daf;*/\n.logout-padding {\n  padding: 54px 0.9% 0 11px;\n}\n.anchor-css:hover {\n  text-decoration: underline !important;\n}\n.logout-text-container {\n  padding-left: 30px;\n  margin-top: 47.3px;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2xvZ291dC9DOlxcRGlyZWN0VHJ1c3RcXENvZGVcXFRlYW1SZWhhYlxcQ2xpZW50QXBwL3NyY1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9sb2dvdXQvQzpcXERpcmVjdFRydXN0XFxDb2RlXFxUZWFtUmVoYWJcXENsaWVudEFwcC9zcmNcXGFwcFxcY29yZVxcY29tcG9uZW50c1xcbG9nb3V0XFxsb2dvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBLFdBQUE7QUNOQTtFQUNJLHlCQUFBO0FDRko7QURLQTtFQUNJLHFDQUFBO0FDRko7QURLQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb2xvcnMgXHJcbiRkaXNhYmxlLWJ0bi1jb2xvcjogI2Q4ZDhkODtcclxuJHRhYmxlLWdyaWQtYm9yZGVyOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5cclxuJHByb3Bvc2Fscy1jb2xvcjogcmdiKDE3NCwgMTk5LCAxMzMpO1xyXG4kZm91clBMQmVuY2htYXJrLWNvbG9yOiByZ2IoMjUwLCAxMzMsIDEwMCk7XHJcbiRuZWdvdGlhdGlvbnMtY29sb3I6IHJnYigxNjQsIDEzOCwgMjEyKTtcclxuJGxhbmVDcmVhdGlvbnMtY29sb3I6IHJnYigzMSwgMTgxLCAxNzIpO1xyXG5cclxuJHByaS1kYXJrLWJsdWU6ICM1ZGJjZDI7XHJcbi8qIzAwM2RhZjsqL1xyXG4kcHJpLW1pZC1ibHVlOiAjMDBhM2UwO1xyXG4kcHJpLWxpZ2h0LWJsdWU6ICM5YWRiZTg7XHJcblxyXG4vLyBjb2xvciBjb2RlcyBmb3IgcHJvamVjdCBsaXN0IHBhZ2VcclxuJHByaS1hcXVhLWJsdWU6ICNjNWVmZmU7XHJcbiRwcmktcHItZ3JlZW55ZWxsb3c6ICM5N2Q3MDA7XHJcbiRwcmktcHItcGluazogcGluaztcclxuJHByaS1wci1saWdodGJsdWU6IGxpZ2h0Ymx1ZTtcclxuXHJcbiRwcmktb3JhbmdlOiAjZmY3MDAwO1xyXG4kcHJpLWdyZWVuOiAjOWJkNDQyO1xyXG4kcHJpLW5lby1waW5rOiAjZWI3M2M0O1xyXG5cclxuJHNlYy1ncmF5OiAjZjJmMmYyO1xyXG5cclxuLy8gYnV0dG9uIGRpc2FibGVkXHJcbiRidXR0b24tZGlzYWJsZWQ6IHJnYmEoMCwgMCwgMCwgMC4yNik7XHJcbiRidXR0b24taG92ZXI6ICMwMzI5NzE7XHJcblxyXG4vLyBvdGhlciBjb2xvciB1c2VkXHJcbiR3aGl0ZTogI2ZmZjtcclxuJGJsYWNrOiAjMDAwO1xyXG4kbGlnaHRncmF5OiBsaWdodGdyYXk7XHJcbiRncmF5OiAjY2NjO1xyXG4kb2Zmd2hpdGU6ICNmMWYxZjE7XHJcbiRtaWRkbGVCbGFjazogIzMzMztcclxuJGh1cnQtY29sb3I6ICNmZjZiNmI7XHJcbiRzZWNvbmRhcnktYnRuLWJhY2tncm91bmQ6ICM5YzljOWI7XHJcbiRtb250c2VycmF0UmVndWxhcjogJ01vbnRzZXJyYXQtUmVndWxhcic7XHJcbiRtb250c2VycmF0U2VtaUJvbGQ6ICdNb250c2VycmF0LVNlbWlCb2xkJztcclxuJG1vbnRzZXJyYXRCb2xkOiAnTW9udHNlcnJhdC1Cb2xkJztcclxuXHJcbiRhbmNob3JUYWdDb2xvcjogIzAwN2FkOTtcclxuJHRhYmxlSGVhZGVyQ29sb3I6ICM1ZGJjZDI7XHJcbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcblxyXG5cclxuLmxvZ291dC1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDU0cHggLjklIDAgMTFweDtcclxufVxyXG5cclxuLmFuY2hvci1jc3M6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvZ291dC10ZXh0LWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0Ny4zcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbiIsIi8qIzAwM2RhZjsqL1xuLmxvZ291dC1wYWRkaW5nIHtcbiAgcGFkZGluZzogNTRweCAwLjklIDAgMTFweDtcbn1cblxuLmFuY2hvci1jc3M6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xufVxuXG4ubG9nb3V0LXRleHQtY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiA0Ny4zcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/core/components/logout/logout.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/components/logout/logout.component.ts ***!
    \************************************************************/

  /*! exports provided: LogoutComponent */

  /***/
  function srcAppCoreComponentsLogoutLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
      return LogoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../layout/services/application-header.service */
    "./src/app/layout/services/application-header.service.ts");
    /* harmony import */


    var _layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../layout/services/sidebar.service */
    "./src/app/layout/services/sidebar.service.ts");

    var LogoutComponent =
    /*#__PURE__*/
    function () {
      function LogoutComponent(_cookieService, _router, _headerService, _sidebarService, _route) {
        _classCallCheck(this, LogoutComponent);

        this._cookieService = _cookieService;
        this._router = _router;
        this._headerService = _headerService;
        this._sidebarService = _sidebarService;
        this._route = _route;
      }

      _createClass(LogoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.autoLogout = this._router.snapshot.paramMap.get('autoLogout');
          sessionStorage.removeItem("loggedInUserDetails");
          sessionStorage.removeItem("basicFilterDetails");
          sessionStorage.removeItem("selectedRole");
          sessionStorage.removeItem("filterMapData");
          sessionStorage.removeItem("contractFlterDropdowns");
          sessionStorage.removeItem("contractFlterDetails");
          sessionStorage.removeItem("advancedFilterDropdowns");
          sessionStorage.removeItem("selectedModule");
          sessionStorage.removeItem("allocationFlterDetails");
          sessionStorage.removeItem("dashboardData");
          sessionStorage.removeItem("fddSummaryData");
          sessionStorage.removeItem("fddFilterParams");
          sessionStorage.removeItem("fddFilterDropdowns");
          sessionStorage.removeItem("nssRnO");
          sessionStorage.removeItem("totalPPVForecast");
          sessionStorage.removeItem("totalImpact");
          sessionStorage.removeItem("commodities");
          sessionStorage.removeItem("nssCommitted");
          sessionStorage.removeItem("supportTeam");
          sessionStorage.removeItem("currentState");

          this._headerService.editLoggedInUserDetails(null);

          this._sidebarService.editSidebarShowValue(false);

          this._cookieService.deleteAll();

          this.signOut();
        }
      }, {
        key: "navigateToLogin",
        value: function navigateToLogin() {
          this._route.navigateByUrl("login");

          this._sidebarService.editSidebarShowValue(false);
        }
      }, {
        key: "signOut",
        value: function signOut() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var auth2;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    debugger;

                    if (this.gapiSetup) {
                      _context7.next = 4;
                      break;
                    }

                    _context7.next = 4;
                    return this.initGoogleAuth();

                  case 4:
                    auth2 = gapi.auth2.getAuthInstance();
                    auth2.signOut().then(function () {});
                    auth2.disconnect(); //var auth2 = gapi.auth2.getAuthInstance();
                    //auth2.disconnect();
                    //auth2.signOut().then(function () {
                    //    console.log('User signed out.');
                    //    auth2.disconnect();
                    //    auth2 = null;
                    //});
                    //return new Promise(async () => {
                    //    await this.authInstance.signOut().then(
                    //        user => {
                    //            console.log('User signed out.');
                    //        },
                    //        error => this.googlerror = error);
                    //});

                  case 7:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "initGoogleAuth",
        value: function initGoogleAuth() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var _this8 = this;

            var pload;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    //  Create a new Promise where the resolve 
                    // function is the callback passed to gapi.load
                    pload = new Promise(function (resolve) {
                      gapi.load('auth2', resolve);
                    }); // When the first promise resolves, it means we have gapi
                    // loaded and that we can call gapi.init

                    return _context9.abrupt("return", pload.then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee8() {
                        var _this9 = this;

                        return regeneratorRuntime.wrap(function _callee8$(_context8) {
                          while (1) {
                            switch (_context8.prev = _context8.next) {
                              case 0:
                                _context8.next = 2;
                                return gapi.auth2.init({
                                  client_id: '480789291030-d1lrj1ir2v3gb28d417tl77ge0bk2o7p.apps.googleusercontent.com',
                                  ux_mode: 'redirect'
                                }).then(function (auth) {
                                  _this9.gapiSetup = true;
                                  _this9.authInstance = auth;

                                  _this9.authInstance.disconnect();
                                });

                              case 2:
                              case "end":
                                return _context8.stop();
                            }
                          }
                        }, _callee8);
                      }));
                    }));

                  case 2:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9);
          }));
        }
      }]);

      return LogoutComponent;
    }();

    LogoutComponent.ctorParameters = function () {
      return [{
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationHeaderService"]
      }, {
        type: _layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["SidebarService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LogoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-logout',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./logout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/logout/logout.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [__importDefault(__webpack_require__(
      /*! ./logout.component.scss */
      "./src/app/core/components/logout/logout.component.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationHeaderService"], _layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["SidebarService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], LogoutComponent);
    /***/
  },

  /***/
  "./src/app/core/components/unauthorized/unauthorized.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/core/components/unauthorized/unauthorized.component.ts ***!
    \************************************************************************/

  /*! exports provided: UnauthorizedComponent */

  /***/
  function srcAppCoreComponentsUnauthorizedUnauthorizedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnauthorizedComponent", function () {
      return UnauthorizedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UnauthorizedComponent =
    /*#__PURE__*/
    function () {
      function UnauthorizedComponent() {
        _classCallCheck(this, UnauthorizedComponent);
      }

      _createClass(UnauthorizedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UnauthorizedComponent;
    }();

    UnauthorizedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-unauthorized',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./unauthorized.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/unauthorized/unauthorized.component.html")).default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], UnauthorizedComponent);
    /***/
  },

  /***/
  "./src/app/core/services/api.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/core/services/api.service.ts ***!
    \**********************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppCoreServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./config */
    "./src/app/core/services/config.ts"); //import appConfig from '../../../assets/appConfig.json';


    var ApiService =
    /*#__PURE__*/
    function () {
      function ApiService(_ConfigService, http) {
        _classCallCheck(this, ApiService);

        this._ConfigService = _ConfigService;
        this.http = http; //this.baseApiURI = 'http://localhost:60408/';
        // this.baseApiURI = appConfig.APIURL;

        this.config = _ConfigService.loadJSON('./assets/config.json');
        this.baseApiURI = this.config.APIURL; // this.baseApiURI = 'http://137.185.233.4:6383/api/';
      }

      _createClass(ApiService, [{
        key: "getData",
        value: function getData(url) {
          var _this10 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this10.http.get(_this10.baseApiURI + url).subscribe(function (resp) {
              _this10.resolveApiData(resp);

              if (resp != null) {
                observer.next(resp);
              } else {
                observer.next(undefined);
                observer.complete();
              }
            }, function (error) {
              observer.next(undefined);
              console.log(error);
            });
          });
        }
      }, {
        key: "getBlob",
        value: function getBlob(url, parameter) {
          return this.http.post(this.baseApiURI + url, parameter, {
            observe: 'response',
            responseType: 'blob'
          });
        }
      }, {
        key: "RunPriceResponse",
        value: function RunPriceResponse(url, version) {
          return this.http.get(this.baseApiURI + url, {
            responseType: 'blob',
            observe: 'response',
            params: {
              version: version
            }
          });
        }
      }, {
        key: "getBlobWithParams",
        value: function getBlobWithParams(url, parameter, httpParams) {
          return this.http.post(this.baseApiURI + url, parameter, {
            observe: 'response',
            responseType: 'blob',
            params: httpParams
          });
        }
      }, {
        key: "getFile",
        value: function getFile(url) {
          return this.http.post(this.baseApiURI + url, {
            observe: 'response',
            responseType: 'blob'
          });
        }
      }, {
        key: "getBlobwithParameter",
        value: function getBlobwithParameter(url, parameter) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
          params = params.append('Role', parameter);
          return this.http.post(this.baseApiURI + url, parameter, {
            observe: 'response',
            responseType: 'blob',
            params: params
          });
        }
      }, {
        key: "getDataWithParams",
        value: function getDataWithParams(url, params) {
          var _this11 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this11.http.get(_this11.baseApiURI + url, {
              params: params
            }).subscribe(function (resp) {
              _this11.resolveApiData(resp);

              if (resp != null) {
                observer.next(resp);
              } else {
                observer.next(undefined);
                observer.complete();
              }
            }, function (error) {
              observer.next(undefined);
              console.log(error);
            });
          });
        }
      }, {
        key: "postData",
        value: function postData(url, model) {
          var _this12 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this12.http.post(_this12.baseApiURI + url, model).subscribe(function (resp) {
              _this12.resolveApiData(resp);

              if (resp != null) {
                observer.next(resp);
              } else {
                observer.next(undefined);
                observer.complete();
              }
            }, function (error) {
              observer.next(undefined);
              console.log(error);
            });
          });
        }
      }, {
        key: "postFile",
        value: function postFile(url, model, param) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
          params = params.append('FiscalYear', param.FiscalYear);
          params = params.append('ForecastCycle', param.ForecastCycle);
          params = params.append('SpendPoolHighID', param.SpendPoolHighID);
          params = params.append('SpendPoolHighValue', param.SpendPoolHighValue);
          params = params.append('PurchasingGroupID', param.PurchasingGroupID);
          params = params.append('ProjectType', param.ProjectType);
          params = params.append('userrole', param.selectedRole);
          params = params.append('TNumber', param.TNumber);
          console.log(params);
          return this.http.post(this.baseApiURI + url, model, {
            observe: 'response',
            responseType: 'blob',
            params: params
          });
        }
      }, {
        key: "putData",
        value: function putData(url, model) {
          var _this13 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this13.http.put(_this13.baseApiURI + url, model).subscribe(function (resp) {
              _this13.resolveApiData(resp);

              if (resp.Result != null) {
                observer.next(resp.Result);
              } else {
                observer.next(undefined);
                observer.complete();
              }
            }, function (error) {
              console.log(error);
            });
          });
        }
      }, {
        key: "deleteData",
        value: function deleteData(url) {
          var _this14 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this14.http.delete(_this14.baseApiURI + url).subscribe(function (resp) {
              _this14.resolveApiData(resp);

              if (resp.Result != null) {
                observer.next(resp.Result);
              } else {
                observer.next(undefined);
                observer.complete();
              }
            }, function (error) {
              console.log(error);
            });
          });
        }
      }, {
        key: "postPricesourceFile",
        value: function postPricesourceFile(url, model, param) {
          return this.http.post(this.baseApiURI + url, model, {
            observe: 'response',
            responseType: 'blob',
            params: param
          });
        }
      }, {
        key: "postMasterDataFile",
        value: function postMasterDataFile(url, model, param) {
          return this.http.post(this.baseApiURI + url, model, {
            observe: 'response',
            responseType: 'blob',
            params: param
          });
        }
      }, {
        key: "resolveApiData",
        value: function resolveApiData(response) {}
      }, {
        key: "downloadTemplate",
        value: function downloadTemplate(templateKey, url) {
          return this.http.get(this.baseApiURI + url, {
            responseType: 'blob',
            observe: 'response',
            params: {
              templateKey: templateKey
            }
          });
        }
      }, {
        key: "postFIGVolumeFile",
        value: function postFIGVolumeFile(url, model, param) {
          return this.http.post(this.baseApiURI + url, model, {
            observe: 'response',
            responseType: 'blob',
            params: param
          });
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _config__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_config__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ApiService);
    /***/
  },

  /***/
  "./src/app/core/services/auth-guard.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/core/services/auth-guard.service.ts ***!
    \*****************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppCoreServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_storage_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/storage-helper.service */
    "./src/app/core/services/storage-helper.service.ts");

    var AuthGuardService =
    /*#__PURE__*/
    function () {
      function AuthGuardService(_router, storageHelper) {
        _classCallCheck(this, AuthGuardService);

        this._router = _router;
        this.storageHelper = storageHelper;
        this.loggedInUserDetails = {};
      }

      _createClass(AuthGuardService, [{
        key: "canLoad",
        value: function canLoad(route, segements) {
          this.loggedInUserDetails = this.storageHelper.getItem('loggedInUserDetails');

          if (this.loggedInUserDetails != null) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
          } else {
            this._router.navigateByUrl('/login');

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
          }
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_storage_helper_service__WEBPACK_IMPORTED_MODULE_4__["StorageHelper"]
      }];
    };

    AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_storage_helper_service__WEBPACK_IMPORTED_MODULE_4__["StorageHelper"]])], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/core/services/auth-interceptor.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/core/services/auth-interceptor.service.ts ***!
    \***********************************************************/

  /*! exports provided: AuthInterceptorService */

  /***/
  function srcAppCoreServicesAuthInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function () {
      return AuthInterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./authorization.service */
    "./src/app/core/services/authorization.service.ts");

    var AuthInterceptorService =
    /*#__PURE__*/
    function () {
      function AuthInterceptorService(_auth) {
        _classCallCheck(this, AuthInterceptorService);

        this._auth = _auth;
      }

      _createClass(AuthInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          // Get the auth token from the service.
          var authToken = this._auth.getAuthorizationToken(); // Clone the request and replace the original headers with
          // cloned headers, updated with the authorization.


          var authReq = req.clone({
            headers: req.headers.set('Authorization', authToken)
          }); // send cloned request with header to the next handler.

          return next.handle(authReq);
        }
      }]);

      return AuthInterceptorService;
    }();

    AuthInterceptorService.ctorParameters = function () {
      return [{
        type: _authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"]
      }];
    };

    AuthInterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"]])], AuthInterceptorService);
    /***/
  },

  /***/
  "./src/app/core/services/authorization.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/core/services/authorization.service.ts ***!
    \********************************************************/

  /*! exports provided: AuthorizationService */

  /***/
  function srcAppCoreServicesAuthorizationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthorizationService", function () {
      return AuthorizationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_storage_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/storage-helper.service */
    "./src/app/core/services/storage-helper.service.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/core/services/api.service.ts");

    var AuthorizationService =
    /*#__PURE__*/
    function () {
      function AuthorizationService(_cookieService, _httpClient, _router, storageHelper, _apiService) {
        _classCallCheck(this, AuthorizationService);

        this._cookieService = _cookieService;
        this._httpClient = _httpClient;
        this._router = _router;
        this.storageHelper = storageHelper;
        this._apiService = _apiService;
        this.cookieValue = 'UNKNOWN';
        this.loggedInUserDetails = {};
      }

      _createClass(AuthorizationService, [{
        key: "getAuthorizationToken",
        value: function getAuthorizationToken() {
          this.userDetails = this.storageHelper.getItem('loggedInUserDetails');

          if (this.userDetails == null) {
            //return 'basic ' + btoa(atob(this._cookieService.get('samlData')) + ':SGRA');
            return 'basic ' + btoa(this._cookieService.get('userName') + ':ATLAS');
          } else {
            return 'basic ' + btoa(this.userDetails.LoginName + ':ATLAS');
          }
        }
      }]);

      return AuthorizationService;
    }();

    AuthorizationService.ctorParameters = function () {
      return [{
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_storage_helper_service__WEBPACK_IMPORTED_MODULE_5__["StorageHelper"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
      }];
    };

    AuthorizationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_storage_helper_service__WEBPACK_IMPORTED_MODULE_5__["StorageHelper"], _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]])], AuthorizationService);
    /***/
  },

  /***/
  "./src/app/core/services/config.ts":
  /*!*****************************************!*\
    !*** ./src/app/core/services/config.ts ***!
    \*****************************************/

  /*! exports provided: ConfigService */

  /***/
  function srcAppCoreServicesConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
      return ConfigService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConfigService =
    /*#__PURE__*/
    function () {
      function ConfigService(http) {
        _classCallCheck(this, ConfigService);

        this.http = http;
      }

      _createClass(ConfigService, [{
        key: "loadJSON",
        value: function loadJSON(filePath) {
          var json = this.loadTextFileAjaxSync(filePath, "application/json");
          return JSON.parse(json);
        }
      }, {
        key: "loadTextFileAjaxSync",
        value: function loadTextFileAjaxSync(filePath, mimeType) {
          var xmlhttp = new XMLHttpRequest();
          xmlhttp.open("GET", filePath, false);

          if (mimeType != null) {
            if (xmlhttp.overrideMimeType) {
              xmlhttp.overrideMimeType(mimeType);
            }
          }

          xmlhttp.send();

          if (xmlhttp.status == 200) {
            return xmlhttp.responseText;
          } else {
            return null;
          }
        }
      }]);

      return ConfigService;
    }();

    ConfigService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    ConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], ConfigService);
    /***/
  },

  /***/
  "./src/app/core/services/login.service.ts":
  /*!************************************************!*\
    !*** ./src/app/core/services/login.service.ts ***!
    \************************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppCoreServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/core/services/api.service.ts");

    var LoginService =
    /*#__PURE__*/
    function () {
      function LoginService(_apiService) {
        _classCallCheck(this, LoginService);

        this._apiService = _apiService;
      }

      _createClass(LoginService, [{
        key: "getLoggedInUserDetails",
        value: function getLoggedInUserDetails(userName) {
          return this._apiService.getDataWithParams('User/User', {
            userName: userName
          });
        }
      }, {
        key: "getAuthenticateUserDetails",
        value: function getAuthenticateUserDetails(userName, password) {
          return this._apiService.getDataWithParams('DirectTrustPatient/Authenticate', {
            userName: userName,
            password: password
          });
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails(userName) {
          return this._apiService.getDataWithParams('DirectTrustPatient/GetUserDetails', {
            userName: userName
          });
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])], LoginService);
    /***/
  },

  /***/
  "./src/app/core/services/pending-changes.guard.ts":
  /*!********************************************************!*\
    !*** ./src/app/core/services/pending-changes.guard.ts ***!
    \********************************************************/

  /*! exports provided: PendingChangesGuard */

  /***/
  function srcAppCoreServicesPendingChangesGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PendingChangesGuard", function () {
      return PendingChangesGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _modules_shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../modules/shared/components/modal/ModalStaticClass */
    "./src/app/modules/shared/components/modal/ModalStaticClass.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var PendingChangesGuard =
    /*#__PURE__*/
    function () {
      function PendingChangesGuard(modalDialog) {
        _classCallCheck(this, PendingChangesGuard);

        this.modalDialog = modalDialog;
      }

      _createClass(PendingChangesGuard, [{
        key: "canDeactivate",
        value: function canDeactivate(component) {
          // if there are no pending changes, just allow deactivation; else confirm first
          return component.canDeactivate() ? true : // NOTE: this warning message will only be shown when navigating elsewhere within your angular app;
          // when navigating away from your angular app, the browser will show a generic warning message
          _modules_shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_2__["ModalStaticClass"].show(this.modalDialog, "", "Warning", "Information you have might have entered on this page has not been saved and will be lost. Please save before navigating away from this page.", 1, false, 1, "400px").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            return result;
          }));
        }
      }]);

      return PendingChangesGuard;
    }();

    PendingChangesGuard.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }];
    };

    PendingChangesGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])], PendingChangesGuard);
    /***/
  },

  /***/
  "./src/app/core/services/storage-helper.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/core/services/storage-helper.service.ts ***!
    \*********************************************************/

  /*! exports provided: StorageHelper */

  /***/
  function srcAppCoreServicesStorageHelperServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageHelper", function () {
      return StorageHelper;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! crypto-js */
    "./node_modules/crypto-js/index.js");
    /* harmony import */


    var crypto_js__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); //import { plainText } from '@amcharts/amcharts4/.internal/core/utils/Utils';


    var StorageHelper =
    /*#__PURE__*/
    function () {
      function StorageHelper() {
        _classCallCheck(this, StorageHelper);
      }

      _createClass(StorageHelper, [{
        key: "setItem",
        value: function setItem(key, value) {
          var ciphertext = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].encrypt(JSON.stringify(value), key);
          sessionStorage.setItem(key, ciphertext);
        }
      }, {
        key: "getItem",
        value: function getItem(key) {
          var ciphertext = sessionStorage.getItem(key);

          if (ciphertext != null) {
            var bytes = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].decrypt(ciphertext.toString(), key);
            var plaintext = bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8);

            if (plaintext == null || plaintext == "") {
              return plaintext;
            }

            return JSON.parse(plaintext);
          } else return null;
        }
      }, {
        key: "removeItem",
        value: function removeItem(key) {
          sessionStorage.removeItem(key);
        }
      }]);

      return StorageHelper;
    }();

    StorageHelper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], StorageHelper);
    /***/
  },

  /***/
  "./src/app/layout/components/footer/footer.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/layout/components/footer/footer.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutComponentsFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*#003daf;*/\n:host {\n  position: fixed;\n  z-index: 0;\n  bottom: 0;\n  width: 100%;\n}\n.vc-footer {\n  background-color: transparent;\n  width: 100%;\n  max-height: 40px;\n  padding: 5px 1% 5px 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.vc-footer .leftFContent {\n  text-align: center;\n  width: 100%;\n  position: fixed;\n  bottom: 3px;\n  left: 0;\n}\n.vc-footer .rightFContent {\n  width: 100%;\n  text-align: right;\n}\n.vc-footer p, .vc-footer a {\n  margin: 0;\n  padding: 0;\n  font-size: 11px;\n}\n.vc-foot-left {\n  padding: 2px 0;\n}\n.vc-foot-right {\n  color: #6f6e6e;\n  text-align: center;\n  margin: 0 28%;\n}\n.txt-bold {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvZm9vdGVyL0M6XFxEaXJlY3RUcnVzdFxcQ29kZVxcVGVhbVJlaGFiXFxDbGllbnRBcHAvc3JjXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvZm9vdGVyL0M6XFxEaXJlY3RUcnVzdFxcQ29kZVxcVGVhbVJlaGFiXFxDbGllbnRBcHAvc3JjXFxhcHBcXGxheW91dFxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUEsV0FBQTtBQ1JBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0FGO0FER0E7RUFDRSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0FGO0FERUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7QUNBSjtBREdFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDREo7QURJRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0ZKO0FETUE7RUFDRSxjQUFBO0FDSEY7QURNQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNIRjtBRE1BO0VBQ0UsZ0JBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb2xvcnMgXHJcbiRkaXNhYmxlLWJ0bi1jb2xvcjogI2Q4ZDhkODtcclxuJHRhYmxlLWdyaWQtYm9yZGVyOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5cclxuJHByb3Bvc2Fscy1jb2xvcjogcmdiKDE3NCwgMTk5LCAxMzMpO1xyXG4kZm91clBMQmVuY2htYXJrLWNvbG9yOiByZ2IoMjUwLCAxMzMsIDEwMCk7XHJcbiRuZWdvdGlhdGlvbnMtY29sb3I6IHJnYigxNjQsIDEzOCwgMjEyKTtcclxuJGxhbmVDcmVhdGlvbnMtY29sb3I6IHJnYigzMSwgMTgxLCAxNzIpO1xyXG5cclxuJHByaS1kYXJrLWJsdWU6ICM1ZGJjZDI7XHJcbi8qIzAwM2RhZjsqL1xyXG4kcHJpLW1pZC1ibHVlOiAjMDBhM2UwO1xyXG4kcHJpLWxpZ2h0LWJsdWU6ICM5YWRiZTg7XHJcblxyXG4vLyBjb2xvciBjb2RlcyBmb3IgcHJvamVjdCBsaXN0IHBhZ2VcclxuJHByaS1hcXVhLWJsdWU6ICNjNWVmZmU7XHJcbiRwcmktcHItZ3JlZW55ZWxsb3c6ICM5N2Q3MDA7XHJcbiRwcmktcHItcGluazogcGluaztcclxuJHByaS1wci1saWdodGJsdWU6IGxpZ2h0Ymx1ZTtcclxuXHJcbiRwcmktb3JhbmdlOiAjZmY3MDAwO1xyXG4kcHJpLWdyZWVuOiAjOWJkNDQyO1xyXG4kcHJpLW5lby1waW5rOiAjZWI3M2M0O1xyXG5cclxuJHNlYy1ncmF5OiAjZjJmMmYyO1xyXG5cclxuLy8gYnV0dG9uIGRpc2FibGVkXHJcbiRidXR0b24tZGlzYWJsZWQ6IHJnYmEoMCwgMCwgMCwgMC4yNik7XHJcbiRidXR0b24taG92ZXI6ICMwMzI5NzE7XHJcblxyXG4vLyBvdGhlciBjb2xvciB1c2VkXHJcbiR3aGl0ZTogI2ZmZjtcclxuJGJsYWNrOiAjMDAwO1xyXG4kbGlnaHRncmF5OiBsaWdodGdyYXk7XHJcbiRncmF5OiAjY2NjO1xyXG4kb2Zmd2hpdGU6ICNmMWYxZjE7XHJcbiRtaWRkbGVCbGFjazogIzMzMztcclxuJGh1cnQtY29sb3I6ICNmZjZiNmI7XHJcbiRzZWNvbmRhcnktYnRuLWJhY2tncm91bmQ6ICM5YzljOWI7XHJcbiRtb250c2VycmF0UmVndWxhcjogJ01vbnRzZXJyYXQtUmVndWxhcic7XHJcbiRtb250c2VycmF0U2VtaUJvbGQ6ICdNb250c2VycmF0LVNlbWlCb2xkJztcclxuJG1vbnRzZXJyYXRCb2xkOiAnTW9udHNlcnJhdC1Cb2xkJztcclxuXHJcbiRhbmNob3JUYWdDb2xvcjogIzAwN2FkOTtcclxuJHRhYmxlSGVhZGVyQ29sb3I6ICM1ZGJjZDI7XHJcbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbjpob3N0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi52Yy1mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDQwcHg7XHJcbiAgcGFkZGluZzogNXB4IDElIDVweCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAubGVmdEZDb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAzcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgLnJpZ2h0RkNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcblxyXG4gIHAsIGEge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICB9XHJcbn1cclxuXHJcbi52Yy1mb290LWxlZnQge1xyXG4gIHBhZGRpbmc6IDJweCAwO1xyXG59XHJcblxyXG4udmMtZm9vdC1yaWdodCB7XHJcbiAgY29sb3I6ICM2ZjZlNmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMCAyOCU7XHJcbn1cclxuXHJcbi50eHQtYm9sZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4iLCIvKiMwMDNkYWY7Ki9cbjpob3N0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udmMtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiA1cHggMSUgNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi52Yy1mb290ZXIgLmxlZnRGQ29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAzcHg7XG4gIGxlZnQ6IDA7XG59XG4udmMtZm9vdGVyIC5yaWdodEZDb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnZjLWZvb3RlciBwLCAudmMtZm9vdGVyIGEge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLnZjLWZvb3QtbGVmdCB7XG4gIHBhZGRpbmc6IDJweCAwO1xufVxuXG4udmMtZm9vdC1yaWdodCB7XG4gIGNvbG9yOiAjNmY2ZTZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAyOCU7XG59XG5cbi50eHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/layout/components/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/layout/components/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppLayoutComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.currentYear = "";
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currentYear = new Date().getFullYear().toString();
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/footer/footer.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/layout/components/footer/footer.component.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FooterComponent);
    /***/
  },

  /***/
  "./src/app/layout/components/header/header.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/layout/components/header/header.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*#003daf;*/\n:host {\n  position: fixed;\n  width: 100vw;\n  z-index: 11;\n}\n.header .app-name {\n  font-family: \"Montserrat-Regular\";\n  font-size: 18px;\n  color: #fff;\n  /*margin: 0.75em 0.3em;*/\n  /*padding-left: 42px;*/\n}\n.header .logo-img {\n  height: 33px;\n  width: 40px;\n  padding-bottom: 0;\n  margin: 0 5px 1px 6px;\n}\n.header .user-img {\n  height: 25px;\n  padding-bottom: 13px;\n}\n.header .environment-label {\n  display: inline-block;\n  background-color: orange;\n  color: #003daf;\n  width: 50px;\n  text-align: center;\n  height: 30px;\n  font-size: 14px;\n}\n#headerSubText {\n  color: #00a3e0;\n}\n.left-section {\n  margin-left: 50px;\n}\n.mat-toolbar-single-row {\n  background: #5dbcd2;\n  height: 44px;\n  color: #fff;\n  -ms-justify-content: space-between;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 0.2rem 1.7em 0.15em 0.18em;\n}\n::ng-deep .mat-menu-content {\n  padding: 8px;\n}\n#userToggleDiv {\n  font-size: 12px;\n  margin-top: 5px;\n}\n.toggleButtonText {\n  margin-top: 10px;\n}\n.icon-logout {\n  color: #fff;\n  font-size: 20px;\n}\n.user-div button {\n  outline: none;\n  font-family: \"Montserrat-Regular\";\n}\n.header-radio-button {\n  padding: 0 10px 0 0;\n  display: block;\n}\n.user-button {\n  box-shadow: 2.5px 4.33px 5px 0px rgba(117, 117, 117, 0.18);\n  outline: none;\n  background-color: #fff;\n  width: 25px;\n  height: 25px;\n  line-height: 30px;\n  margin-right: 5px;\n}\n.logout-button {\n  min-width: 20px;\n  padding: 0;\n  top: -1px;\n}\n.admin-dropdown-toggle {\n  padding-right: 0;\n  margin-right: 1em;\n}\n.user-img-css-div {\n  margin-top: -3px;\n}\n.icon-user-login-css {\n  color: #003daf;\n  font-weight: 600;\n  font-size: 12px;\n}\n.svgdecorator {\n  height: 40px;\n  margin-left: -20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvaGVhZGVyL0M6XFxEaXJlY3RUcnVzdFxcQ29kZVxcVGVhbVJlaGFiXFxDbGllbnRBcHAvc3JjXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvaGVhZGVyL0M6XFxEaXJlY3RUcnVzdFxcQ29kZVxcVGVhbVJlaGFiXFxDbGllbnRBcHAvc3JjXFxhcHBcXGxheW91dFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUEsV0FBQTtBQ1JBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUY7QURNSTtFQUNJLGlDRDJCWTtFQzFCWixlQUFBO0VBQ0EsV0RpQkE7RUNoQkEsd0JBQUE7RUFDQSxzQkFBQTtBQ0hSO0FETUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNKUjtBRE9JO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0FDTFI7QURRSTtFQUNJLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNOUjtBRFVBO0VBQ0UsY0FBQTtBQ1BGO0FEVUE7RUFDRSxpQkFBQTtBQ1BGO0FEVUE7RUFDSSxtQkQxQ1k7RUMyQ1osWUFBQTtFQUNBLFdBQUE7RUFFQSxrQ0FBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxtQ0FBQTtBQ1BKO0FEVUE7RUFDRSxZQUFBO0FDUEY7QURVQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDUEY7QURVQTtFQUNFLGdCQUFBO0FDUEY7QURVQTtFQUNFLFdEM0NNO0VDNENOLGVBQUE7QUNQRjtBRFVBO0VBQ0UsYUFBQTtFQUNBLGlDRHpDa0I7QUVrQ3BCO0FEVUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUNQRjtBRFVBO0VBQ0UsMERBQUE7RUFDQSxhQUFBO0VBQ0Esc0JENURNO0VDNkROLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1BGO0FEVUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNQRjtBRFdBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ1JGO0FEV0E7RUFDRSxnQkFBQTtBQ1JGO0FEV0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDUkY7QURVQTtFQUNFLFlBQUE7RUFDRixrQkFBQTtBQ1BBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvbG9ycyBcclxuJGRpc2FibGUtYnRuLWNvbG9yOiAjZDhkOGQ4O1xyXG4kdGFibGUtZ3JpZC1ib3JkZXI6IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcblxyXG4kcHJvcG9zYWxzLWNvbG9yOiByZ2IoMTc0LCAxOTksIDEzMyk7XHJcbiRmb3VyUExCZW5jaG1hcmstY29sb3I6IHJnYigyNTAsIDEzMywgMTAwKTtcclxuJG5lZ290aWF0aW9ucy1jb2xvcjogcmdiKDE2NCwgMTM4LCAyMTIpO1xyXG4kbGFuZUNyZWF0aW9ucy1jb2xvcjogcmdiKDMxLCAxODEsIDE3Mik7XHJcblxyXG4kcHJpLWRhcmstYmx1ZTogIzVkYmNkMjtcclxuLyojMDAzZGFmOyovXHJcbiRwcmktbWlkLWJsdWU6ICMwMGEzZTA7XHJcbiRwcmktbGlnaHQtYmx1ZTogIzlhZGJlODtcclxuXHJcbi8vIGNvbG9yIGNvZGVzIGZvciBwcm9qZWN0IGxpc3QgcGFnZVxyXG4kcHJpLWFxdWEtYmx1ZTogI2M1ZWZmZTtcclxuJHByaS1wci1ncmVlbnllbGxvdzogIzk3ZDcwMDtcclxuJHByaS1wci1waW5rOiBwaW5rO1xyXG4kcHJpLXByLWxpZ2h0Ymx1ZTogbGlnaHRibHVlO1xyXG5cclxuJHByaS1vcmFuZ2U6ICNmZjcwMDA7XHJcbiRwcmktZ3JlZW46ICM5YmQ0NDI7XHJcbiRwcmktbmVvLXBpbms6ICNlYjczYzQ7XHJcblxyXG4kc2VjLWdyYXk6ICNmMmYyZjI7XHJcblxyXG4vLyBidXR0b24gZGlzYWJsZWRcclxuJGJ1dHRvbi1kaXNhYmxlZDogcmdiYSgwLCAwLCAwLCAwLjI2KTtcclxuJGJ1dHRvbi1ob3ZlcjogIzAzMjk3MTtcclxuXHJcbi8vIG90aGVyIGNvbG9yIHVzZWRcclxuJHdoaXRlOiAjZmZmO1xyXG4kYmxhY2s6ICMwMDA7XHJcbiRsaWdodGdyYXk6IGxpZ2h0Z3JheTtcclxuJGdyYXk6ICNjY2M7XHJcbiRvZmZ3aGl0ZTogI2YxZjFmMTtcclxuJG1pZGRsZUJsYWNrOiAjMzMzO1xyXG4kaHVydC1jb2xvcjogI2ZmNmI2YjtcclxuJHNlY29uZGFyeS1idG4tYmFja2dyb3VuZDogIzljOWM5YjtcclxuJG1vbnRzZXJyYXRSZWd1bGFyOiAnTW9udHNlcnJhdC1SZWd1bGFyJztcclxuJG1vbnRzZXJyYXRTZW1pQm9sZDogJ01vbnRzZXJyYXQtU2VtaUJvbGQnO1xyXG4kbW9udHNlcnJhdEJvbGQ6ICdNb250c2VycmF0LUJvbGQnO1xyXG5cclxuJGFuY2hvclRhZ0NvbG9yOiAjMDA3YWQ5O1xyXG4kdGFibGVIZWFkZXJDb2xvcjogIzVkYmNkMjtcclxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgei1pbmRleDogMTE7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyIHtcclxuXHJcbiAgICAuYXBwLW5hbWUge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkbW9udHNlcnJhdFJlZ3VsYXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgLyptYXJnaW46IDAuNzVlbSAwLjNlbTsqL1xyXG4gICAgICAgIC8qcGFkZGluZy1sZWZ0OiA0MnB4OyovXHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ28taW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDMzcHg7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwIDVweCAxcHggNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC51c2VyLWltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5lbnZpcm9ubWVudC1sYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICAgICAgICBjb2xvcjogIzAwM2RhZjtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxufVxyXG5cclxuI2hlYWRlclN1YlRleHQge1xyXG4gIGNvbG9yOiAjMDBhM2UwO1xyXG59XHJcblxyXG4ubGVmdC1zZWN0aW9uIHtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xyXG4gICAgYmFja2dyb3VuZDogJHByaS1kYXJrLWJsdWU7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLW1zLWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IC4ycmVtIDEuN2VtIC4xNWVtIC4xOGVtO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1tZW51LWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuI3VzZXJUb2dnbGVEaXYge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi50b2dnbGVCdXR0b25UZXh0IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uaWNvbi1sb2dvdXQge1xyXG4gIGNvbG9yOiAkd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4udXNlci1kaXYgYnV0dG9uIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiAkbW9udHNlcnJhdFJlZ3VsYXI7ICBcclxufVxyXG5cclxuLmhlYWRlci1yYWRpby1idXR0b24ge1xyXG4gIHBhZGRpbmc6IDAgMTBweCAwIDA7XHJcbiAgZGlzcGxheTpibG9jaztcclxufVxyXG5cclxuLnVzZXItYnV0dG9uIHtcclxuICBib3gtc2hhZG93OiAyLjVweCA0LjMzcHggNXB4IDBweCByZ2JhKDExNywgMTE3LCAxMTcsIDAuMTgpO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmxvZ291dC1idXR0b24ge1xyXG4gIG1pbi13aWR0aDogMjBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRvcDogLTFweDtcclxufVxyXG5cclxuXHJcbi5hZG1pbi1kcm9wZG93bi10b2dnbGUge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuXHJcbi51c2VyLWltZy1jc3MtZGl2IHtcclxuICBtYXJnaW4tdG9wOiAtM3B4O1xyXG59XHJcblxyXG4uaWNvbi11c2VyLWxvZ2luLWNzcyB7XHJcbiAgY29sb3I6ICMwMDNkYWY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnN2Z2RlY29yYXRvcntcclxuICBoZWlnaHQ6IDQwcHg7XHJcbm1hcmdpbi1sZWZ0OiAtMjBweDtcclxufSIsIi8qIzAwM2RhZjsqL1xuOmhvc3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDB2dztcbiAgei1pbmRleDogMTE7XG59XG5cbi5oZWFkZXIgLmFwcC1uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1SZWd1bGFyXCI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNmZmY7XG4gIC8qbWFyZ2luOiAwLjc1ZW0gMC4zZW07Ki9cbiAgLypwYWRkaW5nLWxlZnQ6IDQycHg7Ki9cbn1cbi5oZWFkZXIgLmxvZ28taW1nIHtcbiAgaGVpZ2h0OiAzM3B4O1xuICB3aWR0aDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIG1hcmdpbjogMCA1cHggMXB4IDZweDtcbn1cbi5oZWFkZXIgLnVzZXItaW1nIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbn1cbi5oZWFkZXIgLmVudmlyb25tZW50LWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIGNvbG9yOiAjMDAzZGFmO1xuICB3aWR0aDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuI2hlYWRlclN1YlRleHQge1xuICBjb2xvcjogIzAwYTNlMDtcbn1cblxuLmxlZnQtc2VjdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4ubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XG4gIGJhY2tncm91bmQ6ICM1ZGJjZDI7XG4gIGhlaWdodDogNDRweDtcbiAgY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAtbXMtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAuMnJlbSAxLjdlbSAwLjE1ZW0gMC4xOGVtO1xufVxuXG46Om5nLWRlZXAgLm1hdC1tZW51LWNvbnRlbnQge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbiN1c2VyVG9nZ2xlRGl2IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi50b2dnbGVCdXR0b25UZXh0IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmljb24tbG9nb3V0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnVzZXItZGl2IGJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtUmVndWxhclwiO1xufVxuXG4uaGVhZGVyLXJhZGlvLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAgMTBweCAwIDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udXNlci1idXR0b24ge1xuICBib3gtc2hhZG93OiAyLjVweCA0LjMzcHggNXB4IDBweCByZ2JhKDExNywgMTE3LCAxMTcsIDAuMTgpO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5sb2dvdXQtYnV0dG9uIHtcbiAgbWluLXdpZHRoOiAyMHB4O1xuICBwYWRkaW5nOiAwO1xuICB0b3A6IC0xcHg7XG59XG5cbi5hZG1pbi1kcm9wZG93bi10b2dnbGUge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxuLnVzZXItaW1nLWNzcy1kaXYge1xuICBtYXJnaW4tdG9wOiAtM3B4O1xufVxuXG4uaWNvbi11c2VyLWxvZ2luLWNzcyB7XG4gIGNvbG9yOiAjMDAzZGFmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5zdmdkZWNvcmF0b3Ige1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/components/header/header.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/layout/components/header/header.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppLayoutComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_application_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/application-header.service */
    "./src/app/layout/services/application-header.service.ts");
    /* harmony import */


    var _core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../core/services/storage-helper.service */
    "./src/app/core/services/storage-helper.service.ts");
    /* harmony import */


    var src_app_modules_shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/modules/shared/components/modal/ModalStaticClass */
    "./src/app/modules/shared/components/modal/ModalStaticClass.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(_router, _applicationHeaderService, _storageHelper, _activatedRoute, modalDialog) {
        _classCallCheck(this, HeaderComponent);

        this._router = _router;
        this._applicationHeaderService = _applicationHeaderService;
        this._storageHelper = _storageHelper;
        this._activatedRoute = _activatedRoute;
        this.modalDialog = modalDialog;
        this.loggedInUserDetails = {};
        this.showLoggedInUserDetails = true;
        this.showAdminToggleButton = false;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this._applicationHeaderService.castLoggedInUserDetails.subscribe(function (response) {
            _this15.loggedInUserDetails = response;
            _this15.showLoggedInUserDetails = true;
            _this15.loggedInUserDetails = _this15._storageHelper.getItem("loggedInUserDetails");

            if (_this15.loggedInUserDetails == null) {
              _this15.showLoggedInUserDetails = false;
              _this15.showAdminToggleButton = false;
              _this15.loggedInUserDetails = {};
            } else {} // if (this.loggedInUserDetails.Roles.some(r => r.toLowerCase().includes("admin"))) {
            //     if (this._storageHelper.getItem("selectedRole") != null && this._storageHelper.getItem("selectedRole") != undefined && this._storageHelper.getItem("selectedRole") != "") {
            //         this.userRole = this._storageHelper.getItem("selectedRole");
            //         if (this.userRole.toLowerCase().includes("fig")) {
            //             //this.userRoleList = [{ ID: "figAdmin", Value: "FIG Admin" }, { ID: "fig_buyer", Value: "Buyer" }, { ID: "fig_gso", Value: "GSO" }];
            //             this.userRoleList = [{ ID: "figAdmin", Value: "FIG Admin" }];
            //         }
            //         else {
            //             this.userRoleList = [{ ID: "fddAdmin", Value: "FDD Admin" }, { ID: "admin_buyer", Value: "Buyer" }, { ID: "admin_fna", Value: "F&A" }];
            //         }
            //     }
            //     else {
            //         this.userRole = "fddAdmin";
            //         this.userRoleList = [{ ID: "fddAdmin", Value: "FDD Admin" }, { ID: "admin_buyer", Value: "Buyer" }, { ID: "admin_fna", Value: "F&A" }];
            //         this._storageHelper.setItem("selectedRole", "fddAdmin");
            //     }
            //     this.showAdminToggleButton = true;
            // }
            //}


            if (_this15._router.url == "/logout/false" || _this15._router.url == "/logout/true") {
              _this15.showLoggedInUserDetails = false;
              _this15.showAdminToggleButton = false;
              _this15.loggedInUserDetails = {};
            }
          });

          this._applicationHeaderService.switchUserasObservable.subscribe(function (response) {
            if (response != null) {
              if (_this15.loggedInUserDetails != null && _this15.loggedInUserDetails != undefined && _this15.loggedInUserDetails != "" && Object.keys(_this15.loggedInUserDetails).length > 0) {
                //if (this.loggedInUserDetails.Roles.some(r => r.toLowerCase().includes("admin"))) {
                if (_this15.loggedInUserDetails.Roles.toLowerCase().includes("admin")) {
                  if (response == "fig") {
                    _this15._storageHelper.setItem("selectedRole", "figAdmin");

                    _this15.userRole = "figAdmin"; //this.userRoleList = [{ ID: "figAdmin", Value: "FIG Admin" }, { ID: "fig_buyer", Value: "Buyer" }, { ID: "fig_gso", Value: "GSO" }];

                    _this15.userRoleList = [{
                      ID: "figAdmin",
                      Value: "FIG Admin"
                    }];
                  } else if (response == "fdd") {
                    _this15._storageHelper.setItem("selectedRole", "fddAdmin");

                    _this15.userRole = "fddAdmin";
                    _this15.userRoleList = [{
                      ID: "fddAdmin",
                      Value: "FDD Admin"
                    }, {
                      ID: "admin_buyer",
                      Value: "Buyer"
                    }, {
                      ID: "admin_fna",
                      Value: "F&A"
                    }];
                  }
                } else if (_this15.loggedInUserDetails.Roles.toLowerCase().includes("admin")) {
                  if (response == "fig") {
                    _this15._storageHelper.setItem("selectedRole", "figAdmin");

                    _this15.userRole = "figAdmin"; //this.userRoleList = [{ ID: "figAdmin", Value: "FIG Admin" }, { ID: "fig_buyer", Value: "Buyer" }, { ID: "fig_gso", Value: "GSO" }];

                    _this15.userRoleList = [{
                      ID: "figAdmin",
                      Value: "FIG Admin"
                    }];
                  } else if (response == "fdd") {
                    _this15._storageHelper.setItem("selectedRole", "fddAdmin");

                    _this15.userRole = "fddAdmin";
                    _this15.userRoleList = [{
                      ID: "fddAdmin",
                      Value: "FDD Admin"
                    }, {
                      ID: "admin_buyer",
                      Value: "Buyer"
                    }, {
                      ID: "admin_fna",
                      Value: "F&A"
                    }];
                  }
                }

                sessionStorage.removeItem("basicFilterDetails");
                sessionStorage.removeItem("fddFilterParams");
                sessionStorage.removeItem("advancedFilterDropdowns");
                sessionStorage.removeItem("filterMapData");
                sessionStorage.removeItem("contractFlterDetails");
                sessionStorage.removeItem("fddFilterDropdowns");
                sessionStorage.removeItem("nssRnO");
                sessionStorage.removeItem("totalPPVForecast");
                sessionStorage.removeItem("totalImpact");
                sessionStorage.removeItem("commodities");
                sessionStorage.removeItem("nssCommitted");
              }
            }
          });
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this._router.navigate(['/logout', false]);
        }
      }, {
        key: "changeUserRole",
        value: function changeUserRole() {
          var _this16 = this;

          if (this._router.url.includes("/projects/projectcreation") || this._router.url.includes("/contracts/contractcreation")) {
            src_app_modules_shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_5__["ModalStaticClass"].show(this.modalDialog, "", "Module Switch", "All unsaved progress would be lost and you will be redirected to dashboard. Continue?", 2, false, 1, "400px").subscribe(function (response) {
              if (response.result == 'yes') {
                _this16.handleRoleSwitch();
              } else {
                setTimeout(function () {
                  _this16.userRole = _this16._storageHelper.getItem("selectedRole");
                }, 1000);
                console.log(_this16.userRole);
                console.log(_this16.userRoleList);
              }
            });
          } else {
            this.handleRoleSwitch();
          }

          this._applicationHeaderService.editLoggedInUserDetails(this.loggedInUserDetails);
        }
      }, {
        key: "handleRoleSwitch",
        value: function handleRoleSwitch() {
          var _this17 = this;

          this._storageHelper.setItem("selectedRole", this.userRole);

          sessionStorage.removeItem("basicFilterDetails");
          sessionStorage.removeItem("advancedFilterDropdowns");
          sessionStorage.removeItem("filterMapData");
          sessionStorage.removeItem("contractFlterDetails");
          sessionStorage.removeItem("dashboardData");
          sessionStorage.removeItem("fddFilterParams");
          sessionStorage.removeItem("fddFilterDropdowns");
          sessionStorage.removeItem("nssRnO");
          sessionStorage.removeItem("totalPPVForecast");
          sessionStorage.removeItem("totalImpact");
          sessionStorage.removeItem("commodities");
          sessionStorage.removeItem("nssCommitted");

          this._applicationHeaderService.changeUserRolefromMenu(this.userRole);

          if (this._router.url == "/dashboard") {
            this._router.navigateByUrl('/', {
              skipLocationChange: true
            }).then(function () {
              return _this17._router.navigateByUrl("/dashboard");
            });
          } else {
            this._router.navigateByUrl("dashboard");
          }
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_application_header_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationHeaderService"]
      }, {
        type: _core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_4__["StorageHelper"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }];
    };

    HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/header/header.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/layout/components/header/header.component.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_application_header_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationHeaderService"], _core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_4__["StorageHelper"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/layout/components/sidebar/sidebar.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/layout/components/sidebar/sidebar.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutComponentsSidebarSidebarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*#003daf;*/\nmat-sidenav {\n  width: 55px;\n  position: fixed;\n  top: 42px;\n  height: 100%;\n  background-color: #35393e;\n}\n.mat-drawer-container {\n  position: initial;\n}\n.mat-drawer-side {\n  border-right: #f1f1f1;\n}\n.mat-list-base {\n  padding-top: 0px;\n}\n.mat-list-base .mat-list-item {\n  height: 55px;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n.mat-list-item.vcborder-bottom {\n  border-bottom: 1px solid #ccc;\n}\n.mat-list-item.vcborder-top {\n  border-top: 1px solid #ccc;\n}\n.example-container img {\n  height: 25px;\n}\n.bottom-navigation-items {\n  position: absolute;\n  bottom: 17px;\n  left: 0;\n  padding-bottom: 25px;\n}\n.sidenav-icon {\n  color: #fff !important;\n  font-size: 22px;\n}\n.sidenav-icon.disabled, .sidenav-icon.disabled:hover {\n  /*background-color: #d8d8d8 !important;*/\n  opacity: 0.2;\n  cursor: auto !important;\n  text-decoration: none;\n  color: #fff !important;\n  height: 55px !important;\n  outline: 0;\n  display: block;\n  width: 100%;\n  padding: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  box-sizing: border-box;\n  padding: 0 16px;\n  position: relative;\n  height: inherit;\n}\n.example-container .mat-list-item:hover, .example-container .mat-list-item:active {\n  background-color: #5dbcd2;\n  color: #fff !important;\n}\n.example-container .mat-list-item:hover [class^=icon-]:before {\n  color: #fff;\n}\n.active {\n  background-color: #5dbcd2 !important;\n  color: #fff !important;\n}\n::ng-deep .sidebar-tooltip, .mat-tooltip {\n  background-color: #fff !important;\n  font-family: \"Montserrat-Regular\" !important;\n  border: 1px solid lightgray;\n  color: #000 !important;\n}\n.mat-drawer.mat-drawer-side {\n  z-index: 1;\n}\n.mat-list-base .mat-list-item.icon-disabled {\n  background: #d8d8d8;\n  cursor: default;\n}\n.comments-txtarea.form-control:focus {\n  outline: none;\n  border: 1px solid #ced4da;\n  box-shadow: none;\n}\n.submit-button {\n  margin-bottom: 0.4em !important;\n}\n.feedback-title {\n  font-weight: 600;\n  font-size: 12px;\n}\n.feedback-question {\n  font-size: 12px;\n}\n.feedback-comments-title {\n  font-weight: 600;\n  font-size: 12px;\n}\n.feedback-icon-container {\n  background: #0099ff;\n  width: 50px;\n  height: 50px;\n  display: block;\n  border-radius: 50%;\n}\n.center-dis-just {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.center-position {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.feedback-menu-icon {\n  font-size: 36px;\n  color: #fff;\n  margin: 7px 0 0 0;\n}\n/*.actioncard-content .mat-card.module-switch:not(:last-child) {\n  border-bottom: none !important;\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvc2lkZWJhci9DOlxcRGlyZWN0VHJ1c3RcXENvZGVcXFRlYW1SZWhhYlxcQ2xpZW50QXBwL3NyY1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL3NpZGViYXIvQzpcXERpcmVjdFRydXN0XFxDb2RlXFxUZWFtUmVoYWJcXENsaWVudEFwcC9zcmNcXGFwcFxcbGF5b3V0XFxjb21wb25lbnRzXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUEsV0FBQTtBQ1JBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQUY7QURHQTtFQUNFLGlCQUFBO0FDQUY7QURHQTtFQUNFLHFCRG9CUztBRXBCWDtBREdBO0VBQ0UsZ0JBQUE7QUNBRjtBREdBO0VBQ0UsWUFBQTtFQUNBLHdDQUFBO0VBQUEsZ0NBQUE7QUNBRjtBRElFO0VBQ0UsNkJBQUE7QUNESjtBRElFO0VBQ0UsMEJBQUE7QUNGSjtBRE9BO0VBQ0UsWUFBQTtBQ0pGO0FET0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7QUNKRjtBRE9BO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0FDSkY7QURPQTtFQUNFLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNKRjtBRE9BO0VBQ0kseUJEbEVZO0VDbUVaLHNCQUFBO0FDSko7QURPQTtFQUNFLFdEakRNO0FFNkNSO0FET0E7RUFDSSxvQ0FBQTtFQUNBLHNCQUFBO0FDSko7QURPQTtFQUNFLGlDQUFBO0VBQ0EsNENBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FDSkY7QURPQTtFQUNFLFVBQUE7QUNKRjtBRE9BO0VBQ0UsbUJEbkdrQjtFQ29HbEIsZUFBQTtBQ0pGO0FEUUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0xGO0FEUUE7RUFDRSwrQkFBQTtBQ0xGO0FEUUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNMRjtBRE9BO0VBQ0UsZUFBQTtBQ0pGO0FET0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNKRjtBRE9BO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0pGO0FET0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDSkY7QURPQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDSkY7QURPQTtFQUNFLGVBQUE7RUFDQSxXRHRITTtFQ3VITixpQkFBQTtBQ0pGO0FET0E7O0VBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb2xvcnMgXHJcbiRkaXNhYmxlLWJ0bi1jb2xvcjogI2Q4ZDhkODtcclxuJHRhYmxlLWdyaWQtYm9yZGVyOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5cclxuJHByb3Bvc2Fscy1jb2xvcjogcmdiKDE3NCwgMTk5LCAxMzMpO1xyXG4kZm91clBMQmVuY2htYXJrLWNvbG9yOiByZ2IoMjUwLCAxMzMsIDEwMCk7XHJcbiRuZWdvdGlhdGlvbnMtY29sb3I6IHJnYigxNjQsIDEzOCwgMjEyKTtcclxuJGxhbmVDcmVhdGlvbnMtY29sb3I6IHJnYigzMSwgMTgxLCAxNzIpO1xyXG5cclxuJHByaS1kYXJrLWJsdWU6ICM1ZGJjZDI7XHJcbi8qIzAwM2RhZjsqL1xyXG4kcHJpLW1pZC1ibHVlOiAjMDBhM2UwO1xyXG4kcHJpLWxpZ2h0LWJsdWU6ICM5YWRiZTg7XHJcblxyXG4vLyBjb2xvciBjb2RlcyBmb3IgcHJvamVjdCBsaXN0IHBhZ2VcclxuJHByaS1hcXVhLWJsdWU6ICNjNWVmZmU7XHJcbiRwcmktcHItZ3JlZW55ZWxsb3c6ICM5N2Q3MDA7XHJcbiRwcmktcHItcGluazogcGluaztcclxuJHByaS1wci1saWdodGJsdWU6IGxpZ2h0Ymx1ZTtcclxuXHJcbiRwcmktb3JhbmdlOiAjZmY3MDAwO1xyXG4kcHJpLWdyZWVuOiAjOWJkNDQyO1xyXG4kcHJpLW5lby1waW5rOiAjZWI3M2M0O1xyXG5cclxuJHNlYy1ncmF5OiAjZjJmMmYyO1xyXG5cclxuLy8gYnV0dG9uIGRpc2FibGVkXHJcbiRidXR0b24tZGlzYWJsZWQ6IHJnYmEoMCwgMCwgMCwgMC4yNik7XHJcbiRidXR0b24taG92ZXI6ICMwMzI5NzE7XHJcblxyXG4vLyBvdGhlciBjb2xvciB1c2VkXHJcbiR3aGl0ZTogI2ZmZjtcclxuJGJsYWNrOiAjMDAwO1xyXG4kbGlnaHRncmF5OiBsaWdodGdyYXk7XHJcbiRncmF5OiAjY2NjO1xyXG4kb2Zmd2hpdGU6ICNmMWYxZjE7XHJcbiRtaWRkbGVCbGFjazogIzMzMztcclxuJGh1cnQtY29sb3I6ICNmZjZiNmI7XHJcbiRzZWNvbmRhcnktYnRuLWJhY2tncm91bmQ6ICM5YzljOWI7XHJcbiRtb250c2VycmF0UmVndWxhcjogJ01vbnRzZXJyYXQtUmVndWxhcic7XHJcbiRtb250c2VycmF0U2VtaUJvbGQ6ICdNb250c2VycmF0LVNlbWlCb2xkJztcclxuJG1vbnRzZXJyYXRCb2xkOiAnTW9udHNlcnJhdC1Cb2xkJztcclxuXHJcbiRhbmNob3JUYWdDb2xvcjogIzAwN2FkOTtcclxuJHRhYmxlSGVhZGVyQ29sb3I6ICM1ZGJjZDI7XHJcbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbm1hdC1zaWRlbmF2IHtcclxuICB3aWR0aDogNTVweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA0MnB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzOTNlO1xyXG59XHJcblxyXG4ubWF0LWRyYXdlci1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBpbml0aWFsO1xyXG59XHJcblxyXG4ubWF0LWRyYXdlci1zaWRlIHtcclxuICBib3JkZXItcmlnaHQ6ICRvZmZ3aGl0ZTtcclxufVxyXG5cclxuLm1hdC1saXN0LWJhc2Uge1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIHtcclxuICBoZWlnaHQ6IDU1cHg7ICBcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubWF0LWxpc3QtaXRlbSB7XHJcbiAgJi52Y2JvcmRlci1ib3R0b20ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgfVxyXG5cclxuICAmLnZjYm9yZGVyLXRvcCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcclxuICB9XHJcbn1cclxuXHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIgaW1nIHtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5ib3R0b20tbmF2aWdhdGlvbi1pdGVtcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTdweDtcclxuICBsZWZ0OiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4uc2lkZW5hdi1pY29uIHtcclxuICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4uc2lkZW5hdi1pY29uLmRpc2FibGVkLCAuc2lkZW5hdi1pY29uLmRpc2FibGVkOmhvdmVyIHtcclxuICAvKmJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDggIWltcG9ydGFudDsqL1xyXG4gIG9wYWNpdHk6IDAuMjtcclxuICBjdXJzb3I6IGF1dG8gIWltcG9ydGFudDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNTVweCAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIgLm1hdC1saXN0LWl0ZW06aG92ZXIsIC5leGFtcGxlLWNvbnRhaW5lciAubWF0LWxpc3QtaXRlbTphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaS1kYXJrLWJsdWU7XHJcbiAgICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciAubWF0LWxpc3QtaXRlbTpob3ZlciBbY2xhc3NePVwiaWNvbi1cIl06YmVmb3Jle1xyXG4gIGNvbG9yOiAkd2hpdGU7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaS1kYXJrLWJsdWUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5zaWRlYmFyLXRvb2x0aXAsIC5tYXQtdG9vbHRpcCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6ICRtb250c2VycmF0UmVndWxhciAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTsgIFxyXG4gIGNvbG9yOiAkYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1kcmF3ZXIubWF0LWRyYXdlci1zaWRlIHtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbS5pY29uLWRpc2FibGVke1xyXG4gIGJhY2tncm91bmQ6ICRkaXNhYmxlLWJ0bi1jb2xvcjtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcblxyXG4uY29tbWVudHMtdHh0YXJlYS5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uc3VibWl0LWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC40ZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZlZWRiYWNrLXRpdGxle1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5mZWVkYmFjay1xdWVzdGlvbntcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5mZWVkYmFjay1jb21tZW50cy10aXRsZXtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmZlZWRiYWNrLWljb24tY29udGFpbmVye1xyXG4gIGJhY2tncm91bmQ6ICMwMDk5ZmY7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmNlbnRlci1kaXMtanVzdHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2VudGVyLXBvc2l0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mZWVkYmFjay1tZW51LWljb257XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGNvbG9yOiAkd2hpdGU7XHJcbiAgbWFyZ2luOiA3cHggMCAwIDA7XHJcbn1cclxuXHJcbi8qLmFjdGlvbmNhcmQtY29udGVudCAubWF0LWNhcmQubW9kdWxlLXN3aXRjaDpub3QoOmxhc3QtY2hpbGQpIHtcclxuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn0qL1xyXG4iLCIvKiMwMDNkYWY7Ki9cbm1hdC1zaWRlbmF2IHtcbiAgd2lkdGg6IDU1cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA0MnB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTM5M2U7XG59XG5cbi5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBpbml0aWFsO1xufVxuXG4ubWF0LWRyYXdlci1zaWRlIHtcbiAgYm9yZGVyLXJpZ2h0OiAjZjFmMWYxO1xufVxuXG4ubWF0LWxpc3QtYmFzZSB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIHtcbiAgaGVpZ2h0OiA1NXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLm1hdC1saXN0LWl0ZW0udmNib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG4ubWF0LWxpc3QtaXRlbS52Y2JvcmRlci10b3Age1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIGltZyB7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLmJvdHRvbS1uYXZpZ2F0aW9uLWl0ZW1zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE3cHg7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xufVxuXG4uc2lkZW5hdi1pY29uIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4uc2lkZW5hdi1pY29uLmRpc2FibGVkLCAuc2lkZW5hdi1pY29uLmRpc2FibGVkOmhvdmVyIHtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkOGQ4ICFpbXBvcnRhbnQ7Ki9cbiAgb3BhY2l0eTogMC4yO1xuICBjdXJzb3I6IGF1dG8gIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDU1cHggIWltcG9ydGFudDtcbiAgb3V0bGluZTogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgLm1hdC1saXN0LWl0ZW06aG92ZXIsIC5leGFtcGxlLWNvbnRhaW5lciAubWF0LWxpc3QtaXRlbTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRiY2QyO1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgLm1hdC1saXN0LWl0ZW06aG92ZXIgW2NsYXNzXj1pY29uLV06YmVmb3JlIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRiY2QyICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuc2lkZWJhci10b29sdGlwLCAubWF0LXRvb2x0aXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtUmVndWxhclwiICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cblxuLm1hdC1kcmF3ZXIubWF0LWRyYXdlci1zaWRlIHtcbiAgei1pbmRleDogMTtcbn1cblxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0uaWNvbi1kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICNkOGQ4ZDg7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmNvbW1lbnRzLXR4dGFyZWEuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnN1Ym1pdC1idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAwLjRlbSAhaW1wb3J0YW50O1xufVxuXG4uZmVlZGJhY2stdGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5mZWVkYmFjay1xdWVzdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZlZWRiYWNrLWNvbW1lbnRzLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZmVlZGJhY2staWNvbi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjMDA5OWZmO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2VudGVyLWRpcy1qdXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jZW50ZXItcG9zaXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZlZWRiYWNrLW1lbnUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogN3B4IDAgMCAwO1xufVxuXG4vKi5hY3Rpb25jYXJkLWNvbnRlbnQgLm1hdC1jYXJkLm1vZHVsZS1zd2l0Y2g6bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn0qLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/components/sidebar/sidebar.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/layout/components/sidebar/sidebar.component.ts ***!
    \****************************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppLayoutComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/sidebar.service */
    "./src/app/layout/services/sidebar.service.ts");
    /* harmony import */


    var src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/services/storage-helper.service */
    "./src/app/core/services/storage-helper.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_application_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/application-header.service */
    "./src/app/layout/services/application-header.service.ts");
    /* harmony import */


    var src_app_modules_shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/modules/shared/components/modal/ModalStaticClass */
    "./src/app/modules/shared/components/modal/ModalStaticClass.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _modules_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../modules/shared/services/shared.service */
    "./src/app/modules/shared/services/shared.service.ts");

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent(_sideBarService, _storagehelper, _router, _applicationHeaderService, modalDialog, _sharedService) {
        _classCallCheck(this, SidebarComponent);

        this._sideBarService = _sideBarService;
        this._storagehelper = _storagehelper;
        this._router = _router;
        this._applicationHeaderService = _applicationHeaderService;
        this.modalDialog = modalDialog;
        this._sharedService = _sharedService;
        this.showSidebar = true;
        this.activeState = "dashboard";
        this.folderIconText = "Projects";
        this.loggedInUserDetails = {};
        this.showModuleSwitch = false;
        this.selectedModule = "fdd";
        this.ratingDetails = {};
        this.bgColor = "";
        this.fontColor = "";
        this.supportTeam = "";
        this.menuList = [{
          Title: "Forecast Driver Dashboard",
          IconClass: "icon-FDD",
          DivBGColor: "#ffffff",
          IconBgColor: "#1dd1a1",
          UserSwitchMenu: "fdd",
          isSelected: false
        }, {
          Title: "Feedstock Impact Guidance",
          IconClass: "icon-FIG",
          DivBGColor: "#ffffff",
          IconBgColor: "#0776ff",
          UserSwitchMenu: "fig",
          isSelected: false
        }, {
          Title: "Reports",
          IconClass: "icon-reports",
          DivBGColor: "#ffffff",
          IconBgColor: "#ff7f50",
          UserSwitchMenu: "fddrep",
          isSelected: false
        }];
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          // if (this._storagehelper.getItem("supportTeam") == null || this._storagehelper.getItem("supportTeam") == undefined ||
          //     this._storagehelper.getItem("supportTeam") == "") {
          //     this._sharedService.supportTeamSubject.asObservable().subscribe(response => {
          //         this.supportTeam = response;
          //     })
          // }
          // else {
          //     this.supportTeam = this._storagehelper.getItem("supportTeam");
          // }
          this._applicationHeaderService.castLoggedInUserDetails.subscribe(function (response) {
            _this18.loggedInUserDetails = response;
            _this18.loggedInUserDetails = _this18._storagehelper.getItem("loggedInUserDetails"); // if (this.loggedInUserDetails == null) {
            //     this.showModuleSwitch = false;
            //     this.loggedInUserDetails = {};
            // }
            // else {
            //     if (this.loggedInUserDetails.Roles.some(r => r.toLowerCase().includes("admin")) || this.loggedInUserDetails.Roles.some(r => r.toLowerCase().includes("fig_buyer")) ||
            //         this.loggedInUserDetails.Roles.some(r => r.toLowerCase().includes("fig_fna")) || this.loggedInUserDetails.Roles.some(r => r.toLowerCase() == "fig_gso")) {
            //         this.showModuleSwitch = true;
            //         if (this._storagehelper.getItem("selectedModule") != null && this._storagehelper.getItem("selectedModule") != undefined && this._storagehelper.getItem("selectedModule") != "") {
            //             this.selectedModule = this._storagehelper.getItem("selectedModule");
            //         }
            //         else {
            //             this.selectedModule = "fdd";
            //             this._storagehelper.setItem("selectedModule", this.selectedModule);
            //             this.switchUserRoleView(this.selectedModule);
            //         }
            //         for (var i = 0; i < this.menuList.length; i++) {
            //             if (this.menuList[i].UserSwitchMenu == this.selectedModule) {
            //                 this.menuList[i].isSelected = true;
            //             }
            //             else {
            //                 this.menuList[i].isSelected = false;
            //             }
            //         }
            //     }
            //     else {
            //         if (this._storagehelper.getItem("selectedModule") != null && this._storagehelper.getItem("selectedModule") != undefined && this._storagehelper.getItem("selectedModule") != "") {
            //             this.selectedModule = this._storagehelper.getItem("selectedModule");
            //         }
            //         else {
            //             this.selectedModule = "fdd";
            //             this._storagehelper.setItem("selectedModule", this.selectedModule);
            //         }
            //     }
            //     if (this.selectedModule == "fdd") {
            //         this.folderIconText = "Projects";
            //     }
            //     else {
            //         this.folderIconText = "Contracts";
            //     }
            // }

            if (_this18.loggedInUserDetails != null && _this18.loggedInUserDetails != undefined && Object.keys(_this18.loggedInUserDetails).length > 0) {
              _this18.ratingDetails.LoginName = _this18.loggedInUserDetails.LoginName;
            }
          });

          this._sideBarService.showSideBarAsObservable.subscribe(function (response) {
            _this18.showSidebar = response;
          });

          this._sideBarService.activeState.asObservable().subscribe(function (response) {
            _this18.activeState = response;
          });
        }
      }, {
        key: "navigateToProjectOrContract",
        value: function navigateToProjectOrContract() {
          if (this.folderIconText == "Contracts") {
            this._router.navigateByUrl("/contracts");
          } else if (this.folderIconText == "Projects") {
            this._router.navigateByUrl("/projects");
          }
        }
      }, {
        key: "switchUserRoleView",
        value: function switchUserRoleView(switchUserRole) {
          var _this19 = this;

          if (this.selectedModule == switchUserRole || switchUserRole == "fddrep") {
            return;
          } else {
            if (this._router.url.includes("/projects/projectcreation") || this._router.url.includes("/contracts/contractcreation")) {
              src_app_modules_shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_6__["ModalStaticClass"].show(this.modalDialog, "", "Module Switch", "All unsaved progress would be lost and you will be redirected to dashboard. Continue?", 2, false, 1, "400px").subscribe(function (response) {
                if (response.result == 'yes') {
                  _this19.selectedModule = switchUserRole;

                  _this19.handleRoleSwitch();
                }
              });
            } else {
              this.selectedModule = switchUserRole;
              this.handleRoleSwitch();
            }
          }

          this._applicationHeaderService.editLoggedInUserDetails(this.loggedInUserDetails);
        }
      }, {
        key: "handleRoleSwitch",
        value: function handleRoleSwitch() {
          var _this20 = this;

          for (var i = 0; i < this.menuList.length; i++) {
            if (this.menuList[i].UserSwitchMenu == this.selectedModule) {
              this.menuList[i].isSelected = true;
            } else {
              this.menuList[i].isSelected = false;
            }
          }

          if (this.selectedModule == "fdd") {
            this.folderIconText = "Projects";
          } else {
            this.folderIconText = "Contracts";
          }

          this._storagehelper.setItem("selectedModule", this.selectedModule);

          this._applicationHeaderService.switchUserView(this.selectedModule);

          if (this._router.url == "/dashboard") {
            this._router.navigateByUrl('/', {
              skipLocationChange: true
            }).then(function () {
              return _this20._router.navigateByUrl("/dashboard");
            });
          } else {
            this._router.navigateByUrl("dashboard");
          }
        }
      }, {
        key: "navigateToFigOrBuyerDashboard",
        value: function navigateToFigOrBuyerDashboard() {
          this._router.navigateByUrl("/actions");
        }
      }, {
        key: "navigateToCommodity",
        value: function navigateToCommodity() {
          this._router.navigateByUrl("/commodityImpact");
        }
      }, {
        key: "submitFeedBack",
        value: function submitFeedBack() {//this._sideBarService.saveRatingDetails(this.ratingDetails).subscribe(
          //    response => {
          //        if (response) {
          //            ModalStaticClass.show(this.modalDialog, "", "Success", "Your feedback was successfully submitted. Thank you!", 0, false, 0, "400px");
          //            this.ratingDetails.Comments = "";
          //            this.ratingDetails.Rating = null;
          //        }
          //    }
          //)
        }
      }, {
        key: "setHover",
        value: function setHover(actionCard) {
          actionCard.DivBGColor = actionCard.IconBgColor;
          this.fontColor = actionCard.IconBgColor;
          actionCard.IconBgColor = "#ffffff";
        }
      }, {
        key: "removeHover",
        value: function removeHover(actionCard) {
          actionCard.DivBGColor = "#ffffff";
          actionCard.IconBgColor = this.fontColor;
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ctorParameters = function () {
      return [{
        type: _services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"]
      }, {
        type: src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__["StorageHelper"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_application_header_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationHeaderService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: _modules_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]
      }];
    };

    SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidebar',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/sidebar/sidebar.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./sidebar.component.scss */
      "./src/app/layout/components/sidebar/sidebar.component.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"], src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__["StorageHelper"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_application_header_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationHeaderService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], _modules_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]])], SidebarComponent);
    /***/
  },

  /***/
  "./src/app/layout/services/application-header.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/layout/services/application-header.service.ts ***!
    \***************************************************************/

  /*! exports provided: ApplicationHeaderService */

  /***/
  function srcAppLayoutServicesApplicationHeaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationHeaderService", function () {
      return ApplicationHeaderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/services/api.service */
    "./src/app/core/services/api.service.ts");

    var ApplicationHeaderService =
    /*#__PURE__*/
    function () {
      function ApplicationHeaderService(apiService) {
        _classCallCheck(this, ApplicationHeaderService);

        this.apiService = apiService;
        this.loggedInUserDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.castLoggedInUserDetails = this.loggedInUserDetails.asObservable();
        this.switchUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.switchUserasObservable = this.switchUser.asObservable();
        this.changeUserRole = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.changeUserRoleasObservable = this.changeUserRole.asObservable();
      }

      _createClass(ApplicationHeaderService, [{
        key: "editLoggedInUserDetails",
        value: function editLoggedInUserDetails(newValue) {
          this.loggedInUserDetails.next(newValue);
        }
      }, {
        key: "switchUserView",
        value: function switchUserView(newValue) {
          this.switchUser.next(newValue);
        }
      }, {
        key: "changeUserRolefromMenu",
        value: function changeUserRolefromMenu(newValue) {
          this.changeUserRole.next(newValue);
        }
      }, {
        key: "getNotifications",
        value: function getNotifications(tNumber) {
          var projectID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var selectedRole = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          return this.apiService.getDataWithParams("Common/Notifications", {
            tNumber: tNumber,
            projectID: projectID,
            selectedRole: selectedRole
          });
        }
      }, {
        key: "readNotification",
        value: function readNotification(_readNotification) {
          return this.apiService.postData("Common/ReadNotification", _readNotification);
        }
      }]);

      return ApplicationHeaderService;
    }();

    ApplicationHeaderService.ctorParameters = function () {
      return [{
        type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    ApplicationHeaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], ApplicationHeaderService);
    /***/
  },

  /***/
  "./src/app/layout/services/sidebar.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/layout/services/sidebar.service.ts ***!
    \****************************************************/

  /*! exports provided: SidebarService */

  /***/
  function srcAppLayoutServicesSidebarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarService", function () {
      return SidebarService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/services/api.service */
    "./src/app/core/services/api.service.ts");

    var SidebarService =
    /*#__PURE__*/
    function () {
      function SidebarService(_apiService) {
        _classCallCheck(this, SidebarService);

        this._apiService = _apiService;
        this.showSideBar = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this.showSideBarAsObservable = this.showSideBar.asObservable();
        this.activeState = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("dashboard");
      }

      _createClass(SidebarService, [{
        key: "editSidebarShowValue",
        value: function editSidebarShowValue(newValue) {
          this.showSideBar.next(newValue);
        }
      }, {
        key: "setActiveState",
        value: function setActiveState(newValue) {
          this.activeState.next(newValue);
        }
      }, {
        key: "saveRatingDetails",
        value: function saveRatingDetails(userRating) {
          return this._apiService.postData("User/Save/Rating", userRating);
        }
      }]);

      return SidebarService;
    }();

    SidebarService.ctorParameters = function () {
      return [{
        type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    SidebarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], SidebarService);
    /***/
  },

  /***/
  "./src/app/modules/shared/components/angular-grid/angular-grid.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/modules/shared/components/angular-grid/angular-grid.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesSharedComponentsAngularGridAngularGridComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvYW5ndWxhci1ncmlkL2FuZ3VsYXItZ3JpZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/shared/components/angular-grid/angular-grid.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/modules/shared/components/angular-grid/angular-grid.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: AngularGridComponent */

  /***/
  function srcAppModulesSharedComponentsAngularGridAngularGridComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularGridComponent", function () {
      return AngularGridComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var AngularGridComponent =
    /*#__PURE__*/
    function () {
      function AngularGridComponent() {
        _classCallCheck(this, AngularGridComponent);
      }

      _createClass(AngularGridComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.gridDataSource && changes.gridDataSource.currentValue) {
            this.gridDataSource = changes.gridDataSource.currentValue;
            this.SortPaginateGrid();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.SortPaginateGrid();
        }
      }, {
        key: "SortPaginateGrid",
        value: function SortPaginateGrid() {
          if (this.gridDataSource && this.gridDataSource.data && this.gridDataSource.data.length > 0) {
            this.gridDataSource.sort = this.sort;
            this.gridDataSource.paginator = this.paginator;
          }
        }
      }]);

      return AngularGridComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"])], AngularGridComponent.prototype, "gridDataSource", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], AngularGridComponent.prototype, "columnDetails", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], AngularGridComponent.prototype, "displayedColumns", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      static: false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])], AngularGridComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])], AngularGridComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("table", null), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTable"])], AngularGridComponent.prototype, "table", void 0);
    AngularGridComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-angular-grid',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./angular-grid.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/angular-grid/angular-grid.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [__importDefault(__webpack_require__(
      /*! ./angular-grid.component.scss */
      "./src/app/modules/shared/components/angular-grid/angular-grid.component.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AngularGridComponent);
    /***/
  },

  /***/
  "./src/app/modules/shared/components/modal/ModalStaticClass.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/modules/shared/components/modal/ModalStaticClass.ts ***!
    \*********************************************************************/

  /*! exports provided: ModalStaticClass, MessageBoxButton, MessageBoxStyle, MessageIcon */

  /***/
  function srcAppModulesSharedComponentsModalModalStaticClassTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalStaticClass", function () {
      return ModalStaticClass;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageBoxButton", function () {
      return MessageBoxButton;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageBoxStyle", function () {
      return MessageBoxStyle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageIcon", function () {
      return MessageIcon;
    });
    /* harmony import */


    var _modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./modal.component */
    "./src/app/modules/shared/components/modal/modal.component.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ModalStaticClass =
    /*#__PURE__*/
    function () {
      function ModalStaticClass() {
        _classCallCheck(this, ModalStaticClass);
      }

      _createClass(ModalStaticClass, null, [{
        key: "show",
        value: function show(dialog, message) {
          var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Alert";
          var information = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
          var button = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
          var allow_outside_click = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
          var style = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
          var width = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : "200px";
          var messageIcon = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 2;
          var panelClass = arguments.length > 9 ? arguments[9] : undefined;
          var dialogRef = dialog.open(_modal_component__WEBPACK_IMPORTED_MODULE_0__["ModalComponent"], {
            data: {
              title: title || "Alert",
              message: message,
              information: information,
              button: button || 0,
              style: style || 0,
              allow_outside_click: allow_outside_click || false,
              messageIcon: messageIcon
            },
            width: width,
            panelClass: panelClass
          });
          return dialogRef.afterClosed();
        }
      }]);

      return ModalStaticClass;
    }();

    var MessageBoxButton;

    (function (MessageBoxButton) {
      MessageBoxButton[MessageBoxButton["Ok"] = 0] = "Ok";
      MessageBoxButton[MessageBoxButton["OkCancel"] = 1] = "OkCancel";
      MessageBoxButton[MessageBoxButton["YesNo"] = 2] = "YesNo";
      MessageBoxButton[MessageBoxButton["AcceptReject"] = 3] = "AcceptReject";
    })(MessageBoxButton || (MessageBoxButton = {}));

    var MessageBoxStyle;

    (function (MessageBoxStyle) {
      MessageBoxStyle[MessageBoxStyle["Simple"] = 0] = "Simple";
      MessageBoxStyle[MessageBoxStyle["Full"] = 1] = "Full";
    })(MessageBoxStyle || (MessageBoxStyle = {}));

    ;
    var MessageIcon;

    (function (MessageIcon) {
      MessageIcon[MessageIcon["Success"] = 0] = "Success";
      MessageIcon[MessageIcon["Error"] = 1] = "Error";
      MessageIcon[MessageIcon["Info"] = 2] = "Info";
      MessageIcon[MessageIcon["Confirmation"] = 3] = "Confirmation";
    })(MessageIcon || (MessageIcon = {}));
    /***/

  },

  /***/
  "./src/app/modules/shared/components/modal/modal.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/shared/components/modal/modal.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesSharedComponentsModalModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*#003daf;*/\ndiv.message {\n  font-family: \"Montserrat-Regular\";\n  padding-left: 25px;\n  padding-bottom: 0px;\n  font-size: 16px;\n  color: #2e2e2e;\n}\ndiv.info {\n  font-family: \"Montserrat-Regular\";\n  padding-bottom: 0px;\n  font-size: 16px;\n  color: #2e2e2e;\n}\n.panel-container .mat-dialog-container {\n  padding: 0px;\n  overflow: hidden;\n}\n.margin-left {\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9DOlxcRGlyZWN0VHJ1c3RcXENvZGVcXFRlYW1SZWhhYlxcQ2xpZW50QXBwL3NyY1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvQzpcXERpcmVjdFRydXN0XFxDb2RlXFxUZWFtUmVoYWJcXENsaWVudEFwcC9zcmNcXGFwcFxcbW9kdWxlc1xcc2hhcmVkXFxjb21wb25lbnRzXFxtb2RhbFxcbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUEsV0FBQTtBQ1JBO0VBQ0UsaUNEb0NrQjtFQ25DbEIsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQUY7QURHQTtFQUNFLGlDRDRCa0I7RUMzQmxCLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNBRjtBREdBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDQUY7QURHQTtFQUNFLGlCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29sb3JzIFxyXG4kZGlzYWJsZS1idG4tY29sb3I6ICNkOGQ4ZDg7XHJcbiR0YWJsZS1ncmlkLWJvcmRlcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHJcbiRwcm9wb3NhbHMtY29sb3I6IHJnYigxNzQsIDE5OSwgMTMzKTtcclxuJGZvdXJQTEJlbmNobWFyay1jb2xvcjogcmdiKDI1MCwgMTMzLCAxMDApO1xyXG4kbmVnb3RpYXRpb25zLWNvbG9yOiByZ2IoMTY0LCAxMzgsIDIxMik7XHJcbiRsYW5lQ3JlYXRpb25zLWNvbG9yOiByZ2IoMzEsIDE4MSwgMTcyKTtcclxuXHJcbiRwcmktZGFyay1ibHVlOiAjNWRiY2QyO1xyXG4vKiMwMDNkYWY7Ki9cclxuJHByaS1taWQtYmx1ZTogIzAwYTNlMDtcclxuJHByaS1saWdodC1ibHVlOiAjOWFkYmU4O1xyXG5cclxuLy8gY29sb3IgY29kZXMgZm9yIHByb2plY3QgbGlzdCBwYWdlXHJcbiRwcmktYXF1YS1ibHVlOiAjYzVlZmZlO1xyXG4kcHJpLXByLWdyZWVueWVsbG93OiAjOTdkNzAwO1xyXG4kcHJpLXByLXBpbms6IHBpbms7XHJcbiRwcmktcHItbGlnaHRibHVlOiBsaWdodGJsdWU7XHJcblxyXG4kcHJpLW9yYW5nZTogI2ZmNzAwMDtcclxuJHByaS1ncmVlbjogIzliZDQ0MjtcclxuJHByaS1uZW8tcGluazogI2ViNzNjNDtcclxuXHJcbiRzZWMtZ3JheTogI2YyZjJmMjtcclxuXHJcbi8vIGJ1dHRvbiBkaXNhYmxlZFxyXG4kYnV0dG9uLWRpc2FibGVkOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xyXG4kYnV0dG9uLWhvdmVyOiAjMDMyOTcxO1xyXG5cclxuLy8gb3RoZXIgY29sb3IgdXNlZFxyXG4kd2hpdGU6ICNmZmY7XHJcbiRibGFjazogIzAwMDtcclxuJGxpZ2h0Z3JheTogbGlnaHRncmF5O1xyXG4kZ3JheTogI2NjYztcclxuJG9mZndoaXRlOiAjZjFmMWYxO1xyXG4kbWlkZGxlQmxhY2s6ICMzMzM7XHJcbiRodXJ0LWNvbG9yOiAjZmY2YjZiO1xyXG4kc2Vjb25kYXJ5LWJ0bi1iYWNrZ3JvdW5kOiAjOWM5YzliO1xyXG4kbW9udHNlcnJhdFJlZ3VsYXI6ICdNb250c2VycmF0LVJlZ3VsYXInO1xyXG4kbW9udHNlcnJhdFNlbWlCb2xkOiAnTW9udHNlcnJhdC1TZW1pQm9sZCc7XHJcbiRtb250c2VycmF0Qm9sZDogJ01vbnRzZXJyYXQtQm9sZCc7XHJcblxyXG4kYW5jaG9yVGFnQ29sb3I6ICMwMDdhZDk7XHJcbiR0YWJsZUhlYWRlckNvbG9yOiAjNWRiY2QyO1xyXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbmRpdi5tZXNzYWdlIHtcclxuICBmb250LWZhbWlseTogJG1vbnRzZXJyYXRSZWd1bGFyO1xyXG4gIHBhZGRpbmctbGVmdDogMjVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzJlMmUyZTtcclxufVxyXG5cclxuZGl2LmluZm8ge1xyXG4gIGZvbnQtZmFtaWx5OiAkbW9udHNlcnJhdFJlZ3VsYXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMyZTJlMmU7XHJcbn1cclxuXHJcbi5wYW5lbC1jb250YWluZXIgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm1hcmdpbi1sZWZ0IHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG4iLCIvKiMwMDNkYWY7Ki9cbmRpdi5tZXNzYWdlIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1SZWd1bGFyXCI7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzJlMmUyZTtcbn1cblxuZGl2LmluZm8ge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0LVJlZ3VsYXJcIjtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzJlMmUyZTtcbn1cblxuLnBhbmVsLWNvbnRhaW5lciAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBwYWRkaW5nOiAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tYXJnaW4tbGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/shared/components/modal/modal.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/modules/shared/components/modal/modal.component.ts ***!
    \********************************************************************/

  /*! exports provided: ModalComponent */

  /***/
  function srcAppModulesSharedComponentsModalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
      return ModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ModalComponent =
    /*#__PURE__*/
    function () {
      function ModalComponent(dialogRef, data) {
        _classCallCheck(this, ModalComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        console.log(data);
        this.style = data.style || 0;
        this.title = data.title;
        this.message = data.message;
        this.information = data.information;
        this.button = data.button;
        this.messageIcon = data.messageIcon;
        this.dialogRef.disableClose = !data.allow_outside_click || false;
      }

      _createClass(ModalComponent, [{
        key: "onOk",
        value: function onOk() {
          //this.dialogRef.close({ result: "ok" });
          this.dialogRef.close(true);
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          this.dialogRef.close(false); //this.dialogRef.close({ result: "cancel" });
        }
      }, {
        key: "onYes",
        value: function onYes() {
          this.dialogRef.close({
            result: "yes"
          });
        }
      }, {
        key: "onNo",
        value: function onNo() {
          this.dialogRef.close({
            result: "no"
          });
        }
      }, {
        key: "onAccept",
        value: function onAccept() {
          this.dialogRef.close({
            result: "accept"
          });
        }
      }, {
        key: "onReject",
        value: function onReject() {
          this.dialogRef.close({
            result: "reject"
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ModalComponent;
    }();

    ModalComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/modal/modal.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [__importDefault(__webpack_require__(
      /*! ./modal.component.scss */
      "./src/app/modules/shared/components/modal/modal.component.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])], ModalComponent);
    /***/
  },

  /***/
  "./src/app/modules/shared/directives/currency-formatter.directive.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/modules/shared/directives/currency-formatter.directive.ts ***!
    \***************************************************************************/

  /*! exports provided: CurrencyFormatterDirective */

  /***/
  function srcAppModulesSharedDirectivesCurrencyFormatterDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrencyFormatterDirective", function () {
      return CurrencyFormatterDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var CurrencyFormatterDirective =
    /*#__PURE__*/
    function () {
      function CurrencyFormatterDirective(el, decimalPipe) {
        _classCallCheck(this, CurrencyFormatterDirective);

        this.el = el;
        this.decimalPipe = decimalPipe;
      }

      _createClass(CurrencyFormatterDirective, [{
        key: "onkeyup",
        value: function onkeyup(event) {
          if (47 < event.keyCode && event.keyCode < 58 || 95 < event.keyCode && event.keyCode < 106 || event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 9) {
            this.el.nativeElement.value = this.decimalPipe.transform(this.el.nativeElement.value.replace(/[\,\.]/g, ''));
          } else {
            event.preventDefault();
          }
        }
      }, {
        key: "onkeydown",
        value: function onkeydown(event) {
          if (this.el.nativeElement.value.replace(/[\,\.]/g, '').length >= 15) {
            if (event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 9) {} else {
              event.preventDefault();
            }
          }

          if (47 < event.keyCode && event.keyCode < 58 || 95 < event.keyCode && event.keyCode < 106 || event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 9) {} else {
            event.preventDefault();
          }
        }
      }]);

      return CurrencyFormatterDirective;
    }();

    CurrencyFormatterDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("keyup", ["$event"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KeyboardEvent]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], CurrencyFormatterDirective.prototype, "onkeyup", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("keydown", ["$event"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KeyboardEvent]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], CurrencyFormatterDirective.prototype, "onkeydown", null);
    CurrencyFormatterDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appCurrencyFormatter]',
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]])], CurrencyFormatterDirective);
    /***/
  },

  /***/
  "./src/app/modules/shared/directives/decimal-formatter-param.directive.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/modules/shared/directives/decimal-formatter-param.directive.ts ***!
    \********************************************************************************/

  /*! exports provided: DecimalFormatterParamDirective */

  /***/
  function srcAppModulesSharedDirectivesDecimalFormatterParamDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DecimalFormatterParamDirective", function () {
      return DecimalFormatterParamDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var DecimalFormatterParamDirective =
    /*#__PURE__*/
    function () {
      function DecimalFormatterParamDirective(el, decimalPipe) {
        _classCallCheck(this, DecimalFormatterParamDirective);

        this.el = el;
        this.decimalPipe = decimalPipe;
      }

      _createClass(DecimalFormatterParamDirective, [{
        key: "onkeypress",
        value: function onkeypress(event) {
          console.log("pre" + this.predecimalplaces);
          console.log("post" + this.postdecimalplaces);
          var startPos = this.el.nativeElement.selectionStart;
          var endPos = this.el.nativeElement.selectionEnd;
          var keyupValue = '';

          if (startPos != endPos) {
            var result = this.el.nativeElement.value.split('');
            result.splice(startPos, endPos - startPos);
            result.splice(startPos, 0, String.fromCharCode(event.which));
            ;
            keyupValue = result.join('');
          } else {
            var x = this.el.nativeElement.value.split('');
            x.splice(startPos, 0, String.fromCharCode(event.which));
            keyupValue = x.join('');
          }

          var regxstr = "^(\-?(\\d{1," + this.predecimalplaces + "}|\-?\\d{0," + this.predecimalplaces + "}\\.\\d{0," + this.postdecimalplaces + "})?)$";
          var regex = new RegExp(regxstr);

          if (!regex.test(keyupValue)) {
            event.preventDefault();
          }
        }
      }]);

      return DecimalFormatterParamDirective;
    }();

    DecimalFormatterParamDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DecimalFormatterParamDirective.prototype, "predecimalplaces", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DecimalFormatterParamDirective.prototype, "postdecimalplaces", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("keypress", ["$event"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KeyboardEvent]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], DecimalFormatterParamDirective.prototype, "onkeypress", null);
    DecimalFormatterParamDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[decimalFormatterParam]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]])], DecimalFormatterParamDirective);
    /***/
  },

  /***/
  "./src/app/modules/shared/directives/decimal-formatter-with-precision.directive.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/modules/shared/directives/decimal-formatter-with-precision.directive.ts ***!
    \*****************************************************************************************/

  /*! exports provided: DecimalFormatterWithPrecisionDirective */

  /***/
  function srcAppModulesSharedDirectivesDecimalFormatterWithPrecisionDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DecimalFormatterWithPrecisionDirective", function () {
      return DecimalFormatterWithPrecisionDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var DecimalFormatterWithPrecisionDirective =
    /*#__PURE__*/
    function () {
      function DecimalFormatterWithPrecisionDirective(el, decimalPipe) {
        _classCallCheck(this, DecimalFormatterWithPrecisionDirective);

        this.el = el;
        this.decimalPipe = decimalPipe;
      }

      _createClass(DecimalFormatterWithPrecisionDirective, [{
        key: "onkeypress",
        value: function onkeypress(event) {
          var startPos = this.el.nativeElement.selectionStart;
          var endPos = this.el.nativeElement.selectionEnd;
          var keyupValue = '';

          if (startPos != endPos) {
            var result = this.el.nativeElement.value.split('');
            result.splice(startPos, endPos - startPos);
            result.splice(startPos, 0, String.fromCharCode(event.which));
            ;
            keyupValue = result.join('');
          } else {
            var x = this.el.nativeElement.value.split('');
            x.splice(startPos, 0, String.fromCharCode(event.which));
            keyupValue = x.join('');
          }

          var regex = new RegExp("^(\-?(\\d{1,3}|\-?\\d{0,6}\\.\\d{0,6})?)$");

          if (!regex.test(keyupValue)) {
            event.preventDefault();
          }
        }
      }]);

      return DecimalFormatterWithPrecisionDirective;
    }();

    DecimalFormatterWithPrecisionDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("keypress", ["$event"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KeyboardEvent]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], DecimalFormatterWithPrecisionDirective.prototype, "onkeypress", null);
    DecimalFormatterWithPrecisionDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appDecimalFormatterWithPrecision]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]])], DecimalFormatterWithPrecisionDirective);
    /***/
  },

  /***/
  "./src/app/modules/shared/directives/decimal-formatter.directive.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/modules/shared/directives/decimal-formatter.directive.ts ***!
    \**************************************************************************/

  /*! exports provided: DecimalFormatterDirective */

  /***/
  function srcAppModulesSharedDirectivesDecimalFormatterDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DecimalFormatterDirective", function () {
      return DecimalFormatterDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var DecimalFormatterDirective =
    /*#__PURE__*/
    function () {
      function DecimalFormatterDirective(el, decimalPipe) {
        _classCallCheck(this, DecimalFormatterDirective);

        this.el = el;
        this.decimalPipe = decimalPipe;
      }

      _createClass(DecimalFormatterDirective, [{
        key: "onkeypress",
        value: function onkeypress(event) {
          var startPos = this.el.nativeElement.selectionStart;
          var endPos = this.el.nativeElement.selectionEnd;
          var keyupValue = '';

          if (startPos != endPos) {
            var result = this.el.nativeElement.value.split('');
            result.splice(startPos, endPos - startPos);
            result.splice(startPos, 0, String.fromCharCode(event.which));
            ;
            keyupValue = result.join('');
          } else {
            var x = this.el.nativeElement.value.split('');
            x.splice(startPos, 0, String.fromCharCode(event.which));
            keyupValue = x.join('');
          }

          var regex = new RegExp("^(\-?(\\d{1,3}|\-?\\d{0,3}\\.\\d{0,3})?)$");

          if (!regex.test(keyupValue)) {
            event.preventDefault();
          } //var keyupValue = (this.el.nativeElement.value.insertAt(endPos, String.fromCharCode(event.which)));
          //var keyupValue = this.el.nativeElement.value.substr(0, endPos) + String.fromCharCode(event.which) + this.el.nativeElement.value.substr(endPos);
          //var keyupValue = this.el.nativeElement.value.substr(0, endPos) + String.fromCharCode(event.which) + this.el.nativeElement.value.substr(endPos);
          //var x = this.el.nativeElement.value.split('');
          //x.splice(startPos, 0, String.fromCharCode(event.which));
          //var keyupValue = x.join('');
          //var regex = new RegExp("^(\-?(\\d{1,3}|\-?\\d{0,3}\\.\\d{0,3})?)$");
          //if (!regex.test(keyupValue)) {
          //    event.preventDefault();
          //}

        }
      }]);

      return DecimalFormatterDirective;
    }();

    DecimalFormatterDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("keypress", ["$event"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KeyboardEvent]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], DecimalFormatterDirective.prototype, "onkeypress", null);
    DecimalFormatterDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[decimalFormatter]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]])], DecimalFormatterDirective);
    /***/
  },

  /***/
  "./src/app/modules/shared/directives/decimal-two-place-formatter.directive.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/modules/shared/directives/decimal-two-place-formatter.directive.ts ***!
    \************************************************************************************/

  /*! exports provided: DecimalTwoPlaceFormatterDirective */

  /***/
  function srcAppModulesSharedDirectivesDecimalTwoPlaceFormatterDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DecimalTwoPlaceFormatterDirective", function () {
      return DecimalTwoPlaceFormatterDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var DecimalTwoPlaceFormatterDirective =
    /*#__PURE__*/
    function () {
      function DecimalTwoPlaceFormatterDirective(el, decimalPipe) {
        _classCallCheck(this, DecimalTwoPlaceFormatterDirective);

        this.el = el;
        this.decimalPipe = decimalPipe;
      }

      _createClass(DecimalTwoPlaceFormatterDirective, [{
        key: "onkeypress",
        value: function onkeypress(event) {
          var startPos = this.el.nativeElement.selectionStart;
          var endPos = this.el.nativeElement.selectionEnd;
          var keyupValue = '';

          if (startPos != endPos) {
            var result = this.el.nativeElement.value.split('');
            result.splice(startPos, endPos - startPos);
            result.splice(startPos, 0, String.fromCharCode(event.which));
            ;
            keyupValue = result.join('');
          } else {
            var x = this.el.nativeElement.value.split('');
            x.splice(startPos, 0, String.fromCharCode(event.which));
            keyupValue = x.join('');
          }

          var regex = new RegExp("^(\-?(\\d{1,2}|\-?\\d{0,2}\\.\\d{0,2})?)$");

          if (!regex.test(keyupValue)) {
            event.preventDefault();
          } //var keyupValue = (this.el.nativeElement.value.insertAt(endPos, String.fromCharCode(event.which)));
          //var keyupValue = this.el.nativeElement.value.substr(0, endPos) + String.fromCharCode(event.which) + this.el.nativeElement.value.substr(endPos);
          //var keyupValue = this.el.nativeElement.value.substr(0, endPos) + String.fromCharCode(event.which) + this.el.nativeElement.value.substr(endPos);
          //var x = this.el.nativeElement.value.split('');
          //x.splice(startPos, 0, String.fromCharCode(event.which));
          //var keyupValue = x.join('');
          //var regex = new RegExp("^(\-?(\\d{1,3}|\-?\\d{0,3}\\.\\d{0,3})?)$");
          //if (!regex.test(keyupValue)) {
          //    event.preventDefault();
          //}

        }
      }]);

      return DecimalTwoPlaceFormatterDirective;
    }();

    DecimalTwoPlaceFormatterDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("keypress", ["$event"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KeyboardEvent]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], DecimalTwoPlaceFormatterDirective.prototype, "onkeypress", null);
    DecimalTwoPlaceFormatterDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[decimalTwoPlaceFormatter]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]])], DecimalTwoPlaceFormatterDirective);
    /***/
  },

  /***/
  "./src/app/modules/shared/directives/drag-and-drop.directive.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/shared/directives/drag-and-drop.directive.ts ***!
    \**********************************************************************/

  /*! exports provided: DragAndDropDirective */

  /***/
  function srcAppModulesSharedDirectivesDragAndDropDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragAndDropDirective", function () {
      return DragAndDropDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DragAndDropDirective =
    /*#__PURE__*/
    function () {
      function DragAndDropDirective() {
        _classCallCheck(this, DragAndDropDirective);

        this.dragAndDropDisabled = false;
        this.filesChangeEmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.background = '#ebebeb';
        this.borderradius = '20px';
        this.boxheight = '32px';
        this.placeholder = '';
      }

      _createClass(DragAndDropDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.dragAndDropDisabled) {
            this.placeholder = 'Select a file to upload';
          }
        } // The rest of the code with @HostBinding and @HostListeners ...

      }, {
        key: "onDrop",
        value: function onDrop(evt) {
          if (!this.dragAndDropDisabled) {
            evt.preventDefault();
            evt.stopPropagation();

            if (evt.dataTransfer.types.some(function (a) {
              return a == 'Files';
            })) {
              var files = evt.dataTransfer.files;

              if (files.length > 0) {
                this.filesChangeEmiter.emit(files[0]);
              }
            }

            this.background = '#ebebeb';
            this.borderradius = '20px';
            this.boxheight = '32px';
            this.placeholder = 'Select a file to upload';
          }
        }
      }, {
        key: "onDragOver",
        value: function onDragOver(event) {
          if (!this.dragAndDropDisabled) {
            event.preventDefault();
            this.background = '#fff';
            this.placeholder = 'Drop file here!';
            this.borderradius = '20px';
            this.boxheight = '32px';
          }
        }
      }, {
        key: "onDragLeave",
        value: function onDragLeave(event) {
          if (!this.dragAndDropDisabled) {
            event.preventDefault();
            this.background = '#ebebeb';
            this.placeholder = 'Select a file to upload';
            this.borderradius = '20px';
            this.boxheight = '32px';
          }
        }
      }]);

      return DragAndDropDirective;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], DragAndDropDirective.prototype, "dragAndDropDisabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], DragAndDropDirective.prototype, "filesChangeEmiter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.background'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DragAndDropDirective.prototype, "background", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.border-radius'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DragAndDropDirective.prototype, "borderradius", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.height'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DragAndDropDirective.prototype, "boxheight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('placeholder'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DragAndDropDirective.prototype, "placeholder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], DragAndDropDirective.prototype, "onDrop", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragover', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], DragAndDropDirective.prototype, "onDragOver", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragleave', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], DragAndDropDirective.prototype, "onDragLeave", null);
    DragAndDropDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appDragAndDrop]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DragAndDropDirective);
    /***/
  },

  /***/
  "./src/app/modules/shared/directives/highlightText.directive.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/shared/directives/highlightText.directive.ts ***!
    \**********************************************************************/

  /*! exports provided: HighlightDirective */

  /***/
  function srcAppModulesSharedDirectivesHighlightTextDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightDirective", function () {
      return HighlightDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var HighlightDirective =
    /*#__PURE__*/
    function () {
      function HighlightDirective(el, renderer, sanitizer) {
        _classCallCheck(this, HighlightDirective);

        this.el = el;
        this.renderer = renderer;
        this.sanitizer = sanitizer;
      }

      _createClass(HighlightDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this.searchedWords || !this.searchedWords.length || !this.classToApply) {
            this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.text);
            return;
          }

          this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.getFormattedText());
        }
      }, {
        key: "getFormattedText",
        value: function getFormattedText() {
          var re = new RegExp("(".concat(this.searchedWords.join('|'), ")"), 'g'); //return this.text.replace(re, `<span class="${this.classToApply}">$1</span>`);

          this.text = this.text.replace(re, "<span class=\"".concat(this.classToApply, "\">$1</span>")); // this.text = vkbeautify.xml(this.text);

          return this.sanitizer.bypassSecurityTrustHtml(this.text);
        }
      }]);

      return HighlightDirective;
    }();

    HighlightDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], HighlightDirective.prototype, "searchedWords", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], HighlightDirective.prototype, "text", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], HighlightDirective.prototype, "classToApply", void 0);
    HighlightDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appHighlight]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])], HighlightDirective);
    /***/
  },

  /***/
  "./src/app/modules/shared/directives/number-only.directive.ts":
  /*!********************************************************************!*\
    !*** ./src/app/modules/shared/directives/number-only.directive.ts ***!
    \********************************************************************/

  /*! exports provided: NumberOnlyDirective */

  /***/
  function srcAppModulesSharedDirectivesNumberOnlyDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumberOnlyDirective", function () {
      return NumberOnlyDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NumberOnlyDirective =
    /*#__PURE__*/
    function () {
      function NumberOnlyDirective(el) {
        _classCallCheck(this, NumberOnlyDirective);

        this.el = el;
      }

      _createClass(NumberOnlyDirective, [{
        key: "onkeydown",
        value: function onkeydown(event) {
          if (47 < event.keyCode && event.keyCode < 58 || 95 < event.keyCode && event.keyCode < 106 || event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 9 || event.keyCode == 13) {} else {
            event.preventDefault();
          }
        }
      }]);

      return NumberOnlyDirective;
    }();

    NumberOnlyDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("keydown", ["$event"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KeyboardEvent]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], NumberOnlyDirective.prototype, "onkeydown", null);
    NumberOnlyDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appNumberOnly]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], NumberOnlyDirective);
    /***/
  },

  /***/
  "./src/app/modules/shared/directives/wholenumber.directive.ts":
  /*!********************************************************************!*\
    !*** ./src/app/modules/shared/directives/wholenumber.directive.ts ***!
    \********************************************************************/

  /*! exports provided: WholenumberDirective */

  /***/
  function srcAppModulesSharedDirectivesWholenumberDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WholenumberDirective", function () {
      return WholenumberDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var WholenumberDirective =
    /*#__PURE__*/
    function () {
      function WholenumberDirective(el, decimalPipe) {
        _classCallCheck(this, WholenumberDirective);

        this.el = el;
        this.decimalPipe = decimalPipe;
      }

      _createClass(WholenumberDirective, [{
        key: "onkeyup",
        value: function onkeyup(event) {
          if (47 < event.keyCode && event.keyCode < 58 || 95 < event.keyCode && event.keyCode < 106 || event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 9) {
            this.el.nativeElement.value = this.decimalPipe.transform(this.el.nativeElement.value.replace(/[\,\.]/g, ''));
          } else if (event.keyCode == 109 || event.keyCode == 189) {} else {
            event.preventDefault();
          }
        }
      }, {
        key: "onkeydown",
        value: function onkeydown(event) {
          if (this.el.nativeElement.value.replace(/[\,\.]/g, '').length >= 15) {
            if (event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 9) {} else {
              event.preventDefault();
            }
          }

          if (47 < event.keyCode && event.keyCode < 58 || 95 < event.keyCode && event.keyCode < 106 || event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 9) {} else if (event.keyCode == 109 || event.keyCode == 189) {
            if (this.el.nativeElement.value.length == 0) {} else event.preventDefault();
          } else {
            event.preventDefault();
          }
        }
      }]);

      return WholenumberDirective;
    }();

    WholenumberDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("keyup", ["$event"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KeyboardEvent]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], WholenumberDirective.prototype, "onkeyup", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("keydown", ["$event"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KeyboardEvent]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], WholenumberDirective.prototype, "onkeydown", null);
    WholenumberDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appWholenumber]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]])], WholenumberDirective);
    /***/
  },

  /***/
  "./src/app/modules/shared/pipes/decimalwithoutzero.pipe.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/shared/pipes/decimalwithoutzero.pipe.ts ***!
    \*****************************************************************/

  /*! exports provided: DecimalwithoutzeroPipe */

  /***/
  function srcAppModulesSharedPipesDecimalwithoutzeroPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DecimalwithoutzeroPipe", function () {
      return DecimalwithoutzeroPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DecimalwithoutzeroPipe =
    /*#__PURE__*/
    function () {
      function DecimalwithoutzeroPipe() {
        _classCallCheck(this, DecimalwithoutzeroPipe);
      }

      _createClass(DecimalwithoutzeroPipe, [{
        key: "transform",
        value: function transform(value, positions) {
          //console.log('value :' + value + 'position :' + positions);
          if (value !== undefined && value !== null) {
            //var numbers = value.split('.');
            //var postDecimal = numbers[1];
            //if (parseFloat(postDecimal) == 0 || postDecimal == undefined) {
            //    return parseFloat(numbers[0]);
            //}
            //else {
            //    return parseFloat(value).toFixed(positions);
            //}
            var retval = Math.round(value * 100) / 100;
            var numbers = retval.toString().split('.');
            var preDecimal = Number(numbers[0]);
            var postDecimal = numbers[1] == undefined ? '00' : numbers[1].toString();

            if (postDecimal.toString().length < 2) {
              postDecimal = postDecimal.toString() + "0"; //console.log(postDecimal);
              //console.log(parseFloat(preDecimal.toString() + "." + postDecimal.toString()).toFixed(2));

              return (preDecimal.toString() + "." + postDecimal.toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
              //console.log(Math.round((value * 100) / 100).toFixed(2));
              return (Math.round(value * 100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
          }

          return value;
        }
      }]);

      return DecimalwithoutzeroPipe;
    }();

    DecimalwithoutzeroPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'decimalwithoutzeroPipe',
      pure: false
    })], DecimalwithoutzeroPipe);
    /***/
  },

  /***/
  "./src/app/modules/shared/pipes/limit-characters.pipe.ts":
  /*!***************************************************************!*\
    !*** ./src/app/modules/shared/pipes/limit-characters.pipe.ts ***!
    \***************************************************************/

  /*! exports provided: LimitCharacters */

  /***/
  function srcAppModulesSharedPipesLimitCharactersPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LimitCharacters", function () {
      return LimitCharacters;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LimitCharacters =
    /*#__PURE__*/
    function () {
      function LimitCharacters() {
        _classCallCheck(this, LimitCharacters);
      }

      _createClass(LimitCharacters, [{
        key: "transform",
        value: function transform(value, numberOfCharacters) {
          if (value !== undefined && value !== null) {
            var trail = "...";
            return value.length > numberOfCharacters ? value.substring(0, numberOfCharacters) + trail : value;
          }

          return value;
        }
      }]);

      return LimitCharacters;
    }();

    LimitCharacters = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'limitCharacters',
      pure: false
    })], LimitCharacters);
    /***/
  },

  /***/
  "./src/app/modules/shared/pipes/phone.pipe.ts":
  /*!****************************************************!*\
    !*** ./src/app/modules/shared/pipes/phone.pipe.ts ***!
    \****************************************************/

  /*! exports provided: PhonePipe */

  /***/
  function srcAppModulesSharedPipesPhonePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhonePipe", function () {
      return PhonePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var libphonenumber_js_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! libphonenumber-js/min */
    "./node_modules/libphonenumber-js/min/index.js");

    var PhonePipe =
    /*#__PURE__*/
    function () {
      function PhonePipe() {
        _classCallCheck(this, PhonePipe);
      }

      _createClass(PhonePipe, [{
        key: "transform",
        value: function transform(phoneValue, country) {
          try {
            var phoneNumber = Object(libphonenumber_js_min__WEBPACK_IMPORTED_MODULE_2__["parsePhoneNumber"])(phoneValue + '', country);
            return phoneNumber.formatNational();
          } catch (error) {
            return phoneValue;
          }
        }
      }]);

      return PhonePipe;
    }();

    PhonePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'phone'
    })], PhonePipe);
    /***/
  },

  /***/
  "./src/app/modules/shared/pipes/reverse.pipe.ts":
  /*!******************************************************!*\
    !*** ./src/app/modules/shared/pipes/reverse.pipe.ts ***!
    \******************************************************/

  /*! exports provided: ReversePipe */

  /***/
  function srcAppModulesSharedPipesReversePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReversePipe", function () {
      return ReversePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ReversePipe =
    /*#__PURE__*/
    function () {
      function ReversePipe() {
        _classCallCheck(this, ReversePipe);
      }

      _createClass(ReversePipe, [{
        key: "transform",
        value: function transform(value) {
          return value.slice().reverse();
        }
      }]);

      return ReversePipe;
    }();

    ReversePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'reverse'
    })], ReversePipe);
    /***/
  },

  /***/
  "./src/app/modules/shared/pipes/unique.pipe.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modules/shared/pipes/unique.pipe.ts ***!
    \*****************************************************/

  /*! exports provided: UniquePipe */

  /***/
  function srcAppModulesSharedPipesUniquePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniquePipe", function () {
      return UniquePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);

    var UniquePipe =
    /*#__PURE__*/
    function () {
      function UniquePipe() {
        _classCallCheck(this, UniquePipe);
      }

      _createClass(UniquePipe, [{
        key: "transform",
        value: function transform(value, param) {
          if (value !== undefined && value !== null) {
            return lodash__WEBPACK_IMPORTED_MODULE_2__["uniqBy"](value, param);
          }

          return value;
        }
      }]);

      return UniquePipe;
    }();

    UniquePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'unique',
      pure: false
    })], UniquePipe);
    /***/
  },

  /***/
  "./src/app/modules/shared/pipes/xml-highlight.pipe.ts":
  /*!************************************************************!*\
    !*** ./src/app/modules/shared/pipes/xml-highlight.pipe.ts ***!
    \************************************************************/

  /*! exports provided: XMLHighlightPipe */

  /***/
  function srcAppModulesSharedPipesXmlHighlightPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XMLHighlightPipe", function () {
      return XMLHighlightPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var XMLHighlightPipe =
    /*#__PURE__*/
    function () {
      function XMLHighlightPipe(sanitizer) {
        _classCallCheck(this, XMLHighlightPipe);

        this.sanitizer = sanitizer;
      }

      _createClass(XMLHighlightPipe, [{
        key: "transform",
        value: function transform(text, search) {
          var pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
          pattern = pattern.split(' ').filter(function (t) {
            return t.length > 0;
          }).join('|');
          var regex = new RegExp(pattern, 'gi'); //  return search ? text.replace(regex, (match) => `<mark>${match}</mark>`) : text;

          return this.sanitizer.bypassSecurityTrustHtml(text.replace(regex, function (match) {
            return "<mark>".concat(match, "</mark>");
          })); //return this.sanitizer.bypassSecurityTrustHtml(text.replace(new RegExp(pattern, 'gi'), `<span class="highlight">${search}</span>`));
          //if (!search) {
          //    return text;
          //}
          //var pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
          //pattern = pattern.split(' ').filter((t) => {
          //    return t.length > 0;
          //}).join('|');
          //// Match in a case insensitive maneer
          //const re = new RegExp(pattern, 'gi');
          //const match = text.match(re);
          //// If there's no match, just return the original value.
          //if (!match) {
          //    return text;
          //}
          //return this.sanitizer.bypassSecurityTrustHtml(text.replace(new RegExp(pattern, 'gi'), `<span class="highlight">${match[0]}</span>`));
        }
      }]);

      return XMLHighlightPipe;
    }();

    XMLHighlightPipe.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }];
    };

    XMLHighlightPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'xmlSearch'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])], XMLHighlightPipe);
    /***/
  },

  /***/
  "./src/app/modules/shared/pipes/xml.pipe.ts":
  /*!**************************************************!*\
    !*** ./src/app/modules/shared/pipes/xml.pipe.ts ***!
    \**************************************************/

  /*! exports provided: XMLPipe */

  /***/
  function srcAppModulesSharedPipesXmlPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XMLPipe", function () {
      return XMLPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var vkbeautify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! vkbeautify */
    "./node_modules/vkbeautify/index.js");
    /* harmony import */


    var vkbeautify__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(vkbeautify__WEBPACK_IMPORTED_MODULE_2__);

    var XMLPipe =
    /*#__PURE__*/
    function () {
      function XMLPipe() {
        _classCallCheck(this, XMLPipe);
      }

      _createClass(XMLPipe, [{
        key: "transform",
        value: function transform(value) {
          return vkbeautify__WEBPACK_IMPORTED_MODULE_2__["xml"](value);
        }
      }]);

      return XMLPipe;
    }();

    XMLPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'xml',
      pure: false
    })], XMLPipe);
    /***/
  },

  /***/
  "./src/app/modules/shared/services/shared.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modules/shared/services/shared.service.ts ***!
    \***********************************************************/

  /*! exports provided: SharedService */

  /***/
  function srcAppModulesSharedServicesSharedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedService", function () {
      return SharedService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../core/services/api.service */
    "./src/app/core/services/api.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); //import { iBasicFilter } from '../../shared/interfaces/ifilter';


    var SharedService =
    /*#__PURE__*/
    function () {
      function SharedService(_apiService) {
        _classCallCheck(this, SharedService);

        this._apiService = _apiService;
        this.supportTeamSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]("");
      }

      _createClass(SharedService, [{
        key: "editsupportTeam",
        value: function editsupportTeam(newValue) {
          this.supportTeamSubject.next(newValue);
        }
      }, {
        key: "getFiscalYear",
        value: function getFiscalYear(tNumber) {
          return this._apiService.getDataWithParams("FDDBuyer/FiscalYear", {
            tNumber: tNumber
          });
        }
      }, {
        key: "getSpendPoolHigh",
        value: function getSpendPoolHigh(tNumber) {
          return this._apiService.getDataWithParams("FDDBuyer/SpendPoolHigh", {
            tNumber: tNumber
          });
        }
      }, {
        key: "getSubRegion",
        value: function getSubRegion() {
          return this._apiService.getData("FDDBuyer/SubRegion");
        }
      }, {
        key: "getProbability",
        value: function getProbability() {
          return this._apiService.getData("FDDBuyer/Probability");
        }
      }, {
        key: "getPurchasingGroup",
        value: function getPurchasingGroup() {
          return this._apiService.getData("FDDBuyer/PurchaseGroup");
        }
      }, {
        key: "getBackupBuyer",
        value: function getBackupBuyer() {
          return this._apiService.getData("FDDBuyer/BackUpBuyer");
        }
      }, {
        key: "getSpendPoolHighMediumLow",
        value: function getSpendPoolHighMediumLow() {
          return this._apiService.getData("FDDBuyer/SpendPoolHighMediumLow");
        }
      }, {
        key: "getSpendPoolMediumById",
        value: function getSpendPoolMediumById(sphID) {
          return this._apiService.getDataWithParams("FDDBuyer/SpendPoolMediumByID", {
            SPH: sphID
          });
        }
      }, {
        key: "getAllSpendPoolMediums",
        value: function getAllSpendPoolMediums() {
          return this._apiService.getData("FDDBuyer/AllSpendPoolMediums");
        }
      }, {
        key: "getSpendPoolLowById",
        value: function getSpendPoolLowById(spmId) {
          return this._apiService.getDataWithParams("FDDBuyer/SpendPoolLowByID", {
            SPM: spmId
          });
        }
      }, {
        key: "getPlantById",
        value: function getPlantById(rgnId) {
          return this._apiService.getDataWithParams("Support/PlantByID", {
            regionId: rgnId
          });
        }
      }, {
        key: "uploadAttachment",
        value: function uploadAttachment(fileData, param) {
          var formData = new FormData();
          formData.append('file', fileData);
          return this._apiService.postFile("FDDBuyer/UploadProjectAttachment", formData, param);
        }
      }, {
        key: "DownloadProjectTemplate",
        value: function DownloadProjectTemplate(param) {
          var role = param.role;
          return this._apiService.getBlobwithParameter("FDDBuyer/DownloadProjectTemplate?SpendPoolHighID=" + param.SpendPoolHighID, role);
        } //uncomment this for multiple attachments
        //uploadMultipleAttachment(assessmentId, attachmentKey, fileData: File[]) {
        //    var formData = new FormData();
        //    for (var i = 0; i < fileData.length; i++) {
        //        formData.append('file' + i, fileData[i]);
        //    }
        //    return this._apiService.postData("Common/UploadMultipleAttachment", formData);
        //}

      }, {
        key: "downloadResponse",
        value: function downloadResponse(resp, fileName) {
          var ieEDGE = navigator.userAgent.match(/Edge/g);
          var ie = navigator.userAgent.match(/.NET/g); // IE 11+

          var oldIE = navigator.userAgent.match(/MSIE/g); //let fileName: string = attachmentDetails.AttachmentName;

          if (ie || oldIE || ieEDGE) {
            window.navigator.msSaveOrOpenBlob(resp, fileName);
          } else {
            var url = window.URL.createObjectURL(resp);
            var a = document.createElement('a');
            document.body.appendChild(a);
            a.setAttribute('style', 'display: none');
            a.href = url;
            a.download = fileName;
            a.click();
            window.URL.revokeObjectURL(url);
            a.remove(); // remove the element
          }
        }
      }, {
        key: "approveRejectADJToREGProject",
        value: function approveRejectADJToREGProject(_approveRejectADJToREGProject) {
          return this._apiService.postData("Common/ApproveRejectADJToREGProject", _approveRejectADJToREGProject);
        }
      }, {
        key: "downloadTemplate",
        value: function downloadTemplate(templateKey) {
          var _this21 = this;

          return this._apiService.downloadTemplate(templateKey, 'Common/DownloadTemplate').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            var attachmentData = {
              FileData: resp.body,
              FileName: resp.headers.get('x-fileName')
            };

            _this21.downloadResponse(attachmentData.FileData, attachmentData.FileName);
          }));
        }
      }, {
        key: "getCategoryBySubsector",
        value: function getCategoryBySubsector(subsector) {
          return this._apiService.getDataWithParams("FDDBuyer/CategoryBySubsector", {
            subsector: subsector
          });
        }
      }, {
        key: "getGetProfitCenter",
        value: function getGetProfitCenter(CCPC) {
          return this._apiService.getDataWithParams("Support/ProfitCenter", {
            CCPC: CCPC
          });
        }
      }, {
        key: "getSupportTeam",
        value: function getSupportTeam() {
          return this._apiService.getData("Common/SupportTeam");
        }
      }]);

      return SharedService;
    }();

    SharedService.ctorParameters = function () {
      return [{
        type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    SharedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])], SharedService);
    /***/
  },

  /***/
  "./src/app/modules/shared/shared.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/modules/shared/shared.module.ts ***!
    \*************************************************/

  /*! exports provided: getHighlightLanguages, SharedModule */

  /***/
  function srcAppModulesSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getHighlightLanguages", function () {
      return getHighlightLanguages;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bar-rating */
    "./node_modules/ngx-bar-rating/index.js");
    /* harmony import */


    var ng_click_outside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-click-outside */
    "./node_modules/ng-click-outside/lib_esmodule/index.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_angular_grid_angular_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/angular-grid/angular-grid.component */
    "./src/app/modules/shared/components/angular-grid/angular-grid.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _directives_currency_formatter_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./directives/currency-formatter.directive */
    "./src/app/modules/shared/directives/currency-formatter.directive.ts");
    /* harmony import */


    var _directives_number_only_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./directives/number-only.directive */
    "./src/app/modules/shared/directives/number-only.directive.ts");
    /* harmony import */


    var _layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../layout/components/footer/footer.component */
    "./src/app/layout/components/footer/footer.component.ts");
    /* harmony import */


    var _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../layout/components/header/header.component */
    "./src/app/layout/components/header/header.component.ts");
    /* harmony import */


    var _layout_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../layout/components/sidebar/sidebar.component */
    "./src/app/layout/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */


    var _core_services_authorization_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../core/services/authorization.service */
    "./src/app/core/services/authorization.service.ts");
    /* harmony import */


    var _core_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../core/services/auth-guard.service */
    "./src/app/core/services/auth-guard.service.ts");
    /* harmony import */


    var _core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../core/services/storage-helper.service */
    "./src/app/core/services/storage-helper.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _core_services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../../core/services/auth-interceptor.service */
    "./src/app/core/services/auth-interceptor.service.ts");
    /* harmony import */


    var _core_services_api_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../../core/services/api.service */
    "./src/app/core/services/api.service.ts");
    /* harmony import */


    var _core_services_login_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../../core/services/login.service */
    "./src/app/core/services/login.service.ts");
    /* harmony import */


    var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/modal/modal.component */
    "./src/app/modules/shared/components/modal/modal.component.ts");
    /* harmony import */


    var _directives_wholenumber_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./directives/wholenumber.directive */
    "./src/app/modules/shared/directives/wholenumber.directive.ts");
    /* harmony import */


    var _shared_pipes_unique_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ../shared/pipes/unique.pipe */
    "./src/app/modules/shared/pipes/unique.pipe.ts");
    /* harmony import */


    var _shared_pipes_limit_characters_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ../shared/pipes/limit-characters.pipe */
    "./src/app/modules/shared/pipes/limit-characters.pipe.ts");
    /* harmony import */


    var _directives_decimal_formatter_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./directives/decimal-formatter.directive */
    "./src/app/modules/shared/directives/decimal-formatter.directive.ts");
    /* harmony import */


    var _directives_decimal_two_place_formatter_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./directives/decimal-two-place-formatter.directive */
    "./src/app/modules/shared/directives/decimal-two-place-formatter.directive.ts");
    /* harmony import */


    var _directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./directives/drag-and-drop.directive */
    "./src/app/modules/shared/directives/drag-and-drop.directive.ts");
    /* harmony import */


    var _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./pipes/reverse.pipe */
    "./src/app/modules/shared/pipes/reverse.pipe.ts");
    /* harmony import */


    var _directives_decimal_formatter_param_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./directives/decimal-formatter-param.directive */
    "./src/app/modules/shared/directives/decimal-formatter-param.directive.ts");
    /* harmony import */


    var primeng_multiselect__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! primeng/multiselect */
    "./node_modules/primeng/multiselect.js");
    /* harmony import */


    var primeng_multiselect__WEBPACK_IMPORTED_MODULE_33___default =
    /*#__PURE__*/
    __webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_33__);
    /* harmony import */


    var _pipes_decimalwithoutzero_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./pipes/decimalwithoutzero.pipe */
    "./src/app/modules/shared/pipes/decimalwithoutzero.pipe.ts");
    /* harmony import */


    var src_app_core_services_pending_changes_guard__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! src/app/core/services/pending-changes.guard */
    "./src/app/core/services/pending-changes.guard.ts");
    /* harmony import */


    var _directives_decimal_formatter_with_precision_directive__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./directives/decimal-formatter-with-precision.directive */
    "./src/app/modules/shared/directives/decimal-formatter-with-precision.directive.ts");
    /* harmony import */


    var mat_select_autocomplete__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! mat-select-autocomplete */
    "./node_modules/mat-select-autocomplete/fesm2015/mat-select-autocomplete.js");
    /* harmony import */


    var _shared_pipes_xml_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ../shared/pipes/xml.pipe */
    "./src/app/modules/shared/pipes/xml.pipe.ts");
    /* harmony import */


    var _shared_pipes_xml_highlight_pipe__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ../shared/pipes/xml-highlight.pipe */
    "./src/app/modules/shared/pipes/xml-highlight.pipe.ts");
    /* harmony import */


    var _shared_pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ../shared/pipes/phone.pipe */
    "./src/app/modules/shared/pipes/phone.pipe.ts");
    /* harmony import */


    var angular_archwizard__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! angular-archwizard */
    "./node_modules/angular-archwizard/fesm2015/angular-archwizard.js");
    /* harmony import */


    var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ngx-highlightjs */
    "./node_modules/ngx-highlightjs/fesm2015/ngx-highlightjs.js");
    /* harmony import */


    var _directives_highlightText_directive__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./directives/highlightText.directive */
    "./src/app/modules/shared/directives/highlightText.directive.ts"); // import { PieChartComponent } from './components/pie-chart/pie-chart.component';
    // import { BarChartComponent } from './components/bar-chart/bar-chart.component';
    // import { LineChartComponent } from './components/line-chart/line-chart.component';
    // import { WorldMapChartComponent } from './components/world-map-chart/world-map-chart.component';
    //import { FilterComponent } from './components/filter/filter.component';
    //import { BasicComponent } from './components/filter/basic/basic.component';
    //import { AdvancedComponent } from './components/filter/advanced/advanced.component';
    // import { FileUploadComponent } from './components/file-upload/file-upload.component';
    // import { NotificationComponent } from './components/notification/notification.component';
    // import { FileDownloadComponent } from './components/file-download/file-download.component';


    var globalRippleConfig = {
      disabled: true,
      animation: {
        enterDuration: 300,
        exitDuration: 0
      }
    };

    function getHighlightLanguages() {
      return {
        //typescript: () => import('highlight.js/lib/languages/typescript'),
        //css: () => import('highlight.js/lib/languages/css'),
        xml: function xml() {
          return __webpack_require__.e(
          /*! import() | highlight-js-lib-languages-xml */
          "common").then(__webpack_require__.t.bind(null,
          /*! highlight.js/lib/languages/xml */
          "./node_modules/highlight.js/lib/languages/xml.js", 7));
        }
      };
    }

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [// PieChartComponent,
      // BarChartComponent,
      // LineChartComponent,
      // WorldMapChartComponent,
      // FilterComponent,
      // BasicComponent,
      // AdvancedComponent,
      _components_angular_grid_angular_grid_component__WEBPACK_IMPORTED_MODULE_9__["AngularGridComponent"], _directives_currency_formatter_directive__WEBPACK_IMPORTED_MODULE_11__["CurrencyFormatterDirective"], _directives_number_only_directive__WEBPACK_IMPORTED_MODULE_12__["NumberOnlyDirective"], _layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"], _layout_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__["SidebarComponent"], _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_24__["ModalComponent"], _directives_wholenumber_directive__WEBPACK_IMPORTED_MODULE_25__["WholenumberDirective"], _shared_pipes_unique_pipe__WEBPACK_IMPORTED_MODULE_26__["UniquePipe"], _shared_pipes_limit_characters_pipe__WEBPACK_IMPORTED_MODULE_27__["LimitCharacters"], _directives_decimal_formatter_directive__WEBPACK_IMPORTED_MODULE_28__["DecimalFormatterDirective"], _directives_decimal_two_place_formatter_directive__WEBPACK_IMPORTED_MODULE_29__["DecimalTwoPlaceFormatterDirective"], _directives_decimal_formatter_param_directive__WEBPACK_IMPORTED_MODULE_32__["DecimalFormatterParamDirective"], // FileUploadComponent,
      _directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_30__["DragAndDropDirective"], // FileUploadModalComponent,
      _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_31__["ReversePipe"], // NotificationComponent,
      // FileDownloadComponent,
      _pipes_decimalwithoutzero_pipe__WEBPACK_IMPORTED_MODULE_34__["DecimalwithoutzeroPipe"], _directives_decimal_formatter_with_precision_directive__WEBPACK_IMPORTED_MODULE_36__["DecimalFormatterWithPrecisionDirective"], _shared_pipes_xml_pipe__WEBPACK_IMPORTED_MODULE_38__["XMLPipe"], _shared_pipes_xml_highlight_pipe__WEBPACK_IMPORTED_MODULE_39__["XMLHighlightPipe"], _directives_highlightText_directive__WEBPACK_IMPORTED_MODULE_43__["HighlightDirective"], _shared_pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_40__["PhonePipe"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], ngx_bar_rating__WEBPACK_IMPORTED_MODULE_4__["BarRatingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_33__["MultiSelectModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_5__["ClickOutsideModule"], mat_select_autocomplete__WEBPACK_IMPORTED_MODULE_37__["SelectAutocompleteModule"], angular_archwizard__WEBPACK_IMPORTED_MODULE_41__["ArchwizardModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_42__["HighlightModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"]],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], // PieChartComponent,
      // BarChartComponent,
      // WorldMapChartComponent,
      _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], //FilterComponent,
      _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], //BasicComponent,
      //AdvancedComponent,
      _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _components_angular_grid_angular_grid_component__WEBPACK_IMPORTED_MODULE_9__["AngularGridComponent"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"], _directives_currency_formatter_directive__WEBPACK_IMPORTED_MODULE_11__["CurrencyFormatterDirective"], _directives_number_only_directive__WEBPACK_IMPORTED_MODULE_12__["NumberOnlyDirective"], _layout_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _layout_components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"], _layout_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__["SidebarComponent"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"], _directives_wholenumber_directive__WEBPACK_IMPORTED_MODULE_25__["WholenumberDirective"], _shared_pipes_unique_pipe__WEBPACK_IMPORTED_MODULE_26__["UniquePipe"], _shared_pipes_limit_characters_pipe__WEBPACK_IMPORTED_MODULE_27__["LimitCharacters"], _directives_decimal_formatter_directive__WEBPACK_IMPORTED_MODULE_28__["DecimalFormatterDirective"], _directives_decimal_formatter_param_directive__WEBPACK_IMPORTED_MODULE_32__["DecimalFormatterParamDirective"], _directives_decimal_two_place_formatter_directive__WEBPACK_IMPORTED_MODULE_29__["DecimalTwoPlaceFormatterDirective"], //FileUploadComponent,
      _directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_30__["DragAndDropDirective"], //FileUploadModalComponent,
      _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_31__["ReversePipe"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], ngx_bar_rating__WEBPACK_IMPORTED_MODULE_4__["BarRatingModule"], //FileDownloadComponent,
      _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_33__["MultiSelectModule"], _pipes_decimalwithoutzero_pipe__WEBPACK_IMPORTED_MODULE_34__["DecimalwithoutzeroPipe"], _directives_decimal_formatter_with_precision_directive__WEBPACK_IMPORTED_MODULE_36__["DecimalFormatterWithPrecisionDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_5__["ClickOutsideModule"], mat_select_autocomplete__WEBPACK_IMPORTED_MODULE_37__["SelectAutocompleteModule"], _shared_pipes_xml_pipe__WEBPACK_IMPORTED_MODULE_38__["XMLPipe"], _shared_pipes_xml_highlight_pipe__WEBPACK_IMPORTED_MODULE_39__["XMLHighlightPipe"], _directives_highlightText_directive__WEBPACK_IMPORTED_MODULE_43__["HighlightDirective"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"], _shared_pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_40__["PhonePipe"]],
      entryComponents: [_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_24__["ModalComponent"]],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_16__["CookieService"], _core_services_authorization_service__WEBPACK_IMPORTED_MODULE_17__["AuthorizationService"], _core_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__["AuthGuardService"], _core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_19__["StorageHelper"], _core_services_api_service__WEBPACK_IMPORTED_MODULE_22__["ApiService"], _core_services_login_service__WEBPACK_IMPORTED_MODULE_23__["LoginService"], src_app_core_services_pending_changes_guard__WEBPACK_IMPORTED_MODULE_35__["PendingChangesGuard"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HTTP_INTERCEPTORS"],
        useClass: _core_services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_21__["AuthInterceptorService"],
        multi: true
      }, {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
        useValue: {}
      }, {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],
        useValue: []
      }, {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_RIPPLE_GLOBAL_OPTIONS"],
        useValue: globalRippleConfig
      }, {
        provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_42__["HIGHLIGHT_OPTIONS"],
        useValue: {
          lineNumbers: true
        }
      }],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var environment = {
      production: false,
      LocalClientID: '439128424113-psvh4v5dosvnstbm3u816krvejeoojgs.apps.googleusercontent.com',
      QAClientID: '785957131309-2kiq6n4emihnm97a8iaecffii54jfv6f.apps.googleusercontent.com',
      LocalAPIURL: 'http://localhost:60407/',
      QAAPIURL: 'http://localhost:60409/' // client_id: '785957131309-2kiq6n4emihnm97a8iaecffii54jfv6f.apps.googleusercontent.com', //Hirakant
      // client_id: '439128424113-psvh4v5dosvnstbm3u816krvejeoojgs.apps.googleusercontent.com',//Shukraj   

    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\DirectTrust\Code\TeamRehab\ClientApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map