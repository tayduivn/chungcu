let mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  slug: { type:String, required:true, unique: true, index: true},
  title: {type: String, required: true, default: ''},
  category: {type: String, required: true, default: 'khu-t'},
  coverUrl: {type: String, required: true, default: '/'},
  price1: {type: Number, default: 0},
  price2: {type: Number, default: 0},
  body: {type: String, required: true, default: ''},
  rating: {type: Number, default: 5},
  numRate: {type: Number, default: 1},
  view: {type: Number, default: 0},
  created_at: {type: Date, default: Date.now},
});

let model = mongoose.model('Apartment', schema);

module.exports = model;

// get ( product )


module.exports.getOneApartment = (root, {slug}) => {
  return new Promise((resolve, reject) => {
    model.findOne({slug: slug}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getApartments = (root, {type}) => {
  let query = {}
  console.log(type)
  query = {category: type}
  return new Promise((resolve, reject) => {
    model.find(query).sort({created_at: -1}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getApartmentsByCategory = (root, {category}) => {
  return new Promise((resolve, reject) => {
    model.find({category: category}).sort({created_at: -1}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};
