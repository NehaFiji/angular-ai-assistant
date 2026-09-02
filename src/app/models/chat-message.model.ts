//Represents a single message shown in the chat window
export interface ChatMessage {
  sender: 'trainee' | 'assistant';
  text: string;
  timestamp: Date;
}

//Request payload sent to POST api/Chat/Ask
export interface ChatRequest {
  question: string;
}

//Response payload returned from POST api/Chat/Ask
export interface ChatResponse {
  question: string;
  answer: string;
}
