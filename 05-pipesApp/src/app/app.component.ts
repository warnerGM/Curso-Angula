import { Component, OnInit } from '@angular/core';
import { interval, tap } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  
  public nameLower:string='warner';

  public nameUpper:string='WARNER';
  public fullName:string='wArNeR gOMez';
   public customDate: Date= new Date();

   public totalSells: number= 2567789.5567;
   public percent: number = 0.4856;

   //i18n select
   public name:string='warner';
   public gender: 'male'|'famale'='male';

   public clients:string[]=['maria','fernando','alex','raimer','luis']
    public clientMap ={
      '=0':'no tenemos ningun cliente esperando.',
      '=1':' tenemos un cliente esperando.',
      '=2':' tenemos 2 persona esperando.',
      'other':' tenemos # clientes esperando'
    }

   deleteClient():void{
    this.clients.shift();
   }

   //keyValue pipe
   public person ={
    name:'Warner',
    age:45,
    address:'quebec, canada'
   }

  //  public myObsevableTimer = interval(2000).pipe(
  //   tap(value => console.log('tap:', value))
  //  )

  //  public  promiseValue:Promise<string> = new Promise((resolve, reject)=>{
  //   setTimeout( ()=>{
  //     resolve('tenemo data en la promesa')
  //     console.log('tenemo data en la promesa')
  //   },3500);
  //  })

}
