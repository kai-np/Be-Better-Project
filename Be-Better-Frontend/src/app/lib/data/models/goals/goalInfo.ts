export interface GoalInfo {
  goalID?: string;
  userID?: string;
  goalFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'once';
  goalType:
    | 'default'
    | 'short-term'
    | 'long-term'
    | 'fitness'
    | 'longTerm'
    | 'shortTerm';
  goalTitle: string;
  goalDescription: string;
  goalStatus?: 'incomplete' | 'complete' | 'in-progress';
  dateAdded?: string;
  statCompletedCount?: string;
  statFailedCount?: string;
  goalStatCounts?: { completedCount: number; failedCount: number };
}
