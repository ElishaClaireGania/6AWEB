import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-register',
  imports: [CommonModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSliderModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatAutocompleteModule, MatChipsModule, MatListModule, ReactiveFormsModule, FormsModule, DatePipe],
  templateUrl: './register.html',
  styleUrl: './register.css',
})

export class Register {
  userName: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  birthDate!: Date;
  address: string = '';
  angularSkillLevel: number = 5;
  selectedLanguage: string = '';
  learningMode: string = '';
  submitted = false;
  minSkillLevel = 1;
  maxSkillLevel = 10;
  myControl = new FormControl('');
  options: string[] = ['Angular', 'React', 'Vue', 'Svelte'];

  formdata: FormGroup = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender: new FormControl('', Validators.required),
    birthDate: new FormControl(null, [Validators.required]),
    address: new FormControl(''),
    angularSkillLevel: new FormControl(5)

  });

   onClickSubmit() {
    this.submitted = true;

    if (this.formdata.valid) {
      const val = this.formdata.value;

      this.userName = val.userName;
      this.email = val.email;
      this.password = val.password;
      this.gender = val.gender;
      this.address = val.address;
      this.angularSkillLevel = val.angularSkillLevel;
      this.birthDate = val.birthDate;
      this.selectedLanguage = this.myControl.value || 'None selected';
      this.learningMode = "Live Boot Camp";

      console.log("Form Submitted!", val);
    } else {
      console.log('Form is not valid!');
    }
  }
}


