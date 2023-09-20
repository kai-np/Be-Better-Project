module.exports = (app) => {
  const userService = require("../services/userService");
  const userHandler = new userService();
  const computeService = require("../services/computeService");
  const computeHandler = new computeService();

  app.post("/user/auth/register", (req, res) => {
    if (req.body.password) {
      userHandler.getUserByEmail(req.body.email, (result) => {
        if (result == null) {
          computeHandler.hashPassword(req.body.password, (hash) => {
            const userInfo = {
              userID: computeHandler.makeid(25),
              name: req.body.name,
              email: req.body.email,
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

  app.post("/test", (req, res) => {
    userHandler.getUserByEmail("test", (result) => {
      console.log(result);
    });
  });

  app.post("/user/auth/login", (req, res) => {
    if (req.body.password) {
      const loginInfo = {
        email: req.body.email,
        password: req.body.password,
      };
      userHandler.loginUser(loginInfo, (result) => {
        console.log(result);
        res.send(JSON.stringify(result));
      });
    } else {
      res.send(JSON.stringify("invalid"));
    }
  });
};
