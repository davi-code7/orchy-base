import { DataTypes, Model } from 'sequelize';

class Load extends Model {
  static init(sequelize) {
    return super.init(
      {
        id_load: {
          type: DataTypes.BIGINT,
          defaultValue: DataTypes.DEFAULT,
          primaryKey: true,
          allowNull: true,
          unique: true,
        },
        id_flow: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: false,
        },
        api_key: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: false,
        },
        register: {
          type: DataTypes.DATE,
          allowNull: false,
          unique: false,
        },
        active: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          unique: false,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
          field: 'created_at',
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: true,
          field: 'updated_at',
        },
      },
      {
        sequelize,
        // freezeTableName: true,
      },
    );
  }

  static associate(models) {
    this.hasMany(models.Contact, { foreignKey: 'id_contact', as: 'contact' });

    this.hasOne(models.Queue, { foreignKey: 'id_load', as: 'load' })
  }
}

export default Load;
