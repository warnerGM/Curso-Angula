
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map, delay, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { Region } from '../interfaces/region.type';
import { CacheStore } from '../interfaces/cache-store.interface';


@Injectable({providedIn: 'root'})
export class countriesService {

    private apiUrl:string = 'https://restcountries.com/v3.1';

    public cacheStore: CacheStore={
        byCapital: {term:'',countries: []},
        byCountry: {term:'',countries: []},
        byRegion:  {region:'',countries:[]},
    }
   
    constructor(private http: HttpClient) { }

    private getcountriesresquest(url:string):Observable<Country[]>{
        return this.http.get<Country[]>(url)
        .pipe(
            catchError(() => of([])),
            delay( 1000 )
        );
    }

    searchCountryByAlphaCode(code: string):Observable<Country |null >{

        const url= `${this.apiUrl}/alpha/${code}`

        return this.http.get<Country[]>(url).pipe(
            map(countries => countries.length > 0 ? countries[0]: null),
           catchError(() => of(null)),
           
        );
    }

    searchCapital(term:string):Observable<Country[]>{

        const url= `${this.apiUrl}/capital/${term}`
        return this.getcountriesresquest(url)
    };

    searchCountry(term:string):Observable<Country[]>{
        const url = `${this.apiUrl}/name/${term}`
        return this.getcountriesresquest(url)
        .pipe(
            tap(countries => this.cacheStore.byCapital)
        )
    };


    
    searchRegion(term:string):Observable<Country[]>{
        const url = `${this.apiUrl}/region/${term}`
        return this.getcountriesresquest(url)
    };

    
}