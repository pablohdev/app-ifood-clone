import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView, Image, View, ButtonContainer } from './style';


import banner from '../../assets/img/banner.png';
import Button from '../../components/Button';

export default function Home({ navigation }) {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Pedir comida nunca foi tão fácil</Text>
          <Image source={banner} />
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Permitir Localização</Text>
          <Text>Para descobrir restaurantes que entregam em sua região</Text>
        </View>
        <ButtonContainer>
          <Button text="PULAR" onPress={() => navigation.navigate('Main')} />
          <Button text="ENTRAR" theme="primary" />
        </ButtonContainer>
      </SafeAreaView>
    </>
  );
}
