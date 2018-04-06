import { Device } from './../../models/device';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  _user: any;

  constructor(public api: Api) { }

  /**
   * Register Token in Database for sending notifications
   * @param registerToken - store object with deviceId, registerToken and topic
   */
  public registerToken(registerTokenObj: Device):Observable<any>{
    return this.api.post("savedevicetoken", registerTokenObj).share();
  }
  /**
   * Send Notifications from the Database list
   * list out registration tokens and topics
   */
  public sendNotifications():Observable<any>{
    return this.api.get("push", {}).map((result: any) => result.json());
  }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(loginData: any) {
    let seq = this.api.post('login', { user : loginData }).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signup(accountInfo: any) {
    let seq = this.api.post('signup', accountInfo).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this._user = resp.user;
  }
}
