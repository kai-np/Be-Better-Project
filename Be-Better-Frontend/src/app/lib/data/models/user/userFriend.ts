import { UserInfo } from './userInfo';

export interface UserFriend {
  friendID?: string;
  userID: string;
  name: string;
  friendUID: string;
  profilePhotoURL: string;
  friendStatus: 'friends' | 'pending' | 'blocked' | 'active';
  dateAdded: string;
  friendToken: string;
  userInfo?: UserInfo;
}
