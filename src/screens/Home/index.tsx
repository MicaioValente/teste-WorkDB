import React from 'react';
import Body from '../../components/BodyTabs';
import * as S from './styles';
import PerfilInfos from '../../components/PerfilInfos'
import HomeIcons from '../../components/HomeIcons';
import { View } from 'react-native';

export default function Home({navigation}) {

  let array = [
    {title: 'Lembretes', icon: <S.SVG1/>, route: 'Reminder'},
    {title: 'Ajuda', icon: <S.SVG2/>, route: 'Helper'},
    {title: 'Feedback', icon: <S.SVG3/>, route: 'Feedback'},
    {title: 'Documetos', icon: <S.SVG4/>, route: 'Docs'},
  ]  

  const BodyComponent = () => {
    return (
      <View style={{flexWrap: 'wrap', width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
        {array.map((e, i) => {
          return <HomeIcons key={i} icon={e.icon} title={e.title} route={e.route}/>
        })}
      </View>
    )
  }

  return ( <Body header={<PerfilInfos perfil />} HeaderHight={33} body={<BodyComponent />} />);
}
