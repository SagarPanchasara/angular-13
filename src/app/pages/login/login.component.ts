import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/api/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  from: string | undefined;

  myForm = this.fb.group({
    username: ['eve.holt@reqres.in', Validators.required],
    password: [null, Validators.required],
  });

  constructor(private fb: FormBuilder,
    private notificationService: NotificationService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.activatedRoute.queryParams.subscribe((query: any) => {
      this.from = query.from;
    });
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      return;
    }
    const formData = this.myForm.value;
    this.authService.login(formData).subscribe(data => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        if (this.from) {
          this.router.navigateByUrl(this.from);
        } else {
          this.router.navigate(['']);
        }
      } else {
        this.notificationService.error('Invalid credentials');
      }
    });
  }
}
