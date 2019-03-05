import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Email} from '../shared/email.model';
import {EmailService} from '../shared/email.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  email: Email;
  emailForm: FormGroup;

  constructor(private fb: FormBuilder,
              public service: EmailService) {
  }

  ngOnInit() {
    this.resetForm();
  }

  get f() {
    return this.emailForm.controls;
  }

  resetForm() {
    this.emailForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      feedback: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.emailForm.valid) {
      const {value} = this.emailForm;
      this.service.sendMail(value)
        .subscribe(data => {
          console.log(value);
        }, error => {
          console.log(error);
        });
      this.resetForm();
    }
  }
}
