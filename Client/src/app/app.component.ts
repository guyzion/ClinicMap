import { Component } from '@angular/core';
import { tileLayer, latLng, circle, polygon, marker, icon, layerGroup, Map } from 'leaflet';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client';

  overlayGroup = layerGroup();

  allOverlays = [
    marker([32, 35], {
      icon: icon({
         iconSize: [50, 56],
         iconAnchor: [25, 56],
         iconUrl: 'assets/leumit-open.png',
      })
    }),
    marker([32, 34.8], {
      icon: icon({
         iconSize: [50, 56],
         iconAnchor: [25, 56],
         iconUrl: 'assets/klalit-closed.png',
      })
    }),
    marker([31.8, 35], {
      icon: icon({
         iconSize: [ 50, 56 ],
         iconAnchor: [25, 56],
         iconUrl: 'assets/meuhedet-open.png',
      })
    }),
  ]
  
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }), 
      this.overlayGroup,
    ],
    zoom: 10,
    center: latLng(31.9692438, 34.8382341)
  };

  layersControl = {
    overlays: {
      'Clinics': this.overlayGroup,
    }
  }

  onMapReady(map: Map){
    this.allOverlays.forEach(overlay => {
      overlay.bindPopup("<b>קופת חולים כללית</b><br>פתוחים");
      overlay.addTo(this.overlayGroup)
    });
  }
}
