require("dotenv").config();
const express = require("express");
const { ApolloServer, gql } = require('apollo-server-express');
const PORT = process.env.PORT || 8008;
const http = require("http");

const app = express();

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

//applying middleware method for connecting to apolloServer to HTTP framework ie: Express
const runApolloServer = async () => {

    await apolloServer.start();
    apolloServer.applyMiddleware({ 
        //app : app,
        app
    });
}
//call runApolloServer function
runApolloServer();

// creating HTTP server connected gql to express
const httpServer = http.createServer(app);

// checking REST api
app.get('/rest', (req, res)=>{
    res.json({
        success: 'true',
        message: 'You hit the the server...'
    })
})

// checking server status
app.listen(PORT, ()=>{
   console.log(`-> GrpahQL Server is connected to Express Server is ready at http://loacalhost:${process.env.PORT}`)
})