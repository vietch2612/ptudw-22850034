'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Comments', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			comment: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			ProductId: {
				type: Sequelize.INTEGER,
				reference: {
					model: 'Products',
					key: 'id',
				},
				onDelete: 'cascade',
				onUpdate: 'cascade',
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Comments');
	},
};
