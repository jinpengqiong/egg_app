module.exports = app => {
  const { STRING, INTEGER, DATE }  = app.Sequelize
  const UserInfo = app.model.define('userInfo', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: STRING(20),
    age: INTEGER,
    address: STRING(50),
    create_date: DATE,
    comments: STRING(100),
  });
  return UserInfo;
}
