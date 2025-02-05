import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProfileCardComponent} from './profile-card/profile-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCardComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'tik-talk';
  protected readonly array: Array <number> = array;
}

const array: Array <number> = [1, 2, 3];
