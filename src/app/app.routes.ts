import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { InformeComponent } from './components/informe/informe.component';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'informe/:cantidad', component: InformeComponent }
];
