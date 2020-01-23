import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()

export class MenusEntity {

    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 500 })
    titulo: string;
    @Column('text')
    icono: string;
    @Column('text')
    posicion_icono: string;
    @Column('boolean')
    main: boolean;
    @Column('text')
    enlaces_menuitem: string;
    @Column('boolean')
    publicado: boolean;
    @Column('boolean')
    publico: boolean;
    @Column('text')
    autor: string;
    @Column('text')
    ultimo_editor: string;
    @Column('text')
    version: string;
    @Column('text')
    fecha_creacion: string;
    @Column('text')
    ultima_fecha_modificacion: string;
   
   constructor(){}
}
