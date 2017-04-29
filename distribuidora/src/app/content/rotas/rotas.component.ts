import { Component, OnInit, NgZone } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { MapService } from '../../shared/services/map.service';
import { TaskManagerService } from '../../shared/services/task-manager.service';
import { Rota } from '../../shared/models/rota';
import { Address } from '../../shared/models/address';
import { Entrega } from '../../shared/models/entrega';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'rotas-cmp',
  templateUrl: './rotas.component.html',
  styleUrls: ['./rotas.component.css'],
    providers: [DataService, MapService, TaskManagerService]
})
export class RotasComponent implements OnInit {
    
    title: string = 'My first angular2-google-maps project';
    rota:Rota;

    constructor(private dataService: DataService, private mapService:MapService,private taskManager:TaskManagerService, private ngZone:NgZone) { }

  ngOnInit() {
      this.loadRota();
  }
    
  loadRota()
    {
        this.dataService.getData().subscribe(
            result => {
                // needs to run inside zone to update the map
                this.ngZone.run(() => {
                    
                    this.taskManager.waitAll(result.entregas,this.mapService.resolveEntrega).subscribe(
                        batchResult =>
                        {
                            for (let idx in batchResult) 
                            {
                                var res:any = batchResult[idx];
                                result.entregas[idx].endereco.lat = res.lat();
                                result.entregas[idx].endereco.long = res.lng();
                            }
                            
                            this.rota = result;
                        },
                        error => console.log(error),
                        () => console.log('All enderecos loaded!'));                 
                });
            },
            error => console.log(error),
            () => console.log('Rota loaded!'));
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


