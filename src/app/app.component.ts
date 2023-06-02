import { Component } from '@angular/core';

/*
El AppComponent es el componente principal de una aplicación Angular, 
responsable de renderizar la vista principal. 
El decorador @Component se utiliza para definir su selector, template y hojas de estilo. 
La propiedad "title" es una variable que contiene el título de la aplicación y 
se utiliza en la plantilla HTML.
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio1';
}
