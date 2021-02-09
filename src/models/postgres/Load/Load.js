import { DataTypes, Model } from 'sequelize';

class Load extends Model {
  static init(sequelize) {
    return super.init(
      {
        id_load: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          allowNull: true,
          unique: true,
        },
        // id_queue: {
        //   type: DataTypes.BIGINT,
        //   allowNull: false,
        //   unique: true,
        // },
        id_flow: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: false,
        },
        id_org: {
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
    this.hasOne(models.Contact, { foreignKey: 'id_contact', as: 'contact' });
  }
}

export default Load;
