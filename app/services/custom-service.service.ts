import { Injectable } from '@angular/core';

@Injectable()
export class CustomServiceService 
{
  serviceFirstValue = "Global variable!";
  serviceSecondValue = "Global variable!";

  constructor() 
  { 

  }

  nowFromService()
  {
    let date = new Date();

    return date;
  }
}
