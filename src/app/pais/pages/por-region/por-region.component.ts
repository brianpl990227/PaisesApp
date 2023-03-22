import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  regiones: string[] = ['America', 'Europe', 'Africa', 'Asia']
  regionActiva: string = ''
  paises: Country[] = []


  seleccionarRegion(region: string)
  {

    if(region === this.regionActiva)
    {
      return;
    }

    this.regionActiva = region
    this.paisService.getPaisPorRegion(region).subscribe(paises => {
      this.paises = paises
    })
  }

  dameCss(region: string)
  {
    return region === this.regionActiva ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  constructor(private paisService: PaisService) {} 


}
