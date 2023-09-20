module.exports = (app) => {
  const userService = require("../services/userService");
  const userHandler = new userService();
  const computeService = require("../services/computeService");
  const computeHandler = new computeService();
  const journalService = require("../services/journalService");
  const journalHandler = new journalService();

  app.post("/journals/user/fetch", (req, res) => {
    const userAuthInfo = req.body.userAuthInfo;

    userHandler.validateUserAuthToken(userAuthInfo, (validSession) => {
      if (!validSession) {
        res.send(JSON.stringify("unauthorized"));
      } else {
        // User session valid
        const userID = userAuthInfo.userID;
        journalHandler.getTextJournals(userID, (textJournals) => {
          if (textJournals == null) {
            res.send("none");
          } else {
            res.send(JSON.stringify(textJournals));
          }
        });
      }
    });
  });

  app.post("/journals/gratitude/user/fetch", (req, res) => {
    const userAuthInfo = req.body.userAuthInfo;

    userHandler.validateUserAuthToken(userAuthInfo, (validSession) => {
      if (!validSession) {
        res.send(JSON.stringify("unauthorized"));
      } else {
        // User session valid
        const userID = userAuthInfo.userID;

        journalHandler.getGratitudeJournals(userID, (gratitudeJournals) => {
          if (gratitudeJournals == null) {
            res.send("none");
          } else {
            res.send(JSON.stringify(gratitudeJournals));
          }
        });
      }
    });
  });

  app.post("/journals/user/add", (req, res) => {
    const userAuthInfo = req.body.userAuthInfo;

    userHandler.validateUserAuthToken(userAuthInfo, (validSession) => {
      if (!validSession) {
        res.send(JSON.stringify("unauthorized"));
      } else {
        // User session valid
        const userID = userAuthInfo.userID;
        const postData = req.body.postData;
        const journalInfo = {
          userID: userID,
          journalEntryID: journalHandler.makeid(22),
          dateAdded: Date.now().toString(),
          journalType: postData.journalType,
          journalTitle: postData.journalTitle,
          journalBody: postData.journalBody,
          journalColour: "na",
          journalPublicShareKey: journalHandler.makeid(15),
        };

        const dbData = computeHandler.buildDataArray(journalInfo);

        journalHandler.addTextJournal(dbData, (journalAdded) => {
          if (journalAdded) {
            res.send(JSON.stringify("success"));
          } else {
            res.send(JSON.stringify("invalid"));
          }
        });
      }
    });
  });

  app.post("/journals/gratitude/user/add", (req, res) => {
    const userAuthInfo = req.body.userAuthInfo;

    userHandler.validateUserAuthToken(userAuthInfo, (validSession) => {
      if (!validSession) {
        res.send(JSON.stringify("unauthorized"));
      } else {
        // User session valid
        const userID = userAuthInfo.userID;
        const postData = req.body.postData;
        const journalInfo = {
          userID: userID,
          gratitudeEntryID: journalHandler.makeid(22),
          dateAdded: Date.now().toString(),
          textEntries: postData.textEntries,
          emotion: postData.emotion,
          day: postData.day,
          year: postData.year,
          month: postData.month,
        };

        const dbData = computeHandler.buildDataArray(journalInfo);

        journalHandler.addGratitudeJournal(dbData, (journalAdded) => {
          if (journalAdded) {
            res.send(JSON.stringify("success"));
          } else {
            res.send(JSON.stringify("invalid"));
          }
        });
      }
    });
  });
};
