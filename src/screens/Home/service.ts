import moment from 'moment';
import api from '../../service/api';
import { token } from '../../service/token';
import 'moment/locale/pt-br';
import { ToastAndroid } from 'react-native';

export async function getWeatherByCity(city: string) {
    const convertKelvinsInCelsius = (kelvin: number) =>  {
        console.log(kelvin)
        return (kelvin - 273.15).toFixed(1)
    }
    const response: any = await api.get(`forecast?q=${city}&appid=${token}`).then().catch(
        function (error){
            if(error.response.status){
                ToastAndroid.show('Insira um nome Válido', ToastAndroid.LONG)
            }
        }
    )
    console.log(1111, response.data)
    // console.log(Object.keysr(response.data.list))
    let data = {
        temperatura: convertKelvinsInCelsius(response.data.list[0].main.temp),
        cidade: response?.data?.city?.name,
        tempo: response?.data.list[0]?.weather[0]?.main,
        dia: moment(new Date()).locale("pt").format('dddd HH:mm'),
        image : `http://openweathermap.org/img/wn/${response?.data.list[0]?.weather[0]?.icon}@2xx.png`
    } 
    return data
}
