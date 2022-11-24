import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PateintEntryComponent } from './pateint-entry/pateint-entry.component';
import { PateintSearchComponent } from './pateint-search/pateint-search.component';
import { PateintDeleteComponent } from './pateint-delete/pateint-delete.component';
import { RouterModule, Routes } from '@angular/router';

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
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PateintEntryComponent,
    PateintSearchComponent,
    PateintDeleteComponent
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
