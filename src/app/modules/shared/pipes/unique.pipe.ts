import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'unique',
  pure: false
})

export class UniquePipe implements PipeTransform {
  transform(value: any, param: string): any {
    if (value !== undefined && value !== null) {
      return _.uniqBy(value, param);
    }
    return value;
  }
}
