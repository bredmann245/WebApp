import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { CardsComponent } from './shared/cards/cards.component';
import { ConfigService } from './config/config.service';
import { SubnavComponent } from './shared/subnav/subnav/subnav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    CardsComponent,
    SubnavComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ConfigService],
  bootstrap: [AppComponent],
})
export class AppModule {}
