const dayjs = require('dayjs')

module.exports = {
  time: () => {
    return dayjs().format('YYYY-MM-DD HH:mm:ss');
  },
  timeStamp:(date) => {
    return new Date(date).getTime()
  },
  unPick: (source, arr) => {
    let obj = {}
    if(Array.isArray(arr)){
      for (const key in source) {
        if (source.hasOwnProperty.call(source, key) && !arr.includes(key)) {
          const element = source[key];
          obj[key] = element;
        }
      }
      return obj;
    }
  }
}