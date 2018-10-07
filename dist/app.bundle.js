/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/company/company.ts":
/*!********************************!*\
  !*** ./src/company/company.ts ***!
  \********************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
/* harmony import */ var _designations_employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../designations/employee */ "./src/designations/employee.ts");
/* harmony import */ var _designations_employee_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../designations/employee-factory */ "./src/designations/employee-factory.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Company =
/*#__PURE__*/
function () {
  function Company() {
    _classCallCheck(this, Company);

    _defineProperty(this, "list", void 0);

    this.list = new Array();
  }

  _createClass(Company, [{
    key: "initialize",
    value: function initialize() {
      var hrManager = _designations_employee_factory__WEBPACK_IMPORTED_MODULE_1__["EmployeeFactory"].create(_designations_employee__WEBPACK_IMPORTED_MODULE_0__["ROLES"].HR_MANAGER, {
        name: "hr-Jane",
        address: "NY"
      }, {
        basic: 30000,
        hra: 30000,
        otherAllowance: 15000,
        tds: 5000,
        epf: 2000
      });
      var devManager = _designations_employee_factory__WEBPACK_IMPORTED_MODULE_1__["EmployeeFactory"].create(_designations_employee__WEBPACK_IMPORTED_MODULE_0__["ROLES"].DEV_MANAGER, {
        name: "dev-manager-Kurt",
        address: "NY"
      }, {
        basic: 100000,
        hra: 50000,
        otherAllowance: 40000,
        tds: 20000,
        epf: 30000
      });
      var ase = _designations_employee_factory__WEBPACK_IMPORTED_MODULE_1__["EmployeeFactory"].create(_designations_employee__WEBPACK_IMPORTED_MODULE_0__["ROLES"].ASE, {
        name: "ase-peaton",
        address: "NY"
      }, {
        basic: 10000,
        hra: 5000,
        otherAllowance: 3000,
        tds: 0,
        epf: 2000
      });
      var se = _designations_employee_factory__WEBPACK_IMPORTED_MODULE_1__["EmployeeFactory"].create(_designations_employee__WEBPACK_IMPORTED_MODULE_0__["ROLES"].SE, {
        name: "se-paterson",
        address: "NY"
      }, {
        basic: 15000,
        hra: 7000,
        otherAllowance: 5000,
        tds: 1000,
        epf: 2500
      });
      var sse = _designations_employee_factory__WEBPACK_IMPORTED_MODULE_1__["EmployeeFactory"].create(_designations_employee__WEBPACK_IMPORTED_MODULE_0__["ROLES"].SSE, {
        name: "sse-Read",
        address: "NY"
      }, {
        basic: 25000,
        hra: 11000,
        otherAllowance: 8000,
        tds: 1500,
        epf: 2500
      });
      var le = _designations_employee_factory__WEBPACK_IMPORTED_MODULE_1__["EmployeeFactory"].create(_designations_employee__WEBPACK_IMPORTED_MODULE_0__["ROLES"].LE, {
        name: "le-Stuard",
        address: "NY"
      }, {
        basic: 45000,
        hra: 15000,
        otherAllowance: 11000,
        tds: 2500,
        epf: 3500
      });
      le.addReportee(sse);
      le.addReportee(se);
      le.addReportee(ase);
      devManager.addReportee(le);
      hrManager.addReportee(devManager);
      devManager.printReporteeDetails(devManager);
      console.log("---------------------------------------");
      hrManager.printReporteeDetails(hrManager);
    }
  }]);

  return Company;
}();

/***/ }),

/***/ "./src/designations/ase.ts":
/*!*********************************!*\
  !*** ./src/designations/ase.ts ***!
  \*********************************/
/*! exports provided: AssistantSoftwareEngineer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistantSoftwareEngineer", function() { return AssistantSoftwareEngineer; });
/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee */ "./src/designations/employee.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var AssistantSoftwareEngineer =
/*#__PURE__*/
function (_Emploeyee) {
  _inherits(AssistantSoftwareEngineer, _Emploeyee);

  function AssistantSoftwareEngineer(details, monthSalary) {
    var _this;

    _classCallCheck(this, AssistantSoftwareEngineer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AssistantSoftwareEngineer).call(this, details, monthSalary));

    _this.assignDesignation(_employee__WEBPACK_IMPORTED_MODULE_0__["ROLES"].ASE);

    return _this;
  }

  return AssistantSoftwareEngineer;
}(_employee__WEBPACK_IMPORTED_MODULE_0__["Emploeyee"]);

/***/ }),

/***/ "./src/designations/dev-manager.ts":
/*!*****************************************!*\
  !*** ./src/designations/dev-manager.ts ***!
  \*****************************************/
/*! exports provided: DevManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevManager", function() { return DevManager; });
/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee */ "./src/designations/employee.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var DevManager =
/*#__PURE__*/
function (_Emploeyee) {
  _inherits(DevManager, _Emploeyee);

  function DevManager(details, monthSalary) {
    var _this;

    _classCallCheck(this, DevManager);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DevManager).call(this, details, monthSalary));

    _this.assignDesignation(_employee__WEBPACK_IMPORTED_MODULE_0__["ROLES"].DEV_MANAGER);

    return _this;
  }

  _createClass(DevManager, [{
    key: "hasAddPrivilege",
    value: function hasAddPrivilege() {
      return true;
    }
  }]);

  return DevManager;
}(_employee__WEBPACK_IMPORTED_MODULE_0__["Emploeyee"]);

/***/ }),

/***/ "./src/designations/employee-factory.ts":
/*!**********************************************!*\
  !*** ./src/designations/employee-factory.ts ***!
  \**********************************************/
