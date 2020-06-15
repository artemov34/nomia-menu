import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuFormComponent } from './menu/menu-form/menu-form.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    component: MenuComponent,
    path: ''
  },
  {
    component: MenuFormComponent,
    path: 'edit/:id'
  },
  {
    component: MenuFormComponent,
    path: 'add/:type'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
