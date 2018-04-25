import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginModule } from '../modules/login/login.module';
import { RepoListModule } from '../modules/repo-list/repo-list.module';

import { TokenInterceptor } from '../auth/interceptor'


const routing: ModuleWithProviders = RouterModule.forRoot([{ path: '**', redirectTo: '', pathMatch: 'full' }])

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,

    // Application modules
    LoginModule,
    RepoListModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
