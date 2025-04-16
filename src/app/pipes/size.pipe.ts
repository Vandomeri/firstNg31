import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'size'
})
export class SizePipe implements PipeTransform {

  transform(value: number, type?: string): string {
    if (type === 'MB')
      return (value / 1048576).toFixed(2).toString() + 'MB';
    else if (type === 'GB')
      return (value / (1048576 * 1024)).toFixed(2).toString() + 'GB';
    else if (type === 'KB')
      return (value / 1024).toFixed(2).toString() + 'KB';



    return (value / 1048576).toFixed(2).toString() + 'MB';

  }

}
