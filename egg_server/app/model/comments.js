'use strict';

module.exports = (app) => {
  const { DATE, STRING, INTEGER } = app.Sequelize;

  const CommentsModel = app.model.define('imgs', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: '用户ID',
    },
    userId: INTEGER,
    houseId: INTEGER,
    msg: STRING(500),
    createTime: DATE,
  });
  return CommentsModel;
};
