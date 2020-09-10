import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native'


export const SafeAreaView = styled.SafeAreaView`

        flex:1;
        align-items: center;
        padding-top: 40px;

`

export const Image = styled.Image`

    margin: 40px;
    padding: 80px;
    

`
export const ViewActivity = styled.View`

        flex:1;
        align-items: center;
        justify-content:center;
        padding-top: 40px;
`

export const View = styled.View`

        flex:2;
        align-items: center;
        padding-top: 40px;
`


export const ViewPrincipal = styled.ScrollView`

        padding: 40px 0;
        flex: 1;
        
`

export const ButtonContainer = styled.View`
        flex-direction:row;
        justify-content: space-between;
        align-items:center;
        width:100%;
        padding: 0 20px 20px 20px;
`


export const CategoriaView = styled.ScrollView`
        margin-top: 20px;
        height: 90px;        
`

export const SelectTipo = styled.View`

        flex-direction:row;
        text-align:left;
        margin: 0 20px 10px 20px;
        font-weight: bold;
        width: ${(Dimensions.get('window').width)}px;

`

export const ButtonTipoSelect = styled.TouchableOpacity`

        margin-right: 20px;
        
`

export const TextTipoSelect = styled.Text`

        ${props => props.selected ? css`
                font-weight: bold;
                color: #F0001A
        ` : css``}

`

export const BannerView = styled.ScrollView`
        margin-top: 20px;
        height: 180px;
        flex-direction: row;
        width: ${(Dimensions.get('window').width) - 10}px;
`

export const ViewRestaurantes = styled.View`

        justify-content: center;
        margin: 10px 20px 30px 20px ;
        width: ${(Dimensions.get('window').width) - 50}px;
        
`

export const TituloRestaurantes = styled.Text`
        text-align:left;
        margin:40px 20px 10px 20px;
        font-weight: bold;
        width: ${(Dimensions.get('window').width)}px;

`