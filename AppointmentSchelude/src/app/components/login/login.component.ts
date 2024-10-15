import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { UtilsService } from '../../services/utils.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) { 

    const token = sessionStorage.getItem('token');
    if (token){
      this.router.navigate(['/calendar']);
    }

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
      
      const response = await this.userService.getCustomerByLogin(this.formulario.value);
  
      if(response.fatal){
        return alert(response.fatal);
      }
      
      sessionStorage.setItem("token", response.token);
      this.formulario.reset();
      this.router.navigate(['/calendar']);
      
    } catch (error) {
      console.log(error);
    }

  }
}
