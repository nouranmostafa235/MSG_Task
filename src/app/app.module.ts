import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListHomeComponent } from './user-list-home/user-list-home.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchIdPipe } from './search-id.pipe';
import { FormsModule } from '@angular/forms';
import { UserssecondpageComponent } from './userssecondpage/userssecondpage.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListHomeComponent,
    SearchIdPipe,
    UserssecondpageComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
