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
public initialValue2: string='';

constructor(private countriesService:countriesService){}

ngOnInit(): void {
  this.countries = this.countriesService.cacheStore.byCountry.countries;

  this.initialValue2 = this.countriesService.cacheStore.byCountry.term;
}

searchByCountry(term:string):void{
  this.isLoading=true;
  this.countriesService.searchCountry(term).subscribe(countries =>{
    this.countries = countries
    this.isLoading= false
  });

};

}
