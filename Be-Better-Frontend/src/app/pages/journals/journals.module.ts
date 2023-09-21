import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UIModule } from 'src/app/lib/ui/ui.module';
import { JournalsRoutingModule } from './journals-routing.module';
import { JournalsPage } from './containers/journals.page';
import { PersonalJournalPage } from './components/personal-journal/personal-journal.page';
import { PublicJournalPage } from './components/public-journal/public-journal.page';
import { AddTextJournalPage } from './components/add-journal-view/add-journal-view.page';
import { ViewTextJournalPage } from './components/view-journal-view/view-journal-view.page';
import { GratitudeJournalPage } from './components/gratitude-journal/gratitude-journal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JournalsRoutingModule,
    ReactiveFormsModule,
    UIModule,
  ],
  declarations: [
    JournalsPage,
    PersonalJournalPage,
    PublicJournalPage,
    AddTextJournalPage,
    ViewTextJournalPage,
    GratitudeJournalPage,
  ],
})
export class JournalsModule {}
