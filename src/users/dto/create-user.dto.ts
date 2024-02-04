import { IsString,IsInt, IsEmail, IsEnum, IsNotEmpty } from "class-validator";
export class CreateUserDto
{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsEnum(["Intern", "Admin", "SuperAdmin"],
    {message: 'Valid Role Required'}
    )
    @IsNotEmpty()
    role: "Intern" | "Admin" | "SuperAdmin";
}