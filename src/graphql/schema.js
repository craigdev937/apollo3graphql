import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Client {
        _id: ID!,
        name: String,
        email: String,
        phone: String
    }

    input ClientInput {
        name: String,
        email: String,
        phone: String
    }

    type Query {
        clients: [Client]
    }
    
    type Mutation {
        create(input: ClientInput): Client
        delete(_id: ID!): Client
    }
`;

// type Project {
//     _id: ID!,
//     name: String,
//     description: String,
//     status: String,
//     clientId
// }
// input ProjectInput {

// }


// GET_Clients Query
// ID, Name, Email, and Phone
// Mutation:  ADD_CLIENT, and DELETE_CLIENT 

// GET_PROJECTS
// ID, Name, Status

// GET_PROJECT
// ID, Name, Status

// Mutation: ADD_PROJECT, UPDATE_PROJECT, DELETE_PROJECT