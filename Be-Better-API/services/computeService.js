class computeService {
  constructor() {}

  makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  buildDataArray(dataObject) {
    var dataArray = [];
    for (const key in dataObject) {
      dataArray.push(dataObject[key]);
    }
    return dataArray;
  }

  hashPassword(plainPassword, callBack) {
    const bcrypt = require("bcrypt");

    bcrypt
      .hash(plainPassword, 12)
      .then((hash) => {
        callBack(hash);
      })
      .catch((err) => console.error(err.message));
  }
}

module.exports = computeService;
