import styled, { css } from 'styled-components/native';

export const TouchableOpacity = styled.TouchableOpacity`

    border: 1px solid #F0001A;
    border-radius: 5px;
    padding: 10px 40px; 
    max-width:190px;

    display: flex;
    justify-content: center;
    align-items: center;


    ${({ theme }) => theme == 'primary' && css`
        background-color:#F0001A;
    `}

`

export const Text = styled.Text`

    
      
    color:#F0001A;

    


    ${({ theme }) => theme == 'primary' && css`
        
        color:#FFFFFF;

    `}

`