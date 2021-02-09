# Orchy Base

Orchy Base is an ORM (sequelize, mongoose) wrapper that simplifies the CRUD development. By centralizing all the main features of an ORM in one place.

This node package was build with the microservice architecture in mind, so it is a fit when the software architecture requires a lot of database configuration around all the microservices.

## Installation

Before using the Orchy Base some configuration is required.

### Set up the environment variable

Create an environment variable file `.env` for development purpose.

```
NODE_ENV=development OR staging OR production

ORCHYBASE_POSTGRES_DATABASE=DATABASE
ORCHYBASE_POSTGRES_USERNAME=USERNAME
ORCHYBASE_POSTGRES_PASSWORD=PASSWORD
ORCHYBASE_POSTGRES_HOST=HOST

ORCHYBASE_MONGO_URI=MONGODB_URI
```

## Usage

To properly use the node package simply instantiate a new object.

```javascript
const orchybase = new OrchyBase();
```

### Available methods and its parameters

createLoad() returns a object with created information

```javascript
const newLoad = await orchyBase.createLoad({
  id_flow: STRING
  id_load: BIGINT,
  id_org: STRING,
  register: NUMBER,
  active: BOOLEAN,
  created_at: DATE,
  updated_at: NULL OR DATE,
});
```

createQueue() returns a object with created information

```javascript
const newQueue = await orchyBase.createQueue({
  id_load: NUMBER,
  id_queue: BIGINT,
  schedule: DATE,
  status: NUMBER,
  created_at: DATE,
  updated_at: NULL OR DATE,
});
```

createContact() returns a object with created information

```javascript
const newContact = await orchyBase.createContact({
  id_contact: BIGINT,
  id_load: NUMBER,
  name: STRING,
  key: STRING,
  created_at: DATE,
  updated_at: NULL OR DATE,
});
```

createContactData() returns a object with created information

```javascript
const newContactData = await orchyBase.createContactData({
  id_contact_data: BIGINT,
  id_contact: NUMBER,
  data_type: NUMBER,
  contact_data: STRING,
  status: NUMBER,
  created_at: DATE,
  updated_at: NULL OR DATE,
});
```

createLoadInfo() returns a object with created information

```javascript
const newLoadInfo = await orchyBase.createLoadInfo({
  id_flow: STRING,
  id_load: STRING,
  id_org: STRING,
  start: DATE,
  finish: DATE,
  schedule: DATE,
  contacts: STRING,
  telephones: STRING,
  telephones_ddd: [STRING],
  email: STRING,
  created_at: DATE,
  updated_at: NULL OR DATE,
});
```

createLoadStatus() returns a object with created information

```javascript
const newLoadStatus = await orchyBase.createLoadStatus({
  id_flow: STRING;
  id_load: STRING;
  id_org: STRING;
  start: DATE;
  finish: DATE;
  total: STRING;
  contact_total: STRING;
  telephone_total: STRING;
  email_total: STRING;
  contact_processed: STRING;
  telephone_processed: STRING;
  email_processed: STRING;
  created_at: DATE;
  updated_at: NULL OR DATE;
});
```

createQueueContact() returns a object with created information

```javascript
const newQueueContact = await orchyBase.createQueueContact({
  id_contact_data: NUMBER;
  schedule: NUMBER;
  event_type: STRING;
  data_type: STRING;
  contact_data: STRING;
  status: NUMBER;
  created_at: NUMBER;
  updated_at: NULL OR NUMBER;
});
```
