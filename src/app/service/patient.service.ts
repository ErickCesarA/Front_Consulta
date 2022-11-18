import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
import {environment} from 'src/environments/environment';
import {Patient} from 'src/app/models/patient';
import {PatientDTO} from 'src/app/models/patienteDTO'


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  
  patient : Patient[] = []

  constructor(private http: HttpClient) { }

  getPatient(): Observable<PatientDTO>
  {
    return this.http.get<PatientDTO>(environment.apiUrl + "/patients");
  }
  creatPatient(patient:Patient)
  {
    return this.http.post(environment.apiUrl + "/patients", patient);
  }
  removePatient(id:number)
  {
    return this.http.delete(`${environment.apiUrl}/patients/${id}`);
  }
}
