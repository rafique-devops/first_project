import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export class UserEntity {}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({length:50})
    username: string;

    @Column({length:20})
    user_role: string;

    @Column({length:50})
    user_email: string;

    @Column({length:50})
    createdAt: Date;

    @Column({length:50})
    updatedAt: Date;

    
}