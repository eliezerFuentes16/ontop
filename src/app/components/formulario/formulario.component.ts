import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  disableSelect = new FormControl(false);

  constructor() { }

  ngOnInit(): void {
  }

}
