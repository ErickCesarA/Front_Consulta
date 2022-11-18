import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  creatPatient() {
    this.router.navigate(["cadastrar","paciente"]);
  }
  
  loginPatient() {
    this.router.navigate(["login","paciente"]);
  }

}
