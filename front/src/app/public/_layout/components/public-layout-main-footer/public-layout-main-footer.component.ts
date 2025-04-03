import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'public-layout-main-footer',
  imports: [],
  templateUrl: './public-layout-main-footer.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-gray-800 text-white p-1 text-center' },
})
export default class PublicLayoutMainFooterComponent {}
