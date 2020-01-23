import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from "typeorm";
import { PublicationEntity } from '../publication/publication.entity'

@Entity()

export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 500 })
    nombre_usuario: string;
    @Column('text')
    email: string;
    @Column('text')
    avatar: string;
    @Column('text')
    contrasena: string;
    @Column('boolean')
    isActive: boolean;
    @Column('text')
    clave_activacion: string;
    @Column('text')
    grupo_usuarios: string;
    @Column('text')
    apiToken: string;
    @Column('text')
    version: string;
    @Column('text')
    fecha_creacion: string;
    @Column('text')
    ultima_fecha_modificacion: string;
    @OneToMany(type => PublicationEntity, publication => publication.user)
    publication: PublicationEntity[];
   
   constructor(){}
}





