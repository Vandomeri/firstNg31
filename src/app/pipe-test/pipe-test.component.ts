import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SizePipe } from '../pipes/size.pipe';

@Component({
  selector: 'app-pipe-test',
  imports: [FormsModule, CurrencyPipe, DatePipe, SizePipe],
  templateUrl: './pipe-test.component.html',
  styleUrl: './pipe-test.component.css'
})
export class PipeTestComponent {

  rubles = signal<number>(0)

  dollars = computed(() => this.rubles() / 80)

  now = Date.now()


  fileSize = 4432835529

}
