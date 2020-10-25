import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RCreativeHomeComponent } from './views/r-creative-home/r-creative-home.component';
import { RCreativeThreeSecondComponent } from './views/r-creative-three-second/r-creative-three-second.component';
import { RCreativeThreeComponent } from './views/r-creative-three/r-creative-three.component';

export const routes: Routes = [
  {
    path: '',
    component: RCreativeHomeComponent,
  },
  {
    path: 'r-creative-three',
    component: RCreativeThreeComponent,
  },
  {
    path: 'r-creative-three-second',
    component: RCreativeThreeSecondComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
