import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import environment from '@env/environment';
import { iMenuItem } from '@public/interfaces';

@Component({
  selector: 'public-layout-header',
  imports: [RouterLink,RouterLinkActive], 
  templateUrl: './public-layout-header.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'navbar bg-base-100 shadow-sm shadow-md',
  },
})
export default class PublicLayoutHeaderComponent {
  title = computed<string>(() => environment.appTitle);

  menuItems = computed<iMenuItem[]>(() => [
    {label:'Home', path:'',}
  ]);
}
