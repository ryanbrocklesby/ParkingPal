var mongoose = require('mongoose');
var SampleSchema = new mongoose.Schema({
  Year: String,
  China: String,
  UnitedStates: String,
},
{
    collection: 'energy_collection'
});
mongoose.model('Sample', SampleSchema);