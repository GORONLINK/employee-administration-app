const mongoose = require('mongoose');

const URI = 'mongodb://localhost/crud-test';

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then( db =>console.log("DB Connected"))
.catch(err => console.error(err));

module.exports = mongoose;