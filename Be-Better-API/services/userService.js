class userService {
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

  generateUpdateQuery = (
    tableName,
    updateData,
    conditionField,
    conditionValue
  ) => {
    const updateFields = Object.keys(updateData)
      .map((key) => `${key} = '${updateData[key]}'`)
      .join(", ");
    const query = `UPDATE ${tableName} SET ${updateFields} WHERE ${conditionField} = '${conditionValue}'`;

    return query;
  };

  // Example usage

  updateUserDynamic(userInfo, userID, callBack) {
    const query = this.generateUpdateQuery(
      "userinfo",
      userInfo,
      "userID",
      userID
    );

    console.log(query);
    this.runSQLQuery(query, null, (result) => {
      callBack(result);
    });
  }

  async getUserByID(userID, callBack) {
    const query = "SELECT * FROM `userinfo` WHERE `userID`='" + userID + "'";
    this.runSQLQuery(query, null, (data, err) => {
      if (data.length == 0) {
        callBack(null);
      } else {
        callBack(data);
      }
    });
  }

  async getUserByEmail(userEmail, callBack) {
    const query = "SELECT * FROM `userinfo` WHERE `email`= ?";
    this.runSQLQuery(query, [userEmail], (response) => {
      if (response.length == 0) {
        callBack(null);
      } else {
        callBack(response[0]);
      }
    });
  }

  async validateUserAuthToken(userAuthInfo, callBack) {
    if (userAuthInfo) {
      const query =
        "SELECT * FROM `auth_tokens` WHERE `userID`='" +
        userAuthInfo.userID +
        "' AND `authToken`='" +
        userAuthInfo.authToken +
        "' AND `status`='active'";
      this.runSQLQuery(query, null, (response) => {
        console.log(response);

        if (response.length == 0) {
          callBack(false);
        } else {
          callBack(true);
        }
      });
    } else {
      callBack(false);
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

  async validateUserPassword(password, hash, callBack) {
    const bcrypt = require("bcrypt");
    bcrypt
      .compare(password, hash)
      .then((res) => {
        callBack(res); // return true
      })
      .catch((err) => console.error(err.message));
  }

  async createUserAuthToken(userID, authToken) {
    const authTokenInfo = [userID, authToken, Date.now().toString(), "active"];
    const query =
      "INSERT INTO `auth_tokens` (`userID`, `authToken`, `createdDate`, `status`) VALUES (?)";
    this.runSQLQuery(query, authTokenInfo, (resp, error) => {
      if (error) {
        console.log(error);
      }
    });
  }

  async loginUser(loginInfo, callBack) {
    this.getUserByEmail(loginInfo.email, (userInfo) => {
      if (userInfo == null) {
        callBack("user-not-found");
      } else {
        // Verify password matches

        this.validateUserPassword(
          loginInfo.password,
          userInfo.password,
          (valid) => {
            if (!valid) {
              console.log("invalid pass");
              callBack("invalid");
            } else {
              // Password valid, create auth token

              const authToken = this.makeid(40);
              this.createUserAuthToken(userInfo.userID, authToken);

              const loginResponse = {
                authToken: authToken,
                userInfo: userInfo,
              };

              callBack(loginResponse);
            }
          }
        );
      }
    });
  }
}

module.exports = userService;
