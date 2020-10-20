import { Resolver, Query, Mutation, Arg } from "type-graphql";
import bcrypt from "bcryptjs";
import { User } from "../../entity/User";
import { v4 as uuidv4 } from "uuid";
import { RegisterInput } from "./register/RegisterInput";

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async hello() {
    return "Hello World!";
  }

  @Mutation(() => User)
  async register(
    @Arg("data") { email, firstName, lastName, password }: RegisterInput
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);
    const uuid = uuidv4();

    const user = await User.create({
      id: uuid,
      firstName,
      lastName,
      email,
      password: hashedPassword,
    }).save();

    return user;
  }
}
