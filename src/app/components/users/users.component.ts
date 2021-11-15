import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
    user: User = {
        firstName: '',
        lastName: '',
        email: '',
    };
    users: User[] = [];
    loaded: boolean = false;
    enableAdd = false;
    showUserForm: boolean = false;
    @ViewChild('userForm') form: any;

    constructor() {}

    ngOnInit(): void {
        this.users = [
            {
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@gmail.com',
                isActive: true,
                registered: new Date('01/02/2018 08:30:00'),
                hide: true,
            },
            {
                firstName: 'Kevin',
                lastName: 'Johnson',
                email: 'kevin@yahoo.com',
                isActive: false,
                registered: new Date('03/11/2017 06:20:00'),
                hide: true,
            },
            {
                firstName: 'Karen',
                lastName: 'Williams',
                email: 'karen@email.com',
                isActive: true,
                registered: new Date('11/02/2016 10:30:00'),
                hide: true,
            },
        ];

        this.loaded = true;
    }

    onSubmit() {
        if (!this.form.valid) {
            console.log('Form is not valid');
        } else {
            let user = this.form.value;
            user.isActive = true;
            user.registered = new Date();
            user.hide = true;

            this.users.unshift(user);

            this.form.reset();
        }
    }
}
