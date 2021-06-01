import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ResumeService, ResumeDetails } from '../resume.service'

@Component({
  selector: 'app-resume-details',
  templateUrl: './resume-details.component.html',
  styleUrls: [],
})
export class ResumeDetailsComponent implements OnInit {
  public resume: ResumeDetails | undefined

  constructor(
    private route: ActivatedRoute,
    public resumeService: ResumeService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    const jobId: string = this.route.snapshot.paramMap.get('id')!

    this.getResumeDetails(jobId)
  }

  async getResumeDetails(jobId: string) {
    this.resumeService.getResumeDetails(jobId).subscribe((response: any) => {
      console.log(response)
      this.resume = response
    })
  }

  back() {
    this.router.navigate([`/search-resume`], {
      skipLocationChange: true,
    })
  }
}
