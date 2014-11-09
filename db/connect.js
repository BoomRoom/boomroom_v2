var Schema = require('jugglingdb').Schema;
var schema = new Schema('postgres', {
	database: 'boomroom',
	username: 'mitulpatel'
});

module.exports = schema;