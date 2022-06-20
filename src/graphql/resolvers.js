import { ClientRes } from "./ClientRes.js";

export const resolvers = {
    Query: {
        ...ClientRes.Query,
    },
    Mutation: {
        ...ClientRes.Mutation,
    }
};


