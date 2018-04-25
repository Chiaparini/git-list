import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { AuthService } from '@auth/auth.service';

const routing: ModuleWithProviders = RouterModule.forChild(routes)

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [SignInComponent],
  providers: [AuthService]
})
export class LoginModule { }
