import { Component, OnInit } from '@angular/core'
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { UserService } from '../users.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  public loading = false
  public submitted = false

  constructor(
    private formBuilder: FormBuilder,
    public userService: UserService,
    private router: Router
  ) {}

  get f() {
    return this.loginForm.controls
  }

  ngOnInit(): void {}

  toRegister() {
    this.router.navigate(['/registration'], { skipLocationChange: true })
  }

  onSubmit() {
    this.submitted = true

    if (this.loginForm.invalid) {
      return
    }

    this.userService.login(this.loginForm!.value).subscribe(
      (data) => {
        console.log(data)
        this.router.navigate(['/search-resume'], { skipLocationChange: true })
      },
      (error) => {
        console.error(error)
        alert('Неправильний email або пароль')
      }
    )
  }
}
