import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {



  pais!: Country;


  constructor(private activatedRoute: ActivatedRoute,
    private paisService: PaisService) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.paisService.getPaisPorAlpha(id)),
      tap(console.log) // imprime en consola lo que retorna el Observable de arriba
    ) .subscribe(pais => {
      this.pais = pais
    })
  }

}
