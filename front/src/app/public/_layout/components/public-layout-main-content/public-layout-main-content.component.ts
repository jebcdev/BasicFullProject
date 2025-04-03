import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'public-layout-main-content',
  imports: [RouterOutlet],
  templateUrl: './public-layout-main-content.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex-grow p-1 md:p-1 lg:p-1',
  },
})
export default class PublicLayoutMainContentComponent {}
