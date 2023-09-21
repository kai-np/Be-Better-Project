import { HttpClient } from '@angular/common/http';

import { Inject, Injectable } from '@angular/core';

import { registerUserInfo } from 'src/app/lib/data/models/core/registerUserInfo';
import { AppHelperService } from '../../app-helper/appHelper.service';
import { loginUserInfo } from 'src/app/lib/data/models/core/loginUserInfo';
import { UserChallenge } from 'src/app/lib/data/models/challenges/userChallenge';
import { apiRequest } from 'src/app/lib/data/models/core/apiRequest';
import { ChallengeTemplateInfo } from 'src/app/lib/data/models/challenges/challengeTemplateInfo';

@Injectable({ providedIn: 'root' })
export class GoalsApiService {
  private apiEndpoint = '';

  constructor(private http: HttpClient, private appHandler: AppHelperService) {
    this.apiEndpoint = this.appHandler.apiEndpoint;
  }

  addUserGoal(apiRequest: apiRequest) {
    return this.http.post<string>(
      `${this.apiEndpoint}/goals/user/add`,
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

  removeUserGoal(apiRequest: apiRequest) {
    return this.http.post<string>(
      `${this.apiEndpoint}/goals/user/remove`,
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

  updateUserGoal(apiRequest: apiRequest) {
    return this.http.post<string>(
      `${this.apiEndpoint}/goals/user/update`,
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

  fetchUserGoals(apiRequest: apiRequest) {
    return this.http.post<string>(
      `${this.apiEndpoint}/goals/user/fetch`,
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
