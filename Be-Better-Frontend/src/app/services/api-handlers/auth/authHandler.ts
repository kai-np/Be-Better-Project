import { Injectable } from '@angular/core';
import { loginResponse } from 'src/app/lib/data/models/core/loginResponse';
import { loginUserInfo } from 'src/app/lib/data/models/core/loginUserInfo';
import { registerUserInfo } from 'src/app/lib/data/models/core/registerUserInfo';
import { userAuthInfo } from 'src/app/lib/data/models/core/userAuthInfo';
import { UserInfo } from 'src/app/lib/data/models/user/userInfo';
import { AppHelperService } from 'src/app/services/app-helper/appHelper.service';
import { AuthApiService } from '../../api-requests/auth/auth-api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthHandlerService {
  constructor(
    private appHelper: AppHelperService,
    private AuthApiHandler: AuthApiService
  ) {
    appHelper.startLogger({ endPoint: 'Button Handler', logMode: 'debug' });
  }

  updateUserProfile(updatedData: UserInfo) {
    this.appHelper.log('User updated');
    this.appHelper.logData(updatedData);
  }

  removeUserFriend(friendUserInfo: UserInfo) {
    this.appHelper.log('Removing friend with info:');
    this.appHelper.logData(friendUserInfo);
  }

  getUserInfo(callBack: any) {
    if (this.appHelper.storeGetObject('userInfo') !== undefined) {
      this.appHelper
        .storeGetObject('userInfo')
        .then((storedUserInfo: UserInfo) => {
          callBack(storedUserInfo);
        });
    } else {
      callBack(false);
    }
  }

  getUserAuthInfo(callBack: any) {
    if (this.appHelper.storeGetObject('userAuthInfo') !== undefined) {
      this.appHelper
        .storeGetObject('userAuthInfo')
        .then((storedUserAuthInfo: userAuthInfo) => {
          callBack(storedUserAuthInfo);
        });
    }
  }

  registerUser(registerUserInfo: registerUserInfo, callBack: any) {
    this.AuthApiHandler.addUser(registerUserInfo).subscribe({
      next: (data) => {
        console.log(data);

        console.log('Successflly registered');
        callBack(true);
      },
      error: (error) => {
        console.error('There was an error!', error);
        callBack(false);
      },
    });
  }

  saveUserSession(loginData: loginResponse) {
    const userInfo: UserInfo = loginData.userInfo;
    const userAuthToken = loginData.authToken;

    const userAuthInfo: userAuthInfo = {
      authToken: userAuthToken,
      userID: userInfo.userID,
    };

    this.appHelper.storeSetObject('userAuthInfo', userAuthInfo);
    this.appHelper.storeSetObject('userInfo', userInfo).then(() => {
      console.log('Saved user session + tokoen');
      // this.router.navigate(["/d/index"]);
    });
  }

  secureLogin(loginUserInfo: loginUserInfo, callBack: any) {
    this.loginUser(loginUserInfo, (result) => {
      if (result == false) {
        callBack(false);
      } else {
        this.saveUserSession(result);
        callBack(true);
      }
    });
  }

  loginUser(loginUserInfo: loginUserInfo, callBack: any) {
    this.AuthApiHandler.loginUser(loginUserInfo).subscribe({
      next: (data) => {
        if (data != false) {
          console.log('Successflly loggedin');
          callBack(data);
        }
      },
      error: (error) => {
        console.error('There was an error!', error);
        callBack(false);
      },
    });
  }
}
