import { Component, Input } from '@angular/core';
import { Gif } from 'src/interface/gifs.interface';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
})
export class CardlistComponent {
@Input()
public gifs:Gif[]=[];
}
