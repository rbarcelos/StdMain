import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'rotas-cmp',
  templateUrl: './rotas.component.html',
  styleUrls: ['./rotas.component.css'],
    providers:[DataService]
})
export class RotasComponent implements OnInit {
    
    title: string = 'My first angular2-google-maps project';
    lat: number = 51.678418;
    lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
