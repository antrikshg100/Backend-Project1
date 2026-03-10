import mongoose from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

const videoSchema = new mongoose.Schema(
    {
     videoFile : {
        type : String , // cloudnary url
        required : true
     },
     thumbnails: {
        type : String , // cloudnary url
        required : true
     },
     title : {
        type : String, //cloudnary url
        required : true,
     },
     description : {
        type : String, // cloudnary url
        required : true,
     },
     duration : {
        type : Number, // cloudnary url
        required : true
     },
     views : {
        type : Number,
        default : 0
     },
     isPublished : {
        type : Boolean,
        default : true
     },
     owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
     }
    },{timestamps : true})


videoSchema.plugin(mongooseAggregatePaginate)   
 
export const Video = ongoose.model ("Video",videoSchema)