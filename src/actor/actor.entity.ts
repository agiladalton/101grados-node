import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MbActor {
  @PrimaryGeneratedColumn({ name: "id_actor" })
  idActor: number;

  @Column({ length: 45 })
  nombre: string;

  @Column('int')
  edad: number;

  @Column()
  foto: string;
}