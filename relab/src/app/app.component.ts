import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  center : any;
  
  position : any;
  positionCasa : any
  label :string;
  labelCasa : string;
  circleOptions: { fillColor: string; };
  rOption: { fillColor: string; };
  circleOptionsCasa: { fillColor: string; };
  markerOptions: google.maps.MarkerOptions;
  position2: { lat: number; lng: number; };
  position3: { lat: number; lng: number; };
  position4: { lat: number; lng: number; };
  markerOptions2: { icon: google.maps.Icon; };
  markerOptions3: { icon: google.maps.Icon; };
  markerOptions4: { icon: google.maps.Icon; };
  vertices: google.maps.LatLngLiteral[];
  rettangolo: { lat: any; lng: any; }[];

  cambiacoloreBlu()
  {
    this.circleOptions = {fillColor : 'blue'},
    this.circleOptionsCasa = {fillColor : 'blue'}
  }
 
  cambiacoloreVerde()
  {
    this.circleOptions = {fillColor : 'green'},
    this.circleOptionsCasa = {fillColor : 'green'}
  }
 
  cambiacoloreMarrone()
  {
    this.circleOptions = {fillColor : 'brown'},
    this.circleOptionsCasa = {fillColor : 'brown'}
  }

  cambiacoloreBluR()
  {
    this.rOption = {fillColor : 'blue'}
  }
 
  cambiacoloreVerdeR()
  {
    this.rOption = {fillColor : 'green'}
  }
 
  cambiacoloreMarroneR()
  {
    this.rOption = {fillColor : 'brown'}
  }

  constructor()
  {
    this.center={lat: 45.506738, lng: 9.190766};
    this.position = this.center;
    this.position2 = {lat: 45.506750, lng: 9.190777};
    this.position3 = {lat: 45.506755, lng: 9.190788};
    this.position4 = {lat: 45.506765, lng: 9.190799};
    this.label = "Scuola";
 
    this.positionCasa={lat: 45.5048142, lng: 9.180008};
    
    this.labelCasa = "Casa Mia";

    this.circleOptions = {fillColor : 'red'}
    this.circleOptionsCasa = {fillColor : 'purple'}
    this.rOption = {fillColor : 'black'}

    let iconData : google.maps.Icon = {
      url:'./assets/img/cat_acrobat.ico',
      scaledSize : new google.maps.Size(60,60)
    }

    let iconData2 : google.maps.Icon = {
      url:'./assets/img/giraffa.png',
      scaledSize : new google.maps.Size(60,60)
    }

    let iconData3 : google.maps.Icon = {
      url:'./assets/img/cricetino.png',
      scaledSize : new google.maps.Size(60,60)
    }
    
    let iconData4 : google.maps.Icon = {
      url:'./assets/img/leone.png',
      scaledSize : new google.maps.Size(60,60)
    }

    this.markerOptions = {icon:iconData}

    this.markerOptions2 = {icon:iconData2}

    this.markerOptions3 = {icon:iconData3}

    this.markerOptions4 = {icon:iconData4}

    this.vertices = [
      {  lat: this.center.lat + 0.001, lng: this.center.lng - 0.002},
      {  lat: this.center.lat, lng: this.center.lng },
      {  lat: this.center.lat - 0.001, lng: this.center.lng - 0.002}
    ];
    this.rettangolo = [
      {  lat: this.center.lat + 0.001, lng: this.center.lng + 0.001},
      {  lat: this.center.lat + 0.001, lng: this.center.lng + 0.002},
      {  lat: this.center.lat - 0.001, lng: this.center.lng + 0.002},
      {  lat: this.center.lat - 0.001, lng: this.center.lng + 0.001}
    ];
  }
 
}

