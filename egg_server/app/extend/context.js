
module.exports = {
  get userName(){
    const token = this.request.header.authorization.split(' ')[1];
    const { username, password } = token ? this.app.jwt.verify(token, this.app.jwt.secret) : undefined;
    return username ? username : undefined;
  }
};
