'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
      .then(() => {
        return queryInterface.createTable('Student', {
          id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.literal('uuid_generate_v4()'),
          },
          name: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        });
      });
  },
};