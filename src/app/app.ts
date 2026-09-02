import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Chat } from './components/chat/chat';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Chat],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Trainee Help Desk Assistant';
}