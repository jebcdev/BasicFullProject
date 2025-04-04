import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import SharedFieldErrorMessageComponent from '@shared/components/shared-field-error-message/shared-field-error-message.component';
import { iLoginRequest } from '@public/interfaces';
import { AuthService } from '@public/services/auth.service';

@Component({
  selector: 'public-login-page',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    SharedFieldErrorMessageComponent,
  ],
  templateUrl: './public-login-page.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'max-w-sm mx-auto',
  },
})
export default class PublicLoginPageComponent {
  private formBuilder: FormBuilder = inject(FormBuilder);
  private authService:AuthService = inject(AuthService);
  private router: Router = inject(Router);

  hasError = signal<boolean>(false);
  isPosting = signal<boolean>(false);

  loginForm: FormGroup = this.formBuilder.group({
    email: ['admin@admin.com', [Validators.required, Validators.email]],
    password: ['12345678', [Validators.required, Validators.minLength(8)]],
    // email: ['', [Validators.required, Validators.email]],
    // password: ['', [Validators.required, Validators.minLength(8)]],
  });

  showError() {
    this.isPosting.set(false);
    this.hasError.set(true);
    setTimeout(() => {
      this.hasError.set(false);
    }, 2000);
  }

  onSubmit() {
    try {
      if (!this.loginForm.valid) {
        this.loginForm.markAllAsTouched();
        this.hasError.set(true)
        setTimeout(() => {
          this.hasError.set(false);
        }, 2000);
        return;
      }

      const data: iLoginRequest = {email: this.loginForm.value.email,password: this.loginForm.value.password,};

      
      this
      .authService
      .login(data)
      .subscribe({
        next: (isAuthenticated) => {
          
          if(isAuthenticated){
            this.isPosting.set(false);
            this.hasError.set(false);
            this.router.navigateByUrl('/');
            return;
          }

          this.showError();

        },
        error: (err) => {
          this.showError();
        },
      });
    } catch (error) {
      console.error(error);
    }
  }
}
