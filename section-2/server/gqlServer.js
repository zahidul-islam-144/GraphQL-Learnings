require("dotenv").config();
const { ApolloServer, gql } = require('apollo-server');
const PORT = process.env.PORT || 8008;


//types query / mutation / subscription

const typeDefs = `
    type Query{
        totalPosts: Int!
    }
`;

//resolvers : send data to client
const resolvers = {
    Query: {
        totalPosts: () => 42
    }
}

// creating gql server
 const apolloServer = new ApolloServer({
     typeDefs,
     resolvers
 });

 // checking server status
 apolloServer.listen(PORT, ()=>{
    console.log(`-> GrpahQL Server is ready at http://loacalhost:${process.env.PORT}`)
 })