import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component implements OnInit {

  constructor() { }

  dataNascimento:Date = new Date(1972,1,1);

  ngOnInit(): void {
  }

}
