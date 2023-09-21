import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { GratitudeJournalEntry } from 'src/app/lib/data/models/journals/gratitudeJournalEntry';
import { TextJournalEntry } from 'src/app/lib/data/models/journals/textJournalEntry';
import { gratitudeEntrySave } from 'src/app/lib/data/models/ui/gratitudeEntrySave';
import { AddGoalComponent } from 'src/app/lib/ui/components/add-goal/add-goal.component';
import { ViewGoalModalComponent } from 'src/app/lib/ui/components/view-goal-modal/view-goal-modal.component';
import { AuthHandlerService } from '../api-handlers/auth/authHandler';
import { JournalApiService } from '../api-requests/journal/journal-api.service';
import { apiRequest } from 'src/app/lib/data/models/core/apiRequest';

@Injectable({
  providedIn: 'root',
})
export class JournalHelperService {
  tmpJournalEntries: TextJournalEntry[] = [
    {
      userID: '222',
      journalEntryID: '41443f334',
      dateAdded: '23/07/2023',
      journalType: 'private',
      journalTitle: 'My crush on MR Fresh',
      journalBody:
        'Lorem ajdkjskdj jidjosia jaiosdj ioj.d jadiosj aoisdjoi .dajisdjiojmgnuijhn dnasnd',
      journalColour: '#E18315',
    },
    {
      userID: '222',
      journalEntryID: '4143d34asd34',
      dateAdded: '20/07/2023',
      journalType: 'private',
      journalTitle: 'The worst day I had',
      journalBody:
        'Lorem ajdkjskdj jidjosia jaiosdj ioj.d jadiosj aoisdjoi .dajisdjiojmgnuijhn dnasnd',
      journalColour: '#921995',
    },
    {
      userID: '222',
      journalEntryID: '4fdf14343dasd34',
      dateAdded: '20/06/2023',
      journalType: 'private',
      journalTitle: 'Today things changed',
      journalBody:
        'Lorem ajdkjskdj jidjosia jaiosdj ioj.d jadiosj aoisdjoi .dajisdjiojmgnuijhn dnasnd',
      journalColour: '#0F6008',
    },
    {
      userID: '222',
      journalEntryID: '412344334',
      dateAdded: '23/07/2023',
      journalType: 'private',
      journalTitle: 'My crush on MR Fresh',
      journalBody:
        'Lorem ajdkjskdj jidjosia jaiosdj ioj.d jadiosj aoisdjoi .dajisdjiojmgnuijhn dnasnd',
      journalColour: '#27ACA4',
    },
    {
      userID: '222',
      journalEntryID: '414343dasd34',
      dateAdded: '20/07/2023',
      journalType: 'private',
      journalTitle: 'The worst day I had',
      journalBody:
        'Lorem ajdkjskdj jidjosia jaiosdj ioj.d jadiosj aoisdjoi .dajisdjiojmgnuijhn dnasnd',
      journalColour: '#DD15E1',
    },
    {
      userID: '222',
      journalEntryID: '4fdf14343dasd34',
      dateAdded: '20/06/2023',
      journalType: 'private',
      journalTitle: 'Today things changed',
      journalBody:
        'Lorem ajdkjskdj jidjosia jaiosdj ioj.d jadiosj aoisdjoi .dajisdjiojmgnuijhn dnasnd',
      journalColour: '#0F6008',
    },
    {
      userID: '222',
      journalEntryID: '41434334',
      dateAdded: '23/07/2023',
      journalType: 'public',
      journalTitle: 'My crush on MR Fresh',
      journalBody:
        'Lorem ajdkjskdj jidjosia jaiosdj ioj.d jadiosj aoisdjoi .dajisdjiojmgnuijhn dnasnd',
      journalColour: '#27ACA4',
    },
    {
      userID: '222',
      journalEntryID: '41413dasd34',
      dateAdded: '20/07/2023',
      journalType: 'public',
      journalTitle: 'The worst day I had',
      journalBody:
        'Lorem ajdkjskdj jidjosia jaiosdj ioj.d jadiosj aoisdjoi .dajisdjiojmgnuijhn dnasnd',
      journalColour: '#DD15E1',
    },
    {
      userID: '222',
      journalEntryID: '4fdf143d3asd34',
      dateAdded: '20/06/2023',
      journalType: 'public',
      journalTitle: 'Today things changed',
      journalBody:
        'Lorem ajdkjskdj jidjosia jaiosdj ioj.d jadiosj aoisdjoi .dajisdjiojmgnuijhn dnasnd',
      journalColour: '#0F6008',
    },
  ];

