import { ChangeDetectionStrategy, Component } from '@angular/core';
import PublicLayoutHeaderComponent from './components/public-layout-header/public-layout-header.component';
import PublicLayoutMainContentComponent from './components/public-layout-main-content/public-layout-main-content.component';
import PublicLayoutMainFooterComponent from "./components/public-layout-main-footer/public-layout-main-footer.component";

@Component({
  selector: 'public-layout',
  imports: [PublicLayoutHeaderComponent, PublicLayoutMainContentComponent, PublicLayoutMainFooterComponent],
  templateUrl: './public-layout.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PublicLayoutComponent {}
