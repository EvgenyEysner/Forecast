import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.openweathermap.org/data/2.5/"
})

const apiKey = '73086d8cdcc1c284c6c173a777e9a180'

export const weatherApi = {
    byCoord(lat,lon){
        return instance.get(`weather?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=${apiKey}`
        ).then((res) => res.data);
    },

    byCityname(city){
        return instance.get(`weather?q=${city}&units=metric&lang=ru&appid=${apiKey}`
        ).then((res) => res.data);
    },
    
    
    getHourly(lat,lon){
        return instance.get(`onecall?lat=${lat}&lon=${lon}&units=metric&lang=ru&exlude=hourly&appid=${apiKey}`
        ).then((res) => res.data);
    },

    getForecast(lat,lon){
        return instance.get(`onecall?lat=${lat}&lon=${lon}&units=metric&lang=ru&exlude=daily&appid=${apiKey}`
        ).then((res) => res.data);
    },
}
