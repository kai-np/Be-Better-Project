import { GoalInfo } from '../goals/goalInfo';
import { BMIMetric } from './bmiMetric';
import { ExcerciseLogEntry } from './excerciseLogEntry';

export interface MyBody {
  activityLog: ExcerciseLogEntry[];
  BMIMetric: BMIMetric;
  fitnessGoals: GoalInfo[];
}
