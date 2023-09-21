import { HttpClient } from '@angular/common/http';

import { Inject, Injectable } from '@angular/core';

import { registerUserInfo } from 'src/app/lib/data/models/core/registerUserInfo';
import { AppHelperService } from '../../app-helper/appHelper.service';
import { loginUserInfo } from 'src/app/lib/data/models/core/loginUserInfo';
import { UserChallenge } from 'src/app/lib/data/models/challenges/userChallenge';
import { apiRequest } from 'src/app/lib/data/models/core/apiRequest';
import { ChallengeTemplateInfo } from 'src/app/lib/data/models/challenges/challengeTemplateInfo';

@Injectable({ providedIn: 'root' })
export class HealthApiService {
  private apiEndpoint = '';

  constructor(private http: HttpClient, private appHandler: AppHelperService) {
    this.apiEndpoint = this.appHandler.apiEndpoint;
  }

  addUserActivity(apiRequest: apiRequest) {
    return this.http.post<string>(
      `${this.apiEndpoint}/health/activities/user/add`,
      apiRequest,
      {
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      }
    );
  }

  removeUserActivity(apiRequest: apiRequest) {
    return this.http.post<string>(
      `${this.apiEndpoint}/health/activities/user/remove`,
      JSON.stringify(apiRequest),
      {
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      }
    );
  }

  updateUserActivity(apiRequest: apiRequest) {
    return this.http.post<string>(
      `${this.apiEndpoint}/health/activities/user/updat`,
      apiRequest,
      {
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      }
    );
  }

  fetchUserActivitys(apiRequest: apiRequest) {
    return this.http.post<string>(
      `${this.apiEndpoint}/health/activities/user/fetch`,
      apiRequest,
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
