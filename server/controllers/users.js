const User = require('../models').User;

module.exports = {
  create(req, res) {
    return User
      .create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
  return User
    .findByDetails(req.params.todoId, {
      include: [{
        model: TodoItem,
        as: 'todoItems',
      }],
    })
    .then(todo => {
      if (!user) {
        return res.status(404).send({
          message: 'Invalid username or password',
        });
      }
      return res.status(200).send(todo);
    })
    .catch(error => res.status(400).send(error));
},
};
