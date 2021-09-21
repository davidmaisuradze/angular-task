import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadProfile } from '@store/actions';
import { map, mergeMap } from 'rxjs/operators';
import { UserProfile } from '@interfaces';
import { loadProfileSuccess } from '@store/actions';
import { ProfileService } from '@core/services/profile.service';

@Injectable() export class ProfileEffects {

    loadProfile$ = createEffect(() => {

        return this.actions$.pipe(
                ofType(loadProfile),
                mergeMap((action) => {

                    return this.profileService.getProfile().pipe(
                        map(( data: any ) => {

                            for (const key in data) {

                                const profileState: UserProfile = data[key].user;

                                const profile = { user: profileState };
                                return loadProfileSuccess( profile );

                            }

                        })
                    );

                })
            );

    }
    );

    constructor (private actions$: Actions, private profileService: ProfileService) {

    }

}
