import { Routes } from '@angular/router';
import { NavbarComponent } from './common/navbar/navbar.component';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { NgswitchUsecasesComponent } from './pages/ngswitch-usecases/ngswitch-usecases.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:"",component:NavbarComponent},
    {path:"data-binding", component:DataBindingComponent},
    {path:"structural-directives", component:DirectivesComponent},
    {path:"ng-switch", component:NgswitchUsecasesComponent},
    {path:'**',component:PageNotFoundComponent}
];
