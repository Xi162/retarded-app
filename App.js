import { StatusBar, useState } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Alert, Button, SafeAreaView } from 'react-native';



const UselessTextInput = () => {
  const [text, onChangeText] = React.useState('');
  
  const textHandler = () =>{
    onChangeText(text)
  }
  
  return (
    <View style = {styles.container}>
      <View style = {styles.inputzone}> 
      <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
      <Button title = "ADD" onPress ={()=> Alert.alert("Press!","Please press OK")} />
      </View>
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
    flexDirection:'column',
    justifyContent: 'flex-end'
  },
  inputzone:{
    marginBottom: "30%",
    flexDirection: 'column',
    justifyContent:'space-around',
    alignItems:'center',
  }
});

export default UselessTextInput;