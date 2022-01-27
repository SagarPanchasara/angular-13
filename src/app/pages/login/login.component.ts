import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  myForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
  });

  constructor(private fb: FormBuilder,
    private router: Router) { }

  onSubmit(): void {
    if (this.myForm.invalid) {
      return;
    }
    const formData = this.myForm.value;
    if ('root' === formData.username && 'root' === formData.password) {
      this.router.navigate(['']);
    } else {
      alert('Invalid credentials');
    }
  }
}
