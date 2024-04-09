import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import { hightlight } from '../highlight';
import { Child7Component } from 'src/app/child7/child7.component';
import { Child8Component } from 'src/app/child8/child8.component';

@Component({
  selector: 'app-child6',
  standalone: true,
  imports: [Child7Component, Child8Component],
  templateUrl: './child6.component.html',
  styleUrls: ['./child6.component.scss'],
  host: {
    class: 'host'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child6Component {
  private elementRef = inject(ElementRef);
  cdCheck() {
    hightlight(this.elementRef);
  }

  doSomething() {
    console.log('hello from', this)
  }
}
