import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  abierto=false;
  desplegarMenu(){
    let divBarra:any=document.querySelector(".div-responsive");
    if (this.abierto==false){
      divBarra.style.height="160px";
      this.abierto=true;
    }else{
      divBarra.style.height="0";
      this.abierto=false;
    }
    
  }

}
