import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import { keys } from '../../environments/local';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  constructor(private client: HttpClient) { }

  authenticate(code: string): Observable<Object> {
    const { ID, SECRET } = keys
    const parameters = new HttpParams({
      fromObject: { 
        client_id: ID.toString(), 
        client_secret: SECRET.toString(), 
        code: code.toString() 
      }
    })

    if (environment.production) {
      return this.client.get('https://git-list.herokuapp.com/proxy?code=' + code)      
    }

    return this.client.post('/proxy/access_token', parameters)
  }

  setSession(token: string, type: string) {
    sessionStorage.setItem('token', token)
    sessionStorage.setItem('type', type)
  }

  endSession() {
    sessionStorage.clear()
  }

  isAuthenticated(): boolean {
    if(sessionStorage.getItem('token') && sessionStorage.getItem('token') !== 'undefined') return true

    return false
  }
}
