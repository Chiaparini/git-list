import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { AuthGuard } from '@auth/auth.guard';

export const routes: Routes = [
    { path: 'list', component: ListComponent, canActivate: [AuthGuard] }
]

