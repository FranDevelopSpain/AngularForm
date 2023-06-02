export class RegisterForm{

    /* Este código define una clase llamada "RegisterForm" que contiene propiedades para almacenar 
    información de registro. 
    La clase tiene un constructor que inicializa las propiedades con valores dados, 
    para cada propiedad que permiten leer y actualizar sus valores respectivamente.
    */

    private _firstName!: string;
    private _lastName!: string;
    private _email!: string;
    private _phone!: string;
    private _address!: string;
    private _city!: string;
    private _region!: string;
    private _password!: string;

    constructor(firstName: string, lastName: string, email: string, phone: string, address: string = 'default', city: string = 'default', region: string = 'default', password: string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._phone = phone;
        this._address = address;
        this._city = city;
        this._region = region;
        this._password = password;
    }

    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    public get phone(): string {
        return this._phone;
    }
    public set phone(value: string) {
        this._phone = value;
    }

    public get address(): string {
        return this._address;
    }
    public set address(value: string) {
        this._address = value;
    }

    public get city(): string {
        return this._city;
    }
    public set city(value: string) {
        this._city = value;
    }

    public get region(): string {
        return this._region;
    }
    public set region(value: string) {
        this._region = value;
    }
    
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
}