import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})


export class BannerComponent implements OnInit {
  personas$:Observable<persona[]> = of([]);
  tito:persona|null = null;

  constructor(public personaService: PersonaService){

  }
  
  ngOnInit(): void{
    this.personas$ = this.personaService.getPersona() as Observable<persona[]>;
    this.personas$.subscribe(response => {
      this.tito = response[0];
    })    
  }
}