import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/home/home-Page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardlistComponent } from './pages/cardlist/cardlist.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardlistComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class GifsModule { }
