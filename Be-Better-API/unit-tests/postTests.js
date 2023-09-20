var request = require("request");
var endPoint = "http://localhost:999";

var userAuthInfo = {
  userID: "icSpV4P6wqmxmvShFsyPXUCxl",
  authToken: "n7lG6ysqhxf28sCVUOdtl1tXoYiLceLnJLdCy2LA",
};
var apiRequest = {
  userAuthInfo: userAuthInfo,
  postData: null,
};

const testGetFriends = (requestData) => {
  request(
    {
      url: endPoint + "/user/friends/fetch",
      method: "POST",
      json: true, // <--Very important!!!
      body: requestData,
    },
    function (error, response, body) {
      if (error) {
        console.log("ERROR =>");
        console.log(error);
      } else {
        console.log(body);
      }
    }
  );
};

const registerInfo = {
  name: "Kai",
  email: "kai@z14.co",
  password: "TestTest12",
};
const testRegisterUser = (registerInfo) => {
  request(
    {
      url: endPoint + "/user/auth/register",
      method: "POST",
      json: true, // <--Very important!!!
      body: registerInfo,
    },
    function (error, response, body) {
      if (error) {
        console.log("ERROR =>");
        console.log(error);
      } else {
        console.log(body);
      }
    }
  );
};

const loginInfo = {
  email: "kai@z14.co",
  password: "TestTest12",
};
const testLoginUser = (loginInfo) => {
  request(
    {
      url: endPoint + "/user/auth/login",
      method: "POST",
      json: true, // <--Very important!!!
      body: loginInfo,
    },
    function (error, response, body) {
      if (error) {
        console.log("ERROR =>");
        console.log(error);
      } else {
        console.log(body);
      }
    }
  );
};

const fetchUser = {
  userID: "w0RPJ5CErVlQ4ry5CbWV2mf37",
};
apiRequest = {
  userAuthInfo: userAuthInfo,
  postData: fetchUser,
};
const testFetchUser = (apiData) => {
  request(
    {
      url: endPoint + "/user/profile/fetch",
      method: "POST",
      json: true, // <--Very important!!!
      body: apiData,
    },
    function (error, response, body) {
      if (error) {
        console.log("ERROR =>");
        console.log(error);
      } else {
        console.log(body);
      }
    }
  );
};

const updateUserInfo = {
  userID: userAuthInfo.userID,
  name: "dylan",
  email: "tesaf@2.com",
};
apiRequest = {
  userAuthInfo: userAuthInfo,
  postData: updateUserInfo,
};
const testUpdateUser = (apiData) => {
  request(
    {
      url: endPoint + "/user/profile/update",
      method: "POST",
      json: true, // <--Very important!!!
      body: apiRequest,
    },
    function (error, response, body) {
      if (error) {
        console.log("ERROR =>");
        console.log(error);
      } else {
        console.log(body);
      }
    }
  );
};

const addFriend = {
  friendCode: "jbqm0l",
};
apiRequest = {
  userAuthInfo: userAuthInfo,
  postData: addFriend,
};
const testAddFriend = () => {
  request(
    {
      url: endPoint + "/user/friends/add",
      method: "POST",
      json: true, // <--Very important!!!
      body: apiRequest,
    },
    function (error, response, body) {
      if (error) {
        console.log("ERROR =>");
        console.log(error);
      } else {
        console.log(body);
      }
    }
  );
};

const acceptFriend = {
  friendToken: "z9PfW292TdGy94Yn7sWu",
};
apiRequest = {
  userAuthInfo: userAuthInfo,
  postData: acceptFriend,
};
const testAcceptFriend = () => {
  request(
    {
      url: endPoint + "/user/friends/add/accept",
      method: "POST",
      json: true, // <--Very important!!!
      body: apiRequest,
    },
    function (error, response, body) {
      if (error) {
        console.log("ERROR =>");
        console.log(error);
      } else {
        console.log(body);
      }
    }
  );
};

const removeFriend = {
  friendToken: "z9PfW292TdGy94Yn7sWu",
};
apiRequest = {
  userAuthInfo: userAuthInfo,
  postData: acceptFriend,
};
const testRemoveFriend = () => {
  request(
    {
      url: endPoint + "/user/friends/remove",
      method: "POST",
      json: true, // <--Very important!!!
      body: apiRequest,
    },
    function (error, response, body) {
      if (error) {
        console.log("ERROR =>");
        console.log(error);
      } else {
        console.log(body);
      }
    }
  );
};

