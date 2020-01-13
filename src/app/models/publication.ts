export class Publication {
    titulo:string;
    contenido:string;
    subtitulo:string;

    constructor(titulo?:string, contenido?:string, subtitulo?:string){
        this.titulo = titulo;
        this.contenido = contenido;
        this.subtitulo = subtitulo;
    }
}
