import { Injectable, NgZone, OnInit } from '@angular/core';
import { GoogleMapsAPIWrapper ,MapsAPILoader} from '@agm/core';
import { Observable, Observer } from 'rxjs';

import { Entrega } from '../../shared/models/entrega';

declare var google: any;

@Injectable()
export class MapService extends GoogleMapsAPIWrapper{ 
    constructor(private loader: MapsAPILoader, private zone: NgZone) {
        super(loader, zone);    
        
    }
    
    resolveEntrega(entrega:Entrega)
    {
        return this.resolveAddress(entrega.endereco.description);
    }

    resolveAddress(address: string) {
        console.log('Getting Address - ', address);
        return Observable.create(observer => 
        {
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode( 
                    { 'address': address}, 
                    function(results, status) 
                    {
                        if (status == google.maps.GeocoderStatus.OK) {
                            observer.next(results[0].geometry.location);
                            observer.complete();
                        } else {
                            console.log('Error - ', results, ' & Status - ', status);
                            observer.next({});
                            observer.complete();
                        }
                    })
        });
    }
}