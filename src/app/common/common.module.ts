import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LOCAL_STORAGE_TOKEN } from './services/local-storage.service';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { LoadingComponent } from './components/loading.component';
import { ErrorNotificationComponent } from './components/notifications/error-notification.component';
import { InfoNotificationComponent } from './components/notifications/info-notification.component';
import { SuccessNotificationComponent } from './components/notifications/success-notification.component';
import { WarningNotificationComponent } from './components/notifications/warning-notification.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [
        LoadingComponent,
        SuccessNotificationComponent,
        ErrorNotificationComponent,
        InfoNotificationComponent,
        WarningNotificationComponent,
        NotFoundComponent,
        HeaderComponent,
        NavbarComponent,
    ],
    imports: [CommonModule, MaterialModule, RouterModule, FormsModule],
    exports: [LoadingComponent, NotFoundComponent, HeaderComponent],
    providers: [{ provide: LOCAL_STORAGE_TOKEN, useValue: localStorage }],
})
export class CommonAppModule {}
