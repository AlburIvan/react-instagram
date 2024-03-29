import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from "react-native";

export default class StoryHead extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let headHeight = this.props.height ? this.props.height : 70;
    let headWidth = this.props.width ? this.props.width : 70;
    let username =  this.props.text && <Text style={styles.headText}>{this.props.text}</Text>

    return (
        <View style={styles.container}>
          <View style={[styles.head, {height: headHeight, width: headWidth} ]} />
          {username}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
  },
  head: {
    backgroundColor: '#cecece',
    borderRadius: 35,
  },
  headText: {
    marginTop: 3,
  }
});
