import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'shared-field-error-message',
  imports: [],
  templateUrl: './shared-field-error-message.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role:"alert",
    class:"alert alert-error mt-1 mb-1 p-1",
  },
})
export default class SharedFieldErrorMessageComponent {
  message = input.required<string>();
}
