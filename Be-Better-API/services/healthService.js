class goalsService {
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

  updateActivityDynamic(activityInfo, activityID, callBack) {
    const query = this.generateUpdateQuery(
      "activity_log",
      activityInfo,
      "activityID",
      activityID
    );

    this.runSQLQuery(query, null, (result) => {
      callBack(result);
    });
  }

  async fetchUsersActivities(userID, callBack) {
    const query =
      "SELECT * FROM `activity_log` WHERE `userID`='" + userID + "'";
    this.runSQLQuery(query, null, (goals) => {
      if (goals.length == 0) {
        callBack(null);
      } else {
        callBack(goals);
      }
    });
  }

  async addUserActivity(activityInfo, callBack) {
    const query =
      "INSERT INTO `activity_log` (`activityID`, `userID`, `dateAdded`, `excerciseType`, `excerciseTitle`, `timeSpent`, `metric`, `excerciseDescription`, `location`, `imageAssetURL`) VALUES ?";
    this.runSQLQuery(query, [activityInfo], (activityAdded) => {
      if (activityAdded) {
        callBack(true);
      } else {
        callBack(null);
      }
    });
  }

  async removeActivity(activityID, userID, callBack) {
    const query =
      "DELETE FROM `activity_log` WHERE `activityID`='" +
      activityID +
      "' AND `userID`='" +
      userID +
      "'";
    this.runSQLQuery(query, null, (complete, err) => {
      if (err) {
        console.log(err);
        callBack(null);
      } else {
        callBack(true);
      }
    });
  }
}

module.exports = goalsService;
