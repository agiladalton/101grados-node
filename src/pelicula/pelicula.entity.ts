import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MbPelicula {
  @PrimaryGeneratedColumn({ name: "id_pelicula" })
  idPelicula: number;

  @Column({ length: 45 })
  nombre: string;

  @Column('int')
  duracion: number;

  @Column({ length: 45 })
  genero: string;

  @Column({ length: 500 })
  sinopsis: string;

  @Column({ name: "lista_actor"})
  listaActor: string;
}