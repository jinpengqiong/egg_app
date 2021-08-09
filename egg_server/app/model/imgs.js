'use strict';

module.exports = app => {
  const { DATE, STRING, INTEGER } = app.Sequelize;

  const ImgsModel = app.model.define('imgs', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: '用户ID',
    },
    url: STRING(500),
    houseId: INTEGER,
    createTime: DATE,
  });
  return ImgsModel;
};
