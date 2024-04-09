import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import { Child5Component } from '../child5/child5.component';
import { Child6Component } from '../child6/child6.component';
import { hightlight } from '../highlight';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [Child5Component, Child6Component],
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],
})
export class Child2Component {
  private elementRef = inject(ElementRef);
  cdCheck() {
    hightlight(this.elementRef);
  }

  doSomething() {
    console.log('hello from', this)
  }
}
