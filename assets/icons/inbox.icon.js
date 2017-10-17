import React, { Component } from "react";
import Svg, { G, Polygon } from "react-native-svg";

export default class InboxIcon extends Component {
  render() {
    return (
        <Svg width="25" height="25" viewBox="0 0 535.5 535.5">
            <G>
                <G>
                    <Polygon points="0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75"/>
                </G>
            </G>
        </Svg>
    )
  }
}
