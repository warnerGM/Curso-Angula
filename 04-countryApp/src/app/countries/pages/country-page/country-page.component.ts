import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { countriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country?:Country;

  constructor(
    private activatedRoute:ActivatedRoute,
    private countriesService: countriesService,
    private router:Router
    ) {}
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=>this.countriesService.searchCountryByAlphaCode(id))
    ).subscribe(country =>{
      if(!country)return this.router.navigateByUrl('');
      return this.country=country;

    });
}

}
