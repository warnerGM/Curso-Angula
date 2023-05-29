import { Component } from '@angular/core';
import { countriesService } from '../../services/country.service'
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {
public countries: Country[]=[];
public isLoading:boolean = false;

constructor(private countriesService:countriesService){}

searchByCountry(term:string):void{
  this.isLoading=true;
  this.countriesService.searchCountry(term).subscribe(countries =>{
    this.countries = countries
    this.isLoading= false
  });

};

}
