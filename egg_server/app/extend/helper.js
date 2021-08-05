const dayjs = require('dayjs')

module.exports = {
  time: () => {
    return dayjs().format('YYYY-MM-DD HH:mm:ss');
  }
}