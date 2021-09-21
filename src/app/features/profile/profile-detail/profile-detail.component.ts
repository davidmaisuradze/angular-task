import { Component, Input } from '@angular/core';
import { UserProfile } from '@interfaces';

@Component({
    selector: 'app-profile-detail',
    styleUrls: ['./profile-detail.component.less'],
    templateUrl: './profile-detail.component.html'
})
export class ProfileDetailComponent {

    @Input() user: UserProfile;

    public goBack () {

        this.user.displayed = false;

    }

}