  tmpGratitudeJournals: GratitudeJournalEntry[] = [
    {
      gratitudeEntryID: '222',
      userID: '222',
      dateAdded: '323',
      textEntries: [
        'My beautifull mommy',
        'My amazing sister',
        'All the lovely things I have',
      ],
      emotion: 'okay',
      day: 11,
      year: 2023,
      month: 9,
    },
    {
      gratitudeEntryID: '2a22',
      userID: '222',
      dateAdded: '323',
      textEntries: [
        'My beautifull mommy',
        'My amazing sister',
        'All the lovely things I have',
      ],
      emotion: 'okay',
      day: 10,
      year: 2023,
      month: 9,
    },
    {
      gratitudeEntryID: '22l2',
      userID: '222',
      dateAdded: '323',
      textEntries: [
        'My beautifull mommy',
        'My amazing sister',
        'All the lovely things I have',
      ],
      emotion: 'happy',
      day: 9,
      year: 2023,
      month: 9,
    },
    {
      gratitudeEntryID: '22da2',
      userID: '222',
      dateAdded: '323',
      textEntries: [
        'My beautifull mommy',
        'My amazing sister',
        'All the lovely things I have',
      ],
      emotion: 'angry',
      day: 8,
      year: 2023,
      month: 9,
    },
    {
      gratitudeEntryID: '2op22',
      userID: '222',
      dateAdded: '323',
      textEntries: [
        'My beautifull mommy',
        'My amazing sister',
        'All the lovely things I have',
      ],
      emotion: 'sad',
      day: 7,
      year: 2023,
      month: 9,
    },
    {
      gratitudeEntryID: '22bh2',
      userID: '222',
      dateAdded: '323',
      textEntries: [
        'My beautifull mommy',
        'My amazing sister',
        'All the lovely things I have',
      ],
      emotion: 'stressed',
      day: 6,
      year: 2023,
      month: 9,
    },
    {
      gratitudeEntryID: '22421k2',
      userID: '222',
      dateAdded: '323',
      textEntries: [
        'My beautifull mommy',
        'My amazing sister',
        'All the lovely things I have',
      ],
      emotion: 'okay',
      day: 5,
      year: 2023,
      month: 9,
    },
    {
      gratitudeEntryID: '2dsdsd22',
      userID: '222',
      dateAdded: '323',
      textEntries: [
        'My beautifull mommy',
        'My amazing sister',
        'All the lovely things I have',
      ],
      emotion: 'happy',
      day: 4,
      year: 2023,
      month: 8,
    },
  ];

  constructor(
    private modalController: ModalController,
    private authHandler: AuthHandlerService,
    private journalAPIHandler: JournalApiService
  ) {}

  addGratitudeJounal(entry: gratitudeEntrySave) {
    console.log('new journal added');
    this.addGratitudeJournalEntry(entry, (added) => {
      if (added) {
        console.log('Grat journal added');
      }
    });
  }

  fetchGratitudeJournals() {
    return this.tmpGratitudeJournals;
  }

  saveNewJournalEntry(journalData: any) {
    console.log('Saving journal...');
    this.addTextJournal(journalData, (added) => {
      if (added) {
        console.log('Journal added');
      }
    });
  }

  getUserJournals(callBack: any) {
    this.authHandler.getUserAuthInfo((authInfo) => {
      if (authInfo == null) {
        callBack(false);
      }
      const apiRequest: apiRequest = {
        userAuthInfo: authInfo,
        postData: null,
      };

      this.journalAPIHandler.fetchUserTextJournals(apiRequest).subscribe({
        next: (data) => {
          if (data != undefined) {
            console.log('Got Journals');
            console.log(data);
            callBack(data);
          }
        },
        error: (error) => {
          console.error('There was an error!', error);
          callBack(false);
        },
      });
    });
  }

  getUserGratitudeJournals(callBack: any) {
    this.authHandler.getUserAuthInfo((authInfo) => {
      if (authInfo == null) {
        callBack(false);
      }
      const apiRequest: apiRequest = {
        userAuthInfo: authInfo,
        postData: null,
      };

      this.journalAPIHandler.fetchUserGratitudeJournals(apiRequest).subscribe({
        next: (data) => {
          if (data != undefined) {
            console.log('Got grat Journals');
            console.log(data);
            callBack(data);
          }
        },
        error: (error) => {
          console.error('There was an error!', error);
          callBack(false);
        },
      });
    });
  }

  addTextJournal(journalInfo: any, callBack: any) {
    const journalData = {
      journalType: journalInfo.journalType,
      journalTitle: journalInfo.journalTitle,
      journalBody: journalInfo.journalBody,
    };

    this.authHandler.getUserAuthInfo((authInfo) => {
      if (authInfo == null) {
        console.log('Failed to update');
      }
      const apiRequest: apiRequest = {
        userAuthInfo: authInfo,
        postData: journalData,
      };
      this.journalAPIHandler.addUserTextJournal(apiRequest).subscribe({
        next: (data) => {
          console.log('Added journal');
          callBack(true);
        },
        error: (error) => {
          console.error('There was an error!', error);
          callBack(false);
        },
      });
    });
  }

  addGratitudeJournalEntry(journalInfo: gratitudeEntrySave, callBack: any) {
    const journalData = {
      textEntries: JSON.stringify(journalInfo.entries),
      emotion: journalInfo.emotion,
      day: journalInfo.day,
      year: journalInfo.year,
      month: journalInfo.month,
    };

    this.authHandler.getUserAuthInfo((authInfo) => {
      if (authInfo == null) {
        console.log('Failed to update');
      }
      const apiRequest: apiRequest = {
        userAuthInfo: authInfo,
        postData: journalData,
      };
      this.journalAPIHandler.addUserGratitudeJournal(apiRequest).subscribe({
        next: (data) => {
          console.log('Added grat journal');
          callBack(true);
        },
        error: (error) => {
          console.error('There was an error!', error);
          callBack(false);
        },
      });
    });
  }

  fethJournalEntry(journalID: string) {
    console.log(journalID);
    const journalInfo: TextJournalEntry = this.tmpJournalEntries.find(
      (j) => j.journalEntryID == journalID
    );
    console.log(journalInfo);
    if (journalInfo != undefined) {
      return journalInfo;
    }
  }
}
