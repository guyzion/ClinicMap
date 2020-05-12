import { Component } from '@angular/core';
import { tileLayer, latLng, circle, polygon, marker, icon, layerGroup, Map, control, Marker, LatLngExpression } from 'leaflet';
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

  constructor(private clinicsService: ClinicsService) { }

  allMarkers = layerGroup();
  harshMarkers = layerGroup();
  polygons = layerGroup();
  polygon1: LatLngExpression[] = [
    [31.941268964617837, 34.86186378803618],
    [31.936024685180893, 34.86340874042876],
    [31.933402433255097, 34.861520465282275],
    [31.930780106528918, 34.863752063182666],
    [31.927720630813475, 34.862550433543994],
    [31.923786869593837, 34.864267047313525],
    [31.91999864419399, 34.86066215839751],
    [31.917521643223846, 34.864782031444385],
    [31.919852940101052, 34.87319343891509],
    [31.92072716119654, 34.880746539501025],
    [31.923349774626445, 34.88383644428618],
    [31.927283554543642, 34.88057487812407],
    [31.933839480437303, 34.87559669819243],
    [31.93908388455046, 34.87061851826079]
  ];
  polygon2: LatLngExpression[] = [
    [31.941268964617837, 34.86186378803618],
    [31.936024685180893, 34.86340874042876],
    [31.933402433255097, 34.861520465282275],
    [31.930780106528918, 34.863752063182666],
    [31.927720630813475, 34.862550433543994],
    [31.923786869593837, 34.864267047313525],
    [31.91999864419399, 34.86066215839751],
    [31.917521643223846, 34.864782031444385],
    [31.91868729904827, 34.85808723774321],
    [31.919852940101052, 34.8519074281729],
    [31.92044488045275, 34.84785031575384],
    [31.921537648490922, 34.84673451680364],
    [31.92080913790808, 34.841756336872],
    [31.921610499231825, 34.84003972310247],
    [31.925398658240418, 34.84261464375677],
    [31.929769417041605, 34.84587620991888],
    [31.933338715941375, 34.850425236408135],
    [31.93508689341497, 34.843472950641534],
    [31.939675701104335, 34.84355878133001],
    [31.94062256941477, 34.84922360676946],
    [31.939675701104335, 34.85497426289739],
    [31.94135092301538, 34.857205860797784]
  ];

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
      this.allMarkers,
      polygon(this.polygon1,{color: 'green'}),
      polygon(this.polygon2,{color: 'red'})
    ],
    zoom: 14,
    center: latLng(31.9222037, 34.866565)
  };

  layersControl = {
    baseLayers: {
      'כל המרפאות': this.allMarkers,
      'מחמירה': this.harshMarkers,
      'מצב קרב': this.polygons
    }
  }

  onMapReady(map: Map) {
    let clinics = this.clinicsService.getClinics();
    console.log(clinics);
    clinics.forEach(clinic => {
      this.createClinicMarker(clinic).addTo(this.allMarkers);
      if (clinic.ShelterPolicy == "מחמירה") {
        this.createClinicMarker(clinic).addTo(this.harshMarkers);
      }
    });
  }

  createClinicMarker(clinic: Clinic): Marker {
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