/*! exports provided: EmployeeFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeFactory", function() { return EmployeeFactory; });
/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee */ "./src/designations/employee.ts");
/* harmony import */ var _ase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ase */ "./src/designations/ase.ts");
/* harmony import */ var _se__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./se */ "./src/designations/se.ts");
/* harmony import */ var _sse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sse */ "./src/designations/sse.ts");
/* harmony import */ var _le__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./le */ "./src/designations/le.ts");
/* harmony import */ var _tl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tl */ "./src/designations/tl.ts");
/* harmony import */ var _dev_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dev-manager */ "./src/designations/dev-manager.ts");
/* harmony import */ var _hr_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hr-manager */ "./src/designations/hr-manager.ts");
/* harmony import */ var _stl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stl */ "./src/designations/stl.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










var EMP_MAP = [];
EMP_MAP[_employee__WEBPACK_IMPORTED_MODULE_0__["ROLES"].ASE] = _ase__WEBPACK_IMPORTED_MODULE_1__["AssistantSoftwareEngineer"];
EMP_MAP[_employee__WEBPACK_IMPORTED_MODULE_0__["ROLES"].SE] = _se__WEBPACK_IMPORTED_MODULE_2__["SoftwareEngineer"];
EMP_MAP[_employee__WEBPACK_IMPORTED_MODULE_0__["ROLES"].SSE] = _sse__WEBPACK_IMPORTED_MODULE_3__["SeniorSoftwareEngineer"];
EMP_MAP[_employee__WEBPACK_IMPORTED_MODULE_0__["ROLES"].LE] = _le__WEBPACK_IMPORTED_MODULE_4__["LeadEngineer"];
EMP_MAP[_employee__WEBPACK_IMPORTED_MODULE_0__["ROLES"].TL] = _tl__WEBPACK_IMPORTED_MODULE_5__["TeamLead"];
EMP_MAP[_employee__WEBPACK_IMPORTED_MODULE_0__["ROLES"].STL] = _stl__WEBPACK_IMPORTED_MODULE_8__["SeniorTeamLead"];
EMP_MAP[_employee__WEBPACK_IMPORTED_MODULE_0__["ROLES"].DEV_MANAGER] = _dev_manager__WEBPACK_IMPORTED_MODULE_6__["DevManager"];
EMP_MAP[_employee__WEBPACK_IMPORTED_MODULE_0__["ROLES"].HR_MANAGER] = _hr_manager__WEBPACK_IMPORTED_MODULE_7__["HRManager"];
var EmployeeFactory =
/*#__PURE__*/
function () {
  function EmployeeFactory() {
    _classCallCheck(this, EmployeeFactory);
  }

  _createClass(EmployeeFactory, null, [{
    key: "create",
    value: function create(role, details, monthlySalary) {
      var Employee = EMP_MAP[role];
      return new Employee(details, monthlySalary);
    }
  }]);

  return EmployeeFactory;
}();

/***/ }),

/***/ "./src/designations/employee.ts":
/*!**************************************!*\
  !*** ./src/designations/employee.ts ***!
  \**************************************/
/*! exports provided: ROLES, Emploeyee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROLES", function() { return ROLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Emploeyee", function() { return Emploeyee; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ROLES = {
  HR_MANAGER: 'hr-manager',
  DEV_MANAGER: "development manager",
  ASE: "assistance software engineer",
  SE: "software enginer",
  SSE: "senior software engineer",
  LE: "Lead engineer",
  TL: "Team leader",
  STL: "senior Team lead"
};
var Emploeyee =
/*#__PURE__*/
function () {
  function Emploeyee(details, monthSalary) {
    _classCallCheck(this, Emploeyee);

    _defineProperty(this, "designation", "");

    _defineProperty(this, "details", void 0);

    _defineProperty(this, "monthlySalaryDetails", void 0);

    _defineProperty(this, "reporteeList", new Array());

    this.details = details;
    this.monthlySalaryDetails = monthSalary;
  }

  _createClass(Emploeyee, [{
    key: "getProfessionDetails",
    value: function getProfessionDetails() {
      return Object.assign({}, this.details);
    }
  }, {
    key: "getSalaryDetails",
    value: function getSalaryDetails() {
      return Object.assign({}, this.monthlySalaryDetails);
    }
  }, {
    key: "assignDesignation",
    value: function assignDesignation(role) {
      this.designation = role;
    }
  }, {
    key: "hasAddPrivilege",
    value: function hasAddPrivilege() {
      return false;
    }
  }, {
    key: "hasReporteeDetailPrevilege",
    value: function hasReporteeDetailPrevilege() {
      return false;
    }
  }, {
    key: "hasReporteeSalayDetailPrevilage",
    value: function hasReporteeSalayDetailPrevilage() {
      return false;
    }
  }, {
    key: "addReportee",
    value: function addReportee(emp) {
      if (!this.hasAddPrivilege()) {
        return false;
      }

      if (this.getIndex(emp) === -1) {
        this.reporteeList.push(emp);
        return true;
      }

      return false;
    }
  }, {
    key: "getIndex",
    value: function getIndex(emp) {
      var index = this.reporteeList.findIndex(function (value) {
        return value === emp;
      });
      return index;
    }
  }, {
    key: "removeReportee",
    value: function removeReportee(emp) {
      var index = this.getIndex(emp);

      if (index > -1) {
        this.reporteeList.splice(index, 1);
        return true;
      }

      return false;
    }
  }, {
    key: "printReporteeDetails",
    value: function printReporteeDetails(emp) {
      this.reporteeList.forEach(function (reportee) {
        console.log("designation ", reportee.getDesignation());
        console.log(JSON.stringify(reportee.getProfessionDetails()));

        if (emp.hasReporteeSalayDetailPrevilage()) {
          console.log(JSON.stringify(reportee.getSalaryDetails()));
        }

        reportee.printReporteeDetails(emp);
      });
    }
  }, {
    key: "getDesignation",
    value: function getDesignation() {
      return this.designation;
    }
  }]);

  return Emploeyee;
}();

