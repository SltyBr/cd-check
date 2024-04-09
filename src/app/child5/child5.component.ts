import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import { hightlight } from '../highlight';

@Component({
  selector: 'app-child5',
  standalone: true,
  imports: [],
  templateUrl: './child5.component.html',
  styleUrls: ['./child5.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child5Component {
  private elementRef = inject(ElementRef);
  cdCheck() {
    hightlight(this.elementRef);
  }

  doSomething() {
    console.log('hello from', this)
  }
}
