'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Comments', [{
			comment: 'lOLOLOL',
			ProductId: 3,
			createdAt: Sequelize.literal('NOW()'),
			updatedAt: Sequelize.literal('NOW()'),
		}], {});
	},

	async down(queryInterface, Sequelize) {
		/**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
	},
};
