class NotFound extends Error {
    constructor(field) {
      super();
      this.name = 'Not found';
      this.status = 404;
      this.message = [
        {
          message: this.name,
          details: [{ message: `Seu ${field} não foi encontrado` }]
        }
      ];
    }
  }
  
  module.exports = NotFound;