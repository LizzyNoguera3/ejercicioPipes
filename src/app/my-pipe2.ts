
import {Pipe, PipeTransform} from '@angular/core';
import { withModule } from '@angular/core/testing';

@Pipe({
    name: 'myPipe2'
})
export class myPipe2 implements PipeTransform {
     transform(value: string){
        let newString= " ";
        let up = true;
        for(let i = 0; i < value.length; i++) {
            if(value.charAt(i) ==" "){
                newString=newString+value.charAt(i);
            }else{
                if(up){
                    newString=newString+value.charAt(i).toUpperCase();  
                    up = false;
                }else{
                    newString=newString+value.charAt(i).toLowerCase(); 
                    up =true;
                }
            } 
        }
        return newString;    
     }

}