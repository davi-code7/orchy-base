"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

class Contact extends _sequelize.Model {
  static init(sequelize) {
    return super.init({
      id_contact: {
        type: _sequelize.DataTypes.BIGINT,
        primaryKey: true,
        allowNull: true,
        unique: true
      },
      id_load: {
        type: _sequelize.DataTypes.BIGINT,
        allowNull: false,
        unique: false
      },
      name: {
        type: _sequelize.DataTypes.STRING,
        allowNull: false,
        unique: false
      },
      key: {
        type: _sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      created_at: {
        type: _sequelize.DataTypes.DATE,
        allowNull: false,
        field: 'created_at'
      },
      updated_at: {
        type: _sequelize.DataTypes.DATE,
        allowNull: true,
        field: 'updated_at'
      }
    }, {
      sequelize // freezeTableName: true,

    });
  }

  static associate(models) {
    this.hasOne(models.Load, {
      foreignKey: 'id_load',
      as: 'load'
    });
    this.hasOne(models.ContactData, {
      foreignKey: 'id_contact_data',
      as: 'contact_data'
    });
  }

}

var _default = Contact;
exports.default = _default;