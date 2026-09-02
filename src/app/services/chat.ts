import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ChatRequest, ChatResponse } from '../models/chat-message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private readonly apiUrl = `${environment.apiBaseUrl}/Chat`;

  constructor(private http: HttpClient) { }

  askQuestion(question: string): Observable<ChatResponse> {
    const request: ChatRequest = { question };
    return this.http.post<ChatResponse>(`${this.apiUrl}/Ask`, request);
  }

  getHistory(): Observable<ChatResponse[]> {
    return this.http.get<ChatResponse[]>(`${this.apiUrl}/History`);
  }
}