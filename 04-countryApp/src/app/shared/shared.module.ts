import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContacPageComponent } from './pages/contac-page/contac-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinerComponent } from './components/loading-spiner/loading-spiner.component';




@NgModule({
  declarations: [
    AboutPageComponent,
    ContacPageComponent,
    HomePageComponent,
    LoadingSpinerComponent,
    SearchBoxComponent,
    SidebarComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AboutPageComponent,
    ContacPageComponent,
    HomePageComponent,
    LoadingSpinerComponent,
    SearchBoxComponent,
    SidebarComponent,

  ]
})
export class SharedModule { }
