const ProductModel = require("../models/ProductsModel")


exports.getAllProducts = function () {
    return new Promise((resolve, reject) => {
        ProductModel.find({}, function (err, data) {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

exports.getProductByID = function (id) {
    return new Promise((resolve, reject) => {
        ProductModel.findById(id, function (err, data) {
            if (err) {
                reject(err)
            }
            else {

                resolve(data)
            }
        })
    })
}

exports.createProduct = function (obj) {
    return new Promise((resolve, reject) => {

        let product = new ProductModel({
            "name": obj.name,
            "category": obj.category,
            "categories": obj.categories
        });

        product.save(function (err) {
            if (err) {
                reject(err)
            }
            else {


                resolve("Created !")
            }
        })
    })
}

exports.updateProduct = function (id, obj) {
    return new Promise((resolve, reject) => {


        ProductModel.findByIdAndUpdate(id,
            {
                "name": obj.name,
                "category": obj.category,
                "categories": obj.categories
            }
            , function (err) {
                if (err) {
                    reject(err)
                }
                else {
                    resolve("Updated !")
                }
            })

    })

}

exports.deleteProduct = function (id) {
    return new Promise((resolve, reject) => {
        ProductModel.findByIdAndDelete(id, function (err) {
            if (err) {
                reject(err)
            }
            else {

                resolve("deleted!")

            }
        })
    })
}

