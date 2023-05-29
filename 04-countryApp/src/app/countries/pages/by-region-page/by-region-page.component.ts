import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { countriesService } from '../../services/country.service';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  public countries: Country[]=[];
  public regions:Region[] = ['Africa','America','Asia','europe','ociania'];
  public isLoading:boolean = false;
  public selectedRegion?: Region;

  constructor(private countriesService:countriesService){}

  searchRegion(region:Region):void{
     
    this.selectedRegion=region;

    this.isLoading=true;
    this.countriesService.searchRegion(region).subscribe(  countries=>{
        this.countries=countries
        this.isLoading=false
    });
  }
}
