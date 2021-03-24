import { DataTypes, Model } from 'sequelize';

class Contact extends Model {
  static init(sequelize) {
    return super.init(
      {
        id_contact: {
          type: DataTypes.BIGINT,
          defaultValue: DataTypes.DEFAULT,
          primaryKey: true,
          allowNull: true,
          unique: true,
        },
        id_load: {
          type: DataTypes.BIGINT,
          allowNull: false,
          unique: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: false,
        },
        key: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
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
    this.belongsTo(models.Load, { foreignKey: 'id_load', as: 'load' });

    this.hasMany(models.ContactData, {
      foreignKey: 'id_contact',
      as: 'contact_data',
    });
  }
}

export default Contact;
