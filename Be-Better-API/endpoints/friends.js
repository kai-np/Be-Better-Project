module.exports = (app) => {
  const userService = require("../services/userService");
  const userHandler = new userService();
  const computeService = require("../services/computeService");
  const computeHandler = new computeService();
  const friendService = require("../services/friendService");
  const friendHandler = new friendService();

  app.post("/user/friends/fetch", (req, res) => {
    console.log("GOT FRIENDS REQUEST");
    console.log(req.body);
    const userAuthInfo = req.body.userAuthInfo;

    userHandler.validateUserAuthToken(userAuthInfo, (validSession) => {
      if (!validSession) {
        res.send(JSON.stringify("unauthorized"));
      } else {
        // User session valid
        const userID = userAuthInfo.userID;
        const postData = req.body.postData;
        friendHandler.getUsersFriend(userID, (friends) => {
          if (friends == null) {
            res.send(JSON.stringify([]));
          } else {
            res.send(JSON.stringify(friends));
          }
        });
      }
    });
  });

  app.post("/user/friends/add/accept", (req, res) => {
    const userAuthInfo = req.body.userAuthInfo;
    userHandler.validateUserAuthToken(userAuthInfo, (validSession) => {
      if (!validSession) {
        res.send(JSON.stringify("unauthorized"));
      } else {
        // User session valid
        const userID = userAuthInfo.userID;
        const postData = req.body.postData;
        const friendToken = postData.friendToken;

        friendHandler.acceptFriendInvitation(
          userID,
          friendToken,
          (friendAccepted) => {
            if (friendAccepted == null) {
              res.send(JSON.stringify("invalid"));
            } else {
              res.send(JSON.stringify("success"));
            }
          }
        );
      }
    });
  });

  app.post("/user/friends/remove", (req, res) => {
    const userAuthInfo = req.body.userAuthInfo;
    userHandler.validateUserAuthToken(userAuthInfo, (validSession) => {
      if (!validSession) {
        res.send(JSON.stringify("unauthorized"));
      } else {
        // User session valid
        const userID = userAuthInfo.userID;
        const postData = req.body.postData;
        const friendToken = postData.friendToken;

        friendHandler.removeFriend(userID, friendToken, (friendAccepted) => {
          if (friendAccepted == null) {
            res.send(JSON.stringify("invalid"));
          } else {
            res.send(JSON.stringify("success"));
          }
        });
      }
    });
  });
  app.post("/user/friends/add", (req, res) => {
    const userAuthInfo = req.body.userAuthInfo;

    userHandler.validateUserAuthToken(userAuthInfo, (validSession) => {
      if (!validSession) {
        res.send(JSON.stringify("unauthorized"));
      } else {
        // User session valid
        const userID = userAuthInfo.userID;
        const postData = req.body.postData;
        const newFriendCode = postData.friendCode;

        friendHandler.getUserByFriendCode(newFriendCode, (friendInfo) => {
          if (friendInfo == null) {
            res.send(JSON.stringify("invalid"));
          } else {
            `basicID`,
              `userID`,
              `friendID`,
              `friendStatus`,
              `dateAdded`,
              `friendToken`;
            const entryData = [
              userID,
              friendInfo.userID,
              "pending",
              Date.now().toString(),
              friendInfo.friendToken,
            ];
            console.log("friend info>");
            console.log(friendInfo);
            friendHandler.addFriend(entryData, (friendAdded) => {
              if (friendAdded == null) {
                res.send(JSON.stringify("invalid"));
              } else {
                res.send(JSON.stringify("success"));
              }
            });
          }
        });
      }
    });
  });
};
