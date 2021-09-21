import { ProfileState } from '@interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { loadProfileSuccess, profileActions } from '@store/actions';
import { UserProfile } from '@interfaces';

const dummyProfile: UserProfile = {
    cellNumber: '888-888-8888',
    city: 'Los Angeles',
    dateOfBirth: 'Jan 1st, 1966',
    displayed: false,
    email: 'test@crexi.com',
    firstName: 'First Name',
    lastName: 'Last Name',
    phoneNumber: '999-999-9999',
    picture: '/content/img/default_user.png',
    state: 'CA'
};

const initialState: ProfileState = {};

const reducer = createReducer(
    initialState,
    on(profileActions.initProfile, (state) => {

        return { ...state, user: dummyProfile };

    }),
    on(loadProfileSuccess, (state, action) => {

        return { ...state, user: action.user };

    })
);

// tslint:disable only-arrow-functions
export function getProfileReducer (state: ProfileState | undefined, action: Action) {

    return reducer(state, action);

}
