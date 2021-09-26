import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartsComponent } from './bar-charts/bar-charts/bar-charts.component';
import { PieChartsComponent } from './pie-charts/pie-charts/pie-charts.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartsComponent,
    PieChartsComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule, BrowserAnimationsModule, //##### Sehr wichtig ######
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
