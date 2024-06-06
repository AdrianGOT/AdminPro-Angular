import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';


declare const google:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild('googleBtn') googleBtn!: ElementRef;

  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    remember: [false]
  })

  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ){}


  ngAfterViewInit(): void {
    this.googleInit();
  }

  private googleInit(){
    google.accounts.id.initialize({
      client_id: "79327874459-dd2129iff0tn24qpqtvbvnp86mi6f4so.apps.googleusercontent.com",
      callback: (response: any) => this.handleCredentialResponse(response)
    });
    google.accounts.id.renderButton(
      this.googleBtn.nativeElement,
      { theme: "outline", size: "large" }  // customization attributes
    );
  }

  handleCredentialResponse(response: any){
    const token = response.credential;

    this.userService.loginUserWithGoogle(token).subscribe(res => {
      this.router.navigateByUrl('/');
    })
  }

  ngOnInit(): void {
    this.loginForm.get('email')?.setValue( localStorage.getItem('email') || '' );
  }

  login(){
    if(this.loginForm.invalid) return;

    this.userService.loginUser(this.loginForm.value).subscribe(resp => {
        console.log(resp);

        if(this.loginForm.get('remember')!.value){
          localStorage.setItem('email', this.loginForm.get('email')!.value);
        }

        this.router.navigateByUrl('/')
    }, err => {
      const errText = err.error.msg;

      Swal.fire({
        icon: "error",
        title: errText,
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: 'Close'
      });

    })

  }


}
