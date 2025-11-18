let mongoose = require('mongoose')

let eventModel = mongoose.Schema({
    name: String,
    organizer: String,
    date: String, 
    description: String,
    location: String
},
{
    collection:"Events888888888"
}
);

module.exports = mongoose.model('Event',eventModel);