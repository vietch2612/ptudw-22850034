'use strict';
const {
	Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Product extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			// Define association here
			Product.hasMany(models.Comment);
		}
	}
	Product.init({
		name: DataTypes.STRING,
		summary: DataTypes.TEXT,
		description: DataTypes.TEXT,
		price: DataTypes.DECIMAL,
	}, {
		sequelize,
		modelName: 'Product',
	});
	return Product;
};
