import React, { Component } from "react";
import { Text, Image, View, StyleSheet } from "react-native";

export default class Meteors extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Meteoro
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  }
})