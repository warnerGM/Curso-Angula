import {NgModule} from '@angular/core';
import { counterComponent } from './components/counter/counter.compoinent';

@NgModule({
declarations:[
    counterComponent
],
exports:[
    counterComponent
]
})
export class CounterModule{}