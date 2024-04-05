import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  localizarCep(codigoCep: string) {
    let url = 'https://viacep.com.br/ws/' + codigoCep + '/json/';

    var header: any = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    }
   
    return this.http.get(url, header).toPromise();
  }
  }

