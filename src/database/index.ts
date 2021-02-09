import connection from '../config/database/postgres/index';

import Contact from '../models/postgres/Contact/Contact';
import ContactData from '../models/postgres/ContactData/ContactData';
import Load from '../models/postgres/Load/Load';
import Queue from '../models/postgres/Queue/Queue';

Contact.init(connection);
ContactData.init(connection);
Load.init(connection);
Queue.init(connection);

Contact.associate(connection.models);
ContactData.associate(connection.models);
Load.associate(connection.models);
Queue.associate(connection.models);

export default connection;
