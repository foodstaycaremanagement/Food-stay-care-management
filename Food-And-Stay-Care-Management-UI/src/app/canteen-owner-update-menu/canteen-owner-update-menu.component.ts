import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CanteenMenu } from 'src/CanteenMenu';
import { CanteenService } from '../canteen.service';

@Component({
  selector: 'app-canteen-owner-update-menu',
  templateUrl: './canteen-owner-update-menu.component.html',
  styleUrls: ['./canteen-owner-update-menu.component.css']
})
export class CanteenOwnerUpdateMenuComponent implements OnInit {
  id: number;
  menu:CanteenMenu;
  
  constructor(private route: ActivatedRoute,
    private service:CanteenService,private router: Router) {
      
      this.menu = new CanteenMenu(0,"",0,"",0,"","");
      this.id=0;
    }
    
  ngOnInit() {

    this.menu = new CanteenMenu(0,"",0,"",0,"","");
    this.id = this.route.snapshot.params['id'];
    
    this.service.getMenuByid(this.id)
      .subscribe(data => {
        console.log(data)
        this.menu = data;
      }, error => console.log(error));

  
  }

  update() {
    this.service.updateMenu(this.menu)
      .subscribe(data => console.log(data), error => console.log(error));
    this.menu = new CanteenMenu();
    this.gotoList();
  }

  onSubmit() {
    this.update();    
  }

  gotoList() {
    this.router.navigate(['/canteenownermenu']);
  }

  
}

