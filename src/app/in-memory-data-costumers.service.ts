import { Injectable } from '@angular/core'; 
import { InMemoryDbService } from 'angular2-in-memory-web-api'; 
 
@Injectable() 
export class InMemoryDataCostumersService implements InMemoryDbService { 
 
  createDb() { 
     
    let costumers = [ 
      {id: 11, firstname: "Xavier", lastname: "Blakesley", address: "8634 New Saddle Street Hicksville, NY 11801", dnl: "1123123"}, 
      {id: 12, firstname: "Suzana", lastname: "Hogan", address: "571 Lantern St. Delray Beach, FL 33445", dnl: "2123123"}, 
      {id: 13, firstname: "Hilda", lastname: "Silva", address: "7116 Vernon St. Suite 8 Woonsocket, RI 02895", dnl: "3123123"}, 
      {id: 14, firstname: "Eleanore", lastname: "Schnur", address: "7520 Fordham Ave. State College, PA 16801", dnl: "4123123"}, 
      {id: 15, firstname: "Ferapont", lastname: "Merle", address: "8787 Peninsula St.Zeeland, MI 49464", dnl: "5123123"}, 
      {id: 16, firstname: "Sushila", lastname: "Patrick", address: "4 Lincoln Ave. De Pere, WI 54115", dnl: "6123123"} 
    ] 
 
    return {costumers}; 
  } 
 
} 