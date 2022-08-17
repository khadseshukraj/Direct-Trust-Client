function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-actions-actions-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/actions/components/action-card/action-card.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/actions/components/action-card/action-card.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesActionsComponentsActionCardActionCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"mat-card action-card-container\" (mouseover)=\"setHover(actionCard)\" (click)=\"goToAction(actionCard.Route)\"\r\n          (mouseout)=\"removeHover(actionCard)\">\r\n    <!--(click)=\"goToAction(actionCard.Route)\"-->\r\n    <!--<mat-card class=\"mat-card action-card-container\" [style.background-color]=\"actionCard.IconBgColor\" [style.color]=\"white\">-->\r\n\r\n    <a class=\"action-link mat-card\" [style.background-color]=\"bgColor\">\r\n        <div>\r\n            <div [ngClass]=\"actionCard.IconClass\" [style.color]=\"actionCard.IconBgColor\">\r\n                <ion-icon [name]=\"actionCard.IconClass\" class=\"icon-common\"></ion-icon>\r\n            </div>\r\n            <div class=\"actioncard-title\" [style.color]=\"actionCard.IconBgColor\">\r\n                {{ actionCard.Title }}\r\n            </div>\r\n            <div class=\"actioncard-subtitle\" [style.color]=\"actionCard.IconBgColor\">\r\n                {{ actionCard.Description }}\r\n            </div>\r\n        </div>\r\n    </a>\r\n</mat-card>\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/actions/components/action/action.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/actions/components/action/action.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesActionsComponentsActionActionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-content-wrapper\">\r\n    <!--<div class=\"page-header\" style=\"margin-left: 10px;overflow:auto;\">\r\n        <span><h2>Modules -</h2></span>\r\n    </div>-->\r\n    <!--<h2 style=\"margin-top: 30px;\">Modules <span class=\"badge badge-secondary\"> Introduction</span></h2>-->\r\n    <div class=\"row action-card-row\" style=\"overflow:auto;max-height:calc(100vh - 105px);\">\r\n        <div class=\"col-sm-4 col-class\" *ngFor=\"let actionCard of actionCardList;\">\r\n            <div class=\"actioncard-content\">\r\n                <app-action-card [action-card]=\"actionCard\"></app-action-card>\r\n            </div>\r\n        </div>\r\n\r\n        <!--<div class=\"referrercontainer\" style=\"margin-top: 6px;\">\r\n            <div class=\"alert alert-primary\">\r\n                <div class=\"row\"><div class=\"col-sm-6\"><ion-icon name=\"mail-unread-outline\" class=\"iconsize-medium handcursor icon-vertical-align-bottom\"></ion-icon><span class=\"font-weight-bold\">Incoming Messages</span></div></div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">A description list is perfect for defining terms.</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"alert alert-secondary\">\r\n                <div class=\"row paddingtop\"><div class=\"col-sm-6\"><span class=\"font-weight-bold\"><ion-icon name=\"people-outline\" class=\"iconsize-medium handcursor icon-vertical-align-bottom\"></ion-icon> Referrer Maintenance</span></div></div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">A description list is perfect for defining terms.</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"alert alert-success\">\r\n                <div class=\"row paddingtop\"><div class=\"col-sm-6\"><span class=\"font-weight-bold\"><ion-icon name=\"mail-open-outline\" class=\"iconsize-medium handcursor icon-vertical-align-bottom\"></ion-icon> Patient Referral Processed Messages</span></div></div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">A description list is perfect for defining terms.</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"alert alert-danger\">\r\n                <div class=\"row paddingtop\"><div class=\"col-sm-6\"><span class=\"font-weight-bold\"><ion-icon name=\"medkit-outline\" class=\"iconsize-medium handcursor icon-vertical-align-bottom\"></ion-icon> Cilnic Mapping</span></div></div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">A description list is perfect for defining terms.</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"alert alert-warning\">\r\n                <div class=\"row paddingtop\"><div class=\"col-sm-6\"><span class=\"font-weight-bold\"><ion-icon name=\"cloud-upload-outline\" class=\"iconsize-medium handcursor icon-vertical-align-bottom\"></ion-icon> POC's Sent For Approval</span></div></div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">A description list is perfect for defining terms.</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"alert alert-info\">\r\n                <div class=\"row paddingtop\"><div class=\"col-sm-6\"><span class=\"font-weight-bold\"><ion-icon name=\"checkmark-circle-outline\" class=\"iconsize-medium handcursor icon-vertical-align-bottom\"></ion-icon> POC's Processed</span></div></div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">A description list is perfect for defining terms.</div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>-->\r\n        <!--<dt class=\"col-sm-3\"><ion-icon name=\"people-outline\"></ion-icon> Referrer Maintenance</dt>\r\n        <dd class=\"col-sm-9\">A description list is perfect for defining terms.</dd>\r\n\r\n        <dt class=\"col-sm-3\"><ion-icon name=\"mail-open-outline\"></ion-icon> Patient Referral Processed Messages</dt>\r\n        <dd class=\"col-sm-9\">A description list is perfect for defining terms.</dd>\r\n\r\n        <dt class=\"col-sm-3\"><ion-icon name=\"medkit-outline\"></ion-icon> Cilnic Mapping</dt>\r\n        <dd class=\"col-sm-9\">A description list is perfect for defining terms.</dd>\r\n\r\n        <dt class=\"col-sm-3\"><ion-icon name=\"cloud-upload-outline\"></ion-icon> POC's Sent For Approval</dt>\r\n        <dd class=\"col-sm-9\">A description list is perfect for defining terms.</dd>\r\n\r\n        <dt class=\"col-sm-3\"><ion-icon name=\"checkmark-circle-outline\"></ion-icon> POC's Processed</dt>\r\n        <dd class=\"col-sm-9\">A description list is perfect for defining terms.</dd>-->\r\n\r\n\r\n\r\n\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/actions/components/fig-run-prices/fig-run-prices.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/actions/components/fig-run-prices/fig-run-prices.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesActionsComponentsFigRunPricesFigRunPricesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form #runPricesForm=\"ngForm\">\r\n    <div class=\"main-content-wrapper\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12 figtofdd-header-text page-header\">\r\n                        <a routerLink=\"/actions\">\r\n                            <span class=\"back-icon\"><mat-icon>keyboard_arrow_left</mat-icon></span>\r\n                            <span>Run Prices</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row form-control-div margin-top-15\">\r\n                    <div class=\"col-sm-3 col-md-3 col-lg-2\">\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <mat-label>FIG Cycle</mat-label>\r\n                            <mat-select [(ngModel)]=\"figRunPricesDetails.FigCycle\" name=\"figCycle\" #figCycle=\"ngModel\" [required]=\"true\">\r\n                                <mat-option *ngFor=\"let figCycle of figRunPricesDropdowns\" [value]=\"figCycle.FigCycle\">\r\n                                    {{figCycle.FigCycle}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                            <mat-error *ngIf=\"figCycle.hasError('required')\">\r\n                                Project Type is required.\r\n                            </mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-sm-3 col-md-3 col-lg-2\">\r\n                        <div class=\"button-div\">\r\n                            <button mat-button class=\"primary-button-2\" (click)=\"executeButtonClicked()\">Execute</button>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"row form-control-div margin-top-15\">\r\n                    <div class=\"col-sm-6 col-md-6 col-lg-6\">\r\n                        <span> Please Note: Once EXECUTED the RUN will overwrite data. </span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row form-control-div margin-top-15\">\r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    </form>\r\n    <div class=\"loader-wrap\" *ngIf=\"loadingData\">\r\n        <mat-spinner [diameter]=\"70\"></mat-spinner>\r\n    </div>\r\n";
    /***/
  },

  /***/
  "./src/app/modules/actions/actions-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modules/actions/actions-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ActionsRoutingModule */

  /***/
  function srcAppModulesActionsActionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionsRoutingModule", function () {
      return ActionsRoutingModule;
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


    var _components_action_action_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/action/action.component */
    "./src/app/modules/actions/components/action/action.component.ts");
    /* harmony import */


    var _components_fig_run_prices_fig_run_prices_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/fig-run-prices/fig-run-prices.component */
    "./src/app/modules/actions/components/fig-run-prices/fig-run-prices.component.ts");
    /* harmony import */


    var _run_prices_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./run-prices-guard.service */
    "./src/app/modules/actions/run-prices-guard.service.ts");

    var appRoutes = [{
      path: 'actions',
      component: _components_action_action_component__WEBPACK_IMPORTED_MODULE_3__["ActionComponent"]
    }, {
      path: '',
      component: _components_action_action_component__WEBPACK_IMPORTED_MODULE_3__["ActionComponent"]
    }, {
      path: 'figrunprices',
      component: _components_fig_run_prices_fig_run_prices_component__WEBPACK_IMPORTED_MODULE_4__["FigRunPricesComponent"],
      canActivate: [_run_prices_guard_service__WEBPACK_IMPORTED_MODULE_5__["RunPricesGuardService"]]
    }];

    var ActionsRoutingModule = function ActionsRoutingModule() {
      _classCallCheck(this, ActionsRoutingModule);
    };

    ActionsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(appRoutes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ActionsRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/actions/actions.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/modules/actions/actions.module.ts ***!
    \***************************************************/

  /*! exports provided: ActionsModule */

  /***/
  function srcAppModulesActionsActionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionsModule", function () {
      return ActionsModule;
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


    var _components_action_action_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/action/action.component */
    "./src/app/modules/actions/components/action/action.component.ts");
    /* harmony import */


    var _components_action_card_action_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/action-card/action-card.component */
    "./src/app/modules/actions/components/action-card/action-card.component.ts");
    /* harmony import */


    var _actions_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./actions-routing.module */
    "./src/app/modules/actions/actions-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/modules/shared/shared.module.ts");
    /* harmony import */


    var _services_fig_run_prices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/fig-run-prices.service */
    "./src/app/modules/actions/services/fig-run-prices.service.ts");
    /* harmony import */


    var _components_fig_run_prices_fig_run_prices_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/fig-run-prices/fig-run-prices.component */
    "./src/app/modules/actions/components/fig-run-prices/fig-run-prices.component.ts");

    var ActionsModule = function ActionsModule() {
      _classCallCheck(this, ActionsModule);
    };

    ActionsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_action_action_component__WEBPACK_IMPORTED_MODULE_2__["ActionComponent"], _components_action_card_action_card_component__WEBPACK_IMPORTED_MODULE_3__["ActionCardComponent"], _components_fig_run_prices_fig_run_prices_component__WEBPACK_IMPORTED_MODULE_7__["FigRunPricesComponent"]],
      imports: [_actions_routing_module__WEBPACK_IMPORTED_MODULE_4__["ActionsRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
      providers: [_services_fig_run_prices_service__WEBPACK_IMPORTED_MODULE_6__["FIGRunPricesService"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], ActionsModule);
    /***/
  },

  /***/
  "./src/app/modules/actions/components/action-card/action-card.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/modules/actions/components/action-card/action-card.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesActionsComponentsActionCardActionCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWN0aW9ucy9jb21wb25lbnRzL2FjdGlvbi1jYXJkL2FjdGlvbi1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/actions/components/action-card/action-card.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/modules/actions/components/action-card/action-card.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ActionCardComponent */

  /***/
  function srcAppModulesActionsComponentsActionCardActionCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionCardComponent", function () {
      return ActionCardComponent;
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


    var src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/layout/services/sidebar.service */
    "./src/app/layout/services/sidebar.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ActionCardComponent =
    /*#__PURE__*/
    function () {
      function ActionCardComponent(_sideBarService, _router) {
        _classCallCheck(this, ActionCardComponent);

        this._sideBarService = _sideBarService;
        this._router = _router;
        this.bgColor = "";
        this.fontColor = "";
      }

      _createClass(ActionCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._sideBarService.setActiveState("actions");

          this._sideBarService.editSidebarShowValue(true);
        }
      }, {
        key: "goToAction",
        value: function goToAction(route) {
          this._router.navigate([route]); //else if (route == "commodityImpact") {        
          //}
          //else if (route == "figmasterdatamaintenance") {
          //    this._router.navigate(['figmasterdatamaintenance']);
          //}
          //else if (route == "figmasterdatamaintenance") {
          //    this._router.navigate(['figmasterdatamaintenance']);
          //}

        }
      }, {
        key: "setHover",
        value: function setHover(actionCard) {
          this.bgColor = actionCard.IconBgColor;
          this.fontColor = actionCard.IconBgColor;
          actionCard.IconBgColor = "#ffffff";
        }
      }, {
        key: "removeHover",
        value: function removeHover(actionCard) {
          this.bgColor = "";
          actionCard.IconBgColor = this.fontColor;
        }
      }]);

      return ActionCardComponent;
    }();

    ActionCardComponent.ctorParameters = function () {
      return [{
        type: src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('action-card'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ActionCardComponent.prototype, "actionCard", void 0);
    ActionCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-action-card',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./action-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/actions/components/action-card/action-card.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./action-card.component.scss */
      "./src/app/modules/actions/components/action-card/action-card.component.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], ActionCardComponent);
    /***/
  },

  /***/
  "./src/app/modules/actions/components/action/action.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/modules/actions/components/action/action.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesActionsComponentsActionActionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".referrercontainer {\n  /*height: 400px;*/\n  /*overflow: scroll;*/\n  width: 100%;\n  padding: 10px;\n}\n\n.paddingtop {\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hY3Rpb25zL2NvbXBvbmVudHMvYWN0aW9uL0M6XFxEaXJlY3RUcnVzdFxcQ29kZVxcVGVhbVJlaGFiXFxDbGllbnRBcHAvc3JjXFxhcHBcXG1vZHVsZXNcXGFjdGlvbnNcXGNvbXBvbmVudHNcXGFjdGlvblxcYWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FjdGlvbnMvY29tcG9uZW50cy9hY3Rpb24vYWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFFQSxhQUFBO0FDQUo7O0FERUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hY3Rpb25zL2NvbXBvbmVudHMvYWN0aW9uL2FjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWZlcnJlcmNvbnRhaW5lciB7XHJcbiAgICAvKmhlaWdodDogNDAwcHg7Ki9cclxuICAgIC8qb3ZlcmZsb3c6IHNjcm9sbDsqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHNsYXRlZ3JleTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLnBhZGRpbmd0b3Age1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuIiwiLnJlZmVycmVyY29udGFpbmVyIHtcbiAgLypoZWlnaHQ6IDQwMHB4OyovXG4gIC8qb3ZlcmZsb3c6IHNjcm9sbDsqL1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnBhZGRpbmd0b3Age1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/actions/components/action/action.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/actions/components/action/action.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ActionComponent */

  /***/
  function srcAppModulesActionsComponentsActionActionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionComponent", function () {
      return ActionComponent;
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


    var src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/layout/services/application-header.service */
    "./src/app/layout/services/application-header.service.ts");
    /* harmony import */


    var src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/services/storage-helper.service */
    "./src/app/core/services/storage-helper.service.ts");
    /* harmony import */


    var src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/layout/services/sidebar.service */
    "./src/app/layout/services/sidebar.service.ts");

    var ActionComponent =
    /*#__PURE__*/
    function () {
      function ActionComponent(_headerService, _storageHelper, _sidebarService) {
        _classCallCheck(this, ActionComponent);

        this._headerService = _headerService;
        this._storageHelper = _storageHelper;
        this._sidebarService = _sidebarService;
        this.selectedRole = "";
        this.loggedInUserDetails = {};
      }

      _createClass(ActionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._storageHelper.setItem("currentState", "actions");

          this._sidebarService.setActiveState("actions");

          if (this._storageHelper.getItem("selectedRole") != null && this._storageHelper.getItem("selectedRole") != undefined && this._storageHelper.getItem("selectedRole") != "") {
            this.selectedRole = this._storageHelper.getItem("selectedRole");
          }

          if (this._storageHelper.getItem("loggedInUserDetails") != null) {
            this.loggedInUserDetails = this._storageHelper.getItem("loggedInUserDetails");
          }

          debugger;
          this.adminActionCardList = [{
            Title: "Incoming Messages",
            Description: "Incoming Messages to be Processed",
            IconClass: "mail-unread-outline",
            IconBgColor: "#1dd1a1",
            Route: "/referrer/incomingmessage",
            AllowedRoles: ["system administrator", "front desk"]
          }, {
            Title: "Referrer Maintenance",
            Description: "Add/Modify/Delete DirectTrust Referrer Details",
            IconClass: "people-outline",
            IconBgColor: "#70a1ff",
            Route: "/referrer",
            AllowedRoles: ["system administrator"]
          }, {
            Title: "Work in progress Messages",
            Description: "Work in progress Messages",
            IconClass: "icon-projects",
            IconBgColor: "#ff6b6b",
            Route: "/referrer/wipmessage",
            AllowedRoles: [""]
          }, {
            Title: "Direct Trust POC Not Found Messages",
            Description: "Direct Trust POC Not Found Messages",
            IconClass: "icon-send-email",
            IconBgColor: "#FF5733",
            Route: "/referrer/dtpocnotfoundmessage",
            AllowedRoles: [""]
          }, {
            Title: "Referral Processed",
            Description: "Direct Trust Processed Messages",
            IconClass: "mail-open-outline",
            IconBgColor: "#FF5733",
            Route: "/referrer/processedmessages",
            AllowedRoles: ["front desk"]
          }, {
            Title: "Clinic Mapping",
            Description: "Clinic Mapping",
            IconClass: "medkit-outline",
            IconBgColor: "#FFCA33",
            Route: "/referrer/clinicmapping",
            AllowedRoles: ["system administrator"]
          }, {
            Title: "POC's Sent For Approval",
            Description: "POC's Sent For Approval",
            IconClass: "cloud-upload-outline",
            IconBgColor: "#4CFF33",
            Route: "/referrer/sentPocs",
            AllowedRoles: ["front desk"]
          }, {
            Title: "POC's Processed",
            Description: "POC's Processed",
            IconClass: "checkmark-circle-outline",
            IconBgColor: "#3368FF",
            Route: "/referrer/ProcessedPocs",
            AllowedRoles: ["front desk"]
          }];
          this.actionCardList = this.adminActionCardList;

          if (this.loggedInUserDetails.Roles.trim().toLowerCase() == "front desk") {
            this.actionCardList = this.adminActionCardList.filter(function (x) {
              return x.AllowedRoles.some(function (y) {
                return y.toLowerCase() == "front desk";
              });
            });
          } else {
            this.actionCardList = this.adminActionCardList.filter(function (x) {
              return x.AllowedRoles.some(function (y) {
                return y.toLowerCase() == "system administrator";
              });
            });
            ;
          }
        }
      }]);

      return ActionComponent;
    }();

    ActionComponent.ctorParameters = function () {
      return [{
        type: src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationHeaderService"]
      }, {
        type: src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__["StorageHelper"]
      }, {
        type: src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"]
      }];
    };

    ActionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-action',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./action.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/actions/components/action/action.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./action.component.scss */
      "./src/app/modules/actions/components/action/action.component.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_layout_services_application_header_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationHeaderService"], src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__["StorageHelper"], src_app_layout_services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"]])], ActionComponent);
    /***/
  },

  /***/
  "./src/app/modules/actions/components/fig-run-prices/fig-run-prices.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/modules/actions/components/fig-run-prices/fig-run-prices.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesActionsComponentsFigRunPricesFigRunPricesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*#003daf;*/\n.figtofdd-header-text {\n  -webkit-box-pack: start !important;\n          justify-content: flex-start !important;\n  color: #5dbcd2;\n  font-size: 16px;\n  font-family: \"Montserrat-Bold\";\n}\n.form-control-div .mat-form-field {\n  width: 100%;\n}\n.margin-top-15 {\n  margin-top: 15px;\n}\n.page-header a {\n  cursor: pointer;\n  color: #5dbcd2 !important;\n}\n.page-header .back-icon {\n  vertical-align: -webkit-baseline-middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hY3Rpb25zL2NvbXBvbmVudHMvZmlnLXJ1bi1wcmljZXMvQzpcXERpcmVjdFRydXN0XFxDb2RlXFxUZWFtUmVoYWJcXENsaWVudEFwcC9zcmNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FjdGlvbnMvY29tcG9uZW50cy9maWctcnVuLXByaWNlcy9DOlxcRGlyZWN0VHJ1c3RcXENvZGVcXFRlYW1SZWhhYlxcQ2xpZW50QXBwL3NyY1xcYXBwXFxtb2R1bGVzXFxhY3Rpb25zXFxjb21wb25lbnRzXFxmaWctcnVuLXByaWNlc1xcZmlnLXJ1bi1wcmljZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWN0aW9ucy9jb21wb25lbnRzL2ZpZy1ydW4tcHJpY2VzL2ZpZy1ydW4tcHJpY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBLFdBQUE7QUNSQTtFQUNJLGtDQUFBO1VBQUEsc0NBQUE7RUFDQSxjREtZO0VDSlosZUFBQTtFQUNBLDhCRG1DYTtBRW5DakI7QURJQTtFQUNJLFdBQUE7QUNESjtBRElBO0VBQ0ksZ0JBQUE7QUNESjtBREtJO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0FDRlI7QURLSTtFQUNJLHVDQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FjdGlvbnMvY29tcG9uZW50cy9maWctcnVuLXByaWNlcy9maWctcnVuLXByaWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvbG9ycyBcclxuJGRpc2FibGUtYnRuLWNvbG9yOiAjZDhkOGQ4O1xyXG4kdGFibGUtZ3JpZC1ib3JkZXI6IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcblxyXG4kcHJvcG9zYWxzLWNvbG9yOiByZ2IoMTc0LCAxOTksIDEzMyk7XHJcbiRmb3VyUExCZW5jaG1hcmstY29sb3I6IHJnYigyNTAsIDEzMywgMTAwKTtcclxuJG5lZ290aWF0aW9ucy1jb2xvcjogcmdiKDE2NCwgMTM4LCAyMTIpO1xyXG4kbGFuZUNyZWF0aW9ucy1jb2xvcjogcmdiKDMxLCAxODEsIDE3Mik7XHJcblxyXG4kcHJpLWRhcmstYmx1ZTogIzVkYmNkMjtcclxuLyojMDAzZGFmOyovXHJcbiRwcmktbWlkLWJsdWU6ICMwMGEzZTA7XHJcbiRwcmktbGlnaHQtYmx1ZTogIzlhZGJlODtcclxuXHJcbi8vIGNvbG9yIGNvZGVzIGZvciBwcm9qZWN0IGxpc3QgcGFnZVxyXG4kcHJpLWFxdWEtYmx1ZTogI2M1ZWZmZTtcclxuJHByaS1wci1ncmVlbnllbGxvdzogIzk3ZDcwMDtcclxuJHByaS1wci1waW5rOiBwaW5rO1xyXG4kcHJpLXByLWxpZ2h0Ymx1ZTogbGlnaHRibHVlO1xyXG5cclxuJHByaS1vcmFuZ2U6ICNmZjcwMDA7XHJcbiRwcmktZ3JlZW46ICM5YmQ0NDI7XHJcbiRwcmktbmVvLXBpbms6ICNlYjczYzQ7XHJcblxyXG4kc2VjLWdyYXk6ICNmMmYyZjI7XHJcblxyXG4vLyBidXR0b24gZGlzYWJsZWRcclxuJGJ1dHRvbi1kaXNhYmxlZDogcmdiYSgwLCAwLCAwLCAwLjI2KTtcclxuJGJ1dHRvbi1ob3ZlcjogIzAzMjk3MTtcclxuXHJcbi8vIG90aGVyIGNvbG9yIHVzZWRcclxuJHdoaXRlOiAjZmZmO1xyXG4kYmxhY2s6ICMwMDA7XHJcbiRsaWdodGdyYXk6IGxpZ2h0Z3JheTtcclxuJGdyYXk6ICNjY2M7XHJcbiRvZmZ3aGl0ZTogI2YxZjFmMTtcclxuJG1pZGRsZUJsYWNrOiAjMzMzO1xyXG4kaHVydC1jb2xvcjogI2ZmNmI2YjtcclxuJHNlY29uZGFyeS1idG4tYmFja2dyb3VuZDogIzljOWM5YjtcclxuJG1vbnRzZXJyYXRSZWd1bGFyOiAnTW9udHNlcnJhdC1SZWd1bGFyJztcclxuJG1vbnRzZXJyYXRTZW1pQm9sZDogJ01vbnRzZXJyYXQtU2VtaUJvbGQnO1xyXG4kbW9udHNlcnJhdEJvbGQ6ICdNb250c2VycmF0LUJvbGQnO1xyXG5cclxuJGFuY2hvclRhZ0NvbG9yOiAjMDA3YWQ5O1xyXG4kdGFibGVIZWFkZXJDb2xvcjogIzVkYmNkMjtcclxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4uZmlndG9mZGQtaGVhZGVyLXRleHQge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogJHByaS1kYXJrLWJsdWU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogJG1vbnRzZXJyYXRCb2xkO1xyXG59XHJcblxyXG5cclxuLmZvcm0tY29udHJvbC1kaXYgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWFyZ2luLXRvcC0xNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4ucGFnZS1oZWFkZXIge1xyXG4gICAgYSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpLWRhcmstYmx1ZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5iYWNrLWljb24ge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiAtd2Via2l0LWJhc2VsaW5lLW1pZGRsZTtcclxuICAgIH1cclxufSIsIi8qIzAwM2RhZjsqL1xuLmZpZ3RvZmRkLWhlYWRlci10ZXh0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNWRiY2QyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtQm9sZFwiO1xufVxuXG4uZm9ybS1jb250cm9sLWRpdiAubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hcmdpbi10b3AtMTUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ucGFnZS1oZWFkZXIgYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM1ZGJjZDIgIWltcG9ydGFudDtcbn1cbi5wYWdlLWhlYWRlciAuYmFjay1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IC13ZWJraXQtYmFzZWxpbmUtbWlkZGxlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/actions/components/fig-run-prices/fig-run-prices.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/modules/actions/components/fig-run-prices/fig-run-prices.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: FigRunPricesComponent */

  /***/
  function srcAppModulesActionsComponentsFigRunPricesFigRunPricesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FigRunPricesComponent", function () {
      return FigRunPricesComponent;
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


    var _services_fig_run_prices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/fig-run-prices.service */
    "./src/app/modules/actions/services/fig-run-prices.service.ts");
    /* harmony import */


    var src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/services/storage-helper.service */
    "./src/app/core/services/storage-helper.service.ts");
    /* harmony import */


    var src_app_modules_shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/modules/shared/components/modal/ModalStaticClass */
    "./src/app/modules/shared/components/modal/ModalStaticClass.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);

    var FigRunPricesComponent =
    /*#__PURE__*/
    function () {
      function FigRunPricesComponent(_figrunpricesService, _storageHelper, _modalDialog) {
        _classCallCheck(this, FigRunPricesComponent);

        this._figrunpricesService = _figrunpricesService;
        this._storageHelper = _storageHelper;
        this._modalDialog = _modalDialog;
        this.figRunPricesDetails = {};
        this.figRunPricesDropdowns = {};
        this.userDetails = {};
        this.selectedRole = "";
        this.loadingData = false;
        this.userDetails = this._storageHelper.getItem("loggedInUserDetails");
        this.selectedRole = this._storageHelper.getItem("selectedRole");
      }

      _createClass(FigRunPricesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fillFIGRunPricesDropdowns();
        }
      }, {
        key: "fillFIGRunPricesDropdowns",
        value: function fillFIGRunPricesDropdowns() {
          var _this = this;

          this.loadingData = true;

          this._figrunpricesService.getVersionFilterDetails().subscribe(function (response) {
            if (response) {
              _this.figRunPricesDropdowns = response;
              _this.figRunPricesDetails.FigCycle = _this.figRunPricesDropdowns[0].FigCycle; //var selectedFigCycle = this.figRunPricesDropdowns.FigCycle.filter(x => x.selected);
              //if (selectedFigCycle && selectedFigCycle.length == 1) {
              //    this.figRunPricesDetails.FigCycle = selectedFigCycle[0].ID;
              //}
            } else {
              src_app_modules_shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_4__["ModalStaticClass"].show(_this._modalDialog, "", "Error", "An error occured while fetching the FIG cycle details. Please try again after some time.", 0, false, 1, "400px");
            }

            _this.loadingData = false;
          }, function (error) {
            src_app_modules_shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_4__["ModalStaticClass"].show(_this._modalDialog, "", "Error", "An error occured while fetching the FIG cycle details. Please try again after some time.", 0, false, 1, "400px");
            _this.loadingData = false;
          });
        }
      }, {
        key: "executeButtonClicked",
        value: function executeButtonClicked() {
          var isValid = true;
          var errorMessage = "";

          if (this.figRunPricesDetails.FigCycle == null || this.figRunPricesDetails.FigCycle == undefined || this.figRunPricesDetails.FigCycle == "") {
            isValid = false;
            errorMessage = "Please select FIG Cycle.";
          }

          if (isValid) {
            this.runPricesButtonClicked();
          } else {
            src_app_modules_shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_4__["ModalStaticClass"].show(this._modalDialog, "", "Error", errorMessage, 0, false, 1, "400px");
          }
        }
      }, {
        key: "runPricesButtonClicked",
        value: function runPricesButtonClicked() {
          var _this2 = this;

          src_app_modules_shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_4__["ModalStaticClass"].show(this._modalDialog, "", "Run Prices", "This action will update all current Prices data from the system. Please confirm", 1, false, 1, "400px").subscribe(function (res) {
            if (res) {
              _this2.loadingData = true; //this._figrunpricesService.runPricesJob(this.figRunPricesDetails.FigCycle).subscribe((resp: boolean) => {
              //    if (resp) {
              //        console.log(resp);
              //        if (resp == true) {
              //            ModalStaticClass.show(this._modalDialog, "", "Success", "Prices data updated successfully.", 0, false, 1, "400px").subscribe(response => {
              //                if (response) {
              //                   // this._navigate.navigateByUrl('/commodityImpact');
              //                    this.loadingData = false;
              //                }
              //            });
              //        }
              //        else {
              //            ModalStaticClass.show(this._modalDialog, "", "Error", "Unable to update the Prices data.", 0, false, 1, "400px");
              //        }
              //    }
              //});
              // this._navigate.navigateByUrl('commodityImpact');

              _this2._figrunpricesService.runPricesJob(_this2.figRunPricesDetails.FigCycle).subscribe(function (res) {
                var contentType = res.headers.get('content-type');
                var blob = new Blob([res.body], {
                  type: contentType
                });

                if (blob.size > 0) {
                  Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(blob, 'NoPriceSourceFileResponse.xlsx');
                  res;
                  _this2.loadingData = false;
                } else {
                  _this2.loadingData = false;
                  src_app_modules_shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_4__["ModalStaticClass"].show(_this2._modalDialog, "", "Success", "Prices data updated successfully.", 0, false, 1, "500px");
                }
              }, function (err) {
                _this2.loadingData = false;
                src_app_modules_shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_4__["ModalStaticClass"].show(_this2._modalDialog, "", "Error", "There was an error while updating the Price Source File.", 0, false, 1, "500px");
              }); //this._navigate.navigateByUrl('commodityImpact');

            }
          });
        }
      }]);

      return FigRunPricesComponent;
    }();

    FigRunPricesComponent.ctorParameters = function () {
      return [{
        type: _services_fig_run_prices_service__WEBPACK_IMPORTED_MODULE_2__["FIGRunPricesService"]
      }, {
        type: src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__["StorageHelper"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }];
    };

    FigRunPricesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fig-run-prices',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./fig-run-prices.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/actions/components/fig-run-prices/fig-run-prices.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./fig-run-prices.component.scss */
      "./src/app/modules/actions/components/fig-run-prices/fig-run-prices.component.scss")).default]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_fig_run_prices_service__WEBPACK_IMPORTED_MODULE_2__["FIGRunPricesService"], src_app_core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__["StorageHelper"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])], FigRunPricesComponent);
    /***/
  },

  /***/
  "./src/app/modules/actions/run-prices-guard.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/modules/actions/run-prices-guard.service.ts ***!
    \*************************************************************/

  /*! exports provided: RunPricesGuardService */

  /***/
  function srcAppModulesActionsRunPricesGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RunPricesGuardService", function () {
      return RunPricesGuardService;
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


    var _core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../core/services/storage-helper.service */
    "./src/app/core/services/storage-helper.service.ts");
    /* harmony import */


    var _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/components/modal/ModalStaticClass */
    "./src/app/modules/shared/components/modal/ModalStaticClass.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var RunPricesGuardService =
    /*#__PURE__*/
    function () {
      function RunPricesGuardService(_router, storageHelper, modalDialog) {
        _classCallCheck(this, RunPricesGuardService);

        this._router = _router;
        this.storageHelper = storageHelper;
        this.modalDialog = modalDialog;
        this.loggedInUserDetails = {};
        this.selectedRole = "";
        this.authorizationMessage = "";
      }

      _createClass(RunPricesGuardService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var _this3 = this;

          if (this.storageHelper.getItem('loggedInUserDetails') != null) {
            this.loggedInUserDetails = this.storageHelper.getItem('loggedInUserDetails');
          }

          if (this.storageHelper.getItem('selectedRole') != null) {
            this.selectedRole = this.storageHelper.getItem('selectedRole');
          }

          if (this.loggedInUserDetails != null && this.loggedInUserDetails != undefined) {
            this.authorizationMessage = this.authorizeUser(this.selectedRole, this.loggedInUserDetails.Roles[0]);
          } else {
            this.authorizationMessage = this.authorizeUser(this.selectedRole, "");
          }

          return this.authorizationMessage == "" ? true : _shared_components_modal_ModalStaticClass__WEBPACK_IMPORTED_MODULE_4__["ModalStaticClass"].show(this.modalDialog, "", "Warning", this.authorizationMessage, 0, false, 1, "400px").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (result) {
            _this3._router.navigateByUrl(_this3.storageHelper.getItem("currentState"));

            return false;
          }));
        }
      }, {
        key: "authorizeUser",
        value: function authorizeUser(selectedRole, actualRole) {
          if (selectedRole.toLowerCase().includes("figadmin") || selectedRole.toLowerCase().includes("fig_admin")) {
            return "";
          } else {
            if (actualRole.toLowerCase().includes("fig_admin") || actualRole.toLowerCase().includes("figadmin")) {
              return "Please switch to FIG admin role for running prices.";
            } else {
              return "You are not authorized for running prices.";
            }
          }
        }
      }]);

      return RunPricesGuardService;
    }();

    RunPricesGuardService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__["StorageHelper"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }];
    };

    RunPricesGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_services_storage_helper_service__WEBPACK_IMPORTED_MODULE_3__["StorageHelper"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])], RunPricesGuardService);
    /***/
  },

  /***/
  "./src/app/modules/actions/services/fig-run-prices.service.ts":
  /*!********************************************************************!*\
    !*** ./src/app/modules/actions/services/fig-run-prices.service.ts ***!
    \********************************************************************/

  /*! exports provided: FIGRunPricesService */

  /***/
  function srcAppModulesActionsServicesFigRunPricesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FIGRunPricesService", function () {
      return FIGRunPricesService;
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

    var FIGRunPricesService =
    /*#__PURE__*/
    function () {
      function FIGRunPricesService(_apiService) {
        _classCallCheck(this, FIGRunPricesService);

        this._apiService = _apiService;
      }

      _createClass(FIGRunPricesService, [{
        key: "runPricesJob",
        value: function runPricesJob(version) {
          //return this._apiService.getDataWithParams("FIG/RunPricesJob", {
          //    version: version,
          //})
          return this._apiService.RunPriceResponse("FIG/RunPricesJob", version);
        }
      }, {
        key: "getVersionFilterDetails",
        value: function getVersionFilterDetails() {
          //return this._apiService.getDataWithParams("FIGMasterData/GetVersionDropdown", {
          //    tNumber: tNumber,
          //    userRole: userRole
          //});
          return this._apiService.getData("FIG/GetVersionDropdown");
        }
      }]);

      return FIGRunPricesService;
    }();

    FIGRunPricesService.ctorParameters = function () {
      return [{
        type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    FIGRunPricesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])], FIGRunPricesService);
    /***/
  }
}]);
//# sourceMappingURL=modules-actions-actions-module-es5.js.map