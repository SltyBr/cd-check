import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import { hightlight } from '../highlight';

@Component({
  selector: 'app-child6',
  standalone: true,
  imports: [],
  templateUrl: './child6.component.html',
  styleUrls: ['./child6.component.scss'],
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
