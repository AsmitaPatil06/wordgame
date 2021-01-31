import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputCardComponent } from './input-card/input-card.component';
import { CardListComponent } from './card-list/card-list.component';


import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';



import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    InputCardComponent,
    CardListComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    MatCardModule,
   MatIconModule,
   MatInputModule,
   MatFormFieldModule,
   MatButtonModule,
   BrowserAnimationsModule,


   FormsModule,
   HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
