import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StateDto } from '../types/state.types';
import { LocalStorageService } from './local-storage.service';

@Injectable({
    providedIn: 'root',
})
export class StateService {
    private _state$ = new BehaviorSubject<StateDto>(null);
    public state$: Observable<StateDto> = this._state$.asObservable();

    constructor(private localStorageService: LocalStorageService) {
        const defaultState = {
            isLoggedIn: false,
            token: null,
            username: null,
            userId: null,
        };

        let initState = JSON.parse(this.localStorageService.getItem('state'));

        if (initState === null) {
            initState = defaultState;
        }

        this.setState(initState);
    }

    getState$() {
        return this.state$;
    }

    getStateSnapshot() {
        return this._state$.value;
    }

    setState(newState) {
        this._state$.next(newState);
        this.localStorageService.setItem('state', `${JSON.stringify(newState)}`);
    }

    patchState(newData) {
        const currentState = this._state$.value;
        const newState = { ...currentState, ...newData };
        this._state$.next(newState);
        this.localStorageService.setItem('state', `${JSON.stringify(newState)}`);
    }

    resetState() {
        this._state$.next(null);
        this.localStorageService.clear();
    }

    logoutResetState() {
        this.patchState({
            isLoggedIn: false,
            token: null,
            username: null,
            userId: null,
        });
    }
}
