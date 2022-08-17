import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import * as vkbeautify from 'vkbeautify';

@Pipe({
  name: 'xml',
  pure: false
})

export class XMLPipe implements PipeTransform {
    transform(value: string): string {
        return vkbeautify.xml(value);
    }
}
