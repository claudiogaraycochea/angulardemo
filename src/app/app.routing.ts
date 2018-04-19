import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import components
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';

const appRoutes: Routes = [
	{path: '', component: LoginComponent},
	{path: 'panel', component: PanelComponent},
	{path: '**', component: LoginComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);