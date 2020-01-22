import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()

export class PublicationEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 500 })
    titulo: string;
    @Column('boolean')
    main: boolean;
    @Column('text')
    tipo: string;
    @Column('text')
    url: string;
    @Column('boolean')
    publicado: boolean;
    @Column('boolean')
    publico: boolean;
    @Column('text')
    autor: string;
    @Column('text')
    ultimo_editor: string;
    @Column('text')
    entradilla: string;
    @Column('text')
    imagen_portada: string;
    @Column('text')
    texto_completo: string;
    @Column('text')
    tags: string;
    @Column('text')
    version: string;
    @Column('text')
    fecha_creacion: string;
    @Column('text')
    ultima_fecha_modificacion: string;
   
   constructor(){}
}
