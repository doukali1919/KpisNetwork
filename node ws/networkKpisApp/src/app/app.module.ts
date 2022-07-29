import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SitesListComponent } from './components/sites-list/sites-list.component';
import { FindSiteComponent } from './components/find-site/find-site.component';
import { HttpClientModule } from '@angular/common/http';
import { List2gComponent } from './components/list2g/list2g.component';
import { List3gComponent } from './components/list3g/list3g.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    SitesListComponent,
    FindSiteComponent,
    List2gComponent,
    List3gComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { }

