import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroName :string[] =['Spiderman','Batman','Superman','Hulk','Thor'];
  public Dhero?: string;
  removeLastHero():void{
   this.Dhero = this.heroName.pop();
  }


}
 