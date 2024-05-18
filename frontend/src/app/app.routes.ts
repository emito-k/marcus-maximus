import { Routes } from '@angular/router';
import { AccountPageComponent } from './account-page/account-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ModulePageComponent } from './module-page/module-page.component';
import { ModuleSettingsPageComponent } from './module-settings-page/module-settings-page.component';
import { SchoolPageComponent } from './school-page/school-page.component';
import { SchoolSettingsPageComponent } from './school-settings-page/school-settings-page.component';
import { ViewSchoolPageComponent } from './view-school-page/view-school-page.component';
import { MyModulesPageComponent } from './my-modules-page/my-modules-page.component';
import { MySchoolsPageComponent } from './my-schools-page/my-schools-page.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'account', component: AccountPageComponent },
  { path: 'school/:school_id/m/:module_id', component: ModulePageComponent },
  { path: 'module-settings', component: ModuleSettingsPageComponent },
  { path: 'school/:school_id', component: SchoolPageComponent },
  { path: 'school/:school_id/settings', component: SchoolSettingsPageComponent },
  { path: 'view/:school_id', component: ViewSchoolPageComponent },
  { path: 'modules', component: MyModulesPageComponent },
  { path: 'schools', component: MySchoolsPageComponent }
];
