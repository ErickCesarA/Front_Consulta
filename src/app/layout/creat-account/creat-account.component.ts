import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-creat-account',
  templateUrl: './creat-account.component.html',
  styleUrls: ['./creat-account.component.scss']
})
export class CreatAccountComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
