const Book = require('../models').Book;

module.exports = {
  create(req, res) {
    return Book
      .create({
        title: req.body.title,
      })
      .then(book => res.status(201).send(book))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Book
      .all()
      .then(books => res.status(200).send(books))
      .catch(error => res.status(400).send(error));
  },
  /** list(req, res) {
    return Book
      .findAll({
        include: [{
          model: BookItem,
          as: 'bookItems',
        }],
      })
      .then(books => res.status(200).send(books))
      .catch(error => res.status(400).send(error));
  },**/
  retrieve(req, res) {
  return Book
    .findById(req.params.bookId, {
      include: [{
        model: BookItem,
        as: 'bookItems',
      }],
    })
    .then(book => {
      if (!book) {
        return res.status(404).send({
          message: 'Book Not Found',
        });
      }
      return res.status(200).send(book);
    })
    .catch(error => res.status(400).send(error));
},
};
