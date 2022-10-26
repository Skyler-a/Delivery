const mongoose = require('mongoose');

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    return mongoose.connect('mongodb+srv://Sky:12345@projetomaratona.gpnotrk.mongodb.net/?retryWrites=true&w=majority');
  }
}
module.exports = new Database().connect();