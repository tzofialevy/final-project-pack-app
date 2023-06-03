const AttractionModel = require("../models/AttractionModel")


exports.getAllAttraction = function () {
    return new Promise((resolve, reject) => {
        AttractionModel.find({}, function (err, data) {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
            
        })
    })
}

exports.getAttractionByID = function (id) {
    return new Promise((resolve, reject) => {
        AttractionModel.findById(id, function (err, data) {
            if (err) {
                reject(err)
            }
            else {

                resolve(data)
            }
        })
    })
}

exports.createAttraction = function (obj) {

    return new Promise((resolve, reject) => {

        let Attraction = new AttractionModel({
            "name": obj.name,
            "products": obj.products
        });

        Attraction.save(function (err) {
            if (err) {
                reject(err)
            }
            else {


                resolve("Created !")
            }
        })
    })
}

exports.updateAttraction = function (id, obj) {
    return new Promise((resolve, reject) => {


        AttractionModel.findByIdAndUpdate(id,
            {
                "name": obj.name,
                "products": obj.products
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

exports.deleteAttraction = function (id) {
    return new Promise((resolve, reject) => {
        AttractionModel.findByIdAndDelete(id, function (err) {
            if (err) {
                reject(err)
            }
            else {

                resolve("deleted!")

            }
        })
    })
}