/***/ }),

/***/ "./src/designations/hr-manager.ts":
/*!****************************************!*\
  !*** ./src/designations/hr-manager.ts ***!
  \****************************************/
/*! exports provided: HRManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HRManager", function() { return HRManager; });
/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee */ "./src/designations/employee.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var HRManager =
/*#__PURE__*/
function (_Emploeyee) {
  _inherits(HRManager, _Emploeyee);

  function HRManager(details, monthSalary) {
    var _this;

    _classCallCheck(this, HRManager);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HRManager).call(this, details, monthSalary));

    _this.assignDesignation(_employee__WEBPACK_IMPORTED_MODULE_0__["ROLES"].HR_MANAGER);

    return _this;
  }

  _createClass(HRManager, [{
    key: "hasReporteeSalayDetailPrevilage",
    value: function hasReporteeSalayDetailPrevilage() {
      return true;
    }
  }, {
    key: "hasAddPrivilege",
    value: function hasAddPrivilege() {
      return true;
    }
  }]);

  return HRManager;
}(_employee__WEBPACK_IMPORTED_MODULE_0__["Emploeyee"]);

/***/ }),

/***/ "./src/designations/le.ts":
/*!********************************!*\
  !*** ./src/designations/le.ts ***!
  \********************************/
/*! exports provided: LeadEngineer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadEngineer", function() { return LeadEngineer; });
/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee */ "./src/designations/employee.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var LeadEngineer =
/*#__PURE__*/
function (_Emploeyee) {
  _inherits(LeadEngineer, _Emploeyee);

  function LeadEngineer(details, monthSalary) {
    var _this;

    _classCallCheck(this, LeadEngineer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LeadEngineer).call(this, details, monthSalary));

    _this.assignDesignation(_employee__WEBPACK_IMPORTED_MODULE_0__["ROLES"].LE);

    return _this;
  }

  _createClass(LeadEngineer, [{
    key: "hasAddPrivilege",
    value: function hasAddPrivilege() {
      return true;
    }
  }]);

  return LeadEngineer;
}(_employee__WEBPACK_IMPORTED_MODULE_0__["Emploeyee"]);

/***/ }),

/***/ "./src/designations/se.ts":
/*!********************************!*\
  !*** ./src/designations/se.ts ***!
  \********************************/
/*! exports provided: SoftwareEngineer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftwareEngineer", function() { return SoftwareEngineer; });
/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee */ "./src/designations/employee.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var SoftwareEngineer =
/*#__PURE__*/
function (_Emploeyee) {
  _inherits(SoftwareEngineer, _Emploeyee);

  function SoftwareEngineer(details, monthSalary) {
    var _this;

    _classCallCheck(this, SoftwareEngineer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SoftwareEngineer).call(this, details, monthSalary));

    _this.assignDesignation(_employee__WEBPACK_IMPORTED_MODULE_0__["ROLES"].SE);

    return _this;
  }

  return SoftwareEngineer;
}(_employee__WEBPACK_IMPORTED_MODULE_0__["Emploeyee"]);

/***/ }),

/***/ "./src/designations/sse.ts":
/*!*********************************!*\
  !*** ./src/designations/sse.ts ***!
  \*********************************/
/*! exports provided: SeniorSoftwareEngineer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeniorSoftwareEngineer", function() { return SeniorSoftwareEngineer; });
/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee */ "./src/designations/employee.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var SeniorSoftwareEngineer =
/*#__PURE__*/
function (_Emploeyee) {
  _inherits(SeniorSoftwareEngineer, _Emploeyee);

  function SeniorSoftwareEngineer(details, monthSalary) {
    var _this;

    _classCallCheck(this, SeniorSoftwareEngineer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SeniorSoftwareEngineer).call(this, details, monthSalary));

    _this.assignDesignation(_employee__WEBPACK_IMPORTED_MODULE_0__["ROLES"].SSE);

    return _this;
  }

  return SeniorSoftwareEngineer;
}(_employee__WEBPACK_IMPORTED_MODULE_0__["Emploeyee"]);

/***/ }),

/***/ "./src/designations/stl.ts":
/*!*********************************!*\
  !*** ./src/designations/stl.ts ***!
  \*********************************/
/*! exports provided: SeniorTeamLead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeniorTeamLead", function() { return SeniorTeamLead; });
/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee */ "./src/designations/employee.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var SeniorTeamLead =
/*#__PURE__*/
function (_Emploeyee) {
  _inherits(SeniorTeamLead, _Emploeyee);

  function SeniorTeamLead(details, monthSalary) {
    var _this;

    _classCallCheck(this, SeniorTeamLead);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SeniorTeamLead).call(this, details, monthSalary));

    _this.assignDesignation(_employee__WEBPACK_IMPORTED_MODULE_0__["ROLES"].STL);

    return _this;
  }

  _createClass(SeniorTeamLead, [{
    key: "hasAddPrivilege",
    value: function hasAddPrivilege() {
      return true;
    }
  }]);

  return SeniorTeamLead;
}(_employee__WEBPACK_IMPORTED_MODULE_0__["Emploeyee"]);

/***/ }),

/***/ "./src/designations/tl.ts":
/*!********************************!*\
  !*** ./src/designations/tl.ts ***!
  \********************************/
