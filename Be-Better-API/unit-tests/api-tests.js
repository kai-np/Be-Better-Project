const request = require("request");
const chai = require("chai");
const expect = chai.expect;

const endPoint = "http://localhost:999";

const userAuthInfo = {
  userID: "icSpV4P6wqmxmvShFsyPXUCxl",
  authToken: "n7lG6ysqhxf28sCVUOdtl1tXoYiLceLnJLdCy2LA",
};

describe("API Tests", function () {
  this.timeout(10000); // Increase the timeout if needed

  it("should testGetFriends", function (done) {
    const requestData = {
      userAuthInfo: userAuthInfo,
      postData: null,
    };
    request(
      {
        url: endPoint + "/user/friends/fetch",
        method: "POST",
        json: true,
        body: requestData,
      },
      function (error, response, body) {
        if (error) {
          done(error);
        } else {
          expect(response.statusCode).to.equal(200);

          done();
        }
      }
    );
  });

  it("should testRegisterUser", function (done) {
    const registerInfo = {
      name: "Kai",
      email: "kati@z14.co",
      password: "TestTest12",
    };
    request(
      {
        url: endPoint + "/user/auth/register",
        method: "POST",
        json: true,
        body: registerInfo,
      },
      function (error, response, body) {
        if (error) {
          done(error);
        } else {
          expect(response.statusCode).to.equal(200);

          done();
        }
      }
    );
  });

  it("should testLoginUser", function (done) {
    const loginInfo = {
      email: "kai@z14.co",
      password: "TestTest12",
    };
    request(
      {
        url: endPoint + "/user/auth/login",
        method: "POST",
        json: true,
        body: loginInfo,
      },
      function (error, response, body) {
        if (error) {
          done(error);
        } else {
          expect(response.statusCode).to.equal(200);

          done();
        }
      }
    );
  });

  it("should testFetchUser", function (done) {
    const fetchUser = {
      userID: "w0RPJ5CErVlQ4ry5CbWV2mf37",
    };
    const requestData = {
      userAuthInfo: userAuthInfo,
      postData: fetchUser,
    };
    request(
      {
        url: endPoint + "/user/profile/fetch",
        method: "POST",
        json: true,
        body: requestData,
      },
      function (error, response, body) {
        if (error) {
          done(error);
        } else {
          expect(response.statusCode).to.equal(200);

          done();
        }
      }
    );
  });

  it("should testUpdateUser", function (done) {
    const updateUserInfo = {
      userID: userAuthInfo.userID,
      name: "dylan",
      email: "tesaf@2.com",
    };
    const requestData = {
      userAuthInfo: userAuthInfo,
      postData: updateUserInfo,
    };
    request(
      {
        url: endPoint + "/user/profile/update",
        method: "POST",
        json: true,
        body: requestData,
      },
      function (error, response, body) {
        if (error) {
          done(error);
        } else {
          expect(response.statusCode).to.equal(200);

          done();
        }
      }
    );
  });

  it("should testAddFriend", function (done) {
    const addFriend = {
      friendCode: "jbqm0l",
    };
    const requestData = {
      userAuthInfo: userAuthInfo,
      postData: addFriend,
    };
    request(
      {
        url: endPoint + "/user/friends/add",
        method: "POST",
        json: true,
        body: requestData,
      },
      function (error, response, body) {
        if (error) {
          done(error);
        } else {
          expect(response.statusCode).to.equal(200);

          done();
        }
      }
    );
  });

  it("should testAcceptFriend", function (done) {
    const acceptFriend = {
      friendToken: "z9PfW292TdGy94Yn7sWu",
    };
    const requestData = {
      userAuthInfo: userAuthInfo,
      postData: acceptFriend,
    };
    request(
      {
        url: endPoint + "/user/friends/add/accept",
        method: "POST",
        json: true,
        body: requestData,
      },
      function (error, response, body) {
        if (error) {
          done(error);
        } else {
          expect(response.statusCode).to.equal(200);

          done();
        }
      }
    );
  });

  it("should testRemoveFriend", function (done) {
    const removeFriend = {
      friendToken: "z9PfW292TdGy94Yn7sWu",
    };
    const requestData = {
      userAuthInfo: userAuthInfo,
      postData: removeFriend,
    };
    request(
      {
        url: endPoint + "/user/friends/remove",
        method: "POST",
        json: true,
        body: requestData,
      },
      function (error, response, body) {
        if (error) {
          done(error);
        } else {
          expect(response.statusCode).to.equal(200);

          done();
        }
      }
    );
  });

  it("should testGetChallengeTemplates", function (done) {
    const getCTemplates = {};
    const requestData = {
      userAuthInfo: userAuthInfo,
      postData: getCTemplates,
    };
    request(
      {
        url: endPoint + "/challenges/public/fetch",
        method: "POST",
        json: true,
        body: requestData,
      },
      function (error, response, body) {
        if (error) {
          done(error);
        } else {
          expect(response.statusCode).to.equal(200);

          done();
        }
      }
    );
  });

  it("should testStartUserChallenge", function (done) {
    const challengeInfo = {
      userID: userAuthInfo.userID,
      challengeTemplateID: "DADSA525234234234",
      challengeFrequency: "daily",
      challengeType: "environmental",
    };
    const requestData = {
      userAuthInfo: userAuthInfo,
      postData: challengeInfo,
    };
    request(
      {
        url: endPoint + "/challenges/user/start",
        method: "POST",
        json: true,
        body: requestData,
      },
      function (error, response, body) {
        if (error) {
          done(error);
        } else {
          expect(response.statusCode).to.equal(200);

          done();
        }
      }
    );
  });

  it("should testGetUserChallenges", function (done) {
    const getChallengeInfo = {};
    const requestData = {
      userAuthInfo: userAuthInfo,
      postData: getChallengeInfo,
    };
    request(
      {
        url: endPoint + "/challenges/user/fetch",
        method: "POST",
        json: true,
        body: requestData,
      },
      function (error, response, body) {
        if (error) {
          done(error);
        } else {
          expect(response.statusCode).to.equal(200);

          done();
        }
      }
    );
  });

  it("should testUpdateUserChallenge", function (done) {
    const updateChallengeInfo = {
      userID: userAuthInfo.userID,
      challengeTemplateID: "DADSA525234234234",
      challengeID: "R6LEKwCoAOjH",
      sharedChallenge: "true",
    };
    const requestData = {
      userAuthInfo: userAuthInfo,
      postData: updateChallengeInfo,
    };
    request(
      {
        url: endPoint + "/challenges/user/update",
        method: "POST",
        json: true,
        body: requestData,
      },
      function (error, response, body) {
        if (error) {
          done(error);
        } else {
          expect(response.statusCode).to.equal(200);

          done();
        }
      }
    );
  });

  it("should testAddUserGoal", function (done) {
    const newGoalInfo = {
      goalTitle: "Test Goal",
      goalFrequency: "daily",
      goalType: "fitness",
      goalDescription: "lamao...",
    };
    const requestData = {
      userAuthInfo: userAuthInfo,
      postData: newGoalInfo,
    };
    request(
      {
        url: endPoint + "/goals/user/add",
        method: "POST",
        json: true,
        body: requestData,
      },
      function (error, response, body) {
        if (error) {
          done(error);
        } else {
          expect(response.statusCode).to.equal(200);

          done();
        }
      }
    );
  });

  it("should testFetchUserGoals", function (done) {
    const fetchGoalInfo = {};
    const requestData = {
      userAuthInfo: userAuthInfo,
      postData: fetchGoalInfo,
    };
    request(
      {
        url: endPoint + "/goals/user/fetch",
        method: "POST",
        json: true,
        body: requestData,
      },
      function (error, response, body) {
        if (error) {
          done(error);
        } else {
          expect(response.statusCode).to.equal(200);

          done();
        }
      }
    );
  });

  it("should testUpdateUserGoal", function (done) {
    const updateGoalInfo = {
      goalTitle: "X xxx xl",
      goalType: "societal",
      goalDescription: "lamao...",
      goalID: "drKjabOyO9WTuxtP3eCv",
    };
    const requestData = {
      userAuthInfo: userAuthInfo,
      postData: updateGoalInfo,
    };
    request(
      {
        url: endPoint + "/goals/user/update",
        method: "POST",
        json: true,
        body: requestData,
      },
      function (error, response, body) {
        if (error) {
          done(error);
        } else {
          expect(response.statusCode).to.equal(200);

          done();
        }
      }
    );
  });
});

// Run the tests
if (require.main === module) {
  describe("Unit Tests", function () {
    it("should run all API tests", function () {
      // Add code to run all the API tests here
    });
  });
}
