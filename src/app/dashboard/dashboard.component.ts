import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.pug',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  showMyBuildings: boolean = false;
  showMenu: boolean = false;

  ngOnInit() {
    
  }

  pageUnscrollable(el) {
    // Make page unscrollable
    if(!el) {
      this.renderer.removeClass(document.body, 'unscrollable');
    } else { // Used conditions because renderer doesn't have toggleClass method
      this.renderer.addClass(document.body, 'unscrollable');
    }
  }

  toggleMyBuildings() {
    this.showMyBuildings = !this.showMyBuildings;
    this.showMenu = false;
    this.pageUnscrollable(this.showMyBuildings);
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.showMyBuildings = false;
    this.pageUnscrollable(this.showMenu);
  }

}
