import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from '../../services/user.service';

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

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.userService.getUsers().subscribe((users) => {
            this.users = users;
            this.loaded = true;
        });
    }

    onSubmit() {
        if (!this.form.valid) {
            console.log('Form is not valid');
        } else {
            let user = this.form.value;
            user.isActive = true;
            user.registered = new Date();
            user.hide = true;

            this.userService.addUser(user);

            this.form.reset();
        }
    }
}
