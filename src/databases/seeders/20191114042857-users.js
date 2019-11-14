'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkInsert('users', [
      {
        email: 'darkwinqwlk@gmail.com',
        firstname: 'Hải',
        lastname: 'Hà Thanh',
        password: '123456',
        status: 'publish',
      
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
