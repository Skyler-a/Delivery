const AuthService = require('../service/authService');

class AuthController {
  async login(req, res) {
    try {
      const { email, senha } = req.body;
      const result = await AuthService.login(email, senha);
      return res.setHeader('token', result.token).status(200).json({ Message: 'Logado' });
    } catch (error) {
      return res.status(401).json(error);
    }
  }
}
module.exports = new AuthController();