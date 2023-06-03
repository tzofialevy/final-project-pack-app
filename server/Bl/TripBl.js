const TripModel = require("../models/TripModel")
const UserModel = require("../models/UserModel");


exports.getAllTrips = function () {
    return new Promise((resolve, reject) => {
        TripModel.find({}, function (err, data) {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

exports.getTripByID = function (id) {
    return new Promise((resolve, reject) => {
        TripModel.findById(id, function (err, data) {
            if (err) {
                reject(err)
            }
            else {

                resolve(data)
            }
        })
    })
}

exports.createTrip = async function (obj, userId) {
    // return new Promise((resolve, reject) => {

    let trip = new TripModel({
        "name": obj.name,
        "StartDate": obj.StartDate,
        "endDate": obj.endDate,
        "status": "planing",
        "products": obj.products,
        "destination": obj.destination,
    });

    let newTrip = await trip.save();
    let user = await UserModel.findById(userId);
    user.trips.push(newTrip._id);
    let updatedUser = await user.save();
    let trips = await UserModel.findById(updatedUser._id).populate('trips');
    return trips.trips;
    // })
}

exports.updateTrip = function (id, obj) {
    return new Promise((resolve, reject) => {


        TripModel.findByIdAndUpdate(id,
            {
                "name": obj.name,
                "destination": obj.destination,
                "StartDate": obj.StartDate,
                "endDate": obj.endDate,
                "status": obj.status,
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

exports.deleteTrip = function (id) {
    return new Promise((resolve, reject) => {
        TripModel.findByIdAndDelete(id, function (err) {
            if (err) {
                reject(err)
            }
            else {

                resolve("deleted!")

            }
        })
    })
}



