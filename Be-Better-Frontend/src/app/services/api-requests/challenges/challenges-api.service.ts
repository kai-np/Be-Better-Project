import { HttpClient } from '@angular/common/http';

import { Inject, Injectable } from '@angular/core';

import { registerUserInfo } from 'src/app/lib/data/models/core/registerUserInfo';
import { AppHelperService } from '../../app-helper/appHelper.service';
import { loginUserInfo } from 'src/app/lib/data/models/core/loginUserInfo';
import { UserChallenge } from 'src/app/lib/data/models/challenges/userChallenge';
import { apiRequest } from 'src/app/lib/data/models/core/apiRequest';
import { ChallengeTemplateInfo } from 'src/app/lib/data/models/challenges/challengeTemplateInfo';

@Injectable({ providedIn: 'root' })
export class ChallengesApiService {
  private apiEndpoint = '';

  constructor(private http: HttpClient, private appHandler: AppHelperService) {
    this.apiEndpoint = this.appHandler.apiEndpoint;
  }

  getUserChallenges(apiRequest: apiRequest) {
    return this.http.post<UserChallenge[]>(
      `${this.apiEndpoint}/challenges/user/fetch`,
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

  getChallengeTemplates(apiRequest: apiRequest) {
    return this.http.post<ChallengeTemplateInfo[]>(
      `${this.apiEndpoint}/challenges/public/fetch`,
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

  updateUserChallenge(apiRequest: apiRequest) {
    return this.http.post<string>(
      `${this.apiEndpoint}/challenges/user/update`,
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

  startUserChallenge(apiRequest: apiRequest) {
    return this.http.post<string>(
      `${this.apiEndpoint}/challenges/user/start`,
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
