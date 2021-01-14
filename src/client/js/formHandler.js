import {loader, results, error, sunrise, sunset, weather, banner, image} from './constants';
import { postData } from './postData';

function handleSubmit(event) {
    event.preventDefault();
    loader.style.display = "block";
    error.style.display = "none";
    results.style.display = "none";
    // check what text was put into the form field
    let formText = document.getElementById('location').value;
    let date = new Date(document.getElementById('date').value);
    let searchDate = date.toISOString().split('T')[0];
    let today = new Date();
    let diff = searchDate == today.toISOString().split('T')[0] ? 0 : Math.round((date.getTime() - today.getTime()) / (1000 * 3600 * 24));
    if (formText == "") {
        loader.style.display = "none";
        error.textContent = "Please fill all the fields";
        error.style.display = "block";
        return
    }
    if (diff >= 0 && diff <=7) {
        postData(formText, diff).then(function(res){
            console.log(res);
            if (diff > 0) {
                for (let obj of res[0].data) {
                    if (obj.datetime === searchDate) {
                        console.log(obj)
                        banner.textContent = "Future Forecast:"
                        sunrise.textContent = new Date(obj.sunrise_ts);
                        sunset.textContent = new Date(obj.sunset_ts);
                        weather.textContent = obj.weather.description;
                        break;
                    }
                }
            } else {
                banner.textContent = "Today's Weather"
                sunrise.textContent = res[0].data[0].sunrise;
                sunset.textContent = res[0].data[0].sunset;
                weather.textContent = res[0].data[0].weather.description;
            }
            image.setAttribute("src", res[1].hits[0].webformatURL);
            loader.style.display = "none";
            results.style.display = "block";
        })
    } else {
        loader.style.display = "none";
        error.textContent = "Date can be max 7 days greater than today's date";
        error.style.display = "block";

    }
    return null
}

export { handleSubmit }
