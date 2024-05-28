import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

// External modules
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public formSubmitted: boolean = false;

  public registerForm: FormGroup = this.fb.group({
    name: ['Adrian', [Validators.required, Validators.minLength(3)]],
    email: ['text1@gmail.com', [Validators.required, Validators.email]],
    password: ['12345', [Validators.required]],
    password2: ['', [Validators.required]],
    terms: [false, [Validators.required]],
  }, {
    validators: this.passwordsEquals('password', 'password2')
  })

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ){}

  createUser() {
    this.formSubmitted = true

    if(this.registerForm.invalid) return;

    this.userService.createUser(this.registerForm.value).subscribe(res => {
      console.log('user created');
      console.log(res);
    }, err => {
      const errorText = err.error.msg;

      Swal.fire({
        icon: "error",
        title: errorText,
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: 'Close'
      });

    })
  }

  fieldNoValid(field: string): boolean {
    return this.registerForm.get(field)!.invalid && this.formSubmitted;
  }

  termsAgree(): boolean {
    return !this.registerForm.get('terms')!.value && this.formSubmitted;
  }

  arePasswordEquals(): boolean{

    const password = this.registerForm.get('password')?.value;
    const password2 = this.registerForm.get('password2')?.value;

    if( !this.formSubmitted ) return true;

    return password === password2

  }

  passwordsEquals(passwordOne: string, passwordTwo: string){
    return (formGroup:FormGroup) =>{

      const pass1Control = formGroup.get(passwordOne);
      const pass2Control = formGroup.get(passwordTwo);

      if(pass1Control?.value === pass2Control?.value) pass2Control?.setErrors(null);
      else pass2Control?.setErrors({noEqual: true});

    }
  }

}
