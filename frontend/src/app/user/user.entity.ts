export class UserEntity {
    id: number;
    nombre_usuario: string;
    email: string;
    avatar: string;
    contrasena: string;
    isActive: number;
    clave_activacion: string;
    grupo_usuarios: string;
    apiToken: string;
    version: string;
    fecha_creacion: Date;
    ultima_fecha_modificacion: Date;
   
   constructor(nombre_usuario?:string, email?:string, avatar?:string, contrasena?:string,
    isActive?:number, clave_activacion?:string, grupo_usuarios?:string, apiToken?:string,
    version?:string, fecha_creacion?:Date, ultima_fecha_modificacion?:Date){}
    toString(){
        return this.nombre_usuario;
    }
}





