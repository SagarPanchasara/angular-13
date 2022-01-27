import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  from: string | undefined;

  myForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
  });

  constructor(private fb: FormBuilder,
    private notificationService: NotificationService,
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
    if ('root' === formData.username && 'root' === formData.password) {
      localStorage.setItem('token', 'root:root');
      if (this.from) {
        this.router.navigateByUrl(this.from);
      } else {
        this.router.navigate(['']);
      }
    } else {
      this.notificationService.error('Invalid credentials');
    }
  }
}
