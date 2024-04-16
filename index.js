import express from "express";
import resolvers from './resolvers'
import schema from './schema'
import {graphqlHTTP} from "express-graphql"
import { validateSchema } from "graphql";

const app = express();

app.get("/", (req, res) => {
  res.send("Up and running with graphql");
});

const root = {lco: () => console.log("LearnCodeOnline.i n")}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true

}))

app.listen(8082, () => console.log("Running at 8082"));