/*! exports provided: TeamLead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamLead", function() { return TeamLead; });
/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee */ "./src/designations/employee.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var TeamLead =
/*#__PURE__*/
function (_Emploeyee) {
  _inherits(TeamLead, _Emploeyee);

  function TeamLead(details, monthSalary) {
    var _this;

    _classCallCheck(this, TeamLead);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TeamLead).call(this, details, monthSalary));

    _this.assignDesignation(_employee__WEBPACK_IMPORTED_MODULE_0__["ROLES"].TL);

    return _this;
  }

  _createClass(TeamLead, [{
    key: "hasAddPrivilege",
    value: function hasAddPrivilege() {
      return true;
    }
  }]);

  return TeamLead;
}(_employee__WEBPACK_IMPORTED_MODULE_0__["Emploeyee"]);

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _company_company__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company/company */ "./src/company/company.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Bootstrap =
/*#__PURE__*/
function () {
  function Bootstrap() {
    _classCallCheck(this, Bootstrap);
  }

  _createClass(Bootstrap, [{
    key: "initialize",
    value: function initialize() {
      var compnay = new _company_company__WEBPACK_IMPORTED_MODULE_0__["Company"]();
      compnay.initialize();
    }
  }]);

  return Bootstrap;
}();

var boot = new Bootstrap();
boot.initialize();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBhbnkvY29tcGFueS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVzaWduYXRpb25zL2FzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVzaWduYXRpb25zL2Rldi1tYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9kZXNpZ25hdGlvbnMvZW1wbG95ZWUtZmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVzaWduYXRpb25zL2VtcGxveWVlLnRzIiwid2VicGFjazovLy8uL3NyYy9kZXNpZ25hdGlvbnMvaHItbWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVzaWduYXRpb25zL2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9kZXNpZ25hdGlvbnMvc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rlc2lnbmF0aW9ucy9zc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rlc2lnbmF0aW9ucy9zdGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rlc2lnbmF0aW9ucy90bC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiQ29tcGFueSIsImxpc3QiLCJBcnJheSIsImhyTWFuYWdlciIsIkVtcGxveWVlRmFjdG9yeSIsImNyZWF0ZSIsIlJPTEVTIiwiSFJfTUFOQUdFUiIsIm5hbWUiLCJhZGRyZXNzIiwiYmFzaWMiLCJocmEiLCJvdGhlckFsbG93YW5jZSIsInRkcyIsImVwZiIsImRldk1hbmFnZXIiLCJERVZfTUFOQUdFUiIsImFzZSIsIkFTRSIsInNlIiwiU0UiLCJzc2UiLCJTU0UiLCJsZSIsIkxFIiwiYWRkUmVwb3J0ZWUiLCJwcmludFJlcG9ydGVlRGV0YWlscyIsImNvbnNvbGUiLCJsb2ciLCJBc3Npc3RhbnRTb2Z0d2FyZUVuZ2luZWVyIiwiZGV0YWlscyIsIm1vbnRoU2FsYXJ5IiwiYXNzaWduRGVzaWduYXRpb24iLCJFbXBsb2V5ZWUiLCJEZXZNYW5hZ2VyIiwiRU1QX01BUCIsIlNvZnR3YXJlRW5naW5lZXIiLCJTZW5pb3JTb2Z0d2FyZUVuZ2luZWVyIiwiTGVhZEVuZ2luZWVyIiwiVEwiLCJUZWFtTGVhZCIsIlNUTCIsIlNlbmlvclRlYW1MZWFkIiwiSFJNYW5hZ2VyIiwicm9sZSIsIm1vbnRobHlTYWxhcnkiLCJFbXBsb3llZSIsIm1vbnRobHlTYWxhcnlEZXRhaWxzIiwiT2JqZWN0IiwiYXNzaWduIiwiZGVzaWduYXRpb24iLCJlbXAiLCJoYXNBZGRQcml2aWxlZ2UiLCJnZXRJbmRleCIsInJlcG9ydGVlTGlzdCIsInB1c2giLCJpbmRleCIsImZpbmRJbmRleCIsInZhbHVlIiwic3BsaWNlIiwiZm9yRWFjaCIsInJlcG9ydGVlIiwiZ2V0RGVzaWduYXRpb24iLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0UHJvZmVzc2lvbkRldGFpbHMiLCJoYXNSZXBvcnRlZVNhbGF5RGV0YWlsUHJldmlsYWdlIiwiZ2V0U2FsYXJ5RGV0YWlscyIsIkJvb3RzdHJhcCIsImNvbXBuYXkiLCJpbml0aWFsaXplIiwiYm9vdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVB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QUFBQTs7QUFFSSwwQkFBWVosT0FBWixFQUFzQ0MsV0FBdEMsRUFBK0Q7QUFBQTs7QUFBQTs7QUFDM0Qsd0ZBQU1ELE9BQU4sRUFBZUMsV0FBZjs7QUFDQSxVQUFLQyxpQkFBTCxDQUF1QjFCLCtDQUFLLENBQUNtQyxHQUE3Qjs7QUFGMkQ7QUFHOUQ7O0FBTEw7QUFBQTtBQUFBLHNDQU84QjtBQUN0QixhQUFPLElBQVA7QUFDSDtBQVRMOztBQUFBO0FBQUEsRUFBb0NSLG1EQUFwQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUlPLElBQU1PLFFBQWI7QUFBQTtBQUFBO0FBQUE7O0FBRUksb0JBQVlWLE9BQVosRUFBc0NDLFdBQXRDLEVBQStEO0FBQUE7O0FBQUE7O0FBQzNELGtGQUFNRCxPQUFOLEVBQWVDLFdBQWY7O0FBQ0EsVUFBS0MsaUJBQUwsQ0FBdUIxQiwrQ0FBSyxDQUFDaUMsRUFBN0I7O0FBRjJEO0FBRzlEOztBQUxMO0FBQUE7QUFBQSxzQ0FPOEI7QUFDdEIsYUFBTyxJQUFQO0FBQ0g7QUFUTDs7QUFBQTtBQUFBLEVBQThCTixtREFBOUIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTs7SUFFTW1DLFM7OztBQUVGLHVCQUFhO0FBQUE7QUFBSTs7OztpQ0FFRTtBQUNmLFVBQUlDLE9BQWUsR0FBRyxJQUFJckUsd0RBQUosRUFBdEI7QUFDQXFFLGFBQU8sQ0FBQ0MsVUFBUjtBQUNIOzs7Ozs7QUFHTCxJQUFJQyxJQUFJLEdBQUcsSUFBSUgsU0FBSixFQUFYO0FBQ0FHLElBQUksQ0FBQ0QsVUFBTCxHIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IElFbXBsb3llZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2ktZW1wbG95ZWVcIjtcclxuaW1wb3J0IHsgUk9MRVMgfSBmcm9tIFwiLi4vZGVzaWduYXRpb25zL2VtcGxveWVlXCI7XHJcbmltcG9ydCB7IEVtcGxveWVlRmFjdG9yeSB9IGZyb20gXCIuLi9kZXNpZ25hdGlvbnMvZW1wbG95ZWUtZmFjdG9yeVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBhbnkge1xyXG4gICAgcHJpdmF0ZSBsaXN0OkFycmF5PElFbXBsb3llZT4gXHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmxpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCl7XHJcbiAgICAgICAgbGV0IGhyTWFuYWdlcjpJRW1wbG95ZWUgPSBFbXBsb3llZUZhY3RvcnkuY3JlYXRlKFxyXG4gICAgICAgICAgICBST0xFUy5IUl9NQU5BR0VSLCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOlwiaHItSmFuZVwiLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczpcIk5ZXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgYmFzaWM6MzAwMDAsXHJcbiAgICAgICAgICAgICAgICBocmE6MzAwMDAsXHJcbiAgICAgICAgICAgICAgICBvdGhlckFsbG93YW5jZTogMTUwMDAsXHJcbiAgICAgICAgICAgICAgICB0ZHM6NTAwMCxcclxuICAgICAgICAgICAgICAgIGVwZjoyMDAwICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBsZXQgZGV2TWFuYWdlcjpJRW1wbG95ZWUgPSBFbXBsb3llZUZhY3RvcnkuY3JlYXRlKFxyXG4gICAgICAgICAgICBST0xFUy5ERVZfTUFOQUdFUiwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTpcImRldi1tYW5hZ2VyLUt1cnRcIixcclxuICAgICAgICAgICAgICAgIGFkZHJlc3M6XCJOWVwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGJhc2ljOjEwMDAwMCxcclxuICAgICAgICAgICAgICAgIGhyYTo1MDAwMCxcclxuICAgICAgICAgICAgICAgIG90aGVyQWxsb3dhbmNlOjQwMDAwLFxyXG4gICAgICAgICAgICAgICAgdGRzOjIwMDAwLFxyXG4gICAgICAgICAgICAgICAgZXBmOjMwMDAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBsZXQgYXNlOklFbXBsb3llZSA9IEVtcGxveWVlRmFjdG9yeS5jcmVhdGUoXHJcbiAgICAgICAgICAgIFJPTEVTLkFTRSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTpcImFzZS1wZWF0b25cIixcclxuICAgICAgICAgICAgICAgIGFkZHJlc3M6XCJOWVwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGJhc2ljOjEwMDAwLFxyXG4gICAgICAgICAgICAgICAgaHJhOjUwMDAsXHJcbiAgICAgICAgICAgICAgICBvdGhlckFsbG93YW5jZTozMDAwLFxyXG4gICAgICAgICAgICAgICAgdGRzOjAsXHJcbiAgICAgICAgICAgICAgICBlcGY6MjAwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBsZXQgc2U6SUVtcGxveWVlID0gRW1wbG95ZWVGYWN0b3J5LmNyZWF0ZShcclxuICAgICAgICAgICAgUk9MRVMuU0UsIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6XCJzZS1wYXRlcnNvblwiLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczpcIk5ZXCJcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgYmFzaWM6MTUwMDAsXHJcbiAgICAgICAgICAgICAgICBocmE6NzAwMCxcclxuICAgICAgICAgICAgICAgIG90aGVyQWxsb3dhbmNlOjUwMDAsXHJcbiAgICAgICAgICAgICAgICB0ZHM6MTAwMCxcclxuICAgICAgICAgICAgICAgIGVwZjoyNTAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIGxldCBzc2U6SUVtcGxveWVlID0gRW1wbG95ZWVGYWN0b3J5LmNyZWF0ZShcclxuICAgICAgICAgICAgUk9MRVMuU1NFLCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOlwic3NlLVJlYWRcIixcclxuICAgICAgICAgICAgICAgIGFkZHJlc3M6XCJOWVwiXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGJhc2ljOjI1MDAwLFxyXG4gICAgICAgICAgICAgICAgaHJhOjExMDAwLFxyXG4gICAgICAgICAgICAgICAgb3RoZXJBbGxvd2FuY2U6ODAwMCxcclxuICAgICAgICAgICAgICAgIHRkczoxNTAwLFxyXG4gICAgICAgICAgICAgICAgZXBmOjI1MDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgbGV0IGxlOklFbXBsb3llZSA9IEVtcGxveWVlRmFjdG9yeS5jcmVhdGUoXHJcbiAgICAgICAgICAgIFJPTEVTLkxFLCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOlwibGUtU3R1YXJkXCIsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzOlwiTllcIlxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBiYXNpYzo0NTAwMCxcclxuICAgICAgICAgICAgICAgIGhyYToxNTAwMCxcclxuICAgICAgICAgICAgICAgIG90aGVyQWxsb3dhbmNlOjExMDAwLFxyXG4gICAgICAgICAgICAgICAgdGRzOjI1MDAsXHJcbiAgICAgICAgICAgICAgICBlcGY6MzUwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBsZS5hZGRSZXBvcnRlZShzc2UpO1xyXG4gICAgICAgIGxlLmFkZFJlcG9ydGVlKHNlKTtcclxuICAgICAgICBsZS5hZGRSZXBvcnRlZShhc2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRldk1hbmFnZXIuYWRkUmVwb3J0ZWUobGUpO1xyXG4gICAgICAgIGhyTWFuYWdlci5hZGRSZXBvcnRlZShkZXZNYW5hZ2VyKTtcclxuXHJcbiAgICAgICAgZGV2TWFuYWdlci5wcmludFJlcG9ydGVlRGV0YWlscyhkZXZNYW5hZ2VyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKVxyXG4gICAgICAgIGhyTWFuYWdlci5wcmludFJlcG9ydGVlRGV0YWlscyhock1hbmFnZXIpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRW1wbG9leWVlLCBST0xFUyB9IGZyb20gXCIuL2VtcGxveWVlXCI7XHJcbmltcG9ydCB7IElFbXBsb3llZURldGFpbHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLWVtcC1kZXRhbHNcIjtcclxuaW1wb3J0IHsgSU1vbnRoU2FsYXJ5IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaS1zYWxhcnlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBc3Npc3RhbnRTb2Z0d2FyZUVuZ2luZWVyIGV4dGVuZHMgRW1wbG9leWVlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkZXRhaWxzOklFbXBsb3llZURldGFpbHMsIG1vbnRoU2FsYXJ5OklNb250aFNhbGFyeSl7XHJcbiAgICAgICAgc3VwZXIoZGV0YWlscywgbW9udGhTYWxhcnkpO1xyXG4gICAgICAgIHRoaXMuYXNzaWduRGVzaWduYXRpb24oUk9MRVMuQVNFKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVtcGxvZXllZSwgUk9MRVMgfSBmcm9tIFwiLi9lbXBsb3llZVwiO1xyXG5pbXBvcnQgeyBJRW1wbG95ZWVEZXRhaWxzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaS1lbXAtZGV0YWxzXCI7XHJcbmltcG9ydCB7IElNb250aFNhbGFyeSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2ktc2FsYXJ5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGV2TWFuYWdlciBleHRlbmRzIEVtcGxvZXllZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGV0YWlsczpJRW1wbG95ZWVEZXRhaWxzLCBtb250aFNhbGFyeTpJTW9udGhTYWxhcnkpe1xyXG4gICAgICAgIHN1cGVyKGRldGFpbHMsIG1vbnRoU2FsYXJ5KTtcclxuICAgICAgICB0aGlzLmFzc2lnbkRlc2lnbmF0aW9uKFJPTEVTLkRFVl9NQU5BR0VSKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNBZGRQcml2aWxlZ2UoKTpib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFJPTEVTIH0gZnJvbSBcIi4vZW1wbG95ZWVcIjtcclxuaW1wb3J0IHsgSUVtcGxveWVlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaS1lbXBsb3llZVwiO1xyXG5pbXBvcnQgeyBBc3Npc3RhbnRTb2Z0d2FyZUVuZ2luZWVyIH0gZnJvbSBcIi4vYXNlXCI7XHJcbmltcG9ydCB7IElFbXBsb3llZURldGFpbHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLWVtcC1kZXRhbHNcIjtcclxuaW1wb3J0IHsgSU1vbnRoU2FsYXJ5IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaS1zYWxhcnlcIjtcclxuaW1wb3J0IHsgU29mdHdhcmVFbmdpbmVlciB9IGZyb20gXCIuL3NlXCI7XHJcbmltcG9ydCB7IFNlbmlvclNvZnR3YXJlRW5naW5lZXIgfSBmcm9tIFwiLi9zc2VcIjtcclxuaW1wb3J0IHsgTGVhZEVuZ2luZWVyIH0gZnJvbSBcIi4vbGVcIjtcclxuaW1wb3J0IHsgVGVhbUxlYWQgfSBmcm9tIFwiLi90bFwiO1xyXG5pbXBvcnQgeyBEZXZNYW5hZ2VyIH0gZnJvbSBcIi4vZGV2LW1hbmFnZXJcIjtcclxuaW1wb3J0IHsgSFJNYW5hZ2VyIH0gZnJvbSBcIi4vaHItbWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTZW5pb3JUZWFtTGVhZCB9IGZyb20gXCIuL3N0bFwiO1xyXG5cclxuY29uc3QgRU1QX01BUDphbnkgPSBbXVxyXG5FTVBfTUFQW1JPTEVTLkFTRV0gPSBBc3Npc3RhbnRTb2Z0d2FyZUVuZ2luZWVyO1xyXG5FTVBfTUFQW1JPTEVTLlNFXSA9IFNvZnR3YXJlRW5naW5lZXI7XHJcbkVNUF9NQVBbUk9MRVMuU1NFXSA9IFNlbmlvclNvZnR3YXJlRW5naW5lZXI7XHJcbkVNUF9NQVBbUk9MRVMuTEVdID0gTGVhZEVuZ2luZWVyO1xyXG5FTVBfTUFQW1JPTEVTLlRMXSA9IFRlYW1MZWFkO1xyXG5FTVBfTUFQW1JPTEVTLlNUTF0gPSBTZW5pb3JUZWFtTGVhZDtcclxuRU1QX01BUFtST0xFUy5ERVZfTUFOQUdFUl0gPSBEZXZNYW5hZ2VyO1xyXG5FTVBfTUFQW1JPTEVTLkhSX01BTkFHRVJdID0gSFJNYW5hZ2VyO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVtcGxveWVlRmFjdG9yeSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZShyb2xlOnN0cmluZywgZGV0YWlsczpJRW1wbG95ZWVEZXRhaWxzLCBcclxuICAgICAgICBtb250aGx5U2FsYXJ5OklNb250aFNhbGFyeSk6SUVtcGxveWVlIHtcclxuICAgICAgIGxldCBFbXBsb3llZSA9IEVNUF9NQVBbcm9sZV07XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFbXBsb3llZShkZXRhaWxzLCBtb250aGx5U2FsYXJ5KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElFbXBsb3llZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2ktZW1wbG95ZWVcIjtcclxuaW1wb3J0IHsgSUVtcGxveWVlRGV0YWlscyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2ktZW1wLWRldGFsc1wiO1xyXG5pbXBvcnQgeyBJTW9udGhTYWxhcnkgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLXNhbGFyeVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJPTEVTID0ge1xyXG4gICAgSFJfTUFOQUdFUjonaHItbWFuYWdlcicsXHJcbiAgICBERVZfTUFOQUdFUjpcImRldmVsb3BtZW50IG1hbmFnZXJcIixcclxuICAgIEFTRTpcImFzc2lzdGFuY2Ugc29mdHdhcmUgZW5naW5lZXJcIixcclxuICAgIFNFOlwic29mdHdhcmUgZW5naW5lclwiLFxyXG4gICAgU1NFOlwic2VuaW9yIHNvZnR3YXJlIGVuZ2luZWVyXCIsXHJcbiAgICBMRTpcIkxlYWQgZW5naW5lZXJcIixcclxuICAgIFRMOlwiVGVhbSBsZWFkZXJcIixcclxuICAgIFNUTDpcInNlbmlvciBUZWFtIGxlYWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRW1wbG9leWVlIGltcGxlbWVudHMgSUVtcGxveWVlIHtcclxuICAgIHByb3RlY3RlZCBkZXNpZ25hdGlvbjpzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBkZXRhaWxzOklFbXBsb3llZURldGFpbHNcclxuICAgIHByaXZhdGUgbW9udGhseVNhbGFyeURldGFpbHM6SU1vbnRoU2FsYXJ5XHJcbiAgICBwcml2YXRlIHJlcG9ydGVlTGlzdDpBcnJheTxJRW1wbG95ZWU+ID0gbmV3IEFycmF5KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGV0YWlsczpJRW1wbG95ZWVEZXRhaWxzLCBtb250aFNhbGFyeTpJTW9udGhTYWxhcnkpe1xyXG4gICAgICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XHJcbiAgICAgICAgdGhpcy5tb250aGx5U2FsYXJ5RGV0YWlscyA9IG1vbnRoU2FsYXJ5XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvZmVzc2lvbkRldGFpbHMoKTpJRW1wbG95ZWVEZXRhaWxzIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZXRhaWxzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTYWxhcnlEZXRhaWxzKCk6SU1vbnRoU2FsYXJ5IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5tb250aGx5U2FsYXJ5RGV0YWlscyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFzc2lnbkRlc2lnbmF0aW9uKHJvbGU6c3RyaW5nKTp2b2lke1xyXG4gICAgICAgIHRoaXMuZGVzaWduYXRpb24gPSByb2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBoYXNBZGRQcml2aWxlZ2UoKTpib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgaGFzUmVwb3J0ZWVEZXRhaWxQcmV2aWxlZ2UoKTpib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzUmVwb3J0ZWVTYWxheURldGFpbFByZXZpbGFnZSgpOmJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRSZXBvcnRlZShlbXA6SUVtcGxveWVlKTpib29sZWFue1xyXG4gICAgICAgIGlmKCF0aGlzLmhhc0FkZFByaXZpbGVnZSgpKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZ2V0SW5kZXgoZW1wKSA9PT0gLTEpe1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9ydGVlTGlzdC5wdXNoKGVtcCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRJbmRleChlbXA6SUVtcGxveWVlKTpudW1iZXJ7XHJcbiAgICAgICAgbGV0IGluZGV4Om51bWJlciA9IHRoaXMucmVwb3J0ZWVMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZEluZGV4KHZhbHVlID0+IHZhbHVlID09PSBlbXApXHJcbiAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVJlcG9ydGVlKGVtcDpJRW1wbG95ZWUpOmJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZ2V0SW5kZXgoZW1wKTtcclxuICAgICAgICBpZihpbmRleCA+IC0xKXtcclxuICAgICAgICAgICAgdGhpcy5yZXBvcnRlZUxpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcmludFJlcG9ydGVlRGV0YWlscyhlbXA6SUVtcGxveWVlKTp2b2lkIHtcclxuICAgICAgICB0aGlzLnJlcG9ydGVlTGlzdC5mb3JFYWNoKChyZXBvcnRlZTpJRW1wbG95ZWUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkZXNpZ25hdGlvbiBcIiwgcmVwb3J0ZWUuZ2V0RGVzaWduYXRpb24oKSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVwb3J0ZWUuZ2V0UHJvZmVzc2lvbkRldGFpbHMoKSkpXHJcbiAgICAgICAgICAgIGlmKGVtcC5oYXNSZXBvcnRlZVNhbGF5RGV0YWlsUHJldmlsYWdlKCkpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVwb3J0ZWUuZ2V0U2FsYXJ5RGV0YWlscygpKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXBvcnRlZS5wcmludFJlcG9ydGVlRGV0YWlscyhlbXApO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVzaWduYXRpb24oKTpzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlc2lnbmF0aW9uO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRW1wbG9leWVlLCBST0xFUyB9IGZyb20gXCIuL2VtcGxveWVlXCI7XHJcbmltcG9ydCB7IElFbXBsb3llZURldGFpbHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLWVtcC1kZXRhbHNcIjtcclxuaW1wb3J0IHsgSU1vbnRoU2FsYXJ5IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaS1zYWxhcnlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIUk1hbmFnZXIgZXh0ZW5kcyBFbXBsb2V5ZWUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRldGFpbHM6SUVtcGxveWVlRGV0YWlscywgbW9udGhTYWxhcnk6SU1vbnRoU2FsYXJ5KXtcclxuICAgICAgICBzdXBlcihkZXRhaWxzLCBtb250aFNhbGFyeSk7XHJcbiAgICAgICAgdGhpcy5hc3NpZ25EZXNpZ25hdGlvbihST0xFUy5IUl9NQU5BR0VSKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNSZXBvcnRlZVNhbGF5RGV0YWlsUHJldmlsYWdlKCk6Ym9vbGVhbntcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGhhc0FkZFByaXZpbGVnZSgpOmJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRW1wbG9leWVlLCBST0xFUyB9IGZyb20gXCIuL2VtcGxveWVlXCI7XHJcbmltcG9ydCB7IElFbXBsb3llZURldGFpbHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLWVtcC1kZXRhbHNcIjtcclxuaW1wb3J0IHsgSU1vbnRoU2FsYXJ5IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaS1zYWxhcnlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMZWFkRW5naW5lZXIgZXh0ZW5kcyBFbXBsb2V5ZWUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRldGFpbHM6SUVtcGxveWVlRGV0YWlscywgbW9udGhTYWxhcnk6SU1vbnRoU2FsYXJ5KXtcclxuICAgICAgICBzdXBlcihkZXRhaWxzLCBtb250aFNhbGFyeSk7XHJcbiAgICAgICAgdGhpcy5hc3NpZ25EZXNpZ25hdGlvbihST0xFUy5MRSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzQWRkUHJpdmlsZWdlKCk6Ym9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgRW1wbG9leWVlLCBST0xFUyB9IGZyb20gXCIuL2VtcGxveWVlXCI7XHJcbmltcG9ydCB7IElFbXBsb3llZURldGFpbHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLWVtcC1kZXRhbHNcIjtcclxuaW1wb3J0IHsgSU1vbnRoU2FsYXJ5IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaS1zYWxhcnlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTb2Z0d2FyZUVuZ2luZWVyIGV4dGVuZHMgRW1wbG9leWVlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkZXRhaWxzOklFbXBsb3llZURldGFpbHMsIG1vbnRoU2FsYXJ5OklNb250aFNhbGFyeSl7XHJcbiAgICAgICAgc3VwZXIoZGV0YWlscywgbW9udGhTYWxhcnkpO1xyXG4gICAgICAgIHRoaXMuYXNzaWduRGVzaWduYXRpb24oUk9MRVMuU0UpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRW1wbG9leWVlLCBST0xFUyB9IGZyb20gXCIuL2VtcGxveWVlXCI7XHJcbmltcG9ydCB7IElFbXBsb3llZURldGFpbHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLWVtcC1kZXRhbHNcIjtcclxuaW1wb3J0IHsgSU1vbnRoU2FsYXJ5IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaS1zYWxhcnlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZW5pb3JTb2Z0d2FyZUVuZ2luZWVyIGV4dGVuZHMgRW1wbG9leWVlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkZXRhaWxzOklFbXBsb3llZURldGFpbHMsIG1vbnRoU2FsYXJ5OklNb250aFNhbGFyeSl7XHJcbiAgICAgICAgc3VwZXIoZGV0YWlscywgbW9udGhTYWxhcnkpO1xyXG4gICAgICAgIHRoaXMuYXNzaWduRGVzaWduYXRpb24oUk9MRVMuU1NFKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVtcGxvZXllZSwgUk9MRVMgfSBmcm9tIFwiLi9lbXBsb3llZVwiO1xyXG5pbXBvcnQgeyBJRW1wbG95ZWVEZXRhaWxzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaS1lbXAtZGV0YWxzXCI7XHJcbmltcG9ydCB7IElNb250aFNhbGFyeSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2ktc2FsYXJ5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VuaW9yVGVhbUxlYWQgZXh0ZW5kcyBFbXBsb2V5ZWUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRldGFpbHM6SUVtcGxveWVlRGV0YWlscywgbW9udGhTYWxhcnk6SU1vbnRoU2FsYXJ5KXtcclxuICAgICAgICBzdXBlcihkZXRhaWxzLCBtb250aFNhbGFyeSk7XHJcbiAgICAgICAgdGhpcy5hc3NpZ25EZXNpZ25hdGlvbihST0xFUy5TVEwpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0FkZFByaXZpbGVnZSgpOmJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IEVtcGxvZXllZSwgUk9MRVMgfSBmcm9tIFwiLi9lbXBsb3llZVwiO1xyXG5pbXBvcnQgeyBJRW1wbG95ZWVEZXRhaWxzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaS1lbXAtZGV0YWxzXCI7XHJcbmltcG9ydCB7IElNb250aFNhbGFyeSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2ktc2FsYXJ5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGVhbUxlYWQgZXh0ZW5kcyBFbXBsb2V5ZWUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRldGFpbHM6SUVtcGxveWVlRGV0YWlscywgbW9udGhTYWxhcnk6SU1vbnRoU2FsYXJ5KXtcclxuICAgICAgICBzdXBlcihkZXRhaWxzLCBtb250aFNhbGFyeSk7XHJcbiAgICAgICAgdGhpcy5hc3NpZ25EZXNpZ25hdGlvbihST0xFUy5UTCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzQWRkUHJpdmlsZWdlKCk6Ym9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgQ29tcGFueSB9IGZyb20gXCIuL2NvbXBhbnkvY29tcGFueVwiO1xuXG5jbGFzcyBCb290c3RyYXAge1xuXG4gICAgY29uc3RydWN0b3IoKXsgIH1cblxuICAgIHB1YmxpYyBpbml0aWFsaXplKCl7XG4gICAgICAgIGxldCBjb21wbmF5OkNvbXBhbnkgPSBuZXcgQ29tcGFueSgpO1xuICAgICAgICBjb21wbmF5LmluaXRpYWxpemUoKTtcbiAgICB9XG59ICAgXG5cbmxldCBib290ID0gbmV3IEJvb3RzdHJhcCgpO1xuYm9vdC5pbml0aWFsaXplKCk7ICAiXSwic291cmNlUm9vdCI6IiJ9