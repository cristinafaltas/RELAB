import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core'; //importa questa libreria
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Imposta qui le tue api key
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCY9RG12KShGwofm4KoTusa5jbnOUywT20'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
