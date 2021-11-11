import { StatusBar, useState } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Alert, Button, SafeAreaView } from 'react-native';



const UselessTextInput = () => {
  const [text, onChangeText] = React.useState('');
  const [input, setInput] = React.useState([])

  const textHandler = (enteredText) =>{
    onChangeText(enteredText)
  }

  const inputHandler = () => {
    setInput(currentInput => [...input, text])
  }
  
  return (
    <View style = {styles.container}>
      
      <View style = {styles.inputzone}> 
      <TextInput style={styles.input} onChangeText={onChangeText}/>
      <Button title = "ADD" onPress ={inputHandler} />
      </View>
      <ScrollView style = {styles.bar}>
          {input.map( (textInput) => 
          <View  key = {textInput} style = {styles.addlist}>
            <Text >{textInput}</Text> 
          </View>
           )}
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderWidth: 1,
    padding: 5,
  },
  container:{
    flex:1,  
    flexDirection:'column-reverse',
    justifyContent: 'space-between'
  },
  inputzone:{
    marginBottom: "30%",
    flexDirection: 'column',
    justifyContent:'space-around',
    alignItems:'center',
  },
  bar:{
    margin: "10%",
    marginTop: "20%",
    borderWidth: 2,
    backgroundColor: '#CCFF66'

  },
  addlist:{
    justifyContent: 'center',
    alignItems:'center',
    borderWidth: 1,
    padding: "10%",
    margin: "2.5%",
    backgroundColor:'#66FF33'
  }

});

export default UselessTextInput;