import { GoalInfo } from '../goals/goalInfo';

export interface GoalsGridContainer {
  gridTitle: string;
  gridBackgroundColour: string;
  gridItemsPerCollumn: number;
  showNavigation: boolean;
  gridGoals: GoalInfo[];
}
