import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'detail-list',
    loadChildren: () => import('./detail-list/detail-list.module').then( m => m.DetailListPageModule)
  },
  {
    path: 'sub-detail',
    loadChildren: () => import('./sub-detail/sub-detail.module').then( m => m.SubDetailPageModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('./faqs/faqs.module').then( m => m.FaqsPageModule)
  },
  {
    path: 'queries-comments',
    loadChildren: () => import('./queries-comments/queries-comments.module').then( m => m.QueriesCommentsPageModule)
  },
  {
    path: 'right-patients',
    loadChildren: () => import('./right-patients/right-patients.module').then( m => m.RightPatientsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'add-entry',
    loadChildren: () => import('./add-entry/add-entry.module').then( m => m.AddEntryPageModule)
  },
  {
    path: 'survey',
    loadChildren: () => import('./survey/survey.module').then( m => m.SurveyPageModule)
  },
  {
    path: 'patient-list',
    loadChildren: () => import('./patient-list/patient-list.module').then( m => m.PatientListPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'how-its-work',
    loadChildren: () => import('./how-its-work/how-its-work.module').then( m => m.HowItsWorkPageModule)
  },
  {
    path: 'instructions',
    loadChildren: () => import('./instructions/instructions.module').then( m => m.InstructionsPageModule)
  },
  {
    path: 'step-form',
    loadChildren: () => import('./step-form/step-form.module').then( m => m.StepFormPageModule)
  },
  {
    path: 'step-form/:id/:completed',
    loadChildren: () => import('./step-form/step-form.module').then( m => m.StepFormPageModule)
  },
  {
    path: 'step-form/:id',
    loadChildren: () => import('./step-form/step-form.module').then( m => m.StepFormPageModule)
  },
  {
    path: 'kdp-suvey',
    loadChildren: () => import('./kdp-suvey/kdp-suvey.module').then( m => m.KdpSuveyPageModule)
  },
  {
    path: 'begin',
    loadChildren: () => import('./begin/begin.module').then( m => m.BeginPageModule)
  },
  {
    path: 'begin/:id',
    loadChildren: () => import('./begin/begin.module').then( m => m.BeginPageModule)
  },
  {
    path: 'begin/:id/:completed',
    loadChildren: () => import('./begin/begin.module').then( m => m.BeginPageModule)
  },
  {
    path: 'tnc',
    loadChildren: () => import('./tnc/tnc.module').then( m => m.TncPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'how-to',
    loadChildren: () => import('./how-to/how-to.module').then( m => m.HowToPageModule)
  },  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
