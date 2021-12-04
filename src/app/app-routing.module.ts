import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './common/components/not-found/not-found.component';

const routes: Routes = [
    {
        path: 'main',
        loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    },
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
    },
    {
        path: '404',
        component: NotFoundComponent,
    },
    {
        path: '**',
        redirectTo: '404',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
