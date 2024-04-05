import { Component } from '@angular/core';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  correio: any = {};

  constructor(private cepService: CepService) {}

  localizarCep(evento: any) {

    let codigoCep :string = evento.detail.value;

    this.cepService.localizarCep(codigoCep)
    .then(respose => {
      this.correio = respose;
      console.log(this.correio);
      
    })


  }


}