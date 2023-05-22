import { Component } from '@angular/core';


@Component({
    selector:'app-counter',
    template:`
    <h3>caunter{{counter}}</h3>

<button (click)="increaseBy(+1)">+1</button>
<button (click)="reset(10)">Reset</button>
<button (click)="increaseBy(-1)">-1</button>
    
    `
})
export class counterComponent {
    public title: string = 'hola mundo';
    public counter:number = 10;
   
    increaseBy(value:number):void{
     this.counter += value;
    }
    
    reset(value:number):void{
     
     this.counter = value;
    }
   }



