import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.openweathermap.org/data/2.5/"
})

const apiKey = '59bff2a684ff8d5bc4be2b1f78f87e7a'

export const weatherApi = {
    byCoord(lat,lon){
        return instance.get(`weather?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=${apiKey}`
        ).then((res) => res.data);
    },
    
    getHourly(lat,lon){
        return instance.get(`onecall?lat=${lat}&lon=${lon}&units=metric&lang=ru&exlude=hourly&appid=${apiKey}`
        ).then((res) => res.data);
    },

    forWeek(city){
        return instance.get(`forecast?q=${city}&lang=ru&units=metric&appid=${apiKey}`
        ).then(res => res.data.list)
        
    }
}