import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient) { }

  login(usuario:Usuario): Observable<any>{
    //apunta al endpoint de spñringsecurity
    const urlEndPoint = "http://localhost:8080/oauth/token";
    const credenciales = 'angularapp'+ ':'+ '12345';
    const httpHeaders = new HttpHeaders({'Content-Type': 'aplication/x-www-form-urlencoded',
                                         'Authorization': 'Basic ' + credenciales});
                                         console.log(httpHeaders);
    let params = new URLSearchParams();
    params.set('grant_type','password');
    params.set('username',usuario.username);
    params.set('grant_type',usuario.password);
    console.log(params.toString());
    return this.http.post(urlEndPoint, params.toString(), {headers: httpHeaders});


  }
}
