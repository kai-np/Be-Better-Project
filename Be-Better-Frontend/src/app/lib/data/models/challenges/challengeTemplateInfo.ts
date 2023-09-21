export interface ChallengeTemplateInfo {
  challengeName: string;
  challengeType: 'society' | 'environmental' | 'personal';
  challengeTemplateID: string;
  challengeRules: string[];
}
