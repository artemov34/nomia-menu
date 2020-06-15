import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MenuSection, MenuItemType } from '../../service/menu.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  readonly MenuItemType = MenuItemType;

  @Input() item: MenuSection;

  openDropdown = false;

  clickOutsideEnable = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  clickOutsideDropDown(e: Event) {
    if (this.openDropdown && this.clickOutsideEnable) {
      this.openDropdown = false;
      this.clickOutsideEnable = false;
    }

    if (this.openDropdown) {
      this.clickOutsideEnable = true;
    }

    console.log(this.openDropdown);
  }

  edit(id: number) {
    this.router.navigate(['edit', id]);
  }

  add(type: MenuItemType) {
    this.router.navigate(['add', type]);
  }

  remove(id: number) {}
}
