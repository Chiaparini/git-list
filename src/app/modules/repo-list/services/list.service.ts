import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators'; 

import { IUser } from "@app/shared/models/IUser";
import { IRepo } from "@app/shared/models/IRepo";

@Injectable()
export class ListService {

  API = 'https://api.github.com'

  constructor(private client: HttpClient) { }

  getRepoList(): Observable<IRepo[]> {
    return this.client.get<IRepo[]>(`${this.API}/user/repos`).pipe(
      map(repos => {
        if(repos instanceof Array) {
          return repos.map(rp => {
            const { name, html_url, forks_count, description, stargazers_count } = rp
            return { name, html_url, forks_count, description, stargazers_count }
          })
        } else {
          return [repos]
        }
      })
    )
  }

  getCurrentUser(): Observable<IUser> {
    return this.client.get<IUser>(`${this.API}/user`).pipe(
      map(user => { 
        let userObj: IUser = user
        userObj = user
        return userObj
      })
    )
  }
}
