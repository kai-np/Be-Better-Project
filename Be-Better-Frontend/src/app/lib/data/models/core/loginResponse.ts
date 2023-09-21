import { UserInfo } from "../user/userInfo";

export interface loginResponse {
    authToken: string;
    userInfo: UserInfo
}