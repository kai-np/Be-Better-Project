export interface TextJournalEntry {
  userID: string;
  journalEntryID: string;
  dateAdded: string;
  journalType: 'private' | 'public' | 'personal';
  journalTitle: string;
  journalBody: string;
  journalColour: string;
  journalPublicShareKey?: string;
}
