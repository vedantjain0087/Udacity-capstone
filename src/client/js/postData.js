import { gnomeApi, weatherBitApi, pixBayApi, weatherBitForecastApi} from './constants';
async function postData( location = {}, diff = 0) {
    var lat;
    var lng;
    var apiToHit = "";
    var results = [];
    if (diff == 0) {
        apiToHit = weatherBitApi;
    } else {
        apiToHit = weatherBitForecastApi;
    }
    const response1 = await fetch(gnomeApi+location);
    const pr = new Promise( (resolve, reject) => {
        response1.json().then(async function(data){
            lat = data.address.lat;
            lng = data.address.lng;
            const response2 = await fetch(apiToHit+`lat=${lat}&lon=${lng}`);
            response2.json().then(async function(data2){
                results.push(data2);
                const response3 = await fetch(pixBayApi+location);
                response3.json().then(function(data3){
                    results.push(data3);
                    resolve(results);
                });
            })
        })
    })
    return pr;
};

export { postData }


// http://api.geonames.org/geoCodeAddressJSON?q=boston&username=vedantjain0087

// WeatherBit
// Master API Key
// 2f60e710a43644a488ce149bd52cf511

// https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=API_KEY
// Supported Methods: GET
// &lat=38.123&lon=-78.543

// pixabay
// 16647400-6d4eb41f42bf3cd8a0a0d6277
// https://pixabay.com/api/ 
// get
// https://pixabay.com/api/?key=16647400-6d4eb41f42bf3cd8a0a0d6277&q=yellow+flowers&image_type=photo
