import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formulario: FormGroup;
  userService = inject(UsersService);

  constructor(
  ) { 
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
    try {
      
      console.log(this.formulario.value, "Valores del formulario");
      const response = await this.userService.getCustomerByLogin(this.formulario.value);
  
      if(response.fatal){
        return alert(response.fatal);
      }
      localStorage.setItem("token", response.token);
      console.log("sale el token",response);
      
    } catch (error) {
      console.log(error);
    }
  }
}
