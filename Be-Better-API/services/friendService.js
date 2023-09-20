class friendService {
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

  async runSQLQuery(query, data, callback) {
    if (typeof callback === "function") {
      if (data == null) {
        db.query(query, (err, res) => {
          if (err) {
            console.log(err);
          }
          callback(res);
        });
      } else {
        db.query(query, [data], (err, res) => {
          if (err) {
            console.log(err);
          }

          callback(res);
        });
      }
    }
  }

  async regiserUser(userInfo, callBack) {
    const query =
      "INSERT INTO `userinfo` ( `userID`, `name`, `email`, `emailVerified`, `publicAssetID`, `password`, `profilePhotoURL`, `publicQuote`, `authToken`, `completeChallengeStats`, `publicLinkKey`, `friendToken`, `friendCode`) VALUES ?";
    this.runSQLQuery(query, [userInfo], (response) => {
      console.log(response);
      callBack(true);
    });
  }

  async getUsersFriend(userID, callBack) {
    const query =
      "SELECT * FROM `userfriends` WHERE `userID`='" +
      userID +
      "' OR `friendID`='" +
      userID +
      "'";
    this.runSQLQuery(query, null, (data, err) => {
      if (data.length == 0) {
        callBack(null);
      } else {
        callBack(data);
      }
    });
  }

  async addFriend(entryData, callBack) {
    const query =
      "INSERT INTO `bebetter`.`userfriends` (`userID`, `friendID`, `friendStatus`, `dateAdded`, `friendToken`) VALUES ?";
    this.runSQLQuery(query, [entryData], (data, err) => {
      if (err) {
        callBack(null);
      } else {
        callBack(true);
      }
    });
  }

  async getUserByFriendCode(friendCode, callBack) {
    const query =
      "SELECT * FROM `userinfo` WHERE `friendCode`='" + friendCode + "'";
    this.runSQLQuery(query, null, (data, err) => {
      if (data.length == 0) {
        callBack(null);
      } else {
        callBack(data[0]);
      }
    });
  }

  async acceptFriendInvitation(userID, friendToken, callBack) {
    const query =
      "UPDATE `userfriends` SET `friendStatus`='active' WHERE `friendID`='" +
      userID +
      "' AND `friendToken`='" +
      friendToken +
      "'";
    this.runSQLQuery(query, null, (data, err) => {
      if (err) {
        console.log(err);
        callBack(null);
      } else {
        callBack(true);
      }
    });
  }

  async removeFriend(userID, friendToken, callBack) {
    const query =
      "UPDATE `userfriends` SET `friendStatus`='removed' WHERE `userID`='" +
      userID +
      "' AND `friendToken`='" +
      friendToken +
      "'";
    this.runSQLQuery(query, null, (data, err) => {
      if (err) {
        console.log(err);
        callBack(null);
      } else {
        callBack(true);
      }
    });
  }
}
module.exports = friendService;
