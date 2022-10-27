const bcript = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AuthRepository = require('../repository/authRepository');
const authConfig = require('../config/auth.json')

class AuthService {
  async login(email, senha) {
    const result = await AuthRepository.login(email, senha);
    if (!result) {
      throw new Error('Usuario não encontrado');
    }
    if (!(await bcript.compare(senha, result.senha))) {
      throw new Error('senha incorreta');
    }
    result.senha = undefined;
    const token = jwt.sign({ id: result.id }, authConfig.secret, {
      expiresIn: 86400
    });
    return { result, token };
  }
}
module.exports = new AuthService();