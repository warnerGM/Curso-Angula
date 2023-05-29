import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit,OnDestroy{
  
  private debouncer:Subject<string>=new Subject<string>()
  private debouncerSuscription?:Subscription;

@Input()
public placeholder:string='';

@Output()
public onvalue = new EventEmitter<string>();

@Output()
public onDebounce = new EventEmitter<string>();

ngOnInit(): void {
  this.debouncerSuscription= this.debouncer
  .pipe(
    debounceTime(1000)
  )
  .subscribe(value =>{
   this.onDebounce.emit(value);
  })

}

ngOnDestroy(): void {
  this.debouncerSuscription?.unsubscribe();
}



emitValue(value:string):void{
  this.onvalue.emit(value);
}

onkeypres(searchterm:string){
  this.debouncer.next(searchterm)
}


}
