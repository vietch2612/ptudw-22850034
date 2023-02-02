'use strict';

// Const faker = require('faker');

// const randomProduct = faker.commerce.productName();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
     * Add seed commands here.
     *
     * Example:
   */
		await queryInterface.bulkInsert('Products', [{
			name: '1231231',
			summary: 'Summary 1',
			description: 'Description 1',
			price: 9.99,
			createdAt: Sequelize.literal('NOW()'),
			updatedAt: Sequelize.literal('NOW()'),
		},
		{
			name: 'Product 2',
			summary: 'Summary 2',
			description: 'Description 2',
			price: 9.99,
			createdAt: Sequelize.literal('NOW()'),
			updatedAt: Sequelize.literal('NOW()'),
		}], {});
	},

	async down(queryInterface, _Sequelize) {
		await queryInterface.bulkDelete('Products', null, {});
	},
};
