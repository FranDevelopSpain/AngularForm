import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

/*
Este componente se encarga de mostrar la página de inicio de la aplicación 
y establecer el título de la página como "Inicio". También proporciona un método 
para cambiar el título de la página en tiempo de ejecución. 
*/

@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

constructor(
    private _titleService: Title,
) { 
    _titleService.setTitle('Inicio');
}

ngOnInit(): void {
}

  //Setter to change page's title althrough Browser Module
public setTitle(newTitle: string) {
    this._titleService.setTitle(newTitle);
}

}