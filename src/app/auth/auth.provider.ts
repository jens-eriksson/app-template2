import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable()
export class AuthProvider {
    public user: Observable<firebase.User>;
    private _user: firebase.User;

    constructor(private firebaseAuth: AngularFireAuth) {
        this.user = this.firebaseAuth.user;
        this.user.subscribe(user => {
            this._user = user;
        });
    }

    public async login(email: string, password: string) {
        return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
    }

    public async logout() {
        return this.firebaseAuth.auth.signOut();
    }

    public async registerUser(email, password) {
        return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    public isAuthenticated() {
        if (this._user) {
            return true;
        }

        return false;
    }
}
