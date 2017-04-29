let mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  slug: { type:String, required:true, unique: true, index: true},
  title: String,
  category: {type: String},
  coverUrl: String,
  price1: {type: Number, default: 0},
  price2: {type: Number, default: 0},
  body: String,
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
  if(type === 'cho-thue') {
    query = {category: 'cho-thue'}
  }else if(type === 'mbcn'){
    query = {category: {$in: ['khu-t', 'khu-park-hill']}}
  } else {
    query = {}
  }
  console.log(query)
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
