module.exports = (app) => {
  const userService = require("../services/userService");
  const userHandler = new userService();
  const computeService = require("../services/computeService");
  const computeHandler = new computeService();
  const friendService = require("../services/friendService");
  const friendHandler = new friendService();

  app.post("/user/profile/fetch", (req, res) => {
    console.log("GOT PROFILE REQUEST");
    console.log(req.body);
    const userAuthInfo = req.body.userAuthInfo;
    const postData = req.body.postData;
    userHandler.validateUserAuthToken(userAuthInfo, (validSession) => {
      if (!validSession) {
        res.send(JSON.stringify("unauthorized"));
        return;
      } else {
        // User session valid
        const fetchUserID = postData.userID;
        userHandler.getUserByID(fetchUserID, (userData) => {
          if (userData == null) {
            res.send(JSON.stringify("invalid"));
          } else {
            res.send(userData);
          }
        });
      }
    });
  });

  app.post("/user/profile/update", (req, res) => {
    const userAuthInfo = req.body.userAuthInfo;
    const postData = req.body.postData.userInfo;
    console.log(postData);
    userHandler.validateUserAuthToken(userAuthInfo, (validSession) => {
      if (!validSession) {
        res.send(JSON.stringify("unauthorized"));
        return;
      } else {
        const userID = userAuthInfo.userID;
        userHandler.updateUserDynamic(postData, userID, (result) => {
          if (result) {
            res.send(JSON.stringify("success"));
          }
        });
      }
    });
  });
};
