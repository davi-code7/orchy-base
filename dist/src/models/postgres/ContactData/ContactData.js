"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class ContactData extends sequelize_1.Model {
    static init(sequelize) {
        return super.init({
            id_contact_data: {
                type: sequelize_1.DataTypes.BIGINT,
                primaryKey: true,
                allowNull: true,
                unique: true,
            },
            id_contact: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                unique: false,
            },
            data_type: {
                type: sequelize_1.DataTypes.SMALLINT,
                allowNull: false,
                unique: false,
            },
            contact_data: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                unique: false,
            },
            status: {
                type: sequelize_1.DataTypes.SMALLINT,
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
        this.belongsTo(models.Contact, { foreignKey: 'id_contact', as: 'contact' });
    }
}
exports.default = ContactData;
