import { Routes } from '@angular/router';
import { AdminDashboardComponent } from '../components/admin-dashboard/admin-dashboard.component';
import { AdvertisementComponent } from '../components/advertisement/advertisement.component';
import { OrderManagementComponent } from '../components/order-management/order-management.component';

export const ADMIN_ROUTES: Routes = [
    {
        path: '',
        component: AdminDashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'orders',
                pathMatch: 'full',
            },
            {
                path: 'advertisement',
                component: AdvertisementComponent,
            },
            {
                path: 'orders',
                component: OrderManagementComponent,
            },
        ],
    },
];
