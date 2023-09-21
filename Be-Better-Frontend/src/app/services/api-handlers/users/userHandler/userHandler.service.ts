import { Injectable } from '@angular/core';
import { ImageButton } from 'src/app/lib/data/models/ui/imageButton';
import { ButtonShelfInfo } from 'src/app/lib/data/models/ui/buttonShelf';
import { ModalController } from '@ionic/angular';
import { ModalHoldingComponent } from 'src/app/lib/ui/modals/modal-holding-container/modal-holding-container.component';
import { UserInfo } from 'src/app/lib/data/models/user/userInfo';
import { MyProfileComponent } from 'src/app/lib/ui/modals/my-profile/my-profile.component';
import { AppHelperService } from 'src/app/services/app-helper/appHelper.service';
import { UserApiService } from 'src/app/services/api-requests/user/user-api.service';
import { apiRequest } from 'src/app/lib/data/models/core/apiRequest';
import { userAuthInfo } from 'src/app/lib/data/models/core/userAuthInfo';

@Injectable({
  providedIn: 'root',
})
export class UserHandlerService {
  constructor(
    private appHelper: AppHelperService,
    private userAPIHandler: UserApiService
  ) {
    appHelper.startLogger({ endPoint: 'Button Handler', logMode: 'debug' });
  }

  removeUserFriend(friendToken: string, callBack: any) {
    this.getUserAuthInfo((authInfo) => {
      if (authInfo == null) {
        callBack(false);
      }
      const apiRequest: apiRequest = {
        userAuthInfo: authInfo,
        postData: { friendToken: friendToken },
      };

      this.userAPIHandler.removeUserFriend(apiRequest).subscribe({
        next: (data) => {
          if (data != false) {
            callBack(true);
          }
        },
        error: (error) => {
          console.error('There was an error!', error);
          callBack(false);
        },
      });
    });
  }

  getUserAuthInfo(callBack: any) {
    if (this.appHelper.storeGetObject('userAuthInfo') !== undefined) {
      this.appHelper
        .storeGetObject('userAuthInfo')
        .then((storedUserAuthInfo: userAuthInfo) => {
          callBack(storedUserAuthInfo);
        });
    } else {
      callBack(false);
    }
  }

  getUsersFriends(callBack: any) {
    this.getUserAuthInfo((authInfo) => {
      if (authInfo == null) {
        callBack(false);
      }
      const apiRequest: apiRequest = {
        userAuthInfo: authInfo,
        postData: null,
      };

      this.userAPIHandler.getUsersFriend(apiRequest).subscribe({
        next: (data) => {
          if (data != undefined) {
            console.log(data);
            callBack(data);
          }
        },
        error: (error) => {
          console.error('There was an error!', error);
          callBack(false);
        },
      });
    });
  }

  acceptUserFriend(friendToken: string, callBack: any) {
    this.getUserAuthInfo((authInfo) => {
      if (authInfo == null) {
        callBack(false);
      }
      const apiRequest: apiRequest = {
        userAuthInfo: authInfo,
        postData: { friendToken: friendToken },
      };

      this.userAPIHandler.acceptUserFriend(apiRequest).subscribe({
        next: (data) => {
          if (data != false) {
            callBack(true);
          }
        },
        error: (error) => {
          console.error('There was an error!', error);
          callBack(false);
        },
      });
    });
  }

  addUserFriend(friendCode: string, callBack: any) {
    this.getUserAuthInfo((authInfo) => {
      if (authInfo == null) {
        callBack(false);
      }
      const apiRequest: apiRequest = {
        userAuthInfo: authInfo,
        postData: { friendCode: friendCode },
      };

      this.userAPIHandler.addFriend(apiRequest).subscribe({
        next: (data) => {
          if (data != false) {
            callBack(true);
          }
        },
        error: (error) => {
          console.error('There was an error!', error);
          callBack(false);
        },
      });
    });
  }

  updateUserProfile(updatedUserInfo: UserInfo, callBack: any) {
    this.getUserAuthInfo((authInfo) => {
      if (authInfo == null) {
        callBack(false);
      }
      const apiRequest: apiRequest = {
        userAuthInfo: authInfo,
        postData: { userInfo: updatedUserInfo },
      };

      this.userAPIHandler.updateUserProfile(apiRequest).subscribe({
        next: (data) => {
          if (data != false) {
            callBack(true);
          }
        },
        error: (error) => {
          console.error('There was an error!', error);
          callBack(false);
        },
      });
    });
  }

  getUserProfileByID(userID: string, callBack: any) {
    this.getUserAuthInfo((authInfo) => {
      if (authInfo == null) {
        callBack(false);
      }
      const apiRequest: apiRequest = {
        userAuthInfo: authInfo,
        postData: { userID: userID },
      };

      this.userAPIHandler.getUserByID(apiRequest).subscribe({
        next: (data) => {
          if (data != undefined) {
            callBack(data);
          } else {
            callBack(false);
          }
        },
        error: (error) => {
          console.error('There was an error!', error);
          callBack(false);
        },
      });
    });
  }
}
