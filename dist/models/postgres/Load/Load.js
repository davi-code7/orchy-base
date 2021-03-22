"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

class Load extends _sequelize.Model {
  static init(sequelize) {
    return super.init({
      id_load: {
        type: _sequelize.DataTypes.BIGINT,
        defaultValue: _sequelize.DataTypes.DEFAULT,
        primaryKey: true,
        allowNull: true,
        unique: true
      },
      // id_queue: {
      //   type: DataTypes.BIGINT,
      //   allowNull: false,
      //   unique: true,
      // },
      id_flow: {
        type: _sequelize.DataTypes.STRING,
        allowNull: false,
        unique: false
      },
      id_org: {
        type: _sequelize.DataTypes.STRING,
        allowNull: false,
        unique: false
      },
      register: {
        type: _sequelize.DataTypes.DATE,
        allowNull: false,
        unique: false
      },
      active: {
        type: _sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        unique: false
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
    this.hasOne(models.Contact, {
      foreignKey: 'id_contact',
      as: 'contact'
    });
  }

}

var _default = Load;
exports.default = _default;