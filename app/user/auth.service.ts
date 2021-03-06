import { Injectable } from '@angular/core';
import { IUser } from "./user.model";

@Injectable()
export class AuthService {
    currentUser: IUser;

    loginUser(user: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: 'Adam',
            firstName: 'Adam',
            lastName: 'Sheaffer'
        }
    };

    isAuthenticated() : boolean {
        return !!this.currentUser;
    }
}