const getCTemplates = {};
apiRequest = {
  userAuthInfo: userAuthInfo,
  postData: getCTemplates,
};
const testGetChallengeTemplates = () => {
  request(
    {
      url: endPoint + "/challenges/public/fetch",
      method: "POST",
      json: true, // <--Very important!!!
      body: apiRequest,
    },
    function (error, response, body) {
      if (error) {
        console.log("ERROR =>");
        console.log(error);
      } else {
        console.log(body);
      }
    }
  );
};

const challengeInfo = {
  userID: userAuthInfo.userID,
  challengeTemplateID: "DADSA525234234234",
  challengeFrequency: "daily",
  challengeType: "environmental",
};
apiRequest = {
  userAuthInfo: userAuthInfo,
  postData: challengeInfo,
};

const testStartUserChallenge = () => {
  request(
    {
      url: endPoint + "/challenges/user/start",
      method: "POST",
      json: true, // <--Very important!!!
      body: apiRequest,
    },
    function (error, response, body) {
      if (error) {
        console.log("ERROR =>");
        console.log(error);
      } else {
        console.log(body);
      }
    }
  );
};

const getChallengeInfo = {};
apiRequest = {
  userAuthInfo: userAuthInfo,
  postData: getChallengeInfo,
};

const testGetUserChallenges = () => {
  request(
    {
      url: endPoint + "/challenges/user/fetch",
      method: "POST",
      json: true, // <--Very important!!!
      body: apiRequest,
    },
    function (error, response, body) {
      if (error) {
        console.log("ERROR =>");
        console.log(error);
      } else {
        console.log(body);
      }
    }
  );
};

const updateChallengeInfo = {
  userID: userAuthInfo.userID,
  challengeTemplateID: "DADSA525234234234",
  challengeID: "R6LEKwCoAOjH",
  sharedChallenge: "true",
};
apiRequest = {
  userAuthInfo: userAuthInfo,
  postData: updateChallengeInfo,
};

const testUpdateUserChallenge = () => {
  request(
    {
      url: endPoint + "/challenges/user/update",
      method: "POST",
      json: true, // <--Very important!!!
      body: apiRequest,
    },
    function (error, response, body) {
      if (error) {
        console.log("ERROR =>");
        console.log(error);
      } else {
        console.log(body);
      }
    }
  );
};

const newGoalInfo = {
  goalTitle: "Test Goal",
  goalFrequency: "daily",
  goalType: "fitness",
  goalDescription: "lamao...",
};

apiRequest = {
  userAuthInfo: userAuthInfo,
  postData: newGoalInfo,
};

const testAddUserGoal = () => {
  request(
    {
      url: endPoint + "/goals/user/add",
      method: "POST",
      json: true, // <--Very important!!!
      body: apiRequest,
    },
    function (error, response, body) {
      if (error) {
        console.log("ERROR =>");
        console.log(error);
      } else {
        console.log(body);
      }
    }
  );
};

const fetchGoalInfo = {};

apiRequest = {
  userAuthInfo: userAuthInfo,
  postData: fetchGoalInfo,
};

const fetchUserGoals = () => {
  request(
    {
      url: endPoint + "/goals/user/fetch",
      method: "POST",
      json: true, // <--Very important!!!
      body: apiRequest,
    },
    function (error, response, body) {
      if (error) {
        console.log("ERROR =>");
        console.log(error);
      } else {
        console.log(body);
      }
    }
  );
};

const updateGoalInfo = {
  goalTitle: "X xxx xl",
  goalType: "societal",
  goalDescription: "lamao...",
  goalID: "drKjabOyO9WTuxtP3eCv",
};

apiRequest = {
  userAuthInfo: userAuthInfo,
  postData: updateGoalInfo,
};

const testUpdateUserGoal = () => {
  request(
    {
      url: endPoint + "/goals/user/update",
      method: "POST",
      json: true, // <--Very important!!!
      body: apiRequest,
    },
    function (error, response, body) {
      if (error) {
        console.log("ERROR =>");
        console.log(error);
      } else {
        console.log(body);
      }
    }
  );
};

//testGetFriends(apiRequest);
//testRegisterUser(registerInfo);
//testLoginUser(loginInfo);
//testFetchUser(apiRequest);
//testUpdateUser();
//testAddFriend();

//testAcceptFriend();
//testRemoveFriend();

//testGetChallengeTemplates();
//testStartUserChallenge();
//testGetUserChallenges();
//testUpdateUserChallenge();

// testAddUserGoal();
// fetchUserGoals();
testUpdateUserGoal();
