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

  updateGoalDynamic(goalInfo, goalID, callBack) {
    const query = this.generateUpdateQuery(
      "user_goals",
      goalInfo,
      "goalID",
      goalID
    );

    this.runSQLQuery(query, null, (result) => {
      callBack(result);
    });
  }

  async fetchUsersGoals(userID, callBack) {
    const query = "SELECT * FROM `user_goals` WHERE `userID`='" + userID + "'";
    this.runSQLQuery(query, null, (goals) => {
      if (goals.length == 0) {
        callBack(null);
      } else {
        callBack(goals);
      }
    });
  }

  async addUserGoal(goalInfo, callBack) {
    const query =
      "INSERT INTO `user_goals` (`userID`, `goalTitle`, `goalFrequency`, `goalType`, `goalDescription`, `goalStatus`, `dateAdded`, `statCompletedCount`, `statFailedCount`, `goalID`) VALUES ?";
    this.runSQLQuery(query, [goalInfo], (goalAdded) => {
      if (goalAdded) {
        callBack(true);
      } else {
        callBack(null);
      }
    });
  }

  async removeGoal(goalID, userID, callBack) {
    const query =
      "DELETE FROM `user_goals` WHERE `goalID`='" +
      goalID +
      "' AND `userID`='" +
      userID +
      "'";
    console.log(query);
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
