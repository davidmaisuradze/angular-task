import { Component, OnInit } from '@angular/core';
import {  getUserProfile } from '@store/selectors';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { loadProfile } from '@store/actions';
import { UserProfile } from '@interfaces';

@Component({
    selector: 'app-profile-list',
    styleUrls: ['./profile-list.component.less'],
    templateUrl: './profile-list.component.html'
})
export class ProfileListComponent implements OnInit {

    users: UserProfile [] = [];

    constructor (private store: Store<AppState>) {}

    ngOnInit () {

        for (let i = 0 ; i < 10; i++) {

            this.store.dispatch(loadProfile());

        }
        this.store.select(getUserProfile).subscribe((data) => {

            this.users.push(data);

        });

        this.users = this.users.filter( (element) => {

            return element !== undefined;

        });

    }

    toProfileDetail (user: any) {

        user.displayed = ! user.displayed;

    }

}
