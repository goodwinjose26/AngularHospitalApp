import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PateintEntryComponent } from './pateint-entry/pateint-entry.component';
import { PateintSearchComponent } from './pateint-search/pateint-search.component';
import { PateintDeleteComponent } from './pateint-delete/pateint-delete.component';
import { RouterModule, Routes } from '@angular/router';
import { PateintViewComponent } from './pateint-view/pateint-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

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
    PateintViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
