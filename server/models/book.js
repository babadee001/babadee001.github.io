module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        Book.hasMany(models.BookItem, {
          foreignKey: 'bookId',
          as: 'bookItems',
        });
      },
    },
  });
  return Book;
};
