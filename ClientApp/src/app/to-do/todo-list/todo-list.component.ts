import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from '../../model/todo.model';
import { GetTodoService } from '../../services/get-todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todoitems: Todo[];

  cssPriority: string;

  constructor(private todoService: GetTodoService) {

    this.todoService.GetTodoItems().subscribe(result => {

      this.todoitems = result;

    }, error => console.error(error));
  }

  ngOnInit() {
    //this.GetTodoItems();
  }

  trackByFn(index, item) {
    return item.title;
  }

}


