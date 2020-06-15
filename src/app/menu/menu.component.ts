import { Component, OnInit } from '@angular/core';

import { MenuService, MenuSection } from './../service/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: MenuSection[];

  constructor(private readonly menuService: MenuService) {}

  async ngOnInit() {
    this.items = await this.menuService.get();
  }
}
