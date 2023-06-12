import { Injectable } from '@angular/core';
import { Region, SmallCountry, Country } from '../interfaces/country.interface';
import { Observable, combineLatest, map, of, } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseUrl:string='https://restcountries.com/v3.1';

  private _regions: Region[]=[Region.Africa, Region.Americas,Region.Asia,Region.Europe,Region.Oceanian];

  constructor(
    private http:HttpClient
  ) { }

  get regions(): Region[]{
    return [...this._regions];
  }

  getCountriesByRegion(region:Region):Observable<SmallCountry[]>{

    if(!region) return of([]);

    const url: string = `${this.baseUrl}/region/${region}?field=cca3,name,borders`

    
    return this.http.get<Country[]>(url)
    .pipe(
      map(countries => countries.map(country =>({
        name: country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? []
      }))),
   
    )
  }

  getCountryByAlphacode(alphaCode: string):Observable<SmallCountry>{


    const url = `${this.baseUrl}/alpha/${ alphaCode }?fields=cca3,name,borders`;
    return this.http.get<Country>(url)
    .pipe(
      map(country => ({
        name: country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? []
      }))
    )
  }

  getCountryBordersByCodes(borders:string[]){
    if (!borders || borders.length === 0) return of([]) ; 

    const countriesRequest: Observable<SmallCountry>[] = [];
      borders.forEach(code =>{
        const request = this.getCountryByAlphacode(code)
        countriesRequest.push(request)
      });

      return combineLatest(countriesRequest);
    
  }


}
