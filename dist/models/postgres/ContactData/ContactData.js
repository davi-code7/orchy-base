"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

class ContactData extends _sequelize.Model {
  static init(sequelize) {
    return super.init({
      id_contact_data: {
        type: _sequelize.DataTypes.BIGINT,
        defaultValue: _sequelize.DataTypes.DEFAULT,
        primaryKey: true,
        allowNull: true,
        unique: true
      },
      id_contact: {
        type: _sequelize.DataTypes.BIGINT,
        allowNull: false,
        unique: false
      },
      data_type: {
        type: _sequelize.DataTypes.ENUM(['cell_phone', 'landline', 'email']),
        allowNull: false,
        unique: false
      },
      contact_data: {
        type: _sequelize.DataTypes.STRING,
        allowNull: false,
        unique: false
      },
      status: {
        type: _sequelize.DataTypes.ENUM(['pending', 'sent', 'failured']),
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
    this.belongsTo(models.Contact, {
      foreignKey: 'id_contact',
      as: 'contact'
    });
  }

}

var _default = ContactData;
exports.default = _default;