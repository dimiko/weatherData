import axios from 'axios'

export const getWeather = (lat, lon) => {
    return axios ({
        method: 'GET',
        url: `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=7&appid=ef36c2bcfb2e8d8fb6e9f9b94c68ef2f`,
    })
}






