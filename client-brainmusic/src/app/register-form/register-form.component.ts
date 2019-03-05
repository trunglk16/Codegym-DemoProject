import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConfirmPasswordValidator} from './confirm-password.validator';
import {RegisterService} from '../shared/register.service';
import {User} from '../shared/user.model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  user: User;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
              public service: RegisterService) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      gender: ['', Validators.required],
      phonenumber: ['+84', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]]
    }, {
      validator: ConfirmPasswordValidator.MatchPassword
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const {value} = this.registerForm;
      this.service.createUser(value)
        .subscribe(data => {
          console.log(value);
        }, error => {
          console.log(error);
        });
    }
  }

}
