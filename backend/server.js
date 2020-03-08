import path from "path";
import fs from "fs";
import { GraphQLServer } from "graphql-yoga";

import resolvers from "./resolvers";

var pg = require("knex")(require('./knexfile'));

const typeDefs = fs.readFileSync(
  path.join(__dirname, "./schema.graphql"),
  "utf8"
);

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(e =>
  console.log(`Server is running on http://localhost:${e.port}`)
);
