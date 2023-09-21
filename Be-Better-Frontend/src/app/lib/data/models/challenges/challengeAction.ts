import { UserChallenge } from './userChallenge';

export interface ChallengeAction {
  action: string;
  challengeInfo: UserChallenge;
}
