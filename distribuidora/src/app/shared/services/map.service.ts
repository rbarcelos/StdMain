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
    
    getMarkerIcon(id:number)
    {
        var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (id % 26));
        return "https://mt.google.com/vt/icon/text="+markerLetter+"&psize=16&font=fonts/arialuni_t.ttf&color=ff330000&name=icons/spotlight/spotlight-waypoint-b.png&ax=44&ay=48&scale=1"
    }
}