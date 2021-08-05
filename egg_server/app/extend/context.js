
module.exports = {
  get userName(){
    const token = this.request.header.authorization.split(' ')[1];
    const tokenCache = token? this.app.jwt.verify(token, this.app.jwt.secret) : undefined
    return tokenCache? tokenCache : undefined
  }
};
