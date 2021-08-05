
module.exports = {
  get userName(){
    const token = this.request.header.token
    const tokenCache = token? this.app.jwt.verify(token, this.app.jwt.secret) : undefined
    return tokenCache? tokenCache : undefined
  }
};
