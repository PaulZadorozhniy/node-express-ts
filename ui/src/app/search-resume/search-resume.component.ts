import { Component, OnInit } from '@angular/core'
import { ResumeService } from '../resume.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-search-resume',
  templateUrl: './search-resume.component.html',
  styleUrls: [],
})
export class SearchResumeComponent implements OnInit {
  constructor(public resumeService: ResumeService, private router: Router) {}

  ngOnInit(): void {
    this.resumeService.getAllResumes()
  }

  setSearchValue(input: string): void {
    this.resumeService.saveSearchInput(input)
  }

  setCityValue(input: string): void {
    this.resumeService.setCityValue(input)
  }

  submitSearch() {
    this.resumeService.getAllResumes()
  }

  toResumeDetails(id: number) {
    this.router.navigate([`/resume-details/${id}`], {
      skipLocationChange: true,
    })
  }

  searchVacancy() {
    this.router.navigate(['/search'], { skipLocationChange: true })
  }
}
