import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { IUser } from '@app/shared/models/IUser';
import { IRepo } from '@app/shared/models/IRepo';
import { AuthService } from '../../../../auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  user: {}
  repos: IRepo[] = new Array<IRepo>()

  constructor(private service: ListService, private authService: AuthService, private router: Router) { }

  ngOnInit() {

    this.service.getCurrentUser().subscribe(res => this.user = res)
    this.service.getRepoList().subscribe((repos: IRepo[]) => this.repos = repos)
  }

  endSession() {
    this.authService.endSession();
    this.router.navigate(['/'])
  }
}
