import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = ''
  hayError: boolean = false
  countries: Country[] = []

  buscar(termino: string) {

    this.hayError = false
    this.termino = termino
    this.paisService.buscarPais(this.termino).subscribe(response => {
      this.countries = response
    }, error => {
      this.hayError = true
    })
  }

  sugerencias(termino: string)
  {
    this.hayError = false
    console.log(termino)
    
  }

  constructor(private paisService: PaisService) {
   
  }

}
