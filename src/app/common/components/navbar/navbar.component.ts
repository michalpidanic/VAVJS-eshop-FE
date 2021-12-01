import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DisposableComponent } from '../disposable.component';
import { Router } from '@angular/router';
import { StateService } from '../../services/state.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent extends DisposableComponent implements OnInit {
    constructor(private readonly router: Router, private readonly stateService: StateService) {
        super();
    }

    ngOnInit(): void {}
}
