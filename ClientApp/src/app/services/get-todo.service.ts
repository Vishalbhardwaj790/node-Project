import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../../app/model/todo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetTodoService {

  private todoitems: Todo[];

  constructor(private http: HttpClient) { }

  GetTodoItems(): Observable<Todo[]> {

    return this.http.get<Todo[]>('https://localhost:44361/api/Todoes');

  }

}


