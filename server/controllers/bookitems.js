const BookItem = require('../models').BookItem;

module.exports = {
  create(req, res) {
    return BookItem
      .create({
        content: req.body.content,
        bookId: req.params.bookId,
      })
      .then(bookItem => res.status(201).send(bookItem))
      .catch(error => res.status(400).send(error));
  },
};
