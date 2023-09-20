class challengesService {
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

  async getPublicChallenges(callBack) {
    const query =
      "SELECT * FROM `challenge_templates` WHERE `challengeStatus`='active'";
    this.runSQLQuery(query, null, (data, err) => {
      if (data.length == 0) {
        callBack(null);
      } else {
        callBack(data);
      }
    });
  }

  async getUsersChallenges(userID, callBack) {
    const query =
      "SELECT * FROM `user_challenges` WHERE `userID`='" + userID + "'";
    this.runSQLQuery(query, null, (data, err) => {
      if (data.length == 0) {
        callBack(null);
      } else {
        callBack(data);
      }
    });
  }

  async startUserChallenge(challengeData, callBack) {
    const query =
      "INSERT INTO `user_challenges` (`userID`, `challengeName` ,`challengeTemplateID`, `challengeID`, `challengeInstanceID`, `challengeFrequency`, `startDate`, `challengeStatus`, `completedCount`, `failedCount`, `sharedChallenge`, `challengeOwnerUserID`, `challengeType`) VALUES ?";
    this.runSQLQuery(query, [challengeData], (response) => {
      if (response) {
        callBack(true);
      }
    });
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

  updateChallengesDynamic(challengeInfo, challengeID, callBack) {
    const query = this.generateUpdateQuery(
      "user_challenges",
      challengeInfo,
      "challengeID",
      challengeID
    );

    this.runSQLQuery(query, null, (result) => {
      callBack(result);
    });
  }
}
module.exports = challengesService;
