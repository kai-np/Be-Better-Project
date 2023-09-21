import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UIExampleComponent } from './components/example/example.component';
import { AppHeaderComponent } from './components/app-header-component/app-header-component.component';
import { ExtraSmallImageButtonComponent } from './components/extra-small-image-button/extra-small-image-button.component';
import { AppFooterComponent } from './components/app-footer-nav-component/app-footer-nav-componentcomponent';
import { AppButtonShelfComponent } from './components/button-holding-container/button-holding-container.component';
import { ImageButtonComponent } from './components/image-button/image-button.component';
import { MyProfileComponent } from './modals/my-profile/my-profile.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { BasicTextButtonComponent } from './components/basic-text-button/basic-text-button.component';
import { ViewPublicJournalsComponent } from './view-public-journals/view-public-journals.component';
import { CircleImageButtonComponent } from './components/circle-image-button/circle-image-button.component';
import { RectangleImageButtonComponent } from './components/image-rectangle-button/image-rectangle-button.component';
import { ChallengeBasicListItemComponent } from './components/challenge-basic-list-item/challenge-basic-list-item.component';
import { ViewChallengeModalComponent } from './components/view-challenge-modal/view-challenge-modal.component';
import { ActivityListItemComponent } from './components/activity-list-item/activity-list-item.component';
import { GoalsGridContainerComponent } from './components/goals-grid-container/goals-grid-container.component';
import { GoalListItemComponent } from './components/goal-list-item/goal-list-item.component';
import { PageHeaderComponent } from './components/page-header-component/page-header-component.component';
import { ExtraLargeRectangleButtonComponent } from './components/extra-large-rectangle-button/extra-large-rectangle-button.component';
import { JournalListItemComponent } from './components/journal-list-item/journal-list-item.component';
import { ChallengeExplorerModalComponent } from './components/challenge-explorer/challenge-explorer.component';
import { ScrollImageButtonComponent } from './components/scroll-image-button/scroll-image-button.component';

import { AddMetricModalComponent } from './components/add-metric-modal/add-metric-modal.component';

import { LearnContentModalComponent } from './components/learn-content-modal/learn-content-modal.component';
import { AddGoalComponent } from './components/add-goal/add-goal.component';
import { LogActivityModalComponent } from './components/log-activity-modal/log-activity-modal.component';
import { ViewGoalModalComponent } from './components/view-goal-modal/view-goal-modal.component';
import { ViewActivityModalComponent } from './components/view-activity-modal/view-activity-modal.component';
import { RandomChallengeModalComponent } from './components/random-challenege-modal/random-challenege-modal.component';
import { GratitudeCalendarComponent } from './components/gratitude-calendar/gratitude-calendar.component';
import { GratitudeJournalEntryComponent } from './components/gratitude-journal-entry/gratitude-journal-entry.component';
import { FriendsManagerModalComponent } from './components/friends-manager-modal/friends-manager-modal.component';
import { FriendsListItemComponent } from './components/friends-list-item/friends-list-item.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
  declarations: [
    UIExampleComponent,
    AppHeaderComponent,
    LogActivityModalComponent,
    ExtraSmallImageButtonComponent,
    AppFooterComponent,
    AppButtonShelfComponent,
    ImageButtonComponent,
    GoalListItemComponent,
    GoalsGridContainerComponent,
    ViewProfileComponent,
    MyProfileComponent,
    AddGoalComponent,
    FriendsManagerModalComponent,
    CircleImageButtonComponent,
    ScrollImageButtonComponent,
    AddMetricModalComponent,
    ViewActivityModalComponent,
    JournalListItemComponent,
    ViewGoalModalComponent,
    RandomChallengeModalComponent,
    ActivityListItemComponent,
    ChallengeExplorerModalComponent,
    LearnContentModalComponent,
    GratitudeCalendarComponent,
    GratitudeJournalEntryComponent,
    ExtraLargeRectangleButtonComponent,
    PageHeaderComponent,
    ChallengeBasicListItemComponent,
    BasicTextButtonComponent,
    FriendsListItemComponent,
    BasicTextButtonComponent,
    RectangleImageButtonComponent,
    ViewPublicJournalsComponent,
    ViewChallengeModalComponent,
  ],
  exports: [
    UIExampleComponent,
    AppFooterComponent,
    ViewProfileComponent,
    AppHeaderComponent,
    GoalListItemComponent,
    PageHeaderComponent,
    ExtraSmallImageButtonComponent,
    ChallengeBasicListItemComponent,
    FriendsListItemComponent,
    ChallengeExplorerModalComponent,
    LogActivityModalComponent,
    RandomChallengeModalComponent,
    AddMetricModalComponent,
    FriendsManagerModalComponent,
    ExtraLargeRectangleButtonComponent,
    GratitudeCalendarComponent,
    AppButtonShelfComponent,
    CircleImageButtonComponent,
    AddGoalComponent,
    ViewGoalModalComponent,
    ScrollImageButtonComponent,
    ViewActivityModalComponent,
    GoalsGridContainerComponent,
    JournalListItemComponent,
    ActivityListItemComponent,
    LearnContentModalComponent,
    GratitudeJournalEntryComponent,
    ImageButtonComponent,
    BasicTextButtonComponent,
    RectangleImageButtonComponent,
    MyProfileComponent,
    BasicTextButtonComponent,
    ViewChallengeModalComponent,
    ViewPublicJournalsComponent,
  ],
})
export class UIModule {}
