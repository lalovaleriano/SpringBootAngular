import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
//import swal from 'sweetalert2';
import Swal from 'sweetalert2';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  titulo:String ='ingrese';
  user : Usuario;
  constructor( private authService: AuthService, private router: Router) {
    this.user = new Usuario();
  }

  ngOnInit() {
  }

  login():void {
      console.log(this.user);
    if(this.user.username== null || this.user.password == null || this.user.username =="" || this.user.password==""){
      console.log(this.user);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! your pass or username is empty',
      })
    }
    this.authService.login(this.user).subscribe(response =>{
      console.log(response); // todo lo que estamos recibiendo(toke,refrshToken)
      this.router.navigate(['/clientes']); // cuando inicia sesion se redirige a esta ruta
      Swal.fire(
        'Good job!',
        `hola #{response.username}`,
        'success'
      )
        //-----
    });
  }


}
