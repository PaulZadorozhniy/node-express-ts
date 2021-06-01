import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { JobListComponent } from './job-list/job-list.component'
import { SearchPageComponent } from './search-page/search-page.component'
import { RecentJobsComponent } from './recent-jobs/recent-jobs.component'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { JobDetailsComponent } from './job-details/job-details.component'
import { RegistrationComponent } from './registration/registration.component'
import { LoginComponent } from './login/login.component';
import { SearchResumeComponent } from './search-resume/search-resume.component';
import { ResumeDetailsComponent } from './resume-details/resume-details.component'

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    SearchPageComponent,
    RecentJobsComponent,
    JobDetailsComponent,
    RegistrationComponent,
    LoginComponent,
    SearchResumeComponent,
    ResumeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
