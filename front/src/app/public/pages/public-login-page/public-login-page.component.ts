import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'public-login-page',
  imports: [CommonModule,ReactiveFormsModule, RouterLink],
  templateUrl: './public-login-page.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host:{
    class:'max-w-sm mx-auto'
  }
})
export default class PublicLoginPageComponent {
onSubmit(){
  try {
    return;
  } catch (error) {
    console.error(error);
  }
}
}
