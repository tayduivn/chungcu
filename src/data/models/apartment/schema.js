let mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  slug: { type:String, required:true, unique: true, index: true},
  title: String,
  categories: [String],
  coverUrl: String,
  price: Number,
  priceOff: Number,
  body: String,
  description: String,
  view: {type: Number, default: 0},
  // tags:[Schema.Types.Mixed],
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


module.exports.getApartments = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getNewApartments = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).sort({created_at: -1}).limit(6).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

