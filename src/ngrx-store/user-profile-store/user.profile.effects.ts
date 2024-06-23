import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { createEffect } from "@ngrx/effects";
import * as UserProfileActions from "./user.profile.actions";
import { catchError, forkJoin, map, mergeMap, of } from "rxjs";
import { UserProfile } from "../../app/models/userprofile";

@Injectable()
export class UserProfileEffects {

  constructor(private actions$: Actions, private http: HttpClient) {}

  loadUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserProfileActions.loadUserProfile),
      mergeMap(action => {
        const requests = action.parameters.map(pageNumber => 
          this.http.get<any>(`https://reqres.in/api/users?page=${pageNumber}`).pipe(
            map(response => response.data.map((userProfile: { id: any; email: any; first_name: any; last_name: any; avatar: any; }) => ({
              id: userProfile.id,
              email: userProfile.email,
              firstName: userProfile.first_name,
              lastName: userProfile.last_name,
              avatar: userProfile.avatar
            } as UserProfile)))
          )
        );
        return forkJoin(requests).pipe(
          map((responses: UserProfile[]) => {
            const userProfiles = responses.flat();
            return UserProfileActions.loadUserProfileSuccess({ userProfiles });
          }),
          catchError(error => of(UserProfileActions.loadUserProfileFailure({ error })))
        );
      })
    )
  );
}
