import React, { useState } from 'react';
import * as S from './styles';
import { 
  cloudyWeather, 
  sunnyWeather,
  rainyWeather,
  coldWeather,
  noStatus
} from './statusWaether';
import { getWeatherByCity } from './service';
import Loading from '../../components/Loading';

type data = {
  cidade: string
  dia: string
  image: string
  temperatura: string
  tempo: string
}

export default function Home() {
  const [ city, setCity ] = useState<string>('')
  const [ loading, setLoading ] = useState<boolean>(false)
  const [ data, setData ] = useState<data>()

console.log(data)
  const statusTime = (): any => {
    if(!data?.tempo){
      return {color: '#2aacd5', icon: 'snow', name: 'Escolha cidade'}
    } 
    if(cloudyWeather(data.tempo)){
      return {color: '#737677', icon: 'partly-sunny-outline', name: 'Nublado' }
    } 
    if(sunnyWeather(data.tempo)){
      return {color: '#fffb06', icon: 'sunny-outline', name: 'Ensolarado' }
    } 
    if(rainyWeather(data.tempo)){
      return {color: '#32ccfb', icon: 'rainy-outline', name: 'Chuvoso'}
    }
    if(coldWeather(data.tempo)){
      return {color: '#006887', icon: 'snow', name: 'Frio'}
    } 
  }
  const searchWeather = async () => {
    console.log('deu bao')
    // setLoading(true)
    const response = await getWeatherByCity(city)
    setLoading(false)
    setData(response)
  }
  
  return (<>
    <Loading loading={loading} setLoading={setLoading} mensage='Carregando Tempo...' />
    <S.Container style={{ backgroundColor: statusTime().color}}>
        <S.ContainerSearch>
          <S.Input 
            placeholderTextColor="#ffffff90"  
            style={{color: '#fff'}}
            placeholder={'Digite uma cidade'} 
            onChangeText={(text: string) => setCity(text)}
          />
          <S.ContainerSearchIcon
            onPress={() => searchWeather()}
          >
            <S.Icon 
              name='search' 
              size={25}
              color='white' 
              />
          </S.ContainerSearchIcon>
        </S.ContainerSearch>
      <S.Card>
        <S.Text>{data?.cidade ? data?.cidade : 'Selecione uma Cidade'}</S.Text>
        <S.Text 
          style={{
            fontSize: 100, 
            fontWeight: '600'}}>{data?.temperatura ? data?.temperatura +'°'  : '0°'}</S.Text>
        <S.Text style={{fontWeight: '600'}}>{data?.dia ? data?.dia : '00:00'}</S.Text>
      </S.Card>
      <S.ContainerIcon>
        <S.Text>{statusTime().name}</S.Text>
        <S.Icon name={statusTime().icon} size={200} color='white'/>
      </S.ContainerIcon>
    </S.Container>
  </>
  );
}
