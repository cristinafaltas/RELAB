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
  circleOptionsCasa: { fillColor: string; };
  markerOptions: google.maps.MarkerOptions;
  position2: { lat: number; lng: number; };
  position3: { lat: number; lng: number; };
  position4: { lat: number; lng: number; };
  markerOptions2: { icon: google.maps.Icon; };
  markerOptions3: { icon: google.maps.Icon; };
  markerOptions4: { icon: google.maps.Icon; };

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

  constructor()
  {
    this.center={lat: 45.506738, lng: 9.190766};
    this.position = this.center;
    this.position2 = {lat: 45.506745, lng: 9.190770};
    this.position3 = {lat: 45.506755, lng: 9.190773};
    this.position4 = {lat: 45.506760, lng: 9.190776};
    this.label = "Scuola";
 
    this.positionCasa={lat: 45.5048142, lng: 9.180008};
    
    this.labelCasa = "Casa Mia";

    this.circleOptions = {fillColor : 'red'}
    this.circleOptionsCasa = {fillColor : 'purple'}

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
  }
 
}

