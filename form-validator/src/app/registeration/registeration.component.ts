import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  registerForm: FormGroup;
  techStackData: Array<object> = [
    { name: 'Angular', value: 'angular' },
    { name: 'React', value: 'react' },
    { name: '.NET', value: '.net' },
    { name: 'SQL', value: 'sql' },
    { name: 'MYSQL', value: 'mysql' },
  ];
  selectedTechStack=[];
  constructor(private fb:FormBuilder){}

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['',[Validators.required,Validators.pattern('[a-zA-Z]+'),Validators.maxLength(50)]],
      email: ['',[Validators.required,Validators.email,Validators.maxLength(50)]],
      password: ['',[Validators.required,Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]],
      dob:['',[Validators.required,Validators.min(21)]],
      techStack:[this.selectedTechStack],
      gender:['',[Validators.required]],
      agree:[false,Validators.requiredTrue]
    })
  }

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get dob() {
    return this.registerForm.get('dob');
  }

  get gender() {
    return this.registerForm.get('gender');
  }

  get techStack() {
    return this.registerForm.get('techStack');
  }

}
