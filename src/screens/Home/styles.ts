import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
    flex: 1;
    align-items: center;
    background-color: #2aacd5;
    padding: 40px 40px;

`
export const Card = styled.View`
    padding: 20px;
    border-radius: 10px;
    background-color: #00000020;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
`

export const Text = styled.Text`
    font-weight: 700;
    font-size: 15;
    color: #fff;
`
export const ContainerIcon = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const ContainerSearch = styled.View`
    width: 100%;
    background-color: #00000020;
    border-radius: 10px;
    height: 50px;
    margin-bottom: 40px;

`

export const Input = styled.TextInput`
    flex: 1;
    height: 49px;
    border-radius: 10px;
    font-size: 16;
    padding: 10px 10px;
`

export const ContainerSearchIcon = styled.TouchableOpacity`
    position: absolute;
    right: 10;
    top: 12;
`

export const Icon = styled(Ionicons)`

`
export const Image = styled.Image`
    width: 50%;
    height: 50%;
`
export const ActivityIndicator = styled.ActivityIndicator`


`
export const ContainerLoading = styled.View`
    background-color: aqua;
    flex: 1;
`
