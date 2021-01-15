import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CanteenMenu } from 'src/CanteenMenu';
import { CanteenService } from '../canteen.service';

@Component({
  selector: 'app-canteen-owner-home',
  templateUrl: './canteen-owner-home.component.html',
  styleUrls: ['./canteen-owner-home.component.css']
})
export class CanteenOwnerHomeComponent implements OnInit {

  days:String[]=[];
  mealTypes:String[]=[];
  menu:CanteenMenu[]=[];

  constructor(private service:CanteenService,private router: Router) { }

  ngOnInit(): void {
   
      this.service.getDays().subscribe(
        data => this.days = data,
        error => console.log("error " + error)
      );

      this.service.getMealTypes().subscribe(
        data => this.mealTypes = data,
        error => console.log("error " + error)
      );
  }


  getMenu(day:string,mealType:string)
  {
    
    this.service.getCanteenMenuForOwner(day,mealType).subscribe(
      data => this.menu = data,
      error => console.log("error " + this.menu)
    );
}

updateMenu(id: number){
  this.router.navigate(['updatemenu', id]);
}

deleteMenu(id: number){
  this.router.navigate(['deletemenu', id]);
}


}


