import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'public-register-page',
  imports: [],
  templateUrl: './public-register-page.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  
  host:{
    class:'max-w-sm mx-auto'
  }
})
export default class PublicRegisterPageComponent {

}
