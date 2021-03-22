"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

class Queue extends _sequelize.Model {
  static init(sequelize) {
    return super.init({
      id_queue: {
        type: _sequelize.DataTypes.BIGINT,
        defaultValue: _sequelize.DataTypes.DEFAULT,
        primaryKey: true,
        allowNull: true,
        unique: true
      },
      id_load: {
        type: _sequelize.DataTypes.BIGINT,
        allowNull: false,
        unique: false
      },
      schedule: {
        type: _sequelize.DataTypes.DATE,
        allowNull: false,
        unique: false
      },
      status: {
        type: _sequelize.DataTypes.SMALLINT,
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
    this.hasOne(models.Load, {
      foreignKey: 'id_load',
      as: 'load'
    });
  }

}

var _default = Queue;
exports.default = _default;