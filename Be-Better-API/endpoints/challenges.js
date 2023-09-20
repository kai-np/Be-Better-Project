module.exports = (app) => {
  const userService = require("../services/userService");
  const userHandler = new userService();
  const computeService = require("../services/computeService");
  const computeHandler = new computeService();
  const challengeService = require("../services/challengesService");
  const challengeHandler = new challengeService();

  app.post("/challenges/public/fetch", (req, res) => {
    const userAuthInfo = req.body.userAuthInfo;

    userHandler.validateUserAuthToken(userAuthInfo, (validSession) => {
      if (!validSession) {
        res.send(JSON.stringify("unauthorized"));
      } else {
        // User session valid

        challengeHandler.getPublicChallenges((challengeTemplates) => {
          if (challengeTemplates == null) {
            res.send("none");
          } else {
            res.send(JSON.stringify(challengeTemplates));
          }
        });
      }
    });
  });

  app.post("/challenges/user/fetch", (req, res) => {
    const userAuthInfo = req.body.userAuthInfo;

    userHandler.validateUserAuthToken(userAuthInfo, (validSession) => {
      if (!validSession) {
        res.send(JSON.stringify("unauthorized"));
      } else {
        // User session valid
        const userID = userAuthInfo.userID;
        challengeHandler.getUsersChallenges(userID, (challenges) => {
          if (challenges == null) {
            res.send(JSON.stringify("none"));
          } else {
            res.send(JSON.stringify(challenges));
          }
        });
      }
    });
  });

  app.post("/challenges/user/update", (req, res) => {
    const userAuthInfo = req.body.userAuthInfo;
    const postData = req.body.postData;
    console.log("Updating challenge");

    userHandler.validateUserAuthToken(userAuthInfo, (validSession) => {
      if (!validSession) {
        res.send(JSON.stringify("unauthorized"));
        return;
      } else {
        const challengeID = postData.challengeID;
        challengeHandler.updateChallengesDynamic(
          postData,
          challengeID,
          (result) => {
            if (result) {
              res.send(JSON.stringify("success"));
            }
          }
        );
      }
    });
  });

  app.post("/challenges/user/start", (req, res) => {
    const userAuthInfo = req.body.userAuthInfo;

    userHandler.validateUserAuthToken(userAuthInfo, (validSession) => {
      if (!validSession) {
        res.send(JSON.stringify("unauthorized"));
      } else {
        // User session valid
        const userID = userAuthInfo.userID;
        const postData = req.body.postData;
        const challengeInfo = {
          userID: userID,
          challengeName: postData.challengeName,
          challengeTemplateID: postData.challengeTemplateID,
          challengeID: challengeHandler.makeid(12),
          challengeInstanceID: challengeHandler.makeid(15),
          challengeFrequency: postData.challengeFrequency,
          startDate: Date.now().toString(),
          challengeStatus: "active",
          completedCount: "0",
          failedCount: "0",
          sharedChallenge: "false",
          challengeOwnerUserID: userID,
          challengeType: postData.challengeType,
        };

        const dbData = computeHandler.buildDataArray(challengeInfo);

        challengeHandler.startUserChallenge(dbData, (challengeAdded) => {
          if (challengeAdded) {
            res.send(JSON.stringify("success"));
          } else {
            res.send(JSON.stringify("invalid"));
          }
        });
      }
    });
  });
};
