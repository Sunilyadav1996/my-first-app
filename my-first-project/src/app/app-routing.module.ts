import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { LoginComponent } from './login/login.component';
import { ProfilepageComponent } from './profilepage/profilepage.component'
import { SignupComponent } from './signup/signup.component';
import { StocklistComponent } from './stocklist/stocklist.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
 { path: 'first-component', component: FirstComponent },
 { path: 'profilepage', component: ProfilepageComponent },
 { path:'login-component', component:LoginComponent},
 { path:'userlist', component:UserlistComponent},
 { path:'signup-component', component:SignupComponent},
 { path:'uploadfile', component:UploadfileComponent},
 { path: 'stocklist', component:StocklistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
