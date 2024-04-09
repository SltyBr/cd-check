import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { hightlight } from 'src/app/highlight';

@Component({
  selector: 'app-child8',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child8.component.html',
  styleUrls: ['./child8.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child8Component {
  private elementRef = inject(ElementRef);
  cdCheck() {
    hightlight(this.elementRef);
  }

  doSomething() {
    console.log('hello from', this)
  }
}
