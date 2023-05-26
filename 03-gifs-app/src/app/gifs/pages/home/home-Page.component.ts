import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from 'src/interface/gifs.interface';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-Page.component.html',
})
export class HomePageComponent {

  constructor(private gifsService:GifsService){}

  get gifs():Gif[]{
    return this.gifsService.gifList;
  }

}
