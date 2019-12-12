import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import Swal from 'sweetalert2';
import {ClienteService} from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private cliente:Cliente = new Cliente();
  private title:string='Crear Cliente';
  constructor(private clienteService :ClienteService,
    private router:Router,
    private activateRoute:ActivatedRoute) { }
    
    //este medoto especial sirve para inicializar los metodos justo al iniciar el componente
    ngOnInit() {
      this.cargarCliente()
    }

  cargarCliente():void{
    this.activateRoute.params.subscribe(params =>{
      let id = params['id']
      if(id){
        this.clienteService.getCliente(id).subscribe( (cliente) =>this.cliente=cliente )
      }
    })
  }
  // este metodo recibe el metodo de crear cliente se le pasa todo el cliente
  public create():void{
    this.clienteService.create(this.cliente).subscribe(
      response => this.router.navigate(['./clientes'])
      )
    if(this.cliente.nombre==null || this.cliente.apellido==null
       || this.cliente.nombre == "" || this.cliente.apellido==""){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! your pass or username is empty',
        })
    }else{
      Swal.fire(
        'Good job!',
        `hola ${this.cliente.nombre}`,
        'success'
      )
    console.log("clicked");
    console.log(this.cliente);
    }
  }


}
