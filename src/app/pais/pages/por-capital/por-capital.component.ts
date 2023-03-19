import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  termino: string = ''
  countries: Country[] = []
  hayError: boolean = false

  buscar(termino: string)
  {
    this.hayError = false

    this.paisService.buscarCapital(termino).subscribe(response => {
      this.countries = response
    }, error => {
      console.log(error)
      this.hayError = true
    })

  }

  sugerencias(termino: string)
  {
    console.log(termino)
  }

  constructor(private paisService: PaisService){}

}
