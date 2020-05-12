import { Component } from '@angular/core';
import { tileLayer, latLng, circle, polygon, marker, icon, layerGroup, Map, control, Marker } from 'leaflet';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';
import { ClinicsService } from './services/clinics.service';
import Clinic from './models/clinic.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client';

  constructor(private clinicsService: ClinicsService){}

  allMarkers = layerGroup();
  harshMarkers = layerGroup();

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }), 
      this.allMarkers,
    ],
    zoom: 14,
    center: latLng(31.9222037, 34.866565)
  };

  layersControl = {
    baseLayers: {
      'כל המרפאות': this.allMarkers,
      'מחמירה':this.harshMarkers,
    }
  }

  onMapReady(map: Map){
    let clinics = this.clinicsService.getClinics();
    console.log(clinics);
    clinics.forEach(clinic => {
      this.createClinicMarker(clinic).addTo(this.allMarkers);
      if(clinic.ShelterPolicy == "מחמירה"){
        this.createClinicMarker(clinic).addTo(this.harshMarkers);
      }
    });
  }

  createClinicMarker(clinic: Clinic): Marker{
    return marker([clinic.Location.x, clinic.Location.y], {
      icon: icon({
          iconSize: [67, 76],
          shadowSize: [67, 76],
          iconAnchor: [33, 76],
          shadowAnchor: [15, 76],
          iconUrl: `assets/${clinic.HealthMedicalCenterName}-${clinic.ClinicStatus}.png`,
          shadowUrl: 'assets/marker-shadow.png',
          popupAnchor: [0, -40],
      })
    }).bindPopup(`
        <div class="header"> קופת חולים ${clinic.HealthMedicalCenterName} </div> 
        <div class="address">${clinic.CityName}, ${clinic.StreetName}</div>
        <br>
        <div class="policy"><b>מדיניות התגוננות:</b> ${clinic.ShelterPolicy}</div>
      `)
  }
}
