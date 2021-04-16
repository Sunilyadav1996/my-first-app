import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { SignupComponent } from './signup/signup.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { UserlistComponent } from './userlist/userlist.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthinterceptorServiceProvider } from './auth/authinterceptor.service';
import { StocklistComponent } from './stocklist/stocklist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FirstComponent,
    SecondComponent,
    SignupComponent,
    ProfilepageComponent,
    UploadfileComponent,
    UserlistComponent,
    StocklistComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthinterceptorServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
