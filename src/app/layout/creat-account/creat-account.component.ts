import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { PatientService } from 'src/app/service/patient.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-creat-account',
  templateUrl: './creat-account.component.html',
  styleUrls: ['./creat-account.component.scss']
})
export class CreatAccountComponent implements OnInit {
  
  patientForm: FormGroup;
  
  constructor
  (
    private fb: FormBuilder,
    private patientService: PatientService,
    private router: Router
  )
  {
    this.patientForm = this.fb.group
    (
      {
        id:['',[Validators.required]],
        name:[''],
        age:[''],
        sex:[''],
        pregnant:[false],
        comorbidity:[false],
        drugAllergy:[false],
      }
    )
  }
  ngOnInit(): void {
  }
  get id()
  {
    return this.patientForm.get('id')
  }
  savePatient()
  {
    if (this.patientForm.valid)
    {
      this.patientService.creatPatient(this.patientForm.value).subscribe
      (
        () => {this.router.navigate(["main"]);},
        error => {alert("Impossivel realizar cadastro");}
      );
    }
    else {alert("preencha todos os campos obrigatórios")}
  }
}
