import { Component, Input } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';
import { Gif } from 'src/interface/gifs.interface';

@Component({
  selector: 'sahred-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  constructor(private gifsService:GifsService) { }

  get tags():string[]{
    return this.gifsService.tagsHistory;
  }

  searchTag(tag:string):void{
    this.gifsService.searchTag(tag)
  }

}