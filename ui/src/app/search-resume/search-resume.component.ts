import { Component, OnInit } from '@angular/core'
import { ResumeService } from '../resume.service'

@Component({
  selector: 'app-search-resume',
  templateUrl: './search-resume.component.html',
  styleUrls: [],
})
export class SearchResumeComponent implements OnInit {
  constructor(public resumeService: ResumeService) {}

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
}
