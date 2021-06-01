import { Component, Input, OnInit } from '@angular/core'
import { JobsService } from '../jobs.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: [],
})
export class SearchPageComponent implements OnInit {
  public isRecent: boolean = true

  constructor(private jobsService: JobsService, private router: Router) {}

  ngOnInit(): void {
    this.jobsService.getRecentJobs()
  }

  setSearchValue(input: string): void {
    this.jobsService.saveSearchInput(input)
  }

  setCityValue(input: string): void {
    this.jobsService.setCityValue(input)
  }

  submitSearch() {
    this.isRecent = false
    this.jobsService.getAllJobs()
  }

  searchResume() {
    this.router.navigate(['/search-resume'], { skipLocationChange: true })
  }
}
