
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'myPipe'
})
export class myPipe implements PipeTransform {
     transform(value: number){
         return value*value;
     }

}