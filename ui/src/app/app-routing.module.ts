import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { JobDetailsComponent } from './job-details/job-details.component'
import { SearchPageComponent } from './search-page/search-page.component'
import { RegistrationComponent } from './registration/registration.component'
import { LoginComponent } from './login/login.component'
import { SearchResumeComponent } from './search-resume/search-resume.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'search-resume', component: SearchResumeComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'job-details/:id', component: JobDetailsComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
