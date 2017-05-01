import { Injectable, NgZone, OnInit, ElementRef } from '@angular/core';
import { GoogleMapsAPIWrapper ,MapsAPILoader} from '@agm/core';
import { Observable, Observer } from 'rxjs';

import { Entrega } from '../../shared/models/entrega';

declare var google: any;

@Injectable()
export class MapService extends GoogleMapsAPIWrapper{ 
    
    input:any;
    
    constructor(private el: ElementRef, private loader: MapsAPILoader, private zone: NgZone) {
        super(loader, zone);    
       this.input = el.nativeElement;
    }
    
    resolveEntrega(entrega:Entrega)
    {
         return Observable.create(
            observer => 
            {
                this.resolveAddress(entrega.endereco.description).subscribe(
                        geocodeResult =>
                        {
                                    observer.next(geocodeResult);
                                    observer.complete();
                        });
         });
    }

    resolveAddress(address: string) {
        console.log('resolveAddress: Getting Address - ', address);
        return Observable.create(observer => 
        {
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode( 
                    { 'address': address}, 
                    function(results, status) 
                    {
                        if (status == google.maps.GeocoderStatus.OK) 
                        {
                             observer.next(results[0]);
                        } else {
                            console.log('resolveAddress: Error - ', results, ' & Status - ', status);
                            observer.next({});
                        }
                        observer.complete();
                    })
        });
    }
    
    resolvePlace(placeId:string)
    {
        return Observable.create(observer => 
        {
        var service = new google.maps.places.PlacesService(this.input);
        service.getDetails(
            {placeId: placeId}, 
            function(place, status) 
                {
                    if (status === google.maps.places.PlacesServiceStatus.OK) 
                    {
                        observer.next(place);
                    }
                    else
                    {
                        console.log('resolvePlace: Error - ', place, ' & Status - ', status);
                        observer.next({});
                    }
                }
            );
        });
    }
}