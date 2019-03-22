import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LSWRCComponent } from './algorithm/lswrc/lswrc.component';
import { CwmwComponent } from './algorithm/cwmw/cwmw.component';
import { DetailComponent } from './Rxjs/detail/detail.component';
import { BSTComponent } from './algorithm/bst/bst.component';

const routes: Routes = [
  {path: '', component: LSWRCComponent},
  {path: 'cwmw', component: CwmwComponent},
  {path: 'rxjs', component: DetailComponent},
  {path: 'bst', component: BSTComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
