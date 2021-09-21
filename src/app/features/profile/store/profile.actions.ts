import { createAction, props } from '@ngrx/store';
import { UserProfile } from '@interfaces';

const initProfile = createAction('[Profile] Init Profile');
export const profileActions = { initProfile };
export const LOAD_PROFILE_START = '[Profile] load profile';
export const LOAD_PROFILE_SUCCESS = '[profile page] load profile success';

export const loadProfile = createAction(LOAD_PROFILE_START);
export const loadProfileSuccess = createAction(
    LOAD_PROFILE_SUCCESS,
    props<{user: UserProfile}>()
);
