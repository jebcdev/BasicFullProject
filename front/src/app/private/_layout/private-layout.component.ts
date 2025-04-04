import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'private-layout',
  imports: [RouterOutlet], 
  templateUrl: './private-layout.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PrivateLayoutComponent {
  

}
