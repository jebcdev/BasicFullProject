import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import environment from '@env/environment';
import { iLoginRequest, iLoginResponse, iUser } from '@public/interfaces';
import type { tAuthStatus } from '@public/types';
import { catchError, map, Observable, of, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //

  private http: HttpClient = inject(HttpClient);
  private readonly _authUrl: string = `${environment.backendUrl}/auth`;
  private readonly _tokenName: string = environment.tokenName;

  private _authStatus = signal<tAuthStatus>('checking');
  private _user = signal<iUser | null>(null);
  private _token = signal<string | null>(null);

  public authStatus = computed<tAuthStatus>(() => {
    if (this._authStatus() === 'checking') return 'checking';

    if (this._user()) return 'authenticated';

    return 'not-authenticated';
  });

  public user = computed<iUser | null>(() => this._user());
  public token = computed<string | null>(() => this._token());

  cleanAuthData():void{
    try {
      this._authStatus.set('not-authenticated');
      this._user.set(null);
      this._token.set(null);
      localStorage.removeItem(this._tokenName);
    } catch (error) {
      console.error(error);
    }
  }

  login(data: iLoginRequest): Observable<boolean> {
    //
    this.cleanAuthData();

    return this.http.post<iLoginResponse>(`${this._authUrl}/login`, data).pipe(
      tap((res: iLoginResponse) => {
        this._authStatus.set('authenticated');
        this._user.set({
          id: res.id,
          role_id: res.role.id,
          name: res.name,
          surname: res.surname,
          email: res.email,
          created_at: res.created_at,
          role: res.role,
        });
        this._token.set(res.token);

        localStorage.setItem(this._tokenName, res.token);
      }),
      map(() => true),
      catchError((err: any) => {
        this.cleanAuthData();
        return of(false);
      })
    );
  }

  // CheckAuthentication
  // Register
  // Logout
  
}
