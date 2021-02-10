export default Load;
declare class Load extends Model<any, any> {
    static init(sequelize: any): Model<any, any>;
    static associate(models: any): void;
    constructor(values?: any, options?: import("sequelize/types").BuildOptions);
}
import { Model } from "sequelize/types/lib/model";
