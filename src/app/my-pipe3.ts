
import {Pipe, PipeTransform} from '@angular/core';

const dateNow = new Date();
const hourNow = dateNow.getHours();
const monthNow = dateNow.getMonth();
const yearNow = dateNow.getFullYear();
const dayNow = dateNow.getDay();

@Pipe({
    name: 'myPipe3'
})

export class myPipe3 implements PipeTransform {
     transform(value: Date){
     }

}