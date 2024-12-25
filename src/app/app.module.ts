import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import this

import { AppComponent } from './app.component';
import { ProductAddComponent } from './components/product-add/product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    // Other components
  ],
  imports: [
    BrowserModule,
    FormsModule, // Include this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
