import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileListComponent } from './profiles/profile-list/profile-list.component';
import { ProfileListItemComponent } from './profiles/profile-list-item/profile-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileListComponent,
    ProfileListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
