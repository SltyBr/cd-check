import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import { hightlight } from '../highlight';

@Component({
  selector: 'app-child3',
  standalone: true,
  imports: [],
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child3Component {
  private elementRef = inject(ElementRef);
  cdCheck() {
    hightlight(this.elementRef);
  }

  doSomething() {
    console.log('hello from', this)
  }
}
