import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, NgForm, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RegisterForm } from 'src/app/models/registerForms';
import { RegisterService } from 'src/app/services/register.service';

/*
Este código es un componente que maneja el registro de usuarios, 
a través de un formulario que utiliza el módulo  FormBuilder para definir validaciones. 
El componente envía los datos del formulario a un servicio de registro (RegisterService) 
y verifica que las contraseñas ingresadas por el usuario sean iguales. 
Se importan las dependencias necesarias, como el módulo de Angular para el manejo de formularios, 
el servicio de registro y el router. 
Además, se redirige al usuario a la página de inicio de sesión después de que se haya registrado con éxito.
*/

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: []
})
export class RegisterComponent implements OnInit {

  //API data
  public regionsList: Array<string>;

  //Validation for passwords
  public passwordValidate: boolean = true;

  constructor(
    private fb: FormBuilder,
    private _registerService: RegisterService,
    private _titleService: Title,
    private router: Router,
  ) {
    //Title:
    this._titleService.setTitle('Registro');

    //List of Regions in API/service:
    this.regionsList = _registerService.getRegions();

  }

  //Declare the form and its validations
  registerForm = this.fb.group({
    firstname: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
    lastname: ['', Validators.required],
    email: ['', Validators.compose([Validators.email, Validators.required])],
    phone: ['', Validators.required],
    address: [''],
    city: [''],
    region: [''],
    password: ['', Validators.required],
    password2: ['', Validators.required],
    checkbox: ['', Validators.requiredTrue]
  });

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.checkPasswords()) {

      //Convert form data to object
      let value: RegisterForm = new RegisterForm(
        this.registerForm.value.firstname ? this.registerForm.value.firstname: '',
        this.registerForm.value.lastname ? this.registerForm.value.lastname: '',
        this.registerForm.value.email ? this.registerForm.value.email: '',
        this.registerForm.value.phone ? this.registerForm.value.phone:'',
        this.registerForm.value.address ? this.registerForm.value.address:'',
        this.registerForm.value.city ? this.registerForm.value.city:'',
        this.registerForm.value.region ? this.registerForm.value.region:'',
        this.registerForm.value.password ? this.registerForm.value.password:'',
      )

      //Send object data to Register service
      this._registerService.getRegisteredUser(value);

      //Redirect to login or home
      this.router.navigate(['/login']);
    } else {
      
    }
  }

  //In this method we check that the two passwords are the same
  checkPasswords(): boolean {
    let pass = this.registerForm.value.password;
    let confirmPass = this.registerForm.value.password2;
    return pass === confirmPass ? this.passwordValidate = true : this.passwordValidate = false;
  }

  //Setter to change page's title althrough Browser Module
  public setTitle(newTitle: string) {
    this._titleService.setTitle(newTitle);
  }

}