import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsService } from './cars.service';
import { CostumersService } from './costumers.service';
import { InMemoryDataCarsService } from './in-memory-data-cars.service';
import { InMemoryDataCostumersService } from './in-memory-data-costumers.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CarsService, CostumersService, InMemoryDataCarsService, InMemoryDataCostumersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
