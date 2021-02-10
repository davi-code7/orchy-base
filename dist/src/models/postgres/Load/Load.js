"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Load extends sequelize_1.Model {
    static init(sequelize) {
        return super.init({
            id_load: {
                type: sequelize_1.DataTypes.BIGINT,
                primaryKey: true,
                allowNull: true,
                unique: true,
            },
            id_flow: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                unique: false,
            },
            id_org: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                unique: false,
            },
            register: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
                unique: false,
            },
            active: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: false,
                unique: false,
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
        this.hasOne(models.Contact, { foreignKey: 'id_contact', as: 'contact' });
    }
}
exports.default = Load;
