import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
  public countHover:number = 0;
  public countClick:number = 0;
}
