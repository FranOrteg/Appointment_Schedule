import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formulario: FormGroup;

  constructor() { 
    this.formulario = new FormGroup({
      email: new FormControl(null,[
        Validators.required
      ]),
      password: new FormControl(null,[
        Validators.required
      ])
    },[]);
  }


  async onSubmit(){
    console.log(this.formulario.value, "Valores del formulario");
  }
}
