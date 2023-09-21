import { HttpClient } from '@angular/common/http';

import { Inject, Injectable } from '@angular/core';

import { registerUserInfo } from 'src/app/lib/data/models/core/registerUserInfo';
import { AppHelperService } from '../../app-helper/appHelper.service';
import { loginUserInfo } from 'src/app/lib/data/models/core/loginUserInfo';
import { apiRequest } from 'src/app/lib/data/models/core/apiRequest';
import { UserFriend } from 'src/app/lib/data/models/user/userFriend';
import { UserInfo } from 'src/app/lib/data/models/user/userInfo';

@Injectable({ providedIn: 'root' })
export class UserApiService {
  private apiEndpoint = '';

  constructor(private http: HttpClient, private appHandler: AppHelperService) {
    this.apiEndpoint = this.appHandler.apiEndpoint;
  }
  /*
Get users Profile
/user/profile/fetch POST

Update user profile
/user/profile/update POST

Get friends
/user/friends/fetch POST

Add friend
/user/friends/add POST

Accept friend invite
/user/friends/add/accept POST

Remove friend 
/user/friends/remove

*/

  addFriend(apiData: apiRequest) {
    return this.http.post<any>(
      `${this.apiEndpoint}/user/friends/add`,
      apiData,
      {
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      }
    );
  }

  getUsersFriend(apiData: apiRequest) {
    return this.http.post<UserFriend[]>(
      `${this.apiEndpoint}/user/friends/fetch`,
      apiData,
      {
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      }
    );
  }

  getUserByID(apiData: apiRequest) {
    return this.http.post<UserInfo>(
      `${this.apiEndpoint}/user/profile/fetch`,
      apiData,
      {
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      }
    );
  }

  acceptUserFriend(apiData: apiRequest) {
    return this.http.post<any>(
      `${this.apiEndpoint}/user/friends/add/accept`,
      apiData,
      {
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      }
    );
  }

  removeUserFriend(apiData: apiRequest) {
    return this.http.post<any>(
      `${this.apiEndpoint}/user/friends/remove`,
      apiData,
      {
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      }
    );
  }

  getUserProfile(apiData: apiRequest) {
    return this.http.post<any>(
      `${this.apiEndpoint}/user/profile/fetch`,
      apiData,
      {
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      }
    );
  }

  updateUserProfile(apiData: apiRequest) {
    return this.http.post<any>(
      `${this.apiEndpoint}/user/profile/update`,
      apiData,
      {
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      }
    );
  }

  addUser(userRegisterInfo: registerUserInfo) {
    return this.http.post<string>(
      `${this.apiEndpoint}/auth/register`,
      userRegisterInfo,
      {
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      }
    );
  }

  loginUser(userLoginInfo: loginUserInfo) {
    return this.http.post<any>(
      `${this.apiEndpoint}/auth/login`,
      userLoginInfo,
      {
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      }
    );
  }
}
