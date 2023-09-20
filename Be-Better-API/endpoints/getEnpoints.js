module.exports = (app) => {
  const userService = require("../services/userService");
  const userHandler = new userService();
  const computeService = require("../services/computeService");
  const computeHandler = new computeService();

  app.get("/user/auth/register", (req, res) => {
    if (req.query.password) {
      userHandler.getUserByEmail(req.query.email, (result) => {
        if (result == null) {
          computeHandler.hashPassword(req.query.password, (hash) => {
            const userInfo = {
              userID: computeHandler.makeid(25),
              name: req.query.name,
              email: req.query.email,
              emailVerified: "true",
              publicAssetID: computeHandler.makeid(25),
              password: hash,
              profilePhotoURL: "",
              publicQuote: "",
              authToken: computeHandler.makeid(30),
              completeChallengeStats: "",
              publicLinkKey: computeHandler.makeid(15),
              friendToken: computeHandler.makeid(20),
              friendCode: computeHandler.makeid(6),
            };

            const dbData = computeHandler.buildDataArray(userInfo);

            userHandler.regiserUser(dbData, (response) => {
              res.send(JSON.stringify("success"));
            });
          });
        } else {
          res.send("exists");
        }
      });
    } else {
      res.send(JSON.stringify("invalid"));
    }
  });

  app.get("/test", (req, res) => {
    userHandler.getUserByEmail("test", (result) => {
      console.log(result);
    });
  });

  app.get("/user/auth/login", (req, res) => {
    if (req.query.password) {
      const loginInfo = {
        email: req.query.email,
        password: req.query.password,
      };
      userHandler.loginUser(loginInfo, (result) => {
        console.log(result);
        res.send(result);
      });
    } else {
      res.send(JSON.stringify("invalid"));
    }
  });
};
