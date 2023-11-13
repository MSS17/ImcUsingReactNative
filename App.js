import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TextInputComponent } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [peso, setPeso] = useState(null);
  const [estatura, setEstatura] = useState(null);
  const [imc, setImc] = useState(null);
  const [estadoNutricional, setEstadoNutricional] = useState("");
  const [colorParaSituacionNutricional, setColorParaSituacionNutricional] = useState('black');
  
  //console.log(peso);
  function situacionNutricional(imc) {
    if (imc < 18.5){
      return "Peso bajo";
    }else if (imc <= 25.0){
      return "Peso normal";
    }else if (imc <= 30.0){
      return "Sobrepeso";
    }else if (imc <= 40.0){
      return "Obesidad";
    }else{
      return "Obesidad extrema";
    }
  }
  function getParaSituacionNutricional(imc) {
    if (imc < 18.5){
      return 'yellow';
    }else if (imc <= 25.0){
      return 'green';
    }else if (imc <= 30.0){
      return 'yellow';
    }else if (imc <= 40.0){
      return 'orange';
    }else{
      return 'red';
    }
  }
  function isACorrectValue(value) {
    if (value == null  || value === '')
      return false;
    else
      return true;
  }
  //funcion que controla el peso de entrada
  function pesoInputHalder(pesoEntrada){
    setPeso(pesoEntrada);
  }
  //funcion que controla el estatura de entrada
  function estaturaInpuntHandler(estaturaEntrada){
    setEstatura(estaturaEntrada);
  }
  function indiceDeMasaCorporal(peso, estatura) {
    return peso/(estatura**2);
    // return setImc(peso/(estatura**2));
  }
  //cuando le dancliel al boton calcular se genera el calculo del imc
  function onCalcularButtonTapped(){
    //bmi es el nombre en ingles del imc
    if (isACorrectValue(estatura) && isACorrectValue(peso)){
      const bmi = indiceDeMasaCorporal(peso, estatura);
      setImc(bmi.toFixed(4));
      setEstadoNutricional(situacionNutricional(bmi));
      setColorParaSituacionNutricional(getParaSituacionNutricional(bmi)); //estable el color para la situacuion nutricional
    }
  }
  // function limpiar() {
  //   setPeso(null);
  //   setEstatura(null);
  // }
  function onLimpiarButtonTapped(){
    setEstadoNutricional('');
    setEstatura(null);
    setPeso(null);
    setImc(null);
    setColorParaSituacionNutricional(getParaSituacionNutricional('black'));
  }
  return (
    <View style={styles.maincontainer}>

      <View style={styles.entryContainer}>      
        {/* <TextInput style={styles.textInputComponent} placeholder="Peso de la pesona en kilogramos" keyboardType='numeric' onChangeText={nuevoPeso => setPeso(nuevoPeso)} defaultValue={peso}/>         */}
        <TextInput style={styles.textInputComponent} placeholder="Peso de la pesona en kilogramos" keyboardType='numeric' onChangeText={pesoInputHalder} defaultValue={peso}/>        
        {/* <TextInput style={styles.textInputComponent} placeholder="Estatura de la persona en metros" keyboardType='numeric'  onChangeText={newEstatura => setEstatura(newEstatura)} defaultValue={estatura}/> */}
        <TextInput style={styles.textInputComponent} placeholder="Estatura de la persona en metros" keyboardType='numeric'  onChangeText={estaturaInpuntHandler} defaultValue={estatura}/>
      </View>

      <View style={styles.buttonContainer}>
        {/* <Button title='Calcular' onPress={() => setImc(peso/(estatura**2))} /> */}
        {/* <Button title='Calcular' onPress={() => indiceDeMasaCorpora(peso,estatura)} /> */}
        <Button title='Calcular' onPress={onCalcularButtonTapped} />
        {/* <Button title='Limpiar' onPress={limpiar}/> */}
        <Button title='Limpiar' onPress={onLimpiarButtonTapped}/>
      </View>

      <View style={styles.resulsContainer} >
        <Text>Indice de masa corporal de la persona es:</Text>
        <Text style={styles.imcLabelComponet}>{imc}</Text>
        <Text>El estado nutricional de la person es:</Text>
        {/* <Text style={styles.situacionLabelComponet}>{situacionNutricional(imc)}</Text> */}
        <Text style={[styles.situacionLabelComponet,{color: colorParaSituacionNutricional}]}>{estadoNutricional}</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#cccccc',
    margin: 8,
  },
  entryContainer:{
    justifyContent: 'flex-start',
    borderWidth: 1,
    marginTop: 60,
    marginBottom: 30,
    margin:  20,
    padding: 10,
  },
  textInputComponent:{
    borderWidth: 1,
    padding: 10,
    margin: 5,

  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 16,
    justifyContent: 'space-evenly',
    padding: 10,
    // borderWidth: 1,
  },
  resulsContainer: {
    margin: 16,
    borderWidth: 1,
    padding: 10,
  },
  imcLabelComponet: {
    margin: 8,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  situacionLabelComponet: {
    margin: 8,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
