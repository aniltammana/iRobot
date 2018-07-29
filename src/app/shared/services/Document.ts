export class Document{
    ID?:number;
    Name?:string;
    CustomerID?:string;
    Path?:string;    
    Type?:string;
}

export class Customer{
    ID:number;
    FirstName?:string;
    LastName?:string;
    Email?:string;
    Phone?:number;
    ApplicationType?:string;
    isApproved?:boolean;
    isPending?:boolean;
}