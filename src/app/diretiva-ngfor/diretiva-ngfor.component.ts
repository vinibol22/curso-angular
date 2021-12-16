import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.css']
})
export class DiretivaNgforComponent implements OnInit {

  cursos: string[] = ["Angular 2", "Java", "Phonegap"]; 
   sum(){
      return 1+8
    }
  constructor() { }

  ngOnInit() {
    for (let i=0; i<this.cursos.length; i++){
      let curso = this.cursos[i];
    }

    for (let o=0; o<this.cursos.length; o++){
      let curso = this.cursos[o];
    }
  }

}
