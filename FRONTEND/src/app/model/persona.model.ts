export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    aboutMe: string;

    constructor(nombre: String, apellido: String, img: String, aboutMe:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.aboutMe = aboutMe;
    }
}