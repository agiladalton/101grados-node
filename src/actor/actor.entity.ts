import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MbActor {
  @PrimaryGeneratedColumn()
  id_actor: number;

  @Column({ length: 500 })
  nombre: string;

  @Column('int')
  edad: number;

  @Column()
  foto: string;
}