import { IsEmail, IsOptional, IsString, Matches, MinLength } from "class-validator";

export class RegisterDto {
  @IsEmail({}, { message: 'Email inválido' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  // Ejemplo de regla opcional para fuerza: al menos una mayúscula, minúscula y número
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/, {
    message: 'La contraseña debe tener mayúscula, minúscula y número',
  })
  password: string;

  @IsOptional()
  @IsString()
  name: string;
}