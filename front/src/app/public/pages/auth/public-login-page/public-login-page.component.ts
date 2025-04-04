import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import SharedFieldErrorMessageComponent from '@shared/components/shared-field-error-message/shared-field-error-message.component';
import { iLoginRequest } from '@public/interfaces';

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
  
  private router: Router = inject(Router);
  private formBuilder: FormBuilder = inject(FormBuilder);
  // protected readonly toastr =inject( toast);

  loginForm: FormGroup = this.formBuilder.group({
    email: ['admin@admin.com', [Validators.required, Validators.email]],
    password: ['12345678', [Validators.required, Validators.minLength(8)]],
    // email: ['', [Validators.required, Validators.email]],
    // password: ['', [Validators.required, Validators.minLength(8)]],
  });

  onSubmit() {
    try {
      if (!this.loginForm.valid) {
        this.loginForm.markAllAsTouched();
        return;
      }

      const data: iLoginRequest = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };

    } catch (error) {
      console.error(error);
    }
  }
}
