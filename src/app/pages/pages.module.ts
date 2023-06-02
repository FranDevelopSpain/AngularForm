import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';

/* 
El código define el "PagesModule" que exporta tres componentes: 
LoginComponent, HomeComponent y RegisterComponent. 
*/

@NgModule({
    declarations: [
        LoginComponent,
        HomeComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
    ],
    exports: [],
    providers: [],
})
export class PagesModule { }