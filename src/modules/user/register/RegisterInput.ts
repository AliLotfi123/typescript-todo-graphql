import { Length, IsEmail } from "class-validator";
import { Field, InputType } from "type-graphql";
import { EmailAlreadyExist } from "./EmailAlreadyExist";

@InputType()
export class RegisterInput {
  @Field()
  @Length(1, 255)
  firstName: string;

  @Field()
  @Length(1, 255)
  lastName: string;

  @Field()
  @IsEmail()
  @EmailAlreadyExist({ message: "Email already exist" })
  email: string;

  @Field()
  password: string;
}
