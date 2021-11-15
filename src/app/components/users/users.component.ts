import { Component, OnInit } from '@angular/core';
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

    addUser(user: User) {
        this.users.push(user);
    }

    onSubmit(e) {
        e.preventDefault();
        this.user.isActive = true;
        this.user.registered = new Date();
        this.user.hide = true;
        this.users.unshift(this.user);

        this.user = {
            firstName: '',
            lastName: '',
            email: '',
        };
    }
}
