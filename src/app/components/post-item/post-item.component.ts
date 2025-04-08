import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-item',
  imports: [],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css'
})
export class PostItemComponent {
  @Input({ required: true }) title!: string
  @Input({ required: true }) userId!: number
}
