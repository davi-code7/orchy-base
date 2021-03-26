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
        state: {
          type: DataTypes.ENUM(['pending', 'working', 'done']),
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
    this.hasOne(models.Load, { foreignKey: 'id_load', as: 'load' });

    this.hasMany(models.ContactComplement, {
      foreignKey: 'id_contact',
      as: 'contact_complement',
    });
    this.hasMany(models.ContactEmail, {
      foreignKey: 'id_contact',
      as: 'contact_email',
    });
    this.hasMany(models.ContactPhone, {
      foreignKey: 'id_contact',
      as: 'contact_phone',
    });
  }
}

export default Contact;
