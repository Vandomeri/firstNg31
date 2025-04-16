import { Component, Input } from '@angular/core';
import { AlerterDirective } from '../../directives/alerter.directive';

@Component({
  selector: 'app-post-item',
  imports: [AlerterDirective],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css'
})
export class PostItemComponent {
  @Input({ required: true }) title!: string
  @Input({ required: true }) userId!: number

}
