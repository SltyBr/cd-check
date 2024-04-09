import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import { hightlight } from '../highlight';

@Component({
  selector: 'app-child4',
  standalone: true,
  imports: [],
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.scss'],
})
export class Child4Component {
  private elementRef = inject(ElementRef);
  cdCheck() {
    hightlight(this.elementRef);
  }

  doSomething() {
    console.log('hello from', this)
  }
}
