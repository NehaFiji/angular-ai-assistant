import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../services/chat';
import { ChatMessage } from '../../models/chat-message.model';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.scss'
})
export class Chat {
  question = '';
  messages: ChatMessage[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(private chatService: ChatService) { }

  askQuestion(): void {
    const trimmedQuestion = this.question.trim();
    if (!trimmedQuestion || this.isLoading) {
      return;
    }

    this.messages.push({
      sender: 'trainee',
      text: trimmedQuestion,
      timestamp: new Date()
    });

    this.question = '';
    this.isLoading = true;
    this.errorMessage = '';

    this.chatService.askQuestion(trimmedQuestion).subscribe({
      next: (response) => {
        this.messages.push({
          sender: 'assistant',
          text: response.answer,
          timestamp: new Date()
        });
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error?.error?.message
          ?? 'Something went wrong. Please try again.';
        this.isLoading = false;
      }
    });
  }
}