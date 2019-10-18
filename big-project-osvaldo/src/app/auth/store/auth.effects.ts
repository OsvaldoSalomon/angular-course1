import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthResponseData } from '../auth.service';
import { HttpClient } from '@angular/common/http';

import * as AuthActions from './auth.actions';
import {of} from 'rxjs';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

export class AuthEffects {
  @Effect()
  authLogin = this.actions$.pipe(
    ofType(AuthActions.LOGIN_START),
    switchMap((authData: AuthActions.LoginStart) => {
      return this.http
        .post<AuthResponseData>(
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
            environment.firebaseAPIKey,
          {
            email: authData.payload.email,
            password: authData.payload.password,
            returnSecureToken: true
          }
        ).pipe(catchError(error => {
          // ...
          return of();
        }),
        map(resData => {
          // const expirationDate = new Date(new Date().getTime() + resData.expiresIn * 1000);
          // return of(new AuthActions.Login({}));
        }));
    })
  );

  constructor(private actions$: Actions,private http: HttpClient) {}
}
