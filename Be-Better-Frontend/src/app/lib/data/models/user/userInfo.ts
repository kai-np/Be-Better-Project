import { TextJournalEntry } from '../journals/textJournalEntry';
import { UserFriend } from './userFriend';

export interface UserInfo {
  name: string;
  email: string;
  emailVerified?: boolean;
  publicAssetID?: string;
  profilePhotoURL: string;
  userID?: string;
  password?: string;
  journalEntries?: TextJournalEntry[];
  publicQuote?: string;
  authToken?: string;
  completedChallengeStats?: {
    societal: number;
    environmental: number;
    personal: number;
  };
  userFriends?: UserFriend[];
  publicLink?: string;
  friendToken?: string;
  friendCode?: string;
}
