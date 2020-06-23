import { Component,  } from '@angular/core';

@Component({
  selector: 'app-rabbi',
  templateUrl: './rabbi.component.html',
  styleUrls: ['./rabbi.component.css']
})
export class RabbiComponent {
  
  constructor(){ 
 
  }
  colorParmeter1 = 'orange'
  logsArr=[]
  
  rabbiArr:Rabbi[]=[
    {name:'Shoko',id:1,lastName:'lobo',isBig:true},
    {name:'Ahoko',id:2,lastName:'kbobo',isBig:true},
    {name:'Xhoko',id:3,lastName:'jobo',isBig:true},
    {name:'Zhoko',id:4,lastName:'bhobo',isBig:true},
    {name:'Qhoko',id:5,lastName:'gobo',isBig:true},
    {name:'Phoko',id:6,lastName:'fobo',isBig:true},
    {name:'Lhoko',id:7,lastName:'sobo',isBig:true},
    {name:'MhokP',id:8,lastName:'aobo',isBig:true},
    {name:'NhokU',id:9,lastName:'wobo',isBig:true},
    {name:'Yhoko',id:10,lastName:'jobo',isBig:true},
    {name:'Ehoko',id:11,lastName:'vobo',isBig:true},
    {name:'Choko',id:12,lastName:'tobo',isBig:true},
]

}
export class Rabbi{
  name:string;
  id:number;
  lastName:string;
  isBig:boolean;
}
