'use strict';
const {
	Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Comment extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			// Define association here
			Comment.belongsTo(models.Product);
		}
	}
	Comment.init({
		comment: DataTypes.STRING,
	}, {
		sequelize,
		modelName: 'Comment',
	});
	return Comment;
};
