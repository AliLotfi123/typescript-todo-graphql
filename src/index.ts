import { ApolloServer } from "apollo-server-express";
import * as Express from "express";
import { buildSchema } from "type-graphql";
import "reflect-metadata";
import { createConnection } from "typeorm";

const main = async () => {
  await createConnection();

  // const schema = await buildSchema({
  //   resolvers: [HelloResolver],
  // });

  const apolloServer = new ApolloServer({});
  const app = Express();
  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("serverstarted on 4000");
  });
};

main();
