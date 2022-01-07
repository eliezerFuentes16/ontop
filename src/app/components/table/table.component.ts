import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  usuarios=[
    {
      name:"Eliezer",
      type:"Traditional",
      startDate:"Mar, 24-2021",
      amount:"200",
      img:"1.jpg",
      status:"Active"
  
    },{
      name:"Ammi",
      type:"Traditional",
      startDate:"Jul, 12-2017",
      amount:"350",
      img:"2.jpg",
      status:"Inactive"
  
    },{
      name:"Rafael",
      type:"Traditional",
      startDate:"Mar, 13-2016",
      amount:"200",
      img:"3.jpg",
      status:"Active"
      
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
