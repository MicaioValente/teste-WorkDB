export function cloudyWeather(time: string){
    if(time == 'Atmosphere' || time == 'Clouds'){
        return true
    }
} 
export function sunnyWeather(time: string){
    if(time == 'Clear'){
        return true
    }
} 
export function rainyWeather(time: string){
    if(time == 'Thunderstorm' || time == 'Drizzle' || time == 'Rain'){
        return true
    }
} 
export function coldWeather(time: string){
    if(time == 'Snow'){
        return true
    }
} 
export function noStatus(time: string){
    if(time == 'Thunderstorm' || time == 'Drizzle' || time == 'Rain'){
        return true
    }
} 