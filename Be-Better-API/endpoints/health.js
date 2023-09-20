module.exports = (app) => {
  const userService = require("../services/userService");
  const userHandler = new userService();
  const computeService = require("../services/computeService");
  const computeHandler = new computeService();
  const healthService = require("../services/healthService");
  const healthHandler = new healthService();

  app.post("/health/activities/user/fetch", (req, res) => {
    const userAuthInfo = req.body.userAuthInfo;

    userHandler.validateUserAuthToken(userAuthInfo, (validSession) => {
      if (!validSession) {
        res.send(JSON.stringify("unauthorized"));
      } else {
        // User session valid
        const userID = userAuthInfo.userID;

        healthHandler.fetchUsersActivities(userID, (activities) => {
          if (activities == null) {
            res.send("none");
          } else {
            res.send(activities);
          }
        });
      }
    });
  });

  app.post("/health/activities/user/update", (req, res) => {
    const userAuthInfo = req.body.userAuthInfo;
    const postData = req.body.postData;

    userHandler.validateUserAuthToken(userAuthInfo, (validSession) => {
      if (!validSession) {
        res.send(JSON.stringify("unauthorized"));
        return;
      } else {
        const activityID = postData.activityID;
        healthHandler.updateActivityDynamic(postData, activityID, (result) => {
          if (result) {
            res.send(JSON.stringify("success"));
          }
        });
      }
    });
  });

  app.post("/health/activities/user/add", (req, res) => {
    const userAuthInfo = req.body.userAuthInfo;

    userHandler.validateUserAuthToken(userAuthInfo, (validSession) => {
      if (!validSession) {
        res.send(JSON.stringify("unauthorized"));
      } else {
        // User session valid
        const userID = userAuthInfo.userID;
        const postData = req.body.postData;
        const activityInfo = {
          activityID: healthHandler.makeid(20),
          userID: userID,
          dateAdded: Date.now().toString(),
          excerciseType: postData.activityType,
          excerciseTitle: postData.activityTitle,
          timeSpent: postData.activityTimeSpent,
          metric: postData.activityMetric,
          excerciseDescription: postData.activityDescription,
          location: "na",
          imageAssetURL: "na",
        };
        const dbData = computeHandler.buildDataArray(activityInfo);
        healthHandler.addUserActivity(dbData, (activityAdded) => {
          if (activityAdded == null) {
            res.send(JSON.stringify("invalid"));
          } else {
            res.send(JSON.stringify("success"));
          }
        });
      }
    });
  });

  app.post("/health/activities/user/remove", (req, res) => {
    const userAuthInfo = req.body.userAuthInfo;

    userHandler.validateUserAuthToken(userAuthInfo, (validSession) => {
      if (!validSession) {
        res.send(JSON.stringify("unauthorized"));
      } else {
        // User session valid k
        const userID = userAuthInfo.userID;
        const postData = req.body;
        const activityID = postData.activityID;

        healthHandler.removeActivity(activityID, userID, (complete) => {
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
