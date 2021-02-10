"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Contact extends sequelize_1.Model {
    static init(sequelize) {
        return super.init({
            id_contact: {
                type: sequelize_1.DataTypes.BIGINT,
                primaryKey: true,
                allowNull: true,
                unique: true,
            },
            id_load: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                unique: false,
            },
            name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                unique: false,
            },
            key: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            created_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
                field: 'created_at',
            },
            updated_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true,
                field: 'updated_at',
            },
        }, {
            sequelize,
        });
    }
    static associate(models) {
        this.hasOne(models.Load, { foreignKey: 'id_load', as: 'load' });
        this.hasOne(models.ContactData, {
            foreignKey: 'id_contact_data',
            as: 'contact_data',
        });
    }
}
exports.default = Contact;
