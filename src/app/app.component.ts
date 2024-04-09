import { ApplicationRef, ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import { hightlight } from './highlight';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    'class': 'host'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'widget-test';
  appRef = inject(ApplicationRef);
  private elementRef = inject(ElementRef);
  cdCheck() {
    hightlight(this.elementRef);
  }

  doSomething() {
    console.log('hello from', this)
  }


  triggerCd() {
    this.appRef.tick();
  }
}
