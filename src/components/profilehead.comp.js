import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from "react-native";

export default class ProfileHead extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let headHeight = this.props.height ? this.props.height : 70;
    let headWidth = this.props.width ? this.props.width : 70;
    let username =  this.props.text && <Text style={styles.headText}>{this.props.text}</Text>
    let headColor = this.props.color && this.props.color;

    return (
        <View style={styles.container}>
          <View style={[styles.head, {height: headHeight, width: headWidth, backgroundColor: headColor} ]} />
          {username}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  head: {
    // backgroundColor: 'red',
    borderRadius: 35,
  },
  headText: {
    marginTop: 3,
  }
});
