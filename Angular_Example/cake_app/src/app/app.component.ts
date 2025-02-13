import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderModule } from '@wm-iot/connect-design-system';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cake_app';
}
