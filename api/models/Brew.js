/**
* Brew.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  schema: true,
  connection: 'localMongoServer',
  attributes: {
    title: {type: 'string', required: true},
    description: {type: 'string', required: true},
    author: {collection: 'User'},
    version: {type: 'string', required: true},
    links: {type: 'array', required: true},
    score: {type: 'number'},
    votes: {type: 'array'},
    system: {type: 'array', in:['5e', '3.5e', '4e', 'other']},
    tags: {type: 'array', in:['race', 'subrace', 'rules']}
  }
};
