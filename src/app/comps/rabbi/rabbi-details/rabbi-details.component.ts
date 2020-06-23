import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../counterService/my-service.service';

@Component({
  selector: 'app-rabbi-details',
  templateUrl: './rabbi-details.component.html',
  styleUrls: ['./rabbi-details.component.css']
})
export class RabbiDetailsComponent implements OnInit {

  constructor(public srv:MyServiceService) { }

  ngOnInit(): void {
  }

}
