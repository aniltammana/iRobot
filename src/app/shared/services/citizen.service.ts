import { Injectable } from '@angular/core';
import { Customer, Document } from './Document';


@Injectable({
  providedIn: 'root'
})
export class CitizenService {
  public documents:Document[];
  public customers:Customer[];

  constructor() { 
     this.documents = [
       { CustomerID:'CB10001', ID: 1001,Name:'Driving License',Path:''},
       { CustomerID:'CB10002',ID: 1002,Name:'Rental Agreement',Path:''}
     ];
     this.customers = [
       {FirstName:'SAMPLE',LastName:'JENNIS',Email:'larry.page@gmail.com',isPending:true,ApplicationType:"Online/Mobile Banking",Phone:7772221111,ID:1001},
       {FirstName:'CONNOR',LastName:'SAMPLE',Email:'brain.lara@gmail.com',isPending:true,ApplicationType:"Credit Card",Phone:7772221111,ID:1002},
       {FirstName:'DOCUMENT',LastName:'SAMPLE',Email:'sachin.tendulkar@gmail.com',isApproved:true,ApplicationType:"Checking Accounts",Phone:7772221111,ID:1003},
       {FirstName:'WILLIAM',LastName:'SMITH',Email:'william.smith@gmail.com',isApproved:true,ApplicationType:"Credit Card",Phone:7772221111,ID:1004},
       {FirstName:'STEPHEN',LastName:'HOKINS',Email:'stephen.hokins@gmail.com',isPending:true,ApplicationType:"Credit Card",Phone:7772221111,ID:1005}
     ];
  }

}
