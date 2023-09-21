import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JournalsPage } from './containers/journals.page';
import { PersonalJournalPage } from './components/personal-journal/personal-journal.page';
import { PublicJournalPage } from './components/public-journal/public-journal.page';
import { AddTextJournalPage } from './components/add-journal-view/add-journal-view.page';
import { ViewTextJournalPage } from './components/view-journal-view/view-journal-view.page';
import { GratitudeJournalPage } from './components/gratitude-journal/gratitude-journal.page';

const routes: Routes = [
  {
    path: '',
    component: JournalsPage,
  },
  {
    path: 'personal',
    component: PersonalJournalPage,
  },
  {
    path: 'public',
    component: PublicJournalPage,
  },
  {
    path: 'add',
    component: AddTextJournalPage,
  },
  {
    path: 'view',
    component: ViewTextJournalPage,
  },
  {
    path: 'gratitude',
    component: GratitudeJournalPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournalsRoutingModule {}
