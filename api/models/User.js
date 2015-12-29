var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,
  connection: 'localMongoServer',
  attributes: {
    username  : { type: 'string', unique: true },
    email     : { type: 'email',  unique: true },
    passports : { collection: 'Passport', via: 'user' },
    display_name : { type: 'string' },
    brews: { model: 'Brew', via: 'author' },
  }
};

module.exports = User;
