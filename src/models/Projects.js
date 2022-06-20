import mongoose from "mongoose";

const ProjectSchema = new Schema({
    name: { type: String },
    description: { type: String },
    status: {
        type: String,
        enum: ["Not Started", "in Progress", "Completed"]
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client"
    },
});

export const ProjectModel = 
    mongoose.model("Project", ProjectSchema);


