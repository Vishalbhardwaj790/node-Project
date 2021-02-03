import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';



@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  profileForm = new FormGroup({

    Title: new FormControl(''),
    Description: new FormControl(''),
    DueDate: new FormControl(''),
    priority: new FormControl('')


  })

  baseUrl;

  constructor(public fb: FormBuilder, private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    this.baseUrl = baseUrl;
  }

  ngOnInit() {    }

  SaveTODO() {

    console.warn(this.profileForm.value);

    const formValue = this.profileForm.value;
    console.log(this.profileForm.value)
    
    this.http.post('https://localhost:44361/api/Todoes', this.profileForm.value, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).subscribe(

      function (response) {

        console.log(response)
        alert("TODO item added")

      },
      (error) => console.log(error)
    )

  }


}

// class Todo {

//   Id: number;
//   Title: string;
//   Description: string;

// }
