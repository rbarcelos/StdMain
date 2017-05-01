import { Entrega } from '../../shared/models/entrega';
import { PontoMapa } from '../mapa/ponto-mapa';
import { PontoMapaContent } from '../mapa/ponto-mapa-content';

export class PontoMapaFactory {
    
    create(idx:number, entrega:Entrega, lat:number, long:number)
    {
        var ponto = new PontoMapa();
        ponto.lat = lat;
        ponto.long = long;
        ponto.iconUrl = this.getMarkerIcon(idx);
        ponto.content = this.createContent(entrega);
        return ponto;
    }
    
    private createContent(entrega:Entrega)
    {
        let content = new PontoMapaContent();
        content.name = entrega.destinatario;
        content.endereco = entrega.endereco.description;
      //  content.lastUpdated = entrega.data;
        content.contentStatus = entrega.estatus;
        content.statusBar = [];
        content.statusBar.push({iconName:"receipt",description:entrega.notas.length.toString()})
        return content;
    }
    
    private getMarkerIcon(id:number)
    {
        var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (id % 26));
        return "https://mt.google.com/vt/icon/text="+markerLetter+"&psize=16&font=fonts/arialuni_t.ttf&color=ff330000&name=icons/spotlight/spotlight-waypoint-b.png&ax=44&ay=48&scale=1"
    }
}
