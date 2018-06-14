import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import  ListItem  from './src/components/ListItem/ListItem'
export default class App extends React.Component {
  state = {
    cityName: "",
    cities: []
  }

  cityNameHandler = val => {
    this.setState({
      cityName: val
    })
  }

  onSubmitHandler = () => {
    if(this.state.cityName.trim() === ""){
      return;
    }
    this.setState( prevState => {
      return {
        cities: this.state.cities.concat(prevState.cityName)
      }
    });
  }

  render() {
    const citiesOutput = this.state.cities.map( (city, x) => (
      <ListItem
        key={x}
        cityName= {city}
      />
    ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
           style={styles.inputCity}
            value={this.state.cityName}
            onChangeText={this.cityNameHandler}
          />
          <Button
            style={styles.addBtn}
            title= "Agregar"
            onPress={this.onSubmitHandler}
          />
        </View>
        <View>
          {citiesOutput}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 26
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputCity: {
    width: '70%'
  },
  addBtn: {
    width: '30%'
  },

});
