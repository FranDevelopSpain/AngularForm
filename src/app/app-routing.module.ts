import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

/*
Este es el archivo de enrutamiento principal
Se importa el módulo RouterModule y la interfaz Routes desde el paquete @angular/router. 
Se define un array de objetos de ruta que asocian una URL a un componente de la aplicación. 
Los objetos de ruta incluyen el path que indica la URL y el component que se cargará cuando 
se acceda a esa ruta. 
El pathMatch se usa para determinar cómo debe coincidir la URL con la ruta. 
Este archivo de enrutamiento se exporta como AppRoutingModule para que las rutas se puedan 
utilizar en toda la aplicación.
*/

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
  { 
    path: 'home',
    component: HomeComponent
  },
  { 
    path: 'login',
    component: LoginComponent
  },
  { 
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }