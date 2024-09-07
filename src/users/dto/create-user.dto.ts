import { IsEmail, IsPhoneNumber, IsString, Length } from "class-validator";

export class CreateUserDto {
  @IsString()
  @Length(2,50)
  readonly name: string;

  @IsString()
  @IsEmail()
  readonly email: string;

  @IsString()
  @IsPhoneNumber('IN')
  readonly phone: string;

  @IsString()
  readonly password: string;
}
