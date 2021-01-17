import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'; 
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatTableDataSource} from '@angular/material';

export interface Users {
  name: string;
  age: number;
  gender: string;
  role: string;
}

const Users_Data: Users[] = [
  {name: 'Aman', age: 21, gender: 'M', role: 'Admin'},
  {name: 'Abhishek', age: 22, gender: 'M', role: 'User'},
  {name: 'Piyush', age: 23, gender: 'F', role: 'User'},
  {name: 'Kunal', age: 24, gender: 'M', role: 'User'},
  {name: 'Manpreet', age: 25, gender: 'M', role: 'Admin'},
  {name: 'Amita', age: 26, gender: 'F', role: 'User'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'form-validator';
  loginForm: FormGroup; 
  viewSelected: any = 'login';
  displayedColumns: string[] = ['name', 'age', 'gender', 'role'];
  dataSource = new MatTableDataSource(Users_Data);

  constructor(private fb:FormBuilder){}
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]],
      agree:[false,Validators.requiredTrue]
    })
  } 

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  selectedView(view) {
    this.viewSelected = view;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
