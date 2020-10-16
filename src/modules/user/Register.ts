import { Resolver, Query } from "type-graphql";

@Resolver()
class RegisterResolver {
  @Query(() => String, { name: "HelloWorld" })
  async hello() {
    return "Hello World!";
  }
}
