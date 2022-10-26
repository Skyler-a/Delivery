class BadRequest extends Error {
    constructor(message) {
      super();
      this.message = [
        {
          message: this.name,
          details: [{ message: `${message}` }]
        }
      ];
    }
  }
  
  module.exports = BadRequest;