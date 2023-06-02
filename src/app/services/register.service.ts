import { Injectable } from '@angular/core';

/*
Este es un servicio llamado RegisterService con dos métodos públicos: 
getRegions() devuelve una matriz de cadenas con nombres de regiones en España
getRegisteredUser(form: any) es un método de registro que muestra en la consola 
el objeto de formulario pasado como parámetro. 
La matriz de regiones se inicializa en el constructor y está disponible para cualquier 
componente que inyecte este servicio. 
El servicio es una buena práctica para separar la lógica del componente y 
tener un código más modular y escalable.
*/

@Injectable({
providedIn: 'root'
})
export class RegisterService {

private regionsList: Array<string> = ['Álava','Albacete','Alicante','Almería','Asturias','Ávila','Badajoz','Barcelona','Burgos','Cáceres',
    'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba','La Coruña','Cuenca','Gerona','Granada','Guadalajara',
    'Guipúzcoa','Huelva','Huesca','Islas Baleares','Jaén','León','Lérida','Lugo','Madrid','Málaga','Murcia','Navarra',
    'Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
    'Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza']

    constructor(){}

    public getRegions(): Array<string> {
        return this.regionsList;
    }

    public getRegisteredUser(form: any):void {
        console.log('Usuario registrado con éxito.');
        console.log(form);
    }
}