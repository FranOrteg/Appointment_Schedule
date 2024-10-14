import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario: FormGroup;
  userService = inject(UsersService);
  utilsService = inject(UtilsService)

  constructor(
  ) { 
    this.formulario = new FormGroup({
      Email: new FormControl(null,[
        Validators.required
      ]),
      Password: new FormControl(null,[
        Validators.required
      ])
    },[]);
  }


  async onSubmit(){
    try {
      
      console.log(this.formulario.value, "Valores del formulario");
      const response = await this.userService.getCustomerByLogin(this.formulario.value);
      console.log(response, "Respuesta del servidor");
  
      if(response.fatal){
        return alert(response.fatal);
      }
      localStorage.setItem("token", response.token);
      console.log("sale el token",response);
      
    } catch (error) {
      console.log(error);
    }
    const token = this.utilsService.getToken()
    console.log(token);
  }
}
