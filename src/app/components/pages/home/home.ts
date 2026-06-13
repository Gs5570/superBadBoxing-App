import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Carousel } from '../../carousel/carousel';
import { Header } from '../../header/header';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Carousel, Header],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
