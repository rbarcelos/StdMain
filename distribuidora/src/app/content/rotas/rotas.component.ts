import { Component, OnInit, NgZone } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { MapService } from '../../shared/services/map.service';
import { TaskManagerService } from '../../shared/services/task-manager.service';
import { Rota } from '../../shared/models/rota';
import { Address } from '../../shared/models/address';
import { Entrega } from '../../shared/models/entrega';
import { Observable, Observer } from 'rxjs';
import { GoogleMapsAPIWrapper ,MapsAPILoader} from '@agm/core';

@Component({
  selector: 'rotas-cmp',
  templateUrl: './rotas.component.html',
  styleUrls: ['./rotas.component.css'],
    providers: [DataService, MapService, TaskManagerService]
})
export class RotasComponent implements OnInit {
    
    title: string = 'My first angular2-google-maps project';
    rota:Rota;

    constructor(private dataService: DataService, private mapService:MapService,private taskManager:TaskManagerService, private ngZone:NgZone, private loader: MapsAPILoader) { }

  ngOnInit() {
      this.loadMap().subscribe(this.loadRota.bind(this))
  }
    
  loadMap()
    {
        return Observable.fromPromise(this.loader.load());
    }
    
  loadRota()
    {    
//        this.dataService.getData().subscribe(
//            result => {
//                // needs to run inside zone to update the map                
//                    this.resolveEntrega(result.entregas[0]).subscribe(
//                    resolveResult =>
//                        {
//                             this.ngZone.run(() => {
//                                 result.entregas[0].endereco.lat = resolveResult.lat();
//                            result.entregas[0].endereco.long = resolveResult.lng();
//                            this.rota = result;
//                                   });                        
//                        },
//                    error => console.log(error),
//                    () =>   console.log('Endereco loaded: '+this.rota.entregas[0].endereco.lat)
//                        );
//            },
//            error => console.log(error),
//            () => console.log('Rota loaded!'));
        
                var r = new Rota();
                r.entregas = new Array<Entrega>();
              
                var entrega = new Entrega();
        entrega.endereco = new Address();
                entrega.endereco.description = "AV VISCONDE DE TAUNAY, PG, PONTA GROSSA - PARANA";
        r.entregas.push(entrega);
                // needs to run inside zone to update the map                
                    this.resolveEntrega(entrega).subscribe(
                    resolveResult =>
                        {
                             this.ngZone.run(() => {
                                 entrega.endereco.lat = resolveResult.lat();
                            entrega.endereco.long = resolveResult.lng();
                           this.rota = r;
                                   });                        
                        },
                    error => console.log(error),
                    () =>   console.log('Endereco loaded: '+this.rota.entregas[0].endereco.lat)
                        );
          
    }
    
    resolveEntrega(entrega:Entrega)
    {
        return this.mapService.resolveEntrega(entrega);
    }
    
//    resolveEndereco(ent:Address) {
//        return this.mapService.resolveAddress(endereco.description)
//            .subscribe(
//            result => {
//                    endereco.lat = result.lat();
//                    endereco.long = result.lng();
//            },
//            error => console.log(error),
//            () => console.log('Geocoding completed: '+endereco.description)
//        );
//    }
//    
//    resolve
    
    getMarkerIcon(idx:number)
    {
        return this.mapService.getMarkerIcon(idx);
    }
}


