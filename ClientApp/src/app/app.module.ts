import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CreateTodoComponent } from './to-do/create-todo/create-todo.component';
import { DeleteTodoComponent } from './to-do/delete-todo/delete-todo.component';
import { TodoListComponent } from './to-do/todo-list/todo-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule, MatInputModule, MatSelectModule, MatNativeDateModule, MatFormFieldModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import { SpinnerOverlayComponentComponent } from './spinner-overlay-component/spinner-overlay-component.component';
import { MyLoaderComponent } from './Loaders/my-loader/my-loader.component';

import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptors/loader-interceptor.service';
import { GetTodoService } from './services/get-todo.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CreateTodoComponent,
    DeleteTodoComponent,
    TodoListComponent,
    SpinnerOverlayComponentComponent,
    MyLoaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CreateTodoComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'add-todo', component: CreateTodoComponent },
      { path: 'get-todoitems', component: TodoListComponent },


    ]),
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    GetTodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
