import { HttpClient } from '@angular/common/http';

import { Inject, Injectable } from '@angular/core';

import { registerUserInfo } from 'src/app/lib/data/models/core/registerUserInfo';
import { AppHelperService } from '../../app-helper/appHelper.service';
import { loginUserInfo } from 'src/app/lib/data/models/core/loginUserInfo';

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  private apiEndpoint = '';

  constructor(private http: HttpClient, private appHandler: AppHelperService) {
    this.apiEndpoint = this.appHandler.apiEndpoint;
  }

  addUser(userRegisterInfo: registerUserInfo) {
    return this.http.post<string>(
      `${this.apiEndpoint}/user/auth/register`,
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
      `${this.apiEndpoint}/user/auth/login`,
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
