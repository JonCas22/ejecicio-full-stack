import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()

export class MenuItemEntity {

    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 500 })
    titulo: string;
    @Column('text')
    nombre: string;
    @Column('text')
    icono: string;
    @Column('text')
    posicion_icono: string;
    @Column('text')
    url: string;
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
