const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 const MovieSchema = new Schema({
   director_id: {
     type: Schema.Types.ObjectId,
     required: true
   },
   title: {
     type: String,
     required: true
   },
   category: String,
   country: String,
   year: {
     type: Number,
     max: 2019,
     min: 1900
   },
   imdb_score: Number,
   createDate: {
     type:Date,
     default :Date.now
   }
 });
module.exports = mongoose.model('movie', MovieSchema);
