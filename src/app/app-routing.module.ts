import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComponentOneComponent} from './component-one/component-one.component';


const routes: Routes = [
  { path: 'component-one', component: ComponentOneComponent },
  { path: '', component: ComponentOneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
