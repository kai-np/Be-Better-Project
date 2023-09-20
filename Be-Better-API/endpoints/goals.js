module.exports = (app) => {
  const userService = require("../services/userService");
  const userHandler = new userService();
  const computeService = require("../services/computeService");
  const computeHandler = new computeService();
  const goalsService = require("../services/goalsService");
  const goalsHandler = new goalsService();

  app.post("/goals/user/fetch", (req, res) => {
    const userAuthInfo = req.body.userAuthInfo;

    userHandler.validateUserAuthToken(userAuthInfo, (validSession) => {
      if (!validSession) {
        res.send(JSON.stringify("unauthorized"));
      } else {
        // User session valid
        const userID = userAuthInfo.userID;

        goalsHandler.fetchUsersGoals(userID, (goals) => {
          if (goals == null) {
            res.send("none");
          } else {
            res.send(goals);
          }
        });
      }
    });
  });

  app.post("/goals/user/update", (req, res) => {
    const userAuthInfo = req.body.userAuthInfo;
    const postData = req.body.postData;

    userHandler.validateUserAuthToken(userAuthInfo, (validSession) => {
      if (!validSession) {
        res.send(JSON.stringify("unauthorized"));
        return;
      } else {
        const goalID = postData.goalID;
        goalsHandler.updateGoalDynamic(postData, goalID, (result) => {
          if (result) {
            res.send(JSON.stringify("success"));
          }
        });
      }
    });
  });

  app.post("/goals/user/add", (req, res) => {
    const userAuthInfo = req.body.userAuthInfo;

    userHandler.validateUserAuthToken(userAuthInfo, (validSession) => {
      if (!validSession) {
        res.send(JSON.stringify("unauthorized"));
      } else {
        // User session valid
        const userID = userAuthInfo.userID;
        const postData = req.body.postData;
        const goalInfo = {
          userID: userID,
          goalTitle: postData.goalTitle,
          goalFrequency: postData.goalFrequency,
          goalType: postData.goalType,
          goalDescription: postData.goalDescription,
          goalStatus: "in-progress",
          dateAdded: Date.now().toString(),
          statCompletedCount: "0",
          statFailedCount: "0",
          goalID: goalsHandler.makeid(20),
        };
        const dbData = computeHandler.buildDataArray(goalInfo);
        goalsHandler.addUserGoal(dbData, (goalAdded) => {
          if (goalAdded == null) {
            res.send(JSON.stringify("invalid"));
          } else {
            res.send(JSON.stringify("success"));
          }
        });
      }
    });
  });

  app.post("/goals/user/remove", (req, res) => {
    const userAuthInfo = req.body.userAuthInfo;

    console.log(">>>>>>>>>>>>>>");
    userHandler.validateUserAuthToken(userAuthInfo, (validSession) => {
      if (!validSession) {
        res.send(JSON.stringify("unauthorized"));
      } else {
        // User session valid
        const userID = userAuthInfo.userID;
        const postData = req.body;
        console.log("Post data");
        console.log(postData);
        const goalID = postData.postData.goalID;

        goalsHandler.removeGoal(goalID, userID, (complete) => {
          if (complete == null) {
            res.send(JSON.stringify("invalid"));
          } else {
            res.send(JSON.stringify("success"));
          }
        });
      }
    });
  });
};
