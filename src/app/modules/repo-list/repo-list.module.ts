import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { ListService } from './services/list.service';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { AuthGuard } from '@auth/auth.guard';
import { RepoItemComponent } from './components/list/repo/repo.component';

const routing: ModuleWithProviders = RouterModule.forChild(routes)

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    ListComponent,
    RepoItemComponent
  ],
  providers: [ListService, AuthGuard]
})
export class RepoListModule { }
