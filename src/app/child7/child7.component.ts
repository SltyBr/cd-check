import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { hightlight } from 'src/app/highlight';

@Component({
  selector: 'app-child7',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child7.component.html',
  styleUrls: ['./child7.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child7Component {
  private elementRef = inject(ElementRef);
  cdCheck() {
    hightlight(this.elementRef);
  }

  doSomething() {
    console.log('hello from', this)
  }
}
