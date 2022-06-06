import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import Icons1 from '../../assets/home1.svg'
import Icons2 from '../../assets/home2.svg'
import Icons3 from '../../assets/home3.svg'
import Icons4 from '../../assets/home4.svg'


export const Container = styled.View`
    width: 100%;
    height: 100%;
    
`
export const Text = styled.Text`
    font-size: ${RFValue(15)}px;
    color: #92A9AD;
    margin-left: auto;
    margin-bottom: ${RFValue(30)}px;

`
export const SVG1 = styled(Icons1)``
export const SVG2 = styled(Icons2)``
export const SVG3 = styled(Icons3)``
export const SVG4 = styled(Icons4)``