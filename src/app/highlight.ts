import { ElementRef } from '@angular/core';

export function hightlight(el: ElementRef, className = 'checked') {
    const block = el.nativeElement.querySelector('.block');
    block.classList.add(className);
    setTimeout(() => {
        block.classList.remove(className);
    }, 500);
}