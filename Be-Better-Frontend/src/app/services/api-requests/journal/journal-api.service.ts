import { HttpClient } from '@angular/common/http';

import { Inject, Injectable } from '@angular/core';

import { registerUserInfo } from 'src/app/lib/data/models/core/registerUserInfo';
import { AppHelperService } from '../../app-helper/appHelper.service';
import { loginUserInfo } from 'src/app/lib/data/models/core/loginUserInfo';
import { UserChallenge } from 'src/app/lib/data/models/challenges/userChallenge';
import { apiRequest } from 'src/app/lib/data/models/core/apiRequest';
import { ChallengeTemplateInfo } from 'src/app/lib/data/models/challenges/challengeTemplateInfo';

@Injectable({ providedIn: 'root' })
export class JournalApiService {
  private apiEndpoint = '';

  constructor(private http: HttpClient, private appHandler: AppHelperService) {
    this.apiEndpoint = this.appHandler.apiEndpoint;
  }

  addUserTextJournal(apiRequest: apiRequest) {
    return this.http.post<string>(
      `${this.apiEndpoint}/journals/user/add`,
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

  addUserGratitudeJournal(apiRequest: apiRequest) {
    return this.http.post<string>(
      `${this.apiEndpoint}/journals/gratitude/user/add`,
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

  fetchUserGratitudeJournals(apiRequest: apiRequest) {
    return this.http.post<string>(
      `${this.apiEndpoint}/journals/gratitude/user/fetch`,
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

  fetchUserTextJournals(apiRequest: apiRequest) {
    return this.http.post<string>(
      `${this.apiEndpoint}/journals/user/fetch`,
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
