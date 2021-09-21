import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProfileState } from '@interfaces';

@Injectable({ providedIn: 'root' })

export class ProfileService {

    constructor (private http: HttpClient) {

    }

    getProfile (): Observable<ProfileState[]> {

        return this.http
        .get<any>('https://randomuser.me/api/?inc=cell,location,dob,email,name,phone,picture')
        .pipe(map((data) => {

            const profileState: ProfileState[] = [];
            for (const key in data) {

                if (key === 'results') {

                    for (const profileKey in data[key]) {

                        const profile = data[key][profileKey];

                        profileState.push({ user: {
                            cellNumber: profile.cell,
                            city: profile.location.city,
                            dateOfBirth: profile.dob.date,
                            displayed: false,
                            email: profile.email,
                            firstName: profile.name.first,
                            lastName: profile.name.last,
                            phoneNumber: profile.phone,
                            picture: profile.picture.thumbnail,
                            state: profile.location.state
                        }});

                    }

                }

            }
            return profileState;

        }));

    }

}
