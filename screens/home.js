import React, { Component } from "react";
import { Text, Image, View, StyleSheet, StatusBar, Platform, TouchableOpacity, SafeAreaView, ImageBackground } from "react-native";
import IssLocation from "./issLocation";

const bgImage = require("../assets/bg.png")
const issIcon = require("../assets/iss_icon.png")
const meteorIcon = require("../assets/meteor_icon.png")

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground source={bgImage} style={styles.imageBackGround}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>
              ISS Tracker
            </Text>
          </View>
          <TouchableOpacity style={styles.routeCard} onPress={()=> this.props.navigation.navigate("issLocation")}>
            <Text style={styles.routeText}>
              ISS Location
            </Text>
            <Text style={styles.knowMore}>
              {"Know More ->"}
            </Text>
            <Text style={styles.bgDigit}>
              1
            </Text>
            <Image source={issIcon} style={styles.iconImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.routeCard} onPress={()=> this.props.navigation.navigate("meteors")}>
            <Text style={styles.routeText}>
              Meteor
            </Text>
            <Text style={styles.knowMore}>
              {"Know More ->"}
            </Text>
            <Text style={styles.bgDigit}>
              2
            </Text>
            <Image source={meteorIcon} style={styles.iconImage} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
  imageBackGround: {
    flex: 1,
    resizeMode: "cover"
  },
  titleBar: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
  },
  routeCard: {
    flex: 0.25,
    backgroundColor: "white",
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
  },
  routeText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    marginTop: 75,
    paddingLeft: 30
  },
  knowMore: {
    paddingLeft: 30,
    color: "red",
    fontSize: 15
  },
  bgDigit: {
    position: "absolute",
    right: 20,
    bottom: -15,
    zIndex: -1,
    color: "rgba(183,183,183,0.5)",
    fontSize: 150
  },
  iconImage: {
    position: "absolute",
    height: 200,
    width: 200,
    resizeMode: "contain",
    top: -80,
    right: 20
  }
})