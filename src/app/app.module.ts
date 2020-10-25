import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

// Components
import { HeaderComponent } from './components/header/header.component';
import { RCreativeHomeComponent } from './views/r-creative-home/r-creative-home.component';

// Library
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SliderComponent } from './components/slider/slider.component';
import { RCreativeThreeComponent } from './views/r-creative-three/r-creative-three.component';
import { RCreativeThreeSecondComponent } from './views/r-creative-three-second/r-creative-three-second.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    RCreativeHomeComponent,
    RCreativeThreeComponent,
    RCreativeThreeSecondComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
