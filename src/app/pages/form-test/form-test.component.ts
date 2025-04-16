import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-test',
  imports: [ReactiveFormsModule],
  templateUrl: './form-test.component.html',
  styleUrl: './form-test.component.css'
})
export class FormTestComponent {

  readonly fb = inject(FormBuilder)


  phones = this.fb.array([
    this.fb.control('', Validators.required)
  ])

  loginForm = this.fb.group({
    username: ['', [
      Validators.required,
      Validators.minLength(6),
    ]],
    password: ['',
      [Validators.required, Validators.pattern('^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$')
      ]],
    phones: this.phones
  })


  addPhone() {
    this.phones.push(this.fb.control('', Validators.required))
  }


  removePhone(i: number) {
    this.phones.removeAt(i)
  }

  submit() {
    if (this.loginForm.valid)
      console.log('Форма отправлена', this.loginForm.value)
    else
      console.log('форма заполнена неверно')


  }
}
