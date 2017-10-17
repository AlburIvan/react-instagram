import React, { Component } from "react";
import Svg, { Path, G } from "react-native-svg";

export default class OverflowIcon extends Component {
  render() {
    return (
      <Svg width="20" height="20" viewBox="0 0 60 60">
        <G>
          <Path d="M30,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S25.589,16,30,16z" fill="#b1b2b3"/>
          <Path d="M30,44c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,44,30,44z" fill="#b1b2b3"/>
          <Path d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z" fill="#b1b2b3"/>
        </G>
      </Svg>
    );
  }
}
