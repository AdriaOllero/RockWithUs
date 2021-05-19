import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BandDetailComponent } from './components/band-detail/band-detail.component';
import { BandListComponent } from './components/band-list/band-list.component';
import { HomeComponent } from './components/home/home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgpImagePickerModule } from 'ngp-image-picker';

@NgModule({
  declarations: [
    AppComponent,
    BandListComponent,
    HomeComponent,
    BandDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NgpImagePickerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
