/*
// ✅ src/auth/dto/register.dto.ts
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsOptional, MinLength } from "class-validator";
import { Role } from "src/common/enum/role.enum";

export class RegisterDto {
  @ApiProperty({ example: "usuario@example.com" })
  @IsEmail()
  email: string;

  @ApiProperty({ example: "12345678" })
  @MinLength(6)
  password: string;

  @ApiPropertyOptional({
    enum: Role,
    default: Role.EMPLEADO,
    description: "Rol del usuario. Opcional, por defecto es EMPLEADO.",
  })
  @IsOptional()
  @IsEnum(Role, {
    message: `El rol debe ser uno de: ${Object.values(Role).join(", ")}`,
  })
  role?: Role;
}
  */
