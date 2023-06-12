import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MapsLayouComponent } from './layout/maps-layou/maps-layou.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

const routes: Routes = [
  {
    path:'',
    component: MapsLayouComponent,
    children:[
      {path:'fullscreen', component: FullScreenPageComponent},
      {path:'markes', component: MarkersPageComponent},
      {path:'properties',component:PropertiesPageComponent},
      {path:'zoom-range',component:ZoomRangePageComponent},
      {path:'**', redirectTo:'fullscreen'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
