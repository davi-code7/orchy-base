import connection from '../config/database/postgres/index';

import Contact from '../models/postgres/Contact/Contact';
import ContactComplement from '../models/postgres/ContactComplement/ContactComplement';
import ContactEmail from '../models/postgres/ContactEmail/ContactEmail';
import ContactPhone from '../models/postgres/ContactPhone/ContactPhone';
import Load from '../models/postgres/Load/Load';
import Queue from '../models/postgres/Queue/Queue';

Contact.init(connection);
ContactEmail.init(connection);
ContactPhone.init(connection);
ContactComplement.init(connection);
Load.init(connection);
Queue.init(connection);

Contact.associate(connection.models);
ContactEmail.associate(connection.models);
ContactPhone.associate(connection.models);
ContactComplement.associate(connection.models);
Load.associate(connection.models);
Queue.associate(connection.models);

export default connection;
