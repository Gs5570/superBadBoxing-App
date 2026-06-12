import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { About } from './components/pages/about/about';
import { Coaches } from './components/pages/coaches/coaches';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Header, Footer, About, Coaches],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('superBadBoxing-app');
}
