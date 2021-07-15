import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReveiwCardComponent } from './reveiw-card/reveiw-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MatTableDataSource } from '@angular/material/table';
import { MatTable } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    ReveiwCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
