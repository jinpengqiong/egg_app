'use strict';

module.exports = app => {
  const { ENUM, STRING, INTEGER, TEXT, DATE } = app.Sequelize;

  const User = app.model.define(
    'user',
    {
      id: {
        type: INTEGER(6).UNSIGNED.ZEROFILL,
        primaryKey: true,
        autoIncrement: true,
        comment: '用户ID',
      },
      username: STRING(20),
      password: STRING(64),
      avatar: TEXT('lang'),
      phone: STRING(20),
      sign: STRING(300),
      createTime: DATE,
      updateTime: DATE,
    }
  );
  return User;
};
