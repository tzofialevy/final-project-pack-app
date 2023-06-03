const TripModel = require("../models/TripModel");
const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
function getAllUsers() {
    return new Promise((resolve, reject) => {
        UserModel.find({}, function (err, data) {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}
function getUserByID(id) {
    console.log("srep2")
    return new Promise((resolve, reject) => {
        UserModel.findById(id, function (err, data) {
            if (err) {
                reject(err)
            }
            else {
                console.log("step3", data)
                resolve(data)
            }
        })
    })
}
async function createUser(obj) {
    let user = new UserModel({
        "firstname": obj.firstname,
        "lastname": obj.lastname,
        "email": obj.email,
        "password": obj.password,
        "trips": obj.trips
    })
    try {
        let newUser = await user.save();
        return newUser;
    }
    catch (error) {
        console.log('%c⧭', 'color: #ff0000', error);
        return error;
    }

    // return new Promise(async (resolve, reject) => {
    //     console.log("hghghj");
    //     const users = await getAllUsers().then(data => { return data }, function (err, data) {
    //         if (err) { reject(err) }

    //     })
    //     console.log("fffffffff");
    // }

    // const email = users.find(n => { return n.email == obj.email }, function (err, data) {
    //     if (err) {  console.log("v");reject(err);

    //     }
    //     else {  console.log("dddddddddd"); resolve(data) ;
    //        }
    // })


    // if (!email) {


    // }
    // else { reject("error email exits") }
    //)
}


function updateUser(id, obj) {
    try {
        let user = UserModel.findByIdAndUpdate(id, obj);
        return user;
    }
    catch (error) {
        console.log('%c⧭', 'color: #00e600', error);
    }
    // return new Promise((resolve, reject) => {
    //     UserModel.findByIdAndUpdate(id,
    //         {
    //             "firstname": obj.firstname,
    //             "lastname": obj.lastname,
    //             "email": obj.email,
    //             "password": obj.password,
    //             "trips": obj.trips

    //         }, function (err) {
    //             if (err) {
    //                 reject(err)
    //             }
    //             else {
    //                 console.log(obj._id, obj.name, obj.price)
    //                 resolve("Updated !")
    //             }
    //         })

    //})

}

function deleteUser(id) {
    return new Promise((resolve, reject) => {
        UserModel.findByIdAndDelete(id, function (err) {
            if (err) {
                reject(err)
            }
            else {

                resolve("deleted!")

            }
        })
    })
}

function login(email, password) {
    alert('server func')
    return new Promise((resolve, reject) => {
        UserModel.find(email, function (err) {
            if (err) {
                reject(err)
            }
            else {

                resolve("!")

            }
        })
    })



    // return new Promise(async (resolve, reject) => {
    //     const users = await getAllUsers().then(data => { return data })
    //     const user = users.find(u => { return u.email === email && u.password === password });
    //     if (user) {
    //         const accessTokenSecret = "somerandomaccesstoken";
    //         const refreshTokenSecret = "somerandomstringforrefreshtoken";
    //         let refreshTokens = []

    //         const accessToken = jwt.sign({ email: user.email, role: user.role }, accessTokenSecret)
    //         const refreshToken = jwt.sign({ email: user.email, role: user.role }, refreshTokenSecret)

    //         refreshTokens.push(refreshToken)

    //         resolve(
    //             {
    //                 accessToken,
    //                 refreshToken
    //             }
    //         )
    //     }
    //     else { reject("email or password incorrect") }
    // })
}

const getUserByEmailAndPassword = async (email, password) => {
    try {
        let user = UserModel.findOne({ email: email, password: password }).populate('trips');
        return user;
    }
    catch (error) {
        console.log('%c⧭', 'color: #ff0000', error);
        return error;
    }
}
module.exports = { getUserByEmailAndPassword, login, createUser, getUserByID, getAllUsers, deleteUser, updateUser }
