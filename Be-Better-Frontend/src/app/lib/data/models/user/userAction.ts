import { UserInfo } from './userInfo';

export interface UserAction {
  action: string;
  userInfo: UserInfo;
}
