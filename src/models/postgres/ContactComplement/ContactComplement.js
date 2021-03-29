import { DataTypes, Model } from 'sequelize';

class ContactComplement extends Model {
  static init(sequelize) {
    return super.init(
      {
        id_contact_complement: {
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
        field: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: false,
        },
        value: {
          type: DataTypes.STRING,
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
    this.belongsTo(models.Contact, { foreignKey: 'id_contact', as: 'contact_complement' });
  }
}

export default ContactComplement;
