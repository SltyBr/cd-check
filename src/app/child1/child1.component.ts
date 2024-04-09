import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import { Child3Component } from '../child3/child3.component';
import { Child4Component } from '../child4/child4.component';
import { hightlight } from '../highlight';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [Child3Component, Child4Component],
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss'],
})
export class Child1Component {
  private elementRef = inject(ElementRef);
  cdCheck() {
    hightlight(this.elementRef);
  }

  doSomething() {
    console.log('hello from', this)
  }
}
