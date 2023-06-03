const axios = require('axios');
require('./callMock');

// try{

// }
// catch(err){
//     return new Error(err);
// }
//  return axios.get('../cat.json').then((response)=>{
//        return response.data
//         })
function cityWeather(city) {

    if (city === ''||city==="") {
        console.log("its empty: " + city + "city");
        throw new Error("string is empty");
    }
    if (typeof (city) != typeof ("hg")) {
        console.log("that its " + typeof (city));
        throw new Error("not a string");
    }

    //const url = `https://example.com/data/2.5/weather?...`;
    //  new Promise((resolve, reject) => {
    return axios.get(`https://example.com/data/2.5/weather?units=metric&q=${city}`)
            .then((res,req) => {
              
              
                    return(res.status(200).send({ 'data': res.data }));
              //  return(res.status(404).send({ 'data': { 'message': 'city not found' }, 'code': 404 }));
            }).catch(err=>{throw new Error(err)})
        // Implement the function
    // });
}

module.exports = {
    cityWeather
};
