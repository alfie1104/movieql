import { GraphQLServer } from "graphql-yoga";
/* 
  Client로 부터 받은 query는 API서버가 해결해야할 문제이며
  resolver는 그 문제들을 어떻게 해결해야할지를 적어놓은 곳이다. (Database에서 값을 가져온다거나, 계산결과를 반환한다거나...)
*/
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});

server.start(() => console.log("GraphQL Server Running on localhost:4000"));
