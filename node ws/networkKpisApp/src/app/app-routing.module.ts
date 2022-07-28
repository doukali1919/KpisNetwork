import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { List2gComponent } from './components/list2g/list2g.component';
import { SitesListComponent } from './components/sites-list/sites-list.component';
const routes: Routes = [
  {path:'dg',component:List2gComponent},
  {path:'',component:AppComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }