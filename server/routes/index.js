const usersController = require('../controllers').users;
const booksController = require('../controllers').books;
const bookItemsController = require('../controllers').bookItems;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to Hello-Books API!',
  }));

  app.post('/api/signup', usersController.create);
  app.post('/api/books', booksController.create);
  app.get('/api/books', booksController.list);
  app.post('/api/books/:bookId/items', bookItemsController.create);
  app.post('/api/signin', usersController.signin);
  app.get('/api/books/:bookId', booksController.retrieve);
};
