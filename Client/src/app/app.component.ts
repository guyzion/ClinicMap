import { Component } from '@angular/core';
import { tileLayer, latLng, circle, polygon, marker, icon, layerGroup, Map, control } from 'leaflet';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';
import { ClinicsService } from './clinics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client';

  constructor(private clinicsService: ClinicsService){}

  overlayGroup = layerGroup();

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
      'כל המרפאות': this.overlayGroup,
    }
  }

  onMapReady(map: Map){
    let clinics = this.clinicsService.getClinics();
    console.log(clinics);
    clinics.forEach(clinic =>{
      marker([clinic.Location.x, clinic.Location.y], {
        icon: icon({
           iconSize: [50, 56],
           iconAnchor: [25, 56],
           iconUrl: 'assets/'+clinic.HealthMedicalCenterName+'-'+clinic.ClinicStatus+'.png',
           popupAnchor: [0, -40]
        })
      }).bindPopup(`<div style='font-size: 14px; text-align: center;'>
        <h1> קופת חולים ${clinic.HealthMedicalCenterName} </h1> ${clinic.CityName}, ${clinic.StreetName} <div>`)
        .addTo(this.overlayGroup);
    });
  }
}
