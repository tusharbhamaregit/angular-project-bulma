import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { TeamDetailsComponent } from './team-details/team-details.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    TeamComponent,
    TeamDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
