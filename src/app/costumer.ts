import { Car } from './Car' 

export class Costumer { 
   id : number; 
   firstname: string; 
   lastname: string 
   address: string; 
   dln: string; // driver license number 
   cars : Car[]; 
}