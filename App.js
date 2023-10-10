import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { useState} from 'react'

export default function App() {
  
  return (
    <View style={styles.maincontainer}>
      <View>
        <Text>Peso de la pesona en kilogramos</Text>
        <TextInput/>
        <Text>Estatura de la persona en metros:</Text>
        <TextInput/>
      </View>
      <View style={styles.controlsContainer}>
        <Button title='Calcular'/>
        <Button title='Limpiar'/>
      </View>
      <View>
        <Text>Indice de masa corporal de la persona es:</Text>
        <Text>28.9012</Text>
        <Text>El estado nutricional de la person es:</Text>
        <Text>Peso normal</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#cccccc',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
