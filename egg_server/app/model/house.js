'use strict';

module.exports = app => {
  const { DATE, STRING, INTEGER } = app.Sequelize;

  const HouseModel = app.model.define('house', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: '用户ID',
    },
    name: STRING(50),
    info: STRING(150),
    address: STRING(200),
    price: INTEGER,
    publishTime: DATE,
    cityCode: STRING,
    showCount: INTEGER,
    startTime: DATE,
    endTime: DATE,
  });
  return HouseModel;
};
