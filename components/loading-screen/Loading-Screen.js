import React from "react";
import { ImageBackground, StyleSheet, Text, View, Button } from "react-native";
import hen from './images/henImage_Loading2.jpg';

const image = { uri: "https://reactjs.org/logo-og.png" };

const LoadingScreen = ({ navigation }) => (
  <View style={styles.container}>
    <ImageBackground source={hen} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}> 
        <Button
        title="BUY HEN"
        onPress={() =>  navigation.navigate('Home', { name: 'Jane' })}
        color="green"
      /></Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    marginTop:"80%",
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default LoadingScreen;