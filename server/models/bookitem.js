module.exports = (sequelize, DataTypes) => {
  const BookItem = sequelize.define('BookItem', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        BookItem.belongsTo(models.Book, {
          foreignKey: 'bookId',
          onDelete: 'CASCADE',
        });
      },
    },
  });
  return BookItem;
};
