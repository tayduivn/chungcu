let mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  slug: { type:String, required:true, unique: true, index: true},
  body: { type: String, default: '' },
  created_at: {type: Date, default: Date.now},
});

let model = mongoose.model('Category', schema);

module.exports = model;

// get ( product )


module.exports.getOneCategory = (root, {slug}) => {
  return new Promise((resolve, reject) => {
    model.findOne({slug: slug}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};


module.exports.getCategories = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

