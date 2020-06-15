import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MenuItemType, MenuSection, MenuService, getType, findById } from './../../service/menu.service';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.scss']
})
export class MenuFormComponent implements OnInit {
  readonly MenuItemType = MenuItemType;

  item: MenuSection;

  type: MenuItemType;

  form: FormGroup;

  get menuTypeName() {
    return this.type === MenuItemType.section ? 'раздел' : 'позицию';
  }

  get formTypeName() {
    return !this.item ? 'Добавить' : 'Редактировать';
  }

  constructor(private route: ActivatedRoute, private router: Router, private readonly menuService: MenuService, private fb: FormBuilder) {}

  async ngOnInit() {
    const params = this.route.snapshot.params;
    const items = await this.menuService.get();

    if (params?.id) {
      this.item = findById(items, +params?.id);
      this.type = getType(this.item);
    }

    if (params?.type) {
      this.type = params?.type;
    }

    if (this.type === MenuItemType.section) {
      this.form = this.fb.group({
        id: [],
        name: [, Validators.required],
        parent: [, Validators.required],
        color: []
      });
    } else {
      this.form = this.fb.group({
        id: [],
        name: [, Validators.required],
        sale: [, Validators.required]
      });
    }

    if (this.item) {
      this.form.patchValue(this.item);
    }

    console.log(this.item);
    console.log(this.form.value);
  }

  cancle() {
    this.form.reset();
    this.router.navigate(['/']);
  }
}
