import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Job, JobDetails } from './interfaces'
import { config } from './config'

@Injectable({ providedIn: 'root' })
export class ResumeService {
  private baseUrl = config.baseUrl
  public input: string = ''
  public city: string = ''
  public resumes: Resume[] = []

  constructor(private http: HttpClient) {}

  saveSearchInput(input: string) {
    this.input = input
  }

  setCityValue(input: string) {
    this.city = input
  }

  getAllResumes() {
    const body: any = {
      ukrainian: true,
    }

    if (this.input) {
      body.keyWords = this.input
    }

    this.http
      .post<Resume[]>(`${this.baseUrl}/resume/search`, body)
      .subscribe((response) => {
        console.log(response)
        this.resumes = response
      })
  }

  getJobDetails(id: string) {
    const params = new HttpParams().set('ukrainian', true).set('id', id)

    return this.http.get<JobDetails>(`${this.baseUrl}/vacancy`, { params })
  }
}

export interface Resume {
  resumeId: number
  userId: number
  speciality: string
  fullName: string
  displayName: string
  salary: string
  age: string
  cityName: string
  photo: string
  updatedDate: string
  keywords: []
  url: string
  experience: Experience[]
}

export interface Experience {
  beginWork: string
  company: string
  datesDiff: string
  endDate: string
  finishWork: string | null
  position: string
  startDate: string
}

const search = {
  sort: 'Score',
  page: 0,
  ukrainian: true,
  cityId: 0,
  inside: true,
  moveability: true,
  educationId: 0,
  parentId: 0,
  rubricIds: [0],
  ageFrom: 0,
  ageTo: 0,
  salaryFrom: 0,
  salaryTo: 0,
  sex: 0,
  profLevelIds: [0],
  scheduleId: 0,
  languages: [{}],
  period: 0,
  branchId: 0,
  experienceId: 0,
  expSubRubricId: 0,
  expRubricId: 0,
  hasPhoto: true,
  cvLanguage: 0,
  keyWords: 'string',
  isSynonym: true,
  searchType: 'string',
  lastSort: 'string',
}
