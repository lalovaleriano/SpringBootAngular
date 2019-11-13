import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent {
  habilitar:boolean=true;
  listaCurso:string []=['typeScript','js','java EE','c#','php'];

  constructor() { }
  setHabilitar():void{
    this.habilitar=(this.habilitar==true)?false:true;
  }



}
