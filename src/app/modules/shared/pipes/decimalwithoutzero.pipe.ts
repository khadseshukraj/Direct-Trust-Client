import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
    name: 'decimalwithoutzeroPipe',
  pure: false
})

export class DecimalwithoutzeroPipe implements PipeTransform {
    transform(value: any, positions: number): any {
        //console.log('value :' + value + 'position :' + positions);
        if (value !== undefined && value !== null) {
            //var numbers = value.split('.');
            //var postDecimal = numbers[1];
            

            //if (parseFloat(postDecimal) == 0 || postDecimal == undefined) {
            //    return parseFloat(numbers[0]);
            //}
            //else {
            //    return parseFloat(value).toFixed(positions);
            //}
            var retval = Math.round(value * 100) / 100;
            var numbers = retval.toString().split('.');
            var preDecimal = Number(numbers[0]);
            var postDecimal = numbers[1]==undefined?'00':numbers[1].toString();
            if (postDecimal.toString().length < 2) {

                postDecimal = postDecimal.toString()+"0";
                //console.log(postDecimal);
                //console.log(parseFloat(preDecimal.toString() + "." + postDecimal.toString()).toFixed(2));
                return (preDecimal.toString() + "." + postDecimal.toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
            else {
                //console.log(Math.round((value * 100) / 100).toFixed(2));
                return (Math.round(value * 100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            }
            
           
        
        
    }
    return value;
  }
}
