import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderManagementComponent } from './components/order-management/order-management.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ADMIN_ROUTES } from './routes/admin.routes';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

@NgModule({
    declarations: [OrderManagementComponent, AdvertisementComponent, AdminDashboardComponent],
    imports: [RouterModule.forChild(ADMIN_ROUTES), CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
})
export class AdminModule {}
