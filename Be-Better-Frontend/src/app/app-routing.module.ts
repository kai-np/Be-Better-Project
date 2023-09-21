import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/register',
    pathMatch: 'full',
  },
  {
    path: 'challenges',
    loadChildren: () =>
      import('./pages/challenges/challenges.module').then(
        (m) => m.ChallengesModule
      ),
  },
  {
    path: 'my-body',
    loadChildren: () =>
      import('./pages/my-body/my-body.module').then((m) => m.MyBodyModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dash',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'goals',
    loadChildren: () =>
      import('./pages/goals/goals.module').then((m) => m.GoalsModule),
  },
  {
    path: 'journals',
    loadChildren: () =>
      import('./pages/journals/journals.module').then((m) => m.JournalsModule),
  },
  {
    path: 'learn',
    loadChildren: () =>
      import('./pages/learn/learn.module').then((m) => m.LearnModule),
  },
  {
    path: 'intro',
    loadChildren: () =>
      import('./pages/public/intro/intro.module').then((m) => m.IntroModule),
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/public/welcome/welcome.module').then(
        (m) => m.WelcomePageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
