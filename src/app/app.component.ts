import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./pages/user/user.component";
import { DataBindingComponent } from "./pages/data-binding/data-binding.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent, DataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Practice';
}
