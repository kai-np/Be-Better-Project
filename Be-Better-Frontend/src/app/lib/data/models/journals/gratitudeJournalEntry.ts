export interface GratitudeJournalEntry {
  gratitudeEntryID: string;
  userID: string;
  dateAdded: string;
  textEntries: any;
  emotion: 'angry' | 'stressed' | 'sad' | 'okay' | 'happy';
  day: number;
  year: number;
  month: number;
}
