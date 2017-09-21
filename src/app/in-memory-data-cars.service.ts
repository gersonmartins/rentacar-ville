import { Injectable } from '@angular/core'; 
import { InMemoryDbService } from 'angular2-in-memory-web-api'; 
 
@Injectable() 
export class InMemoryDataCarsService implements InMemoryDbService { 
 
  createDb() { 
 
    let cars = [ 
      {id: 11, brand: "Ford", model: "Focus", year : 2016, available: true }, 
      {id: 12, brand: "Mitsubishi", model: "Galant", year : 2017, available: false }, 
      {id: 13, brand: "Kia", model: "Rio", year : 2017, available: true }, 
      {id: 14, brand: "Toyota", model: "Corolla", year : 2015, available: true }, 
      {id: 15, brand: "Nissan", model: "Sentra", year : 2016, available: true }, 
      {id: 16, brand: "Hyundai", model: "Accent", year : 2017, available: true } 
    ] 
 
    return {cars}; 
  } 
} 