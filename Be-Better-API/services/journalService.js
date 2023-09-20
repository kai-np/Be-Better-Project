class journalService {
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

  async getTextJournals(userID, callBack) {
    const query = "SELECT * FROM `journals` WHERE `userID`='" + userID + "'";
    this.runSQLQuery(query, null, (data, err) => {
      if (data.length == 0) {
        callBack(null);
      } else {
        callBack(data);
      }
    });
  }

  async getGratitudeJournals(userID, callBack) {
    const query =
      "SELECT * FROM `gratitude_journals` WHERE `userID`='" + userID + "'";
    this.runSQLQuery(query, null, (data, err) => {
      if (data.length == 0) {
        callBack(null);
      } else {
        callBack(data);
      }
    });
  }

  async addTextJournal(journalData, callBack) {
    const query =
      "INSERT INTO `journals` (`userID`, `journalEntryID`, `dateAdded`, `journalType`, `journalTitle`, `journalBody`, `journalColour`, `journalPublicShareKey`) VALUES ?";
    this.runSQLQuery(query, [journalData], (response) => {
      if (response) {
        callBack(true);
      }
    });
  }

  async addGratitudeJournal(journalData, callBack) {
    const query =
      "INSERT INTO `gratitude_journals` (`userID`, `gratitudeEntryID`, `dateAdded`, `textEntries`, `emotion`, `day`, `year`, `month`) VALUES ?";
    this.runSQLQuery(query, [journalData], (response) => {
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
module.exports = journalService;
