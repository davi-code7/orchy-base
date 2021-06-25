import { DataTypes, Model } from 'sequelize';

class ContactPhone extends Model {
  static init(sequelize) {
    return super.init(
      {
        id_contact_phone: {
          type: DataTypes.BIGINT,
          defaultValue: DataTypes.DEFAULT,
          primaryKey: true,
          allowNull: true,
          unique: true,
        },
        id_contact: {
          type: DataTypes.BIGINT,
          allowNull: false,
          unique: false,
        },
        area_code: {
          type: DataTypes.INTEGER,
          allowNull: true,
          unique: false,
        },

        data_type: {
          type: DataTypes.ENUM(['cellular', 'landline']),
          allowNull: false,
          unique: false,
        },
        contact_data: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: false,
        },
        state: {
          type: DataTypes.ENUM(['pending', 'sent', 'failed']),
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
    this.belongsTo(models.Contact, { foreignKey: 'id_contact', as: 'contact' });
  }
}

export default ContactPhone;
