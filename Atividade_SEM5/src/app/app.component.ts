import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from './environment';
import { BarchartComponent } from './components/screens/barchart/barchart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarchartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'atividade_meu_dashboard';
  apiUrl: string | undefined;

  constructor() {
    this.apiUrl = environment.apiUrl;
    console.log(this.apiUrl);
}
}
