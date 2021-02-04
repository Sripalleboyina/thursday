export class Dashboard {​​​​​​​​
EMIcard_number:number;
EMIcard_expiry:Date;
customer_name:string;
EMIcardtype_name:string;
customer_id:number;
used_credit:number;
remaining_credit:number;
total_limit:number;
products:Product[];
}​​​​​​​​
 
export class Product{​​​​​​​​
Name:string;
Image:string;
OrderId:number;
Details:string;
Cost:number;
PaidAmount:number;
BalanceAmount:number;
PaymentStatus:boolean;
}​​​​​​​​

