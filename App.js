import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {peso: '', altura: '', info: '', resultado: '0.0'};
    this.calcularIMC = this.calcularIMC.bind(this);
  }
  calcularIMC() {
    let imc = this.state.peso / (this.state.altura * this.state.altura);
    let s = this.state;
    s.resultado = imc;
    if (s.resultado < 18.5) {
      s.info = 'Bajo de peso';
    } else if (s.resultado >= 18.5 && s.resultado < 25) {
      s.info = 'Peso normal';
    } else if (s.resultado >= 25 && s.resultado < 30) {
      s.info = 'Sobrepeso';
    } else if (s.resultado >= 30 && s.resultado < 35) {
      s.info = 'Obesidad grado 1';
    } else if (s.resultado >= 35 && s.resultado < 40) {
      s.info = 'Obesidad grado 2';
    } else if (s.resultado >= 41) {
      s.info = 'Obesidad grado 3';
    }
    this.setState(s);
  }

  clear() {
    this.setState({peso: '', altura: '', info: '', resultado: '0.0'});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20 ,height: 60,width: 200, textAlign: 'center'}}>Calculadora de IMC</Text>
        <TextInput
          style={{fontSize: 20, height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
          keyboardType="numeric"
          placeholder="Ingrese peso: "
          onChangeText={text => this.setState({peso: text})}
          value={this.state.peso}
        />
        <TextInput
          style={{fontSize: 20, height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginVertical: 10}}
          keyboardType="numeric"
          placeholder="Ingrese altura: "
          onChangeText={text => this.setState({altura: text})}
          value={this.state.altura}
        />
        <Text style={{fontSize: 20, marginVertical: 10}}>IMC: {this.state.resultado}</Text>
        <Button title="Calcular" onPress={this.calcularIMC} />
        <Text>{this.state.info}</Text>
        <Button title="Limpiar" onPress={this.clear.bind(this)} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
