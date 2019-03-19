import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LSWRCComponent } from './algorithm/lswrc/lswrc.component';

const routes: Routes = [
  { path: '', component: LSWRCComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
