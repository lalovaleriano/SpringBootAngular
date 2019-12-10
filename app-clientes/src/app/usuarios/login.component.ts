import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  titulo:String ='ingrese';
  user : Usuario;
  constructor() {
    this.user = new Usuario();
  }
  login():void{
    console.log(this.user);
    if(this.user.username == null || this.user.password == null){
      Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Something went wrong!',
  footer: '<a href>Why do I have this issue?</a>'
})
    }
  }

  ngOnInit() {
  }

}
