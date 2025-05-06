import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from "./pages/user/user.component";
import { DataBindingComponent } from "./pages/data-binding/data-binding.component";
import { DirectivesComponent } from "./pages/directives/directives.component";
import { NgswitchUsecasesComponent } from "./pages/ngswitch-usecases/ngswitch-usecases.component";
import { AttributeDirectivesComponent } from "./pages/attribute-directives/attribute-directives.component";
import { SignalsComponent } from "./pages/signals/signals.component";
import { NavbarComponent } from "./common/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent, DataBindingComponent, DirectivesComponent, NgswitchUsecasesComponent, AttributeDirectivesComponent, SignalsComponent, NavbarComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Practice';
}
