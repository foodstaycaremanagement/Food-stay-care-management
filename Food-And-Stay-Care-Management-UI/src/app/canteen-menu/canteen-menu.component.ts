import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CanteenService } from '../canteen.service';
import { CanteenMenu } from '../CanteenMenu';

@Component({
  selector: 'app-canteen-menu',
  templateUrl: './canteen-menu.component.html',
  styleUrls: ['./canteen-menu.component.css']
})
export class CanteenMenuComponent implements OnInit {

  menu :CanteenMenu[]=[];
  constructor(private service: CanteenService,private route:Router) { }

  ngOnInit(): void {
    this.getTodaysMenu() ;
  }

  getTodaysMenu() {
    this.service.getCanteenMenu().subscribe(
      data => this.menu = data,
      error => console.log("error " + this.menu)
    );
  }


}
