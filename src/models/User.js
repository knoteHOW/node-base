const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      email: {
        type: Sequelize.STRING(40),
        allowNull: true,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: true // KAKAO의 경우 password X
      },
      nickname: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
      }
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci'
    });
  }

  static associate(db) {
    db.User.hasMany(db.Image);
  }
}