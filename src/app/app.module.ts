import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { HerodetailComponent } from './herodetail/herodetail.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordComponent } from './password/password.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule, MatAutocompleteModule, MatIconModule, MatCardModule,MatFormFieldModule, MatMenuModule,
  MatSidenavModule,MatButtonModule, MatToolbarModule, MatListModule, MatSlideToggleModule, MatDialogModule ,MatProgressBarModule,} from '@angular/material';
import { MainComponent } from './main/main.component';
import { SearchPipe } from './search.pipe';



const appRoutes:Routes=[

  { path: 'Registration', component: FirstComponent },
  {path:'Login',component:SecondComponent},
  {path:'third',component:ThirdComponent},
  {path:'forget',component:PasswordComponent},
  {path:'main',component:MainComponent},
  { path: '**', component: PageNotFoundComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    HerodetailComponent,
    MessagesComponent,
    PasswordComponent,
    FooterComponent,
    PageNotFoundComponent,
    MainComponent,
    SearchPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule, MatButtonModule, MatSlideToggleModule, MatFormFieldModule, MatInputModule, MatIconModule,MatListModule,
   MatAutocompleteModule,MatProgressBarModule, MatMenuModule,FormsModule,MatSidenavModule,MatIconModule, MatCardModule,
   AppRoutingModule,
    [RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )]],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
