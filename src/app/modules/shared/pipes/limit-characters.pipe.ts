import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'limitCharacters',
  pure: false
})

export class LimitCharacters implements PipeTransform {
  transform(value: any, numberOfCharacters: number): any {
    if (value !== undefined && value !== null) {
      const trail = "...";
      return value.length > numberOfCharacters ? value.substring(0, numberOfCharacters) + trail : value;
    }
    return value;
  }
}
