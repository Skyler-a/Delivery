const clienteSchema = require('../schema/clienteSchema');

class AuthRepository {
  async login(email) {
    return personSchema.findOne({ email }).select('+senha');
  }
}
module.exports = new AuthRepository();