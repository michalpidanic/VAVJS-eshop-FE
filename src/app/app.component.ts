import { Component } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { takeUntil, tap, debounceTime } from 'rxjs/operators';
import { DisposableComponent } from './common/components/disposable.component';
import { LoadingService } from './common/services/loading.service';
import { StateService } from './common/services/state.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent extends DisposableComponent {
    windowStoreChange$: Observable<any>;

    constructor(private readonly stateService: StateService, private readonly loadingService: LoadingService) {
        super();
    }

    ngOnInit() {
        this.loadingService.loadingStatus$
            .pipe(
                tap(status => {
                    if (status) {
                        this.loadingService.onShowLoading();
                    } else {
                        this.loadingService.onHideLoading();
                    }
                }),
                takeUntil(this.destroySignal$)
            )
            .subscribe();
        this.initWindowStorageListener();
    }

    initWindowStorageListener() {
        this.windowStoreChange$ = fromEvent(window, 'storage').pipe(takeUntil(this.destroySignal$), debounceTime(500));
        this.windowStoreChange$.subscribe((state: StorageEvent) => {
            if (document.hasFocus()) {
                return;
            }
            this.stateService.setState(JSON.parse(state.newValue));
        });
    }
}
