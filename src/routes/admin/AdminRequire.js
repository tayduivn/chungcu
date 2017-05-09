var AdminRequire =  require.ensure([], require => {
    return {
      App: require('./Components/App').default,
      Dashboard: require('./dashboard/Admin').default,
      Library: require('./library/Library').default,
      Setting: require('./setting/Setting').default,
      Editor: require('./editor/Editor').default,
      ListNews: require('./news/ListNews').default,
      EditNews: require('./news/EditNews').default,
      EditFoods: require('./monngon/EditFoods').default,
      ListFoods: require('./monngon/ListFoods').default,

      EditApartment: require('./apartment/EditApartment').default,
      ListApartment: require('./apartment/ListApartment').default,

      EditApartment2: require('./apartment2/EditApartment').default,
      ListApartment2: require('./apartment2/ListApartment').default,

      EditApartment3: require('./apartment3/EditApartment').default,
      ListApartment3: require('./apartment3/ListApartment').default,

      EditCategory: require('./category/EditCategory').default,
      ListCategories: require('./category/ListCategories').default,

      Seo: require('./seo/View.js').default
    }
  }
)

module.exports = AdminRequire
