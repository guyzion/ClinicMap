import { Injectable } from '@angular/core';
import Clinic from './models/clinic.model';
import data from '../assets/clinics.data.json'

@Injectable({
  providedIn: 'root'
})
export class ClinicsService {

  constructor() { }

  getClinics():Clinic[]{
    return data;
  }
}
