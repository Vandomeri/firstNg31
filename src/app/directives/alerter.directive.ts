import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlerter]'
})
export class AlerterDirective {

  @HostBinding('style.backgroundColor') bg = 'transparent'

  @HostListener('click', ['$event']) makeAlert(event: MouseEvent) {
    const target = event.target as HTMLElement
    alert('Текст кликнутого элемента: ' + target.textContent)
  }

  @HostListener('mouseover') onEnter() {
    this.bg = 'cyan'
  }
}
