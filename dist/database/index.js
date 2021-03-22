"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../config/database/postgres/index"));

var _Contact = _interopRequireDefault(require("../models/postgres/Contact/Contact"));

var _ContactData = _interopRequireDefault(require("../models/postgres/ContactData/ContactData"));

var _Load = _interopRequireDefault(require("../models/postgres/Load/Load"));

var _Queue = _interopRequireDefault(require("../models/postgres/Queue/Queue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Contact.default.init(_index.default);

_ContactData.default.init(_index.default);

_Load.default.init(_index.default);

_Queue.default.init(_index.default);

_Contact.default.associate(_index.default.models);

_ContactData.default.associate(_index.default.models);

_Load.default.associate(_index.default.models);

_Queue.default.associate(_index.default.models);

var _default = _index.default;
exports.default = _default;