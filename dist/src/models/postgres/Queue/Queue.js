"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Queue extends sequelize_1.Model {
    static init(sequelize) {
        return super.init({
            id_queue: {
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
            schedule: {
                type: sequelize_1.DataTypes.DATE,
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
        this.hasOne(models.Load, { foreignKey: 'id_load', as: 'load' });
    }
}
exports.default = Queue;
