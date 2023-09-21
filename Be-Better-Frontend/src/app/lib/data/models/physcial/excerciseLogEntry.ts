export interface ExcerciseLogEntry {
  excerciseLogID: string;
  userID: string;
  dateAdded: string;
  excerciseType: 'run' | 'yoga' | 'gym' | 'hike' | 'cycle' | 'other';
  excerciseTitle: string;
  timeSpent?: string;
  metric?: string;
  excerciseDescription?: string;
  location?: string;
  imageAssetURL?: string;
}
