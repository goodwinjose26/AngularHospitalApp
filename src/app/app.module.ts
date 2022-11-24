import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PateintEntryComponent } from './pateint-entry/pateint-entry.component';
import { PateintSearchComponent } from './pateint-search/pateint-search.component';
import { PateintDeleteComponent } from './pateint-delete/pateint-delete.component';
import { RouterModule, Routes } from '@angular/router';
import { PateintViewComponent } from './pateint-view/pateint-view.component';

const myRoute:Routes=[
  {
    path:"",
    component:PateintEntryComponent
  },
  {
    path:"search",
    component:PateintSearchComponent
  },
  {
    path:"delete",
    component:PateintDeleteComponent
  },
  {
    path:"view",
    component:PateintViewComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PateintEntryComponent,
    PateintSearchComponent,
    PateintDeleteComponent,
    PateintViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
