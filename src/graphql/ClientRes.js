import { ClientModel } from "../models/Clients.js";

export const ClientRes = {
    Query: {
        clients: async () => await ClientModel.find()
    },
    Mutation: {
        create: async (obj, {input}) => {
            return await ClientModel.create(input);
        },
        delete: async (obj, {_id}) => {
            return await ClientModel.findByIdAndDelete({_id});
        },
    }
};


