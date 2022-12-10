import axios from 'axios'

export const getCityName = (cityName) => {
    return axios ({
        method: 'GET',
        url: `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=ef36c2bcfb2e8d8fb6e9f9b94c68ef2f`,
    })
}





