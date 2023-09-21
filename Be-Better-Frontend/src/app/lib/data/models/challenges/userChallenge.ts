import { ChallengeTemplateInfo } from './challengeTemplateInfo';

export interface UserChallenge {
  userID: string;
  userName?: string;
  challengeName: string;
  challengeType:
    | 'society'
    | 'environmental'
    | 'personal'
    | 'completed'
    | 'societal';
  challengeTemplateID?: string;
  challengeTemplate?: ChallengeTemplateInfo;
  challengeID: string;
  challengeInstanceID?: string;
  challengeFrequency?: 'daily' | 'weekly' | 'monthly' | 'once';
  startDate: string;
  challengeStatus: 'in-progress' | 'complete' | 'ended';
  completedCount?: number;
  failedCount?: number;
  sharedChallenge: boolean;
  challengeOwnerUserID?: string;
  challengeRules: string[];
}